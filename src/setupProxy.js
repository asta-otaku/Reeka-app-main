const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://www.apispreadsheets.com",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
