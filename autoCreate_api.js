/*
 * @Author: Akira
 * @Date: 2023-04-20 18:44:12
 * @LastEditTime: 2023-07-09 17:39:50
 */
const fs = require("fs");
const apiDoc = require("./config/apidoc");
const deleteFolder = require("./utils/deleteFolder");
const typeMap = require("./utils/typeMap");

/**
 * 生成请求参数接口
 * @param {string} apiInterfaceName
 * @param {Array} params
 * @returns
 */
function getInterface(apiInterfaceName, params) {
  let interfaceProps = ``;

  /** 判空 */
  if (!params || params.length == 0) return interfaceProps;

  params.map((item) => {
    interfaceProps += `\t${item.key}: ${typeMap[item.value.replace(/<([^<>]+)>/, "$1")]};\n`;
  });

  return `interface ${apiInterfaceName} {\n${interfaceProps}}\n`;
}

/**
 * 生成接口函数
 * @param {string} apiFunctionName
 * @param {string} apiInterfaceName
 * @param {string} apiInterface
 * @param {string} apiMethod
 * @param {string} apiURL
 * @returns
 */
function getFunction(apiFunctionName, apiInterfaceName, apiInterface, apiMethod, apiURL) {
  /** 是否存在参数 */
  const isHasParams = apiInterface != "";

  return `export const ${apiFunctionName} = function (${isHasParams ? `params: ${apiInterfaceName}` : ""}) {
\treturn Http.${apiMethod}("${apiURL}", ${isHasParams ? "params" : ""});
};\n\n`;
}

/**
 * 生成 api 函数以及 interface
 * @param {object} apiModule
 * @returns
 */
function getFunctions(apiName, apiModule) {
  let apiFunctionName, apiInterfaceName, apiMethod, apiInterface, apiFunction, apiURL;
  let {
    name,
    request: { method, body, url },
  } = apiModule;

  /** 首字母大写 */
  name = name.replace(/^\w/, (c) => c.toUpperCase());

  apiFunctionName = apiName + name;
  apiMethod = method;
  apiInterfaceName = `I${name}RequestData`;
  apiURL = url instanceof Object ? url.raw : url;

  /** body.raw 转换 */
  if (body && body.raw) {
    body.raw = Object.entries(JSON.parse(body.raw)).map(([key, value]) => {
      return { key: `${key}`, value: `${value}` };
    });
  }

  apiInterface = getInterface(apiInterfaceName, body?.raw || url?.query || url?.variable);
  apiFunction = getFunction(apiFunctionName, apiInterfaceName, apiInterface, apiMethod, apiURL);

  return apiInterface + apiFunction;
}

async function createApi(apiDoc) {
  let apiFunctions, apiName;

  /** 创建模块文件夹 */
  await fs.promises.mkdir("dist/api/module", { recursive: true });

  /** 遍历所有模块 */
  apiDoc.map(async (api) => {
    /** 头部 http 导入 */
    apiFunctions = `import Http from "../http";\n\n`;

    api.name = api.name.replace(/-[^-]+$/, "");
    apiName = api.name.replace(/-(.)/g, (_, char) => char.toUpperCase());

    /** 遍历模块下所有api */
    api.item.map((apiModule) => {
      apiFunctions += getFunctions(apiName, apiModule);
    });

    /** 模块文件夹下写入 apiName.ts */
    await fs.promises.writeFile(`dist/api/module/${apiName}.ts`, apiFunctions);
  });
}

deleteFolder("dist/api");
createApi(apiDoc);
