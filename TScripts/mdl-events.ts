/// <reference path="../Utilities.ts" />

module TenFour.MaterialDesign {

	declare var componentHandler;
	declare var MaterialCheckbox;
    declare var MaterialMenu;
	declare var MaterialTooltip;
    declare var MaterialRadio;
	declare var MaterialDataTable;

	export function initializeMdlBindings() {
		CreateCheckboxBindings.initialize();
		CreateMaterialDataTableBindings.initialize();
		CreateTextfieldBindings.initialize();
		CreateTooltipBindings.initialize();
        CreateMenuBindings.initialize();
        CreateRadioBindings.initialize();
	}

    module CreateRadioBindings {
        function mdlRadioBinding() {
            ko.bindingHandlers.mdlRadio = {
                init: (element, valueAccessor, c) => {
                    var elMaterial = new MaterialRadio(element);
                },
                update: (element, valueAccessor, allBindingsAccessor, context, bindingContext) => {

                }
            }
        }
        export function initialize() {
            mdlRadioBinding();
        }
    }

	module CreateCheckboxBindings {
		//TODO: move this to mdtf-events.ts since it's specifically for filters
		function mdlCheckboxBinding() {
			ko.bindingHandlers.mdlCheckbox = {
				init: () => { },
				update: (element, valueAccessor, allBindingsAccessor, context, bindingContext) => {
					var value = valueAccessor();
					var elMaterial = new MaterialCheckbox(element);
					if (ko.utils.unwrapObservable(value)) {
						value.isChecked.subscribeChanged((latest) => {
							if (!latest) {
								elMaterial.uncheck();
								bindingContext.$parent.setFilter(context, false);
							} else {
								elMaterial.check();
								bindingContext.$parent.setFilter(context, true);
							}
						});
					}
				}
			};
		}

		export function initialize() {
			mdlCheckboxBinding();
		}
    }

	module CreateMaterialDataTableBindings {
		function mdlDataTableBinding() {
			ko.bindingHandlers.mdlDataTable = {
				init: (element, valueAccessor, c) => {
				},
				update: (element, valueAccessor, allBindingsAccessor, context, bindingContext) => {
					var trs = $(element).find("tbody tr")
					var cbtds = new Array<any>();
					_(trs).forEach((tr, i) => {
						var cbTd = $("<td>");
						var cb = MaterialDataTable.prototype.createCheckbox_(tr, element);
						cbtds.push(cb);
						cbTd.append(cb);
						$(tr).prepend(cbTd);
					});
				}
			}
		}
		export function initialize() {
			mdlDataTableBinding();
		}
	}


    module CreateMenuBindings {
        //TODO: move this to mdtf-events.ts since it's specifically for filters
        function mdlMenuBinding() {
            ko.bindingHandlers.mdlMenu = {
                init: () => { },
                update: (element, valueAccessor, allBindingsAccessor, context, bindingContext) => {
                    var value = valueAccessor();
                    var $button = $(element).find('button');
                    var $menu = $(element).find('.mdl-menu');
					var $container = $(element).find(".mdl-menu__container");
					if ($container) { $container.replaceWith($menu); }
					var elMaterial = new MaterialMenu($menu[0]);
                    $button.on('click', () => { elMaterial.toggle(); });
                }
            };
		}

        export function initialize() {
            mdlMenuBinding();
        }
    }

	module CreateTextfieldBindings {
		function mdlDateBinding() {
			ko.bindingHandlers.mdlTextfieldDate = {
				init: () => { },
				update: (element, valueAccessor) => {
					var value = valueAccessor();
					(ko.utils.unwrapObservable(value)) ? $(element).closest(".mdl-textfield").addClass("is-dirty") : $(element).closest(".mdl-textfield").removeClass("is-dirty");
				}
			};
		}

		function mdlTimeBinding() {
			ko.bindingHandlers.mdlTextfieldTime = {
				init: () => { },

				update: (element, valueAccessor) => {
					var value = valueAccessor();
					(ko.utils.unwrapObservable(value)) ? $(element).closest(".mdl-textfield").addClass("is-dirty") : $(element).closest(".mdl-textfield").removeClass("is-dirty");
				}
			};
		}

		export function initialize() {
			mdlDateBinding();
			mdlTimeBinding();
		}
	}

	module CreateTooltipBindings {
		function mdlTooltipBinding() {
			ko.bindingHandlers.mdlTooltip = {
				init: () => { },
				update: (element) => { return new MaterialTooltip(element); }
			};
		}

		export function initialize() {
			mdlTooltipBinding();
		}
	}
}

interface KnockoutBindingHandlers {
	mdlCheckbox: KnockoutBindingHandler;
	mdlDataTable: KnockoutBindingHandler;
	mdlTextfieldDate: KnockoutBindingHandler;
	mdlTextfieldTime: KnockoutBindingHandler;
	mdlTooltip: KnockoutBindingHandler;
    mdlMenu: KnockoutBindingHandler;
    mdlRadio: KnockoutBindingHandler;
}