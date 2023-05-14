@extends('layouts/contentNavbarLayout')

@section('title', ' Horizontal Layouts - Forms')

@section('content')
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light"></span> Master Item</h4>

<!-- Basic Layout & Basic with Icons -->
<div class="row">
    <!-- Basic with Icons -->
    <div class="col-xxl">
        <div class="card mb-4">
            <div class="card-header d-flex align-items-center justify-content-between">
                <h5 class="mb-0">Add Budget</h5>
                {{-- <small class="text-muted float-end">Merged input group</small> --}}
            </div>
            <div class="card-body">
                <form>
                    <div class="row">
                        <div class="col-6">
                            <label class="col-form-label" for="date_spent">Date Spent</label>
                            <div class="">
                                <div class="input-group input-group-merge">
                                    <span id="date_spent-icon" class="input-group-text"><i class="fa fa-calendar"></i></span>
                                    <input type="text" class="form-control flatpickr" id="date_spent" name="date_spent" placeholder="dd/mm/yyyy" aria-describedby="date_spent-icon" />
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <label class="col-form-label" for="money_spent">Money Spent</label>
                            <div class="">
                                <div class="input-group input-group-merge">
                                    <span id="money_spent-icon" class="input-group-text"><i class="fa fa-coins"></i></span>
                                    <input type="text" class="form-control" id="money_spent" name="money_spent" placeholder="0.00" value="0.00" onkeyup="currencyFormat(this,event);" aria-describedby="money_spent-icon" />
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <label class="col-form-label" for="master_item_i">Item</label>
                            <div class="">
                                <div class="input-group input-group-merge">
                                    <span id="money_spent-icon" class="input-group-text"><i class="fa-solid fa-cart-shopping"></i></span>
                                    <select class="form-select" id="master_item_id" name="master_item_id">
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-form-label" for="basic-icon-default-company">Company</label>
                        <div class="">
                            <div class="input-group input-group-merge">
                                <span id="basic-icon-default-company2" class="input-group-text"><i class="bx bx-buildings"></i></span>
                                <input type="text" id="basic-icon-default-company" class="form-control" placeholder="ACME Inc." aria-label="ACME Inc." aria-describedby="basic-icon-default-company2" />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label" for="basic-icon-default-email">Email</label>
                        <div class="col-sm-10">
                            <div class="input-group input-group-merge">
                                <span class="input-group-text"><i class="bx bx-envelope"></i></span>
                                <input type="text" id="basic-icon-default-email" class="form-control" placeholder="john.doe" aria-label="john.doe" aria-describedby="basic-icon-default-email2" />
                                <span id="basic-icon-default-email2" class="input-group-text">@example.com</span>
                            </div>
                            <div class="form-text"> You can use letters, numbers & periods </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 form-label" for="basic-icon-default-phone">Phone No</label>
                        <div class="col-sm-10">
                            <div class="input-group input-group-merge">
                                <span id="basic-icon-default-phone2" class="input-group-text"><i class="bx bx-phone"></i></span>
                                <input type="text" id="basic-icon-default-phone" class="form-control phone-mask" placeholder="658 799 8941" aria-label="658 799 8941" aria-describedby="basic-icon-default-phone2" />
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 form-label" for="basic-icon-default-message">Message</label>
                        <div class="col-sm-10">
                            <div class="input-group input-group-merge">
                                <span id="basic-icon-default-message2" class="input-group-text"><i class="bx bx-comment"></i></span>
                                <textarea id="basic-icon-default-message" class="form-control" placeholder="Hi, Do you have a moment to talk Joe?" aria-label="Hi, Do you have a moment to talk Joe?" aria-describedby="basic-icon-default-message2"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

@push('js')

@endpush

