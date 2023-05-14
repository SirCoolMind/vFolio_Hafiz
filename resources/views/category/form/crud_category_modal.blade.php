{{-- Do Not Change the ID: baseAjaxModalContent if you are using getModalContent function - Hafiz R --}}
<div class="modal fade" id="baseAjaxModalContent" tabindex="-1" aria-labelledby="crudItemModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1">{{$category?->id ? "Edit" : "Add"}} Category</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="{{route('category.updateCategory')}}" method="POST" data-refreshFunctionNameIfSuccess="refreshCategoryTable">
                    @csrf
                    <input type="hidden" name="category_id" value="{{$category?->id ?? null}}">
                    <div class="row">
                        <div class="col-12 col-md-12">
                            <label class="col-form-label" for="category_name">Category Name</label>
                            <div class="">
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="fa-solid fa-tags"></i></span>
                                    <input type="text" class="form-control" id="category_name" name="category_name" placeholder="Name Of Category" value="{{ $category?->category_name }}"/>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12">
                            <label class="col-form-label" for="notes">Description</label>
                            <div class="">
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="fa-regular fa-comment"></i></span>
                                    <textarea class="form-control" id="category_description" name="category_description" placeholder="Description of Category">{!! $category?->category_description !!}</textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" id="submitCategoryFormBtn" class="d-none" onclick="generalFormSubmit(this);"></button>
                </form>
            </div>
            <br>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="$('#submitCategoryFormBtn').trigger('click');">Save changes</button>
            </div>
        </div>
    </div>
</div>
