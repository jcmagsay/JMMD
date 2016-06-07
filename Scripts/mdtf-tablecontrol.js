/**
 * mdtf-tablecontrol - Material Design Table Control Component
 * @version v1.0.0
 * @author Jill Magsaysay
 * @copyright 2016
 */

function MdtfTableControl(e, b) {
	"use strict";
	this.body_ = b || $("body"),
	this.element_ = e,
	this.dialog = e.find("div.mdtf-dialog"),
	this.list = e.find("div.mdtf-list text-icon"),
	this.checkboxes = e.find("label > input.mdl-icon-toggle__input"),
	this.init();
}

MdtfTableControl.prototype.init = function () {
	var self = this;

	self.element_.on("click", "button", function (event) {
		self.activateMenu($(event.target).closest(self.element_));
	});
	self.body_.on("click", function (event) {
		if (!$(self.element_.find(event.target)).length && !$(event.target).hasClass("mdl-icon-toggle__input")) {
			self.deactivateMenu();
		}
	});
}

MdtfTableControl.prototype.activateMenu = function (el) {
	this.dialog.removeClass("is-visible");
	$(el).find(this.dialog).addClass("is-visible");
}

MdtfTableControl.prototype.deactivateMenu = function () {
	this.dialog.removeClass("is-visible");
}

MdtfTableControl.upgrade = function () {
	$(".mdtf-hybrid__table-control").each(function (index, element) {
		return new MdtfTableControl($(element));
	});

}