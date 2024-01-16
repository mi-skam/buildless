import { importMapsPlugin } from "@web/dev-server-import-maps";

export default {
  open: true,
  nodeResolve: true,
  watch: true,
  plugins: [importMapsPlugin()],
};
