const fastify = require("fastify")();
const path = require("path");

fastify
  .register(require("@fastify/static"), {
    root: path.join(__dirname, "public"),
  })
  .listen({ port: 4001, host: "0.0.0.0" }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.info(`server listening on http://localhost:4001`);
  });
