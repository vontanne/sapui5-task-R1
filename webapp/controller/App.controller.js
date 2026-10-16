sap.ui.define(
  ["sap/m/MessageToast", "sap/ui/core/mvc/Controller"],
  function (MessageToast, Controller) {
    "use strict";

    /**
     * @name ui5.tutorial.walkthrough.controller.App
     */
    const AppController = Controller.extend(
      "ui5.tutorial.walkthrough.controller.App",
      {
        onShowHello() {
          MessageToast.show("Hello World");
        },
      },
    );
    return AppController;
  },
);
