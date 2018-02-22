var columnDefs = [
    {headerName: "Athlete", field: "athlete", width: 125, suppressMenu: true},
    {
        headerName: "Age",
        field: "age",
        width: 90,
        suppressSorting: true,
        headerComponent: CustomHeader,
        headerComponentParams: {menuIcon: 'fa-external-link'}

    },
    {headerName: "Country", field: "country", width: 120, suppressMenu: true},
    {headerName: "Year", field: "year", width: 90, suppressSorting: true},
    {headerName: "Date", field: "date", width: 100, suppressMenu: true},
    {headerName: "Sport", field: "sport", width: 90, suppressSorting: true},
    {headerName: "Gold", field: "gold", width: 115, headerComponent: CustomHeader,headerComponentParams: {menuIcon: 'fa-cog'},suppressSorting: true},
    {headerName: "Silver", field: "silver", width: 90, suppressSorting: true},
    {headerName: "Bronze", field: "bronze", width: 115, suppressMenu: true},
    {headerName: "Total", field: "total", width: 90, suppressSorting: true}

];

var gridOptions = {
    // groupHeaderHeight:75,
    // headerHeight: 150,
    // floatingFiltersHeight: 250,
    // pivotGroupHeaderHeight: 50,
    // pivotGroupHeaderHeight: 100,
    // suppressMovableColumns: true,
    // enableColResize: true,
    // suppressDragLeaveHidesColumns: true,
    columnDefs: columnDefs,
    rowData: null,
    enableFilter: true,
    enableSorting: true,
    enableColResize: true,
    suppressMenuHide: true,
    // components: {
    //     agColumnHeader: CustomHeader
    // },
    defaultColDef: {
        width: 100,
        headerComponentParams: {
            menuIcon: 'fa-bars'
        }
    }
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    // do http request to get our sample data - not using any framework to keep the example self contained.
    // you will probably use a framework like JQuery, Angular or something else to do your HTTP calls.
    agGrid.simpleHttpRequest({url: 'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json'}).then(function (data) {
        gridOptions.api.setRowData(data);
    });
});


// {headerName: "Country", field: "country", width: 120, suppressMenu: true},
// {headerName: "Year", field: 'year', sort: 'desc'},
// {field: 'date', filter: "agDateColumnFilter"},
// {field: 'sport', suppressSorting: true},
// {headerName: "Gold", field: "gold", width: 115, headerComponentParams: {menuIcon: 'fa-cog'}},
// {field: 'silver'},
// {field: 'bronze'},
// {headerName: "Total", field: 'total' }


// {
//     headerName: "Athlete Details",
//         children: [
//     {field: 'athlete', width: 150},
//     {field: 'country', width: 150}
// ]
// },
// defaultColDef: {
//     width: 100,
// headerComponentParams: {
//     menuIcon: 'fa-bars',
//     template:
//     '<div class="ag-cell-label-container" role="presentation">' +
//     '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
//     '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
//     '    <span ref="eText" class="ag-header-cell-text" role="columnheader"></span>' +
//     '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
//     '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order" ></span>' +
//     '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon" ></span>' +
//     '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon" ></span>' +
//     '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon" ></span>' +
//     '  </div>' +
//     '</div>'
// }
// headerComponentParams: {
//     menuIcon: 'fa-bars',
//     template:
//     '<div class="ag-cell-label-container" role="presentation">' +
//     '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
//     '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
//     '    <span ref="eText" class="ag-header-cell-text" role="columnheader"></span>' +
//     '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
//     '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order" ></span>' +
//     '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon" ></span>' +
//     '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon" ></span>' +
//     '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon" ></span>' +
//     '  </div>' +
//     '</div>'
// },

// headerComponentParams: {
//     menuIcon: 'fa-bars',
//     template:
//     '<div class="ag-cell-label-container" role="presentation">' +
//     '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
//     '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
//     '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order" ></span>' +
//     '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon" ></span>' +
//     '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon" ></span>' +
//     '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon" ></span>' +
//     '    X<span ref="eText" class="ag-header-cell-text" role="columnheader"></span>X' +
//     '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
//     '  </div>' +
//     '</div>'
// }