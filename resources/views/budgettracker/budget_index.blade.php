@extends('layouts/contentNavbarLayout')

@section('title', ' Budget Tracker ')

@section('content')
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light"></span> Budget Tracker</h4>

<div class="row">
    <div class="col-xxl-12 row p-0 m-0">
        <div class="col-md-6 col-12">
            <div class="card mb-4">
                <div class="card-header d-flex align-items-center justify-content-between">
                    <h5 class="mb-0">Add Budget</h5>
                    {{-- <small class="text-muted float-end">Merged input group</small> --}}
                </div>
                <div class="card-body" id="createBudgetFormDiv">
                   @include('budgettracker.form.add_budget')
                </div>
            </div>
        </div>
        <div class="col-md-6 col-12">
            <div class="card mb-4">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                    <h5 class="mb-0">Dashboard Budget</h5>
                    <a class="align-self-center me-2" type="button" onclick="refreshDashboardSimple()"><i class="fa-solid fa-arrows-rotate"></i></a>
                </div>
                <div class="card-body" id="refreshDashboardSimpleDiv">
                   {{-- @include('budgettracker.dashboard.simple') --}}
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="card mb-4">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                    <h5 class="mb-0">
                        Budget Table
                        <button type="button" class="btn btn-sm btn-primary" onclick="refreshDatatableByID('budgetTable')"><i class="fas fa-refresh"></i></button>
                    </h5>
                </div>
                <div class="card-body table-responsive">
                @include('budgettracker.table.budget_table')
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('js')
<script>
    refreshCreateBudgetForm = function(){
        $('#createBudgetFormDiv').load('{{route("budgettracker.viewCreateBudgetTrackerForm")}}')
    }

    refreshDashboardSimple = function(){
        $('#refreshDashboardSimpleDiv').load('{{route("budgettracker.refreshDashboardSimple")}}')
    }

    $(function(){
        refreshDashboardSimple();
        let simpleBudgetChart = "";
    })
</script>

@endpush


