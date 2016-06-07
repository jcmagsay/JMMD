/// <reference path="../Utilities.ts" />
var TenFour;
(function (TenFour) {
    var MaterialDesign;
    (function (MaterialDesign) {
        function initializeMdlBindings() {
            CreateCheckboxBindings.initialize();
            CreateMaterialDataTableBindings.initialize();
            CreateTextfieldBindings.initialize();
            CreateTooltipBindings.initialize();
            CreateMenuBindings.initialize();
            CreateRadioBindings.initialize();
        }
        MaterialDesign.initializeMdlBindings = initializeMdlBindings;
        var CreateRadioBindings;
        (function (CreateRadioBindings) {
            function mdlRadioBinding() {
                ko.bindingHandlers.mdlRadio = {
                    init: function (element, valueAccessor, c) {
                        var elMaterial = new MaterialRadio(element);
                    },
                    update: function (element, valueAccessor, allBindingsAccessor, context, bindingContext) {
                    }
                };
            }
            function initialize() {
                mdlRadioBinding();
            }
            CreateRadioBindings.initialize = initialize;
        })(CreateRadioBindings || (CreateRadioBindings = {}));
        var CreateCheckboxBindings;
        (function (CreateCheckboxBindings) {
            //TODO: move this to mdtf-events.ts since it's specifically for filters
            function mdlCheckboxBinding() {
                ko.bindingHandlers.mdlCheckbox = {
                    init: function () { },
                    update: function (element, valueAccessor, allBindingsAccessor, context, bindingContext) {
                        var value = valueAccessor();
                        var elMaterial = new MaterialCheckbox(element);
                        if (ko.utils.unwrapObservable(value)) {
                            value.isChecked.subscribeChanged(function (latest) {
                                if (!latest) {
                                    elMaterial.uncheck();
                                    bindingContext.$parent.setFilter(context, false);
                                }
                                else {
                                    elMaterial.check();
                                    bindingContext.$parent.setFilter(context, true);
                                }
                            });
                        }
                    }
                };
            }
            function initialize() {
                mdlCheckboxBinding();
            }
            CreateCheckboxBindings.initialize = initialize;
        })(CreateCheckboxBindings || (CreateCheckboxBindings = {}));
        var CreateMaterialDataTableBindings;
        (function (CreateMaterialDataTableBindings) {
            function mdlDataTableBinding() {
                ko.bindingHandlers.mdlDataTable = {
                    init: function (element, valueAccessor, c) {
                    },
                    update: function (element, valueAccessor, allBindingsAccessor, context, bindingContext) {
                        var trs = $(element).find("tbody tr");
                        var cbtds = new Array();
                        _(trs).forEach(function (tr, i) {
                            var cbTd = $("<td>");
                            var cb = MaterialDataTable.prototype.createCheckbox_(tr, element);
                            cbtds.push(cb);
                            cbTd.append(cb);
                            $(tr).prepend(cbTd);
                        });
                    }
                };
            }
            function initialize() {
                mdlDataTableBinding();
            }
            CreateMaterialDataTableBindings.initialize = initialize;
        })(CreateMaterialDataTableBindings || (CreateMaterialDataTableBindings = {}));
        var CreateMenuBindings;
        (function (CreateMenuBindings) {
            //TODO: move this to mdtf-events.ts since it's specifically for filters
            function mdlMenuBinding() {
                ko.bindingHandlers.mdlMenu = {
                    init: function () { },
                    update: function (element, valueAccessor, allBindingsAccessor, context, bindingContext) {
                        var value = valueAccessor();
                        var $button = $(element).find('button');
                        var $menu = $(element).find('.mdl-menu');
                        var $container = $(element).find(".mdl-menu__container");
                        if ($container) {
                            $container.replaceWith($menu);
                        }
                        var elMaterial = new MaterialMenu($menu[0]);
                        $button.on('click', function () { elMaterial.toggle(); });
                    }
                };
            }
            function initialize() {
                mdlMenuBinding();
            }
            CreateMenuBindings.initialize = initialize;
        })(CreateMenuBindings || (CreateMenuBindings = {}));
        var CreateTextfieldBindings;
        (function (CreateTextfieldBindings) {
            function mdlDateBinding() {
                ko.bindingHandlers.mdlTextfieldDate = {
                    init: function () { },
                    update: function (element, valueAccessor) {
                        var value = valueAccessor();
                        (ko.utils.unwrapObservable(value)) ? $(element).closest(".mdl-textfield").addClass("is-dirty") : $(element).closest(".mdl-textfield").removeClass("is-dirty");
                    }
                };
            }
            function mdlTimeBinding() {
                ko.bindingHandlers.mdlTextfieldTime = {
                    init: function () { },
                    update: function (element, valueAccessor) {
                        var value = valueAccessor();
                        (ko.utils.unwrapObservable(value)) ? $(element).closest(".mdl-textfield").addClass("is-dirty") : $(element).closest(".mdl-textfield").removeClass("is-dirty");
                    }
                };
            }
            function initialize() {
                mdlDateBinding();
                mdlTimeBinding();
            }
            CreateTextfieldBindings.initialize = initialize;
        })(CreateTextfieldBindings || (CreateTextfieldBindings = {}));
        var CreateTooltipBindings;
        (function (CreateTooltipBindings) {
            function mdlTooltipBinding() {
                ko.bindingHandlers.mdlTooltip = {
                    init: function () { },
                    update: function (element) { return new MaterialTooltip(element); }
                };
            }
            function initialize() {
                mdlTooltipBinding();
            }
            CreateTooltipBindings.initialize = initialize;
        })(CreateTooltipBindings || (CreateTooltipBindings = {}));
    })(MaterialDesign = TenFour.MaterialDesign || (TenFour.MaterialDesign = {}));
})(TenFour || (TenFour = {}));
//# sourceMappingURL=mdl-events.js.map