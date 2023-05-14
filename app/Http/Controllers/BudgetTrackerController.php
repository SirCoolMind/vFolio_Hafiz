<?php

namespace App\Http\Controllers;

use App\Models\BudgetTracker;
use App\Models\MasterCategory;
use App\Models\MasterItem;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class BudgetTrackerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request){

        $masterItem = MasterItem::all();
        $masterCategory = MasterCategory::all();
        return view('budgettracker.budget_index',compact('masterItem','masterCategory'));
    }

    public function viewBudgetTable(Request $request){

        if($request->ajax()){

            $datas = BudgetTracker::latest()->get();
            return datatables()->of($datas)

            ->editColumn('date_spent', function ($data) {
                return $data->date_spent->format('d/m/Y');
            })
            ->editColumn('item', function ($data) {
                return $data->masterItem?->item_name ?? "-";
            })
            ->editColumn('money_spent', function ($data) {
                return $data->getMoneySpent();
            })
            ->editColumn('action', function ($data) {
                $btn = "";
                $btn .= '<div class="btn-group" role="group" aria-label="Edit Toolbar Group">';
                $btn .= '<button type="button" class="btn btn-outline-secondary" onclick="getModalContent(this)" data-action="'.route('budgettracker.viewEditBudgetModal',$data->id) .'"><i class="fas fa-pencil fa-sm"></i></button>';
                $btn .= '<button type="button" class="btn btn-outline-secondary"><i class="fas fa-trash fa-sm"></i></button>';
                // $btn .= '<a onclick="getModalContent(this)" data-action="'.route('budgettracker.index') .'" class="btn btn-xs btn-default" title=""><i class="fas fa-pencil text-warning"></i></a>';
                $btn .= '';
                $btn .= "</div>";
                return $btn;
            })

            ->rawColumns(['action'])
            ->make(true);

        }

        return view('budgettracker.table.budget_table',compact('masterItem','masterCategory'));
    }

    public function viewCreateBudgetTrackerForm(){

        $masterItem = MasterItem::all();
        $masterCategory = MasterCategory::all();

        return view('budgettracker.form.add_budget',compact('masterItem','masterCategory'));
    }

    public function createBudgetTracker(Request $request){

        // dd($request->all());
        try {
            DB::beginTransaction();

            $newTracker = new BudgetTracker;
            $newTracker->user_id = Auth::user()->id;
            $newTracker->master_item_id = $request->master_item_id;
            $newTracker->master_category_id = $request->master_category_id;
            $newTracker->notes = $request->notes;
            $newTracker->money_spent = str_replace([',', '.'], '', $request->money_spent);
            $newTracker->date_spent = Carbon::createFromFormat('d/m/Y',$request->date_spent);
            $newTracker->week_spent = $newTracker->date_spent->weekOfYear;
            $newTracker->year_spent = $newTracker->date_spent->year;

            $newTracker->save();

        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['title' => 'Gagal', 'status' => 'error', 'detail' => $th->getMessage()], 404);
        }

        DB::commit();
        return response()->json(['title' => 'Berjaya', 'status' => 'success', 'message' => "Berjaya", 'detail' => "berjaya"]);
    }

    public function viewEditBudgetModal(Request $request,$budget_id){

        $budget = null;
        $masterItem = MasterItem::all();
        $masterCategory = MasterCategory::all();
        if($budget_id){
            $budget = BudgetTracker::where('id',$budget_id)
                        ->where('user_id',Auth::user()->id)
                        ->first();
        }

        return view('budgettracker.form.edit_budget_modal',compact('budget','masterItem','masterCategory'));
    }

    public function updateBudgetTracker(Request $request){

        // dd($request->all());
        try {
            DB::beginTransaction();

            $newTracker = BudgetTracker::findOrFail($request->budget_id);
            $newTracker->master_item_id = $request->master_item_id;
            $newTracker->master_category_id = $request->master_category_id;
            $newTracker->notes = $request->notes;
            $newTracker->money_spent = str_replace([',', '.'], '', $request->money_spent);
            $newTracker->date_spent = Carbon::createFromFormat('d/m/Y',$request->date_spent);
            $newTracker->week_spent = $newTracker->date_spent->weekOfYear;
            $newTracker->year_spent = $newTracker->date_spent->year;

            $newTracker->save();

        } catch (\Throwable $th) {
            DB::rollBack();
            return response()->json(['title' => 'Gagal', 'status' => 'error', 'detail' => $th->getMessage()], 404);
        }

        DB::commit();
        return response()->json(['title' => 'Berjaya', 'status' => 'success', 'message' => "Berjaya", 'detail' => "berjaya"]);
    }

    public function refreshDashboardSimple(){

        return view('budgettracker.dashboard.simple');
    }
}
