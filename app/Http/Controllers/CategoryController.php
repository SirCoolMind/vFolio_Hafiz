<?php

namespace App\Http\Controllers;

use App\Models\MasterCategory;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function viewCategoryTable(Request $request){

        if($request->ajax()){

            $datas = MasterCategory::where('user_id',Auth::user()->id)->latest()->get();
            return datatables()->of($datas)

            ->editColumn('category_name', function ($data) {
                return $data->category_name;
            })
            ->editColumn('category_description', function ($data) {
                return $data->category_description;
            })
            ->editColumn('action', function ($data) {
                $btn = "";
                $btn .= '<div class="btn-group" role="group" aria-label="Edit Toolbar Group">';
                $btn .= '<button type="button" class="btn btn-outline-secondary" onclick="getModalContent(this)" data-action="'.route('category.viewCategoryModal',$data->id) .'"><i class="fas fa-pencil fa-sm"></i></button>';
                $btn .= '<button type="button" class="btn btn-outline-secondary" onclick="$(`#deleteCategoryBtn'.$data->id.'`).trigger(`click`);"><i class="fas fa-trash fa-sm"></i></button>';
                // $btn .= '<a onclick="getModalContent(this)" data-action="'.route('budgettracker.index') .'" class="btn btn-xs btn-default" title=""><i class="fas fa-pencil text-warning"></i></a>';
                $btn .= '</div>';
                $btn .= '<form action="'.route('category.deleteCategory',$data->id).'" method="POST" data-refreshFunctionNameIfSuccess="refreshCategoryTable" style="display:none;">'.csrf_field().'<button id="deleteCategoryBtn'.$data->id.'" type="button" onclick="generalFormSubmit(this)"></button></form>';
                return $btn;
            })

            ->rawColumns(['action'])
            ->make(true);

        }

        return view('category.table.category_table');
    }

    public function viewCategoryModal(Request $request,$category_id = null){

        $category = null;
        if($category_id){
            $category = MasterCategory::where('id',$category_id)
                        ->where('user_id',Auth::user()->id)
                        ->first();
        }
        return view('category.form.crud_category_modal',compact('category'));
    }

    public function updateCategory(Request $request){

        // dd($request->all());
        try {
            DB::beginTransaction();
            $category = MasterCategory::firstOrNew(['id'=>$request->category_id]);
            if(!$category->user_id)
                $category->user_id = Auth::user()->id;
            $category->category_name = $request->category_name;
            $category->category_description = $request->category_description;
            $category->save();

        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['title' => 'Gagal', 'status' => 'error', 'detail' => $th->getMessage()], 404);
        }

        DB::commit();
        return response()->json(['title' => 'Berjaya', 'status' => 'success', 'message' => "Berjaya", 'detail' => "berjaya"]);
    }

    public function deleteCategory(Request $request,$category_id){

        // dd($request->all());
        try {
            DB::beginTransaction();

            $category = MasterCategory::find($category_id);
            if(!$category)
                return response()->json(['title' => 'Gagal', 'status' => 'error'], 404);
            //If Role is not admin or not the owner of category, show error
            if(!(Auth::user()->hasRole('admin') || $category->user_id == Auth::user()->id))
                return response()->json(['title' => 'Gagal', 'status' => 'error'], 404);

            $category->delete();

        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['title' => 'Gagal', 'status' => 'error', 'detail' => $th->getMessage()], 404);
        }

        DB::commit();
        return response()->json(['title' => 'Berjaya', 'status' => 'success', 'message' => "Berjaya", 'detail' => "berjaya"]);
    }

    public function autoCreateCategory(Request $request, $user_id = null){

        Artisan::call('command:autocreatecategory', ['user'=> Auth::user()->id]);
    }
}
