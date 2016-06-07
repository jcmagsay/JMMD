/**
 * mdtf-material - Material Design Components in CSS, JS and HTML
 * @version v1.0.0
 * @author Jill Magsaysay
 * @copyright 2015
 */

function MdtfMultiSelectDd(e, b) {
	"use strict";
	this.body_ = b || $("body"),
	this.element_ = e,
	this.button = e.find("button"),
	this.dialog = e.find("div.mdtf-dialog"),
	this.list = e.find("div.mdtf-list text-icon"),
	this.checkboxes = e.find("label > input.mdl-checkbox__input"),
	this.init();
}

MdtfMultiSelectDd.prototype.init = function () {
	var self = this;

	self.element_.on("click", "button", function (event) {
		self.activateDialog($(event.target).closest(self.element_));
	});
	self.body_.on("click", function(event) {
		 if (!$(self.element_.find(event.target)).length && !$(event.target).hasClass("mdl-checkbox__input")) {
			 self.deactivateDialog();
		 }
	});
}

MdtfMultiSelectDd.prototype.activateDialog = function (el) {
	this.dialog.removeClass("is-visible");
	$(el).find(this.dialog).addClass("is-visible");
	$(el).find(this.dialog).addClass("is-visible");
}

MdtfMultiSelectDd.prototype.deactivateDialog = function () {
	this.dialog.removeClass("is-visible");
}

MdtfMultiSelectDd.upgrade = function () {
	$(".mdtf-hybrid__multiselect-dd").each(function(index, element) {
		var myMultiSelect = new MdtfMultiSelectDd($(element));
	});

}