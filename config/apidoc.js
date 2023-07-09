const apiDoc = {
  info: {
    _postman_id: "f55225e9-084d-4e99-8665-6947fcc71e7b",
    name: "Api Documentation",
    description: "Api Documentation",
    schema: "https://schema.getpostman.com/json/collection/v2.0.0/collection.json",
    _exporter_id: "19078443",
  },
  item: [
    {
      name: "basic-error-controller",
      item: [
        {
          name: "errorHtml",
          request: {
            method: "GET",
            header: [
              {
                key: "Accept",
                value: "text/html",
              },
            ],
            url: "/error",
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "GET",
                header: [
                  {
                    key: "Accept",
                    value: "text/html",
                  },
                ],
                url: "/error",
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "text/html",
                },
              ],
              cookie: [],
              body: '{\n  "empty": "<boolean>",\n  "model": {},\n  "modelMap": {\n    "Ut_2d": {}\n  },\n  "reference": "<boolean>",\n  "status": "REQUEST_URI_TOO_LONG",\n  "view": {\n    "contentType": "<string>"\n  },\n  "viewName": "<string>"\n}',
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "GET",
                header: [],
                url: "/error",
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "GET",
                header: [],
                url: "/error",
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Not Found",
              originalRequest: {
                method: "GET",
                header: [],
                url: "/error",
              },
              status: "Not Found",
              code: 404,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "errorHtml",
          request: {
            method: "PUT",
            header: [
              {
                key: "Accept",
                value: "text/html",
              },
            ],
            url: "/error",
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "PUT",
                header: [
                  {
                    key: "Accept",
                    value: "text/html",
                  },
                ],
                url: "/error",
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "text/html",
                },
              ],
              cookie: [],
              body: '{\n  "empty": "<boolean>",\n  "model": {},\n  "modelMap": {\n    "Ut_2d": {}\n  },\n  "reference": "<boolean>",\n  "status": "REQUEST_URI_TOO_LONG",\n  "view": {\n    "contentType": "<string>"\n  },\n  "viewName": "<string>"\n}',
            },
            {
              name: "Created",
              originalRequest: {
                method: "PUT",
                header: [],
                url: "/error",
              },
              status: "Created",
              code: 201,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "PUT",
                header: [],
                url: "/error",
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "PUT",
                header: [],
                url: "/error",
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Not Found",
              originalRequest: {
                method: "PUT",
                header: [],
                url: "/error",
              },
              status: "Not Found",
              code: 404,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "errorHtml",
          request: {
            method: "POST",
            header: [
              {
                key: "Accept",
                value: "text/html",
              },
            ],
            url: "/error",
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Accept",
                    value: "text/html",
                  },
                ],
                url: "/error",
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "text/html",
                },
              ],
              cookie: [],
              body: '{\n  "empty": "<boolean>",\n  "model": {},\n  "modelMap": {\n    "Ut_2d": {}\n  },\n  "reference": "<boolean>",\n  "status": "REQUEST_URI_TOO_LONG",\n  "view": {\n    "contentType": "<string>"\n  },\n  "viewName": "<string>"\n}',
            },
            {
              name: "Created",
              originalRequest: {
                method: "POST",
                header: [],
                url: "/error",
              },
              status: "Created",
              code: 201,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "POST",
                header: [],
                url: "/error",
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "POST",
                header: [],
                url: "/error",
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Not Found",
              originalRequest: {
                method: "POST",
                header: [],
                url: "/error",
              },
              status: "Not Found",
              code: 404,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "errorHtml",
          request: {
            method: "DELETE",
            header: [
              {
                key: "Accept",
                value: "text/html",
              },
            ],
            url: "/error",
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "DELETE",
                header: [
                  {
                    key: "Accept",
                    value: "text/html",
                  },
                ],
                url: "/error",
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "text/html",
                },
              ],
              cookie: [],
              body: '{\n  "empty": "<boolean>",\n  "model": {},\n  "modelMap": {\n    "Ut_2d": {}\n  },\n  "reference": "<boolean>",\n  "status": "REQUEST_URI_TOO_LONG",\n  "view": {\n    "contentType": "<string>"\n  },\n  "viewName": "<string>"\n}',
            },
            {
              name: "No Content",
              originalRequest: {
                method: "DELETE",
                header: [],
                url: "/error",
              },
              status: "No Content",
              code: 204,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "DELETE",
                header: [],
                url: "/error",
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "DELETE",
                header: [],
                url: "/error",
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "errorHtml",
          request: {
            method: "OPTIONS",
            header: [
              {
                key: "Accept",
                value: "text/html",
              },
            ],
            url: "/error",
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "OPTIONS",
                header: [
                  {
                    key: "Accept",
                    value: "text/html",
                  },
                ],
                url: "/error",
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "text/html",
                },
              ],
              cookie: [],
              body: '{\n  "empty": "<boolean>",\n  "model": {},\n  "modelMap": {\n    "Ut_2d": {}\n  },\n  "reference": "<boolean>",\n  "status": "REQUEST_URI_TOO_LONG",\n  "view": {\n    "contentType": "<string>"\n  },\n  "viewName": "<string>"\n}',
            },
            {
              name: "No Content",
              originalRequest: {
                method: "OPTIONS",
                header: [],
                url: "/error",
              },
              status: "No Content",
              code: 204,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "OPTIONS",
                header: [],
                url: "/error",
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "OPTIONS",
                header: [],
                url: "/error",
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "errorHtml",
          request: {
            method: "HEAD",
            header: [
              {
                key: "Accept",
                value: "text/html",
              },
            ],
            url: "/error",
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "HEAD",
                header: [
                  {
                    key: "Accept",
                    value: "text/html",
                  },
                ],
                url: "/error",
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "text/html",
                },
              ],
              cookie: [],
              body: '{\n  "empty": "<boolean>",\n  "model": {},\n  "modelMap": {\n    "Ut_2d": {}\n  },\n  "reference": "<boolean>",\n  "status": "REQUEST_URI_TOO_LONG",\n  "view": {\n    "contentType": "<string>"\n  },\n  "viewName": "<string>"\n}',
            },
            {
              name: "No Content",
              originalRequest: {
                method: "HEAD",
                header: [],
                url: "/error",
              },
              status: "No Content",
              code: 204,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "HEAD",
                header: [],
                url: "/error",
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "HEAD",
                header: [],
                url: "/error",
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "errorHtml",
          request: {
            method: "PATCH",
            header: [
              {
                key: "Accept",
                value: "text/html",
              },
            ],
            url: "/error",
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "PATCH",
                header: [
                  {
                    key: "Accept",
                    value: "text/html",
                  },
                ],
                url: "/error",
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "text/html",
                },
              ],
              cookie: [],
              body: '{\n  "empty": "<boolean>",\n  "model": {},\n  "modelMap": {\n    "Ut_2d": {}\n  },\n  "reference": "<boolean>",\n  "status": "REQUEST_URI_TOO_LONG",\n  "view": {\n    "contentType": "<string>"\n  },\n  "viewName": "<string>"\n}',
            },
            {
              name: "No Content",
              originalRequest: {
                method: "PATCH",
                header: [],
                url: "/error",
              },
              status: "No Content",
              code: 204,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "PATCH",
                header: [],
                url: "/error",
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "PATCH",
                header: [],
                url: "/error",
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "errorHtml",
          request: {
            method: "TRACE",
            header: [
              {
                key: "Accept",
                value: "text/html",
              },
            ],
            url: "/error",
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "TRACE",
                header: [
                  {
                    key: "Accept",
                    value: "text/html",
                  },
                ],
                url: "/error",
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "text/html",
                },
              ],
              cookie: [],
              body: '{\n  "empty": "<boolean>",\n  "model": {},\n  "modelMap": {\n    "Ut_2d": {}\n  },\n  "reference": "<boolean>",\n  "status": "REQUEST_URI_TOO_LONG",\n  "view": {\n    "contentType": "<string>"\n  },\n  "viewName": "<string>"\n}',
            },
            {
              name: "No Content",
              originalRequest: {
                method: "TRACE",
                header: [],
                url: "/error",
              },
              status: "No Content",
              code: 204,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "TRACE",
                header: [],
                url: "/error",
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "TRACE",
                header: [],
                url: "/error",
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
      ],
      description: "Basic Error Controller",
    },
    {
      name: "class-controller",
      item: [
        {
          name: "list",
          request: {
            method: "GET",
            header: [
              {
                key: "Accept",
                value: "*/*",
              },
            ],
            url: {
              raw: "/class/",
              host: [""],
              path: ["class", ""],
              query: [
                {
                  key: "current",
                  value: "<integer>",
                  description: "current",
                  disabled: true,
                },
                {
                  key: "pageSize",
                  value: "<integer>",
                  description: "pageSize",
                  disabled: true,
                },
              ],
            },
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "GET",
                header: [
                  {
                    key: "Accept",
                    value: "*/*",
                  },
                ],
                url: {
                  raw: "/class/",
                  host: [""],
                  path: ["class", ""],
                  query: [
                    {
                      key: "current",
                      value: "<integer>",
                      description: "current",
                      disabled: true,
                    },
                    {
                      key: "pageSize",
                      value: "<integer>",
                      description: "pageSize",
                      disabled: true,
                    },
                  ],
                },
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "*/*",
                },
              ],
              cookie: [],
              body: '{\n  "current": "<long>",\n  "pages": "<long>",\n  "records": [\n    {\n      "id": "<long>",\n      "name": "<string>"\n    },\n    {\n      "id": "<long>",\n      "name": "<string>"\n    }\n  ],\n  "size": "<long>",\n  "total": "<long>"\n}',
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "GET",
                header: [],
                url: {
                  raw: "/class/",
                  host: [""],
                  path: ["class", ""],
                  query: [
                    {
                      key: "current",
                      value: "<integer>",
                      description: "current",
                      disabled: true,
                    },
                    {
                      key: "pageSize",
                      value: "<integer>",
                      description: "pageSize",
                      disabled: true,
                    },
                  ],
                },
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "GET",
                header: [],
                url: {
                  raw: "/class/",
                  host: [""],
                  path: ["class", ""],
                  query: [
                    {
                      key: "current",
                      value: "<integer>",
                      description: "current",
                      disabled: true,
                    },
                    {
                      key: "pageSize",
                      value: "<integer>",
                      description: "pageSize",
                      disabled: true,
                    },
                  ],
                },
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Not Found",
              originalRequest: {
                method: "GET",
                header: [],
                url: {
                  raw: "/class/",
                  host: [""],
                  path: ["class", ""],
                  query: [
                    {
                      key: "current",
                      value: "<integer>",
                      description: "current",
                      disabled: true,
                    },
                    {
                      key: "pageSize",
                      value: "<integer>",
                      description: "pageSize",
                      disabled: true,
                    },
                  ],
                },
              },
              status: "Not Found",
              code: 404,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "create",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json",
              },
              {
                key: "Accept",
                value: "*/*",
              },
            ],
            body: {
              mode: "raw",
              raw: '{\n  "id": "<long>",\n  "name": "<string>"\n}',
              options: {
                raw: {
                  headerFamily: "json",
                  language: "json",
                },
              },
            },
            url: "/class/create",
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                  {
                    key: "Accept",
                    value: "*/*",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/class/create",
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "*/*",
                },
              ],
              cookie: [],
              body: "{}",
            },
            {
              name: "Created",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/class/create",
              },
              status: "Created",
              code: 201,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/class/create",
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/class/create",
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Not Found",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/class/create",
              },
              status: "Not Found",
              code: 404,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "delete",
          request: {
            method: "POST",
            header: [
              {
                key: "Accept",
                value: "*/*",
              },
            ],
            url: {
              raw: "/class/delete/:id",
              host: [""],
              path: ["class", "delete", ":id"],
              variable: [
                {
                  key: "id",
                  value: "<string>",
                },
              ],
            },
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Accept",
                    value: "*/*",
                  },
                ],
                url: {
                  raw: "/class/delete/:id",
                  host: [""],
                  path: ["class", "delete", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "*/*",
                },
              ],
              cookie: [],
              body: "{}",
            },
            {
              name: "Created",
              originalRequest: {
                method: "POST",
                header: [],
                url: {
                  raw: "/class/delete/:id",
                  host: [""],
                  path: ["class", "delete", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "Created",
              code: 201,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "POST",
                header: [],
                url: {
                  raw: "/class/delete/:id",
                  host: [""],
                  path: ["class", "delete", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "POST",
                header: [],
                url: {
                  raw: "/class/delete/:id",
                  host: [""],
                  path: ["class", "delete", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Not Found",
              originalRequest: {
                method: "POST",
                header: [],
                url: {
                  raw: "/class/delete/:id",
                  host: [""],
                  path: ["class", "delete", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "Not Found",
              code: 404,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "update",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json",
              },
              {
                key: "Accept",
                value: "*/*",
              },
            ],
            body: {
              mode: "raw",
              raw: '{\n  "id": "<long>",\n  "name": "<string>"\n}',
              options: {
                raw: {
                  headerFamily: "json",
                  language: "json",
                },
              },
            },
            url: "/class/update",
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                  {
                    key: "Accept",
                    value: "*/*",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/class/update",
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "*/*",
                },
              ],
              cookie: [],
              body: "{}",
            },
            {
              name: "Created",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/class/update",
              },
              status: "Created",
              code: 201,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/class/update",
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/class/update",
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Not Found",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/class/update",
              },
              status: "Not Found",
              code: 404,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "getById",
          request: {
            method: "GET",
            header: [
              {
                key: "Accept",
                value: "*/*",
              },
            ],
            url: {
              raw: "/class/:id",
              host: [""],
              path: ["class", ":id"],
              variable: [
                {
                  key: "id",
                  value: "<string>",
                },
              ],
            },
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "GET",
                header: [
                  {
                    key: "Accept",
                    value: "*/*",
                  },
                ],
                url: {
                  raw: "/class/:id",
                  host: [""],
                  path: ["class", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "*/*",
                },
              ],
              cookie: [],
              body: '{\n  "id": "<long>",\n  "name": "<string>"\n}',
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "GET",
                header: [],
                url: {
                  raw: "/class/:id",
                  host: [""],
                  path: ["class", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "GET",
                header: [],
                url: {
                  raw: "/class/:id",
                  host: [""],
                  path: ["class", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Not Found",
              originalRequest: {
                method: "GET",
                header: [],
                url: {
                  raw: "/class/:id",
                  host: [""],
                  path: ["class", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "Not Found",
              code: 404,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
      ],
      description: "Class Controller",
    },
    {
      name: "user-controller",
      item: [
        {
          name: "list",
          request: {
            method: "GET",
            header: [
              {
                key: "Accept",
                value: "*/*",
              },
            ],
            url: {
              raw: "/user/",
              host: [""],
              path: ["user", ""],
              query: [
                {
                  key: "current",
                  value: "<integer>",
                  description: "current",
                  disabled: true,
                },
                {
                  key: "pageSize",
                  value: "<integer>",
                  description: "pageSize",
                  disabled: true,
                },
              ],
            },
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "GET",
                header: [
                  {
                    key: "Accept",
                    value: "*/*",
                  },
                ],
                url: {
                  raw: "/user/",
                  host: [""],
                  path: ["user", ""],
                  query: [
                    {
                      key: "current",
                      value: "<integer>",
                      description: "current",
                      disabled: true,
                    },
                    {
                      key: "pageSize",
                      value: "<integer>",
                      description: "pageSize",
                      disabled: true,
                    },
                  ],
                },
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "*/*",
                },
              ],
              cookie: [],
              body: '{\n  "current": "<long>",\n  "pages": "<long>",\n  "records": [\n    {\n      "age": "<integer>",\n      "classId": "<long>",\n      "email": "<string>",\n      "id": "<long>",\n      "name": "<string>"\n    },\n    {\n      "age": "<integer>",\n      "classId": "<long>",\n      "email": "<string>",\n      "id": "<long>",\n      "name": "<string>"\n    }\n  ],\n  "size": "<long>",\n  "total": "<long>"\n}',
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "GET",
                header: [],
                url: {
                  raw: "/user/",
                  host: [""],
                  path: ["user", ""],
                  query: [
                    {
                      key: "current",
                      value: "<integer>",
                      description: "current",
                      disabled: true,
                    },
                    {
                      key: "pageSize",
                      value: "<integer>",
                      description: "pageSize",
                      disabled: true,
                    },
                  ],
                },
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "GET",
                header: [],
                url: {
                  raw: "/user/",
                  host: [""],
                  path: ["user", ""],
                  query: [
                    {
                      key: "current",
                      value: "<integer>",
                      description: "current",
                      disabled: true,
                    },
                    {
                      key: "pageSize",
                      value: "<integer>",
                      description: "pageSize",
                      disabled: true,
                    },
                  ],
                },
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Not Found",
              originalRequest: {
                method: "GET",
                header: [],
                url: {
                  raw: "/user/",
                  host: [""],
                  path: ["user", ""],
                  query: [
                    {
                      key: "current",
                      value: "<integer>",
                      description: "current",
                      disabled: true,
                    },
                    {
                      key: "pageSize",
                      value: "<integer>",
                      description: "pageSize",
                      disabled: true,
                    },
                  ],
                },
              },
              status: "Not Found",
              code: 404,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "create",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json",
              },
              {
                key: "Accept",
                value: "*/*",
              },
            ],
            body: {
              mode: "raw",
              raw: '{\n  "age": "<integer>",\n  "classId": "<long>",\n  "email": "<string>",\n  "id": "<long>",\n  "name": "<string>"\n}',
              options: {
                raw: {
                  headerFamily: "json",
                  language: "json",
                },
              },
            },
            url: "/user/create",
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                  {
                    key: "Accept",
                    value: "*/*",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "age": "<integer>",\n  "classId": "<long>",\n  "email": "<string>",\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/user/create",
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "*/*",
                },
              ],
              cookie: [],
              body: "{}",
            },
            {
              name: "Created",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "age": "<integer>",\n  "classId": "<long>",\n  "email": "<string>",\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/user/create",
              },
              status: "Created",
              code: 201,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "age": "<integer>",\n  "classId": "<long>",\n  "email": "<string>",\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/user/create",
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "age": "<integer>",\n  "classId": "<long>",\n  "email": "<string>",\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/user/create",
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Not Found",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "age": "<integer>",\n  "classId": "<long>",\n  "email": "<string>",\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/user/create",
              },
              status: "Not Found",
              code: 404,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "delete",
          request: {
            method: "POST",
            header: [
              {
                key: "Accept",
                value: "*/*",
              },
            ],
            url: {
              raw: "/user/delete/:id",
              host: [""],
              path: ["user", "delete", ":id"],
              variable: [
                {
                  key: "id",
                  value: "<string>",
                },
              ],
            },
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Accept",
                    value: "*/*",
                  },
                ],
                url: {
                  raw: "/user/delete/:id",
                  host: [""],
                  path: ["user", "delete", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "*/*",
                },
              ],
              cookie: [],
              body: "{}",
            },
            {
              name: "Created",
              originalRequest: {
                method: "POST",
                header: [],
                url: {
                  raw: "/user/delete/:id",
                  host: [""],
                  path: ["user", "delete", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "Created",
              code: 201,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "POST",
                header: [],
                url: {
                  raw: "/user/delete/:id",
                  host: [""],
                  path: ["user", "delete", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "POST",
                header: [],
                url: {
                  raw: "/user/delete/:id",
                  host: [""],
                  path: ["user", "delete", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Not Found",
              originalRequest: {
                method: "POST",
                header: [],
                url: {
                  raw: "/user/delete/:id",
                  host: [""],
                  path: ["user", "delete", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "Not Found",
              code: 404,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "update",
          request: {
            method: "POST",
            header: [
              {
                key: "Content-Type",
                value: "application/json",
              },
              {
                key: "Accept",
                value: "*/*",
              },
            ],
            body: {
              mode: "raw",
              raw: '{\n  "age": "<integer>",\n  "classId": "<long>",\n  "email": "<string>",\n  "id": "<long>",\n  "name": "<string>"\n}',
              options: {
                raw: {
                  headerFamily: "json",
                  language: "json",
                },
              },
            },
            url: "/user/update",
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                  {
                    key: "Accept",
                    value: "*/*",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "age": "<integer>",\n  "classId": "<long>",\n  "email": "<string>",\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/user/update",
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "*/*",
                },
              ],
              cookie: [],
              body: "{}",
            },
            {
              name: "Created",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "age": "<integer>",\n  "classId": "<long>",\n  "email": "<string>",\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/user/update",
              },
              status: "Created",
              code: 201,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "age": "<integer>",\n  "classId": "<long>",\n  "email": "<string>",\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/user/update",
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "age": "<integer>",\n  "classId": "<long>",\n  "email": "<string>",\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/user/update",
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Not Found",
              originalRequest: {
                method: "POST",
                header: [
                  {
                    key: "Content-Type",
                    value: "application/json",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: '{\n  "age": "<integer>",\n  "classId": "<long>",\n  "email": "<string>",\n  "id": "<long>",\n  "name": "<string>"\n}',
                  options: {
                    raw: {
                      headerFamily: "json",
                      language: "json",
                    },
                  },
                },
                url: "/user/update",
              },
              status: "Not Found",
              code: 404,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
        {
          name: "getById",
          request: {
            method: "GET",
            header: [
              {
                key: "Accept",
                value: "*/*",
              },
            ],
            url: {
              raw: "/user/:id",
              host: [""],
              path: ["user", ":id"],
              variable: [
                {
                  key: "id",
                  value: "<string>",
                },
              ],
            },
          },
          response: [
            {
              name: "OK",
              originalRequest: {
                method: "GET",
                header: [
                  {
                    key: "Accept",
                    value: "*/*",
                  },
                ],
                url: {
                  raw: "/user/:id",
                  host: [""],
                  path: ["user", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "text",
              header: [
                {
                  key: "Content-Type",
                  value: "*/*",
                },
              ],
              cookie: [],
              body: '{\n  "age": "<integer>",\n  "classId": "<long>",\n  "email": "<string>",\n  "id": "<long>",\n  "name": "<string>"\n}',
            },
            {
              name: "Unauthorized",
              originalRequest: {
                method: "GET",
                header: [],
                url: {
                  raw: "/user/:id",
                  host: [""],
                  path: ["user", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "Unauthorized",
              code: 401,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Forbidden",
              originalRequest: {
                method: "GET",
                header: [],
                url: {
                  raw: "/user/:id",
                  host: [""],
                  path: ["user", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "Forbidden",
              code: 403,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
            {
              name: "Not Found",
              originalRequest: {
                method: "GET",
                header: [],
                url: {
                  raw: "/user/:id",
                  host: [""],
                  path: ["user", ":id"],
                  variable: [
                    {
                      key: "id",
                    },
                  ],
                },
              },
              status: "Not Found",
              code: 404,
              _postman_previewlanguage: "text",
              header: [],
              cookie: [],
              body: "",
            },
          ],
        },
      ],
      description: "User Controller",
    },
  ],
  variable: [
    {
      key: "baseUrl",
      value: "http://localhost:8080",
    },
  ],
};

module.exports = apiDoc.item;
