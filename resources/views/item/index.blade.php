@extends('layouts/contentNavbarLayout')

@section('title', ' Item & Category')

@section('content')
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light"></span> Item & Category</h4>

<div class="row">
    <div class="col-xxl-12 row p-0 m-0">
        <div class="col-md-6 col-12">
            <div class="card mb-4">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                    <h5 class="mb-0">
                        List of Item
                        <button type="button" class="btn btn-sm btn-primary" onclick="refreshDatatableByID('itemTable')"><i class="fas fa-refresh"></i></button>
                        <button type="button" class="btn btn-sm btn-primary" onclick="getModalContent(this)" data-action="{{route('item.viewItemModal')}}"><i class="fas fa-plus"></i></button>
                    </h5>
                </div>
                <div class="card-body table-responsive">
                    @include('item.table.item_table')
                </div>
            </div>
        </div>
        <div class="col-md-6 col-12">
            <div class="card mb-4">
                <div class="card-header d-flex align-items-center justify-content-between pb-0">
                    <h5 class="mb-0">
                        List of Category
                        <button type="button" class="btn btn-sm btn-primary" onclick="refreshDatatableByID('categoryTable')"><i class="fas fa-refresh"></i></button>
                        <button type="button" class="btn btn-sm btn-primary" onclick="getModalContent(this)" data-action="{{route('category.viewCategoryModal')}}"><i class="fas fa-plus"></i></button>
                    </h5>
                </div>
                <div class="card-body table-responsive">
                    @include('category.table.category_table')
                </div>
            </div>
        </div>
    </div>
</div>
@endsection


