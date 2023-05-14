<form action="{{route('budgettracker.createBudgetTracker')}}" method="POST"
    data-refreshFunctionName="refreshBudgetTable"
    data-refreshFunctionNameIfSuccess="refreshCreateBudgetForm">
    @csrf
    <div class="">
        <div class="row">
            <div class="col-12 col-md-6 col">
                <label class="col-form-label" for="date_spent">Date Spent</label>
                <div class="">
                    <div class="input-group input-group-merge">
                        <span id="date_spent-icon" class="input-group-text"><i class="fa fa-calendar"></i></span>
                        <input type="text" class="form-control flatpickr" id="date_spent" name="date_spent" placeholder="dd/mm/yyyy" aria-describedby="date_spent-icon" value="{{Carbon::now()->format('d/m/Y')}}"/>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <label class="col-form-label" for="money_spent">Money Spent</label>
                <div class="">
                    <div class="input-group input-group-merge">
                        <span id="money_spent-icon" class="input-group-text"><i class="fa fa-coins"></i></span>
                        <input type="text" class="form-control" id="money_spent" name="money_spent" placeholder="0.00" value="0.00" onkeyup="currencyFormat(this,event);" aria-describedby="money_spent-icon" />
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
                                <option value="{{$value->id}}">{{$value->item_name}}</option>
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
                                <option value="{{$value->id}}">{{$value->category_name}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-8">
                <label class="col-form-label" for="notes">Notes</label>
                <div class="">
                    <div class="input-group input-group-merge">
                        <span class="input-group-text"><i class="fa-regular fa-comment"></i></span>
                        <textarea class="form-control" id="notes" name="notes"></textarea>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 mt-3 d-flex align-items-end justify-content-end">
                <div class="justify-content-end">
                    <a class="align-self-center me-2" type="button" onclick="refreshCreateBudgetForm()"><i class="fa-solid fa-arrows-rotate"></i></a>
                    <button type="button" class="btn btn-primary" onclick="generalFormSubmit(this);">Create</button>
                </div>

            </div>
        </div>
    </div>
</form>
