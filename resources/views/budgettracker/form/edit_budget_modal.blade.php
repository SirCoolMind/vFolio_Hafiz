{{-- Do Not Change the ID: baseAjaxModalContent if you are using getModalContent function - Hafiz R --}}
<div class="modal fade" id="baseAjaxModalContent" tabindex="-1" aria-labelledby="editBudgetModal" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel1">Modal title</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form action="{{route('budgettracker.updateBudgetTracker')}}" method="POST" data-refreshFunctionNameIfSuccess="refreshBudgetTable">
                    @csrf
                    <input type="hidden" name="budget_id" value="{{$budget?->id ?? null}}">
                    <div class="row">
                        <div class="col-12 col-md-6 col">
                            <label class="col-form-label" for="date_spent">Date Spent</label>
                            <div class="">
                                <div class="input-group input-group-merge">
                                    <span id="date_spent-icon" class="input-group-text"><i class="fa fa-calendar"></i></span>
                                    <input type="text" class="form-control flatpickr" id="date_spent" name="date_spent" value="{{$budget?->date_spent->format('d/m/Y') ?? ""}}" placeholder="dd/mm/yyyy" aria-describedby="date_spent-icon" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="col-form-label" for="money_spent">Money Spent</label>
                            <div class="">
                                <div class="input-group input-group-merge">
                                    <span id="money_spent-icon" class="input-group-text"><i class="fa fa-coins"></i></span>
                                    <input type="text" class="form-control" id="money_spent" name="money_spent" value="{{$budget?->getMoneySpent() ?? "0.00"}}" placeholder="0.00" onkeyup="currencyFormat(this,event);" aria-describedby="money_spent-icon" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="col-form-label" for="master_item_id">Item</label>
                            <div class="">
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="fa-solid fa-cart-shopping"></i></span>
                                    <select class="form-select" id="master_item_id" name="master_item_id">
                                        <option hidden>Choose Item</option>
                                        @foreach($masterItem as $key => $value)
                                            <option value="{{$value->id}}" {{$budget?->master_item_id == $value->id ? "selected" : ""}}>{{$value->item_name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="col-form-label" for="master_category_id">Category</label>
                            <div class="">
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="fa-solid fa-tags"></i></span>
                                    <select class="form-select" id="master_category_id" name="master_category_id">
                                        <option hidden>Choose Item</option>
                                        @foreach($masterCategory as $key => $value)
                                            <option value="{{$value->id}}" {{$budget?->master_category_id == $value->id ? "selected" : ""}}>{{$value->category_name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12">
                            <label class="col-form-label" for="notes">Notes</label>
                            <div class="">
                                <div class="input-group input-group-merge">
                                    <span class="input-group-text"><i class="fa-regular fa-comment"></i></span>
                                    <textarea class="form-control" id="notes" name="notes">{!! $budget?->notes !!}</textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" id="editBugdetFormButton" class="d-none" onclick="generalFormSubmit(this);"></button>
                </form>
            </div>
            <br>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="$('#editBugdetFormButton').trigger('click');">Save changes</button>
            </div>
        </div>
    </div>
</div>
