//опции плагина DataTables
$(document).ready(function () {
    $('#selectedColumn').DataTable({
        "aaSorting": [], //колонка в таблице с изображениями(последняя) не сортируется
        columnDefs: [{
            orderable: false,
            targets: 6 //номер колонки, которую не надо сортировать(с изображениеями)
        }],
        oLanguage: { //перевод на русский язык
            oAria: {
                sSortAscending: ": активировать для сортировки столбца по возрастанию",
                sSortDescending: ": активировать для сортировки столбца по убыванию"
            },
            oPaginate: {
                sFirst: "Первая",
                sLast: "Предыдущая",
                sNext: "Следующая",
                sPrevious: "Последняя"
            },
            sEmptyTable: "В таблице отсутствуют данные",
            sInfo: "Записи с _START_ до _END_ из _TOTAL_ записей",
            sInfoEmpty: "Записи с 0 до 0 из 0 записей",
            sInfoFiltered: "(отфильтровано из _MAX_ записей)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Показать _MENU_ записей",
            sLoadingRecords: "Загрузка записей...",
            sProcessing: "Подождите...",
            sSearch: "Поиск:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "Записи отсутствуют."
        }
    });
    $('.dataTables_length').addClass('bs-select');
});