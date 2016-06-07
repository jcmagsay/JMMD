/// <reference path="../Utilities.ts" />
/// <reference path="../MaterialDesign/DataList.ts" />
var TenFour;
(function (TenFour) {
    var MaterialDesign;
    (function (MaterialDesign) {
        function initializeMdtfBindings() {
            CreateDialogBindings.initialize();
        }
        MaterialDesign.initializeMdtfBindings = initializeMdtfBindings;
        var CreateDialogBindings;
        (function (CreateDialogBindings) {
            function createMultiDdSelectAllBinding() {
                ko.bindingHandlers.multiDdSelectAll = {
                    init: function () { },
                    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                        var value = valueAccessor();
                        var val = ko.utils.unwrapObservable(value);
                        var hasSelected = viewModel.selected().length;
                        if (val) {
                            viewModel.selectAll();
                        }
                        else {
                            if (!hasSelected) {
                                viewModel.deselectAll();
                            }
                        }
                    }
                };
            }
            function createMultiDdUnselectedBinding() {
                ko.bindingHandlers.multiDdUnselected = {
                    init: function () { },
                    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                        var value = valueAccessor();
                        (ko.utils.unwrapObservable(value)) ? viewModel.selectAll() : viewModel.deselectAll();
                    }
                };
            }
            function createMultiDdSearchBinding() {
                ko.bindingHandlers.multiDdSearchbox = {
                    init: function () {
                    },
                    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                        var value = valueAccessor();
                        if (ko.utils.unwrapObservable(value) && value !== "") {
                            var nLen = value.length;
                            viewModel.search(value, nLen);
                        }
                    }
                };
            }
            function createDialogBinding() {
                ko.bindingHandlers.dialog = {
                    init: function () { },
                    update: function (element, valueAccessor, allBindingsAccessor, viewModel) {
                        var $dialog = $(element).closest('.mdtf-dialog');
                        var value = valueAccessor();
                        if (ko.utils.unwrapObservable(value)) {
                            $dialog.css({ top: viewModel.dialogYcoord(), left: viewModel.dialogXcoord(), height: viewModel.containerHeight(), width: viewModel.containerWidth() });
                        }
                    }
                };
            }
            /** Initializes all the custom bindings*/
            function initialize() {
                createMultiDdSelectAllBinding();
                createMultiDdUnselectedBinding();
                createMultiDdSearchBinding();
                createDialogBinding();
            }
            CreateDialogBindings.initialize = initialize;
        })(CreateDialogBindings || (CreateDialogBindings = {}));
    })(MaterialDesign = TenFour.MaterialDesign || (TenFour.MaterialDesign = {}));
})(TenFour || (TenFour = {}));
//# sourceMappingURL=mdtf-events.js.map