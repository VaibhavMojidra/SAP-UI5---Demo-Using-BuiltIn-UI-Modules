# SAP UI5 Demo Using BuiltIn UI Modules

UI modules in SAPUI5 typically refer to reusable components or libraries that developers can use to build the user interface of their applications. These modules are essential building blocks for creating consistent, visually appealing, and interactive user interfaces.

---

### Code Explaination:


> Refer to (webapp/controller/App.controller.js)

`sap.ui.define`: This is the method used to define a module in SAPUI5. It takes two arguments: an array of dependencies and a function.

Dependencies: The array `["sap/ui/core/mvc/Controller", "sap/m/MessageToast"]` lists the modules that this module depends on. These modules are loaded before the function is executed.

Function: The function `function(Controller, MessageToast)` is executed after all dependencies are loaded. The loaded modules are passed as arguments to this function in the same order as they were listed in the array.

Controller Definition: Inside the function, a controller is defined using Controller.extend. The first argument `"com.vaibhavmojidra.modulesDemo.App"` is the name of the new controller.

Controller Methods: Inside the controller definition, a method `showToast` is defined. This method shows a toast message when called.

So, when the `showToast` method of the controller `"com.vaibhavmojidra.modulesDemo.App"` is called, it will display a toast message saying “Hello…!!! Vaibhav Mojidra This is a Toast Message.”.

---
[![Vaibhav Mojidra - 1.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Using-BuiltIn-UI-Modules/master/screenshots/1.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)

[![Vaibhav Mojidra - 2.jpeg](https://raw.githubusercontent.com/VaibhavMojidra/SAP-UI5---Demo-Using-BuiltIn-UI-Modules/master/screenshots/2.jpeg "Vaibhav Mojidra")](https://vaibhavmojidra.github.io/site/)
