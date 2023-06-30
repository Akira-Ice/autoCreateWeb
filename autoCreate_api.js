/*
 * @Author: Akira
 * @Date: 2023-04-20 18:44:12
 * @LastEditTime: 2023-06-30 18:53:21
 */
const fs = require("fs");
const apiDoc = require("./config/apidoc");
const deleteFolder = require("./utils/deleteFolder");

function getInterface(apiInterfaceName, body) {
  let interfaceProps = ``;
  if (!body || body.mode != "formdata" || body.formdata.length == 0) return interfaceProps;
  body.formdata.map((item) => {
    interfaceProps += `\t${item.key}: string;\n`;
  });
  return `interface ${apiInterfaceName} {\n${interfaceProps}}\n`;
}

function getFunction(apiFunctionName, apiInterfaceName, apiMethod, apiURL) {
  return `export const ${apiFunctionName} = function (${apiMethod == "POST" ? "params: " : ""}${apiMethod == "POST" ? apiInterfaceName : ""}) {
\treturn Http.${apiMethod}("${apiURL}", ${apiMethod == "POST" ? "params" : ""});
};\n\n`;
}

function getFunctions(apiModule) {
  let apiFunctionName, apiInterfaceName, apiMethod, apiInterface, apiFunction, apiURL;
  apiFunctionName = apiModule.name;
  apiMethod = apiModule.request.method;
  apiInterfaceName = `I${apiModule.name.replace(/^\w/, (c) => c.toUpperCase())}RequestData`;
  apiURL = apiModule.request.url?.path.join("/");

  apiInterface = getInterface(apiInterfaceName, apiModule.request.body);
  apiFunction = getFunction(apiFunctionName, apiInterfaceName, apiMethod, apiURL);

  return apiInterface + apiFunction;
}

async function createApi(apiDoc) {
  let apiFunctions;

  await fs.promises.mkdir("dist/api/module", { recursive: true });
  apiDoc.map(async (api) => {
    apiFunctions = `import Http from "../http";\n\n`;
    api.item.map((apiModule) => {
      apiFunctions += getFunctions(apiModule);
    });
    await fs.promises.writeFile(`dist/api/module/${api.name}.ts`, apiFunctions);
  });
}
deleteFolder("dist/api");
createApi(apiDoc);
