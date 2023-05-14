<?php

namespace App\Http\Controllers;

use App\Models\MasterCategory;
use App\Models\MasterItem;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ItemController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request){

        $masterItem = MasterItem::all();
        $masterCategory = MasterCategory::all();
        return view('item.index',compact('masterItem','masterCategory'));
    }

    public function viewItemTable(Request $request){

        if($request->ajax()){

            $datas = MasterItem::where('user_id',Auth::user()->id)->latest()->get();
            return datatables()->of($datas)

            ->editColumn('item_name', function ($data) {
                return $data->item_name;
            })
            ->editColumn('item_description', function ($data) {
                return $data->item_description;
            })
            ->editColumn('action', function ($data) {
                $btn = "";
                $btn .= '<div class="btn-group" role="group" aria-label="Edit Toolbar Group">';
                $btn .= '<button type="button" class="btn btn-outline-secondary" onclick="getModalContent(this)" data-action="'.route('item.viewItemModal',$data->id) .'"><i class="fas fa-pencil fa-sm"></i></button>';
                $btn .= '<button type="button" class="btn btn-outline-secondary" onclick="$(`#deleteItemBtn'.$data->id.'`).trigger(`click`);"><i class="fas fa-trash fa-sm"></i></button>';
                // $btn .= '<a onclick="getModalContent(this)" data-action="'.route('budgettracker.index') .'" class="btn btn-xs btn-default" title=""><i class="fas fa-pencil text-warning"></i></a>';
                $btn .= '</div>';
                $btn .= '<form action="'.route('item.deleteItem',$data->id).'" method="POST" data-refreshFunctionNameIfSuccess="refreshItemTable" style="display:none;">'.csrf_field().'<button id="deleteItemBtn'.$data->id.'" type="button" onclick="generalFormSubmit(this)"></button></form>';
                return $btn;
            })

            ->rawColumns(['action'])
            ->make(true);

        }

        return view('item.table.item_table');
    }

    public function viewItemModal(Request $request,$item_id = null){

        $item = null;
        if($item_id){
            $item = MasterItem::where('id',$item_id)
                        ->where('user_id',Auth::user()->id)
                        ->first();
        }
        return view('item.form.crud_item_modal',compact('item'));
    }

    public function updateItem(Request $request){

        // dd($request->all());
        try {
            DB::beginTransaction();
            $item = MasterItem::firstOrNew(['id'=>$request->item_id]);
            if(!$item->user_id)
                $item->user_id = Auth::user()->id;
            $item->item_name = $request->item_name;
            $item->item_description = $request->item_description;
            $item->save();

        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['title' => 'Gagal', 'status' => 'error', 'detail' => $th->getMessage()], 404);
        }

        DB::commit();
        return response()->json(['title' => 'Berjaya', 'status' => 'success', 'message' => "Berjaya", 'detail' => "berjaya"]);
    }

    public function deleteItem(Request $request,$item_id){

        // dd($request->all());
        try {
            DB::beginTransaction();

            $item = MasterItem::find($item_id);
            if(!$item)
                return response()->json(['title' => 'Gagal', 'status' => 'error'], 404);
            //If Role is not admin or not the owner of item, show error
            if(!(Auth::user()->hasRole('admin') || $item->user_id == Auth::user()->id))
                return response()->json(['title' => 'Gagal', 'status' => 'error'], 404);

            $item->delete();

        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['title' => 'Gagal', 'status' => 'error', 'detail' => $th->getMessage()], 404);
        }

        DB::commit();
        return response()->json(['title' => 'Berjaya', 'status' => 'success', 'message' => "Berjaya", 'detail' => "berjaya"]);
    }
}
