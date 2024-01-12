window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [{url: "authentication-v1-swagger.json", name: "Authentication v1"},
           {url: "device-v1-swagger.json", name: "Device v1"},
           {url: "device-v2-swagger.json", name: "Device v2"},
           {url: "inspection-v1-swagger.json", name: "Inspection v1"},
           {url: "inspection-v2-swagger.json", name: "Inspection v2"},
           {url: "product-v1-swagger.json", name: "Product v1"},
           {url: "product-v3-swagger.json", name: "Product v3"},
           {url: "ticket-v1-swagger.json", name: "Ticket v1"},
           {url: "ticket-v3-swagger.json", name: "Ticket v3"},
           {url: "validation-v1-swagger.json", name: "Validation v1"},
           {url: "validation-v3-swagger.json", name: "Validation v3"}],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
