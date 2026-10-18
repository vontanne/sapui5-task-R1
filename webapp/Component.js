sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
    "use strict";

    const Component = UIComponent.extend("ui5.tutorial.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },
      init() {
        UIComponent.prototype.init.call(this);

        const data = {
          recipient: {
            name: "World",
          },
        };
        const model = new JSONModel(data);
        this.setModel(model);

        // create the views based on the url/hash
        this.getRouter().initialize();
      },
    });
    return Component;
  },
);
