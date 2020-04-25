const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://gatewayapi:8085',
      changeOrigin: true,
    })
  );
};
