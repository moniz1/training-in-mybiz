// const apiUrl = "http://localhost:51444/api/student"
const apiUrl = "http://localhost/api/student";
function getData() {
    var getAjax = new GetAjax(apiUrl);
    getAjax.onSuccess = function(jsonData) {
        if ($.fn.dataTable.isDataTable('#example')) {
            $('#example').DataTable().destroy();
        }
        
        $('#example').dataTable({
            data: jsonData,
            columns: [
                { data: 'Id' },
                { data: 'Name' }
            ],
            responsive: true,
            destroy: true
        });
    }
    getAjax.dataType = "json";
    getAjax.send();
}

document.getElementById('call-ajax-btn').onclick = function(e) {
    e.preventDefault();
    getData();
}

$("#call-ajax-add").click(function(e) {
    e.preventDefault();

    var postAjax = new Delete(apiUrl, '=' + $("#add-name").val());
    postAjax.onSuccess = function() {
        getData();
    }

    postAjax.send();
})

