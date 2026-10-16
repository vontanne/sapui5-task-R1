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
          const resourceBundle = this.getView()
            ?.getModel("i18n")
            ?.getResourceBundle();
          const recipient = this.getView()
            ?.getModel()
            ?.getProperty("/recipient/name");
          const msg = resourceBundle.getText("helloMsg", [recipient]);
          MessageToast.show(msg);
        },
      },
    );
    return AppController;
  },
);
