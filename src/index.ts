// import "./lib/fix-stacktrace.js";
// import { createRequire } from "node:module";
// import * as core from "@actions/core";
// import * as tc from "@actions/tool-cache";
// import { $ } from "execa";
// import { glob } from "glob";
// import { tmpdir } from "node:os";
// import { join } from "node:path";
// import { pipeline } from "node:stream/promises";
// import { createWriteStream } from "node:fs";
// import loadAction from "./loadAction.js";

// const version = (
//   await (await fetch("https://deno.com/versions.json")).json()
// ).cli
//   .find((x) => x.startsWith("v1."))
//   .slice(1);

// process.env.DENO_INSTALL = join(tmpdir(), "deno");
// await pipeline(
//   (await fetch("https://deno.land/install.sh")).body as any,
//   createWriteStream(join(process.env.DENO_INSTALL, "install.sh"))
// );

// await $`sh ${join(process.env.DENO_INSTALL, "install.sh")} v${version}`;

// core.addPath(join(process.env.DENO_INSTALL, "bin"));

// await $({ stdio: "inherit" })`deno run -Aq ${entry}`;

console.log(process.env);
