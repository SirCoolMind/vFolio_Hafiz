<table id="budgetTable" class="table table-striped" style="width:100%">
    <thead>
        <tr>
            <th>No</th>
            <th>Date Spent</th>
            <th>Item</th>
            <th>Money Spent (RM)</th>
            <th>Action</th>
        </tr>
    </thead>
</table>

@push('js')
<script>

    refreshBudgetTable = function(){
        $('#budgetTable').DataTable().ajax.reload();
    }

    $(function() {
        var table = $('#budgetTable').DataTable({
            orderCellsTop: true,
            colReorder: true,
            dom: "<'row'<'mb-2 col-sm-12'>>" +
                "<'d-flex flex-row justify-content-end'<'px-2 pb-1' B>>" +
                "<'d-flex flex-row justify-content-between'<'px-2'l><'px-2'f>>" +
                "<''<'col-sm-12'tr>>" +
                "<'row'<'col-sm-12 col-md-7'i><'col-sm-12 col-md-5 mb-3'p>>",
            "buttons": [{
                text: '<i class="fa fa-download m-r-5"></i> Excel',
                extend: 'excelHtml5',
                className: 'btn btn-default btn-sm',
                exportOptions: {
                    columns: ':visible:not(.nowrap)'
                }
            }, ],
            pageLength: 10,
            processing: true,
            serverSide: false, //enable if data is large (more than 50,000)
            ajax: {
                url: '{{route("budgettracker.viewBudgetTable")}}',
                type: "GET",
                cache: "true",
            },
            columnDefs: [
                { width: "5%", targets: 0 },
                { width: "15%", targets: 1 },
                { width: "15%", targets: 4 },
            ],
            columns: [{
                    data: 'id',
                    defaultContent: '',
                    orderable: false,
                    searchable: false,
                    render: function(data, type, row, meta) {
                        return meta.row + meta.settings._iDisplayStart + 1;
                    }
                },
                {
                    data: "date_spent",
                    name: "date_spent",
                    className: "dt-right",
                    render: function(data, type, row) {
                        return $("<div/>").html(data).text();
                    }
                },
                {
                    data: "item",
                    name: "item",
                    render: function(data, type, row) {
                        return $("<div/>").html(data).text();
                    }
                },
                {
                    data: "money_spent",
                    name: "money_spent",
                    className: "dt-right",
                    render: function(data, type, row) {
                        return $("<div/>").html(data).text();
                    }
                },
                {
                    data: 'action',
                    name: 'action',
                    className: "text-center",
                    orderable: true,
                    searchable: true
                },

            ],
        });
    });
</script>
@endpush
