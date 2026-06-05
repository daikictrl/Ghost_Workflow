import {
  defineConfig
} from "../../../../chunk-WXMO3AC2.mjs";
import "../../../../chunk-ZHBVPOXT.mjs";
import {
  init_esm
} from "../../../../chunk-5A2LE32G.mjs";

// trigger.config.ts
init_esm();
var trigger_config_default = defineConfig({
  project: process.env.TRIGGER_PROJECT_REF,
  dirs: ["trigger"],
  runtime: "node",
  logLevel: "info",
  // max duration in seconds
  maxDuration: 3600,
  retries: {
    enabledInDev: false,
    default: {
      maxAttempts: 3,
      minTimeoutInMs: 1e3,
      maxTimeoutInMs: 1e4,
      factor: 2
    }
  },
  build: {}
});
var resolveEnvVars = void 0;
export {
  trigger_config_default as default,
  resolveEnvVars
};
//# sourceMappingURL=trigger.config.mjs.map
