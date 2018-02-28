function CustomHeader() {
}

CustomHeader.prototype.init = function (agParams) {
    this.agParams = agParams;
    this.eGui = document.createElement('div');
    this.eGui.innerHTML = '' +

        '<button type="button">' + this.agParams.displayName + '</button>';

    // this.eMenuButton = this.eGui.querySelector(".customHeaderMenuButton");
    this.eGui.addEventListener('click', this.onClick);

};


CustomHeader.prototype.getGui = function () {
    return this.eGui;
};

CustomHeader.prototype.onClick = function () {
    // this.agParams.api.sizeColumnsToFit();
    gridOptions.api.sizeColumnsToFit();
};


CustomHeader.prototype.destroy = function () {

    this.eSortRemoveButton.removeEventListener('click', this.onSortRequestedListener);

};

