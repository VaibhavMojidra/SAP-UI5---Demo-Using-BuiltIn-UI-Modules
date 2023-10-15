sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	],function(Controller,MessageToast){
		"use strict";
		return Controller.extend("com.vaibhavmojidra.modulesDemo.App",{
			showToast:function(){
				MessageToast.show("Hello..!!! Vaibhav Mojidra This is a Toast Message.");
			}             
		});
});