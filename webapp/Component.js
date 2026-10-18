sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel", "sap/ui/Device"],
  function (UIComponent, JSONModel, Device) {
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

        const deviceModel = new JSONModel(Device);
        deviceModel.setDefaultBindingMode("OneWay");
        this.setModel(deviceModel, "device");

        this.getRouter().initialize();
      },
      getContentDensityClass() {
        return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
      },
    });
    return Component;
  },
);
