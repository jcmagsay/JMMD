/// <reference path="../Utilities.ts" />
/// <reference path="../MaterialDesign/DataList.ts" />

module TenFour.MaterialDesign {
    declare var MaterialCheckbox;

	export function initializeMdtfBindings() {
		CreateDialogBindings.initialize();
	}

	module CreateDialogBindings {
		function createMultiDdSelectAllBinding() {
			ko.bindingHandlers.multiDdSelectAll = {
				init: () => { },
				update: (element, valueAccessor, allBindingsAccessor, viewModel: DataList | any) => {
                    var value = valueAccessor();
                    var val = ko.utils.unwrapObservable(value);
				    var hasSelected = viewModel.selected().length;
				    if (val) {
				        viewModel.selectAll();
                    } else {
                        if (!hasSelected) {
                            viewModel.deselectAll();
                        }
				    }
				}
			};
		}

		function createMultiDdUnselectedBinding() {
			ko.bindingHandlers.multiDdUnselected = {
				init: () => { },
				update: (element, valueAccessor, allBindingsAccessor, viewModel: DataList) => {
					var value = valueAccessor();
					(ko.utils.unwrapObservable(value)) ? viewModel.selectAll() : viewModel.deselectAll();
				}
			};
		}

		function createMultiDdSearchBinding() {
			ko.bindingHandlers.multiDdSearchbox = {
				init: () => {
				},

				update: (element, valueAccessor, allBindingsAccessor, viewModel: DataList) => {
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
				init: () => { },
				update: (element, valueAccessor, allBindingsAccessor, viewModel: any) => {
					var $dialog = $(element).closest('.mdtf-dialog');
					var value = valueAccessor();
					if (ko.utils.unwrapObservable(value)) {
						$dialog.css({ top: viewModel.dialogYcoord(), left: viewModel.dialogXcoord(), height: viewModel.containerHeight(), width: viewModel.containerWidth() });
					}
				}
			};
		}

		/** Initializes all the custom bindings*/
		export function initialize() {
			createMultiDdSelectAllBinding();
			createMultiDdUnselectedBinding();
			createMultiDdSearchBinding();
			createDialogBinding();
		}
	}
}

interface KnockoutBindingHandlers {
	multiDdSelectAll: KnockoutBindingHandler;
	multiDdUnselected: KnockoutBindingHandler;
	multiDdSearchbox: KnockoutBindingHandler;
	dialog: KnockoutBindingHandler;
}