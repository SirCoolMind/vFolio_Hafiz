<table id="categoryTable" class="table table-striped" style="width:100%">
    <thead>
        <tr>
            <th>No</th>
            <th>Category</th>
            <th>Description</th>
            <th>Action</th>
        </tr>
    </thead>
</table>

@push('js')
<script>

    refreshCategoryTable = function(){
        $('#categoryTable').DataTable().ajax.reload();
    }

    $(function() {
        var table = $('#categoryTable').DataTable({
            orderCellsTop: true,
            colReorder: true,
            dom: "<'row'<'mb-2 col-sm-12'>>" +
                "<''<'col-sm-12'tr>>",
            pageLength: 100,
            processing: true,
            serverSide: false, //enable if data is large (more than 50,000)
            ajax: {
                url: '{{route("category.viewCategoryTable")}}',
                type: "GET",
                cache: "true",
            },
            columnDefs: [
                { width: "3%", targets: 0 },
                { width: "30%", targets: 1 },
                { width: "15%", targets: 3 },
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
                    data: "category_name",
                    name: "category_name",
                    className: "dt-left",
                    render: function(data, type, row) {
                        return $("<div/>").html(data).text();
                    }
                },
                {
                    data: "category_description",
                    name: "category_description",
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
