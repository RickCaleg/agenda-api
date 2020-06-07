const app = require('./server/config/express');
const config = require('./server/config/env');

app.listen(config.portApi, () => console.log(`[Server] - Escutando a porta ${config.portApi}`));

module.exports = app;