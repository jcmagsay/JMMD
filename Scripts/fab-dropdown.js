/**
 * mdtf-material - Material Design Components in CSS, JS and HTML
 * @version v1.0.0
 * @author Jill Magsaysay
 * @copyright 2015
 */

function MdtfFabDropdown(e) {
	"use strict";
	this.element_ = e,
	this.button = e.find("button"),
	this.dialog = e.find("div.mdtf-dialog.fab"),
	this.init();
}

MdtfFabDropdown.prototype.init = function () {
	var self = this;
	var el = this.element_;
	$(el).on("click", "button", function () {
		if ($(el).hasClass("is-visible")) self.deactivateDialog(el);
		else self.activateDialog(el);
	});
}

MdtfFabDropdown.prototype.activateDialog = function (el) {
	$(el).addClass("is-visible");
}

MdtfFabDropdown.prototype.deactivateDialog = function (el) {
	$(el).removeClass("is-visible");
}

MdtfFabDropdown.upgrade = function () {
	$(".mdtf-fab-dropdown").each(function (index, element) {
		return new MdtfFabDropdown($(element));
	});
}