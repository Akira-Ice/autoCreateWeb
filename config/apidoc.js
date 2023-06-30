const apiDoc = {
  info: {
    _postman_id: "e3af4920-8816-4293-8138-326ecb0bc3ab",
    name: "TreeHoles",
    schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
    _exporter_id: "19078443",
  },
  item: [
    {
      name: "User",
      item: [
        {
          name: "getUserList",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "pageNo",
                  value: "2",
                  type: "text",
                },
                {
                  key: "limit",
                  value: "5",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/user/getUserList",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["user", "getUserList"],
            },
          },
          response: [
            {
              name: "getUserList",
              originalRequest: {
                method: "POST",
                header: [],
                body: {
                  mode: "formdata",
                  formdata: [
                    {
                      key: "pageNo",
                      value: "1",
                      type: "text",
                    },
                    {
                      key: "limit",
                      value: "5",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "http://127.0.0.1:5000/user/getUserList",
                  protocol: "http",
                  host: ["127", "0", "0", "1"],
                  port: "5000",
                  path: ["user", "getUserList"],
                },
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "json",
              header: [
                {
                  key: "X-Powered-By",
                  value: "Express",
                },
                {
                  key: "Access-Control-Allow-Origin",
                  value: "*",
                },
                {
                  key: "Content-Type",
                  value: "application/json; charset=utf-8",
                },
                {
                  key: "Content-Length",
                  value: "1123",
                },
                {
                  key: "ETag",
                  value: 'W/"463-66T0dy8GnCDjY+BeDkxGNWmeKec"',
                },
                {
                  key: "Date",
                  value: "Thu, 23 Feb 2023 09:26:02 GMT",
                },
                {
                  key: "Connection",
                  value: "keep-alive",
                },
                {
                  key: "Keep-Alive",
                  value: "timeout=5",
                },
              ],
              cookie: [],
              body: '{\n    "code": 200,\n    "data": {\n        "count": 6,\n        "list": [\n            {\n                "_id": "634a46aae553096bd0c95c10",\n                "account": "17756287961",\n                "password": "admin123",\n                "name": "Akira",\n                "sex": "1",\n                "location": "安徽-滁州",\n                "avator": "http://127.0.0.1:5000/uploadCenter/files/1672479168541-avator5.jpg",\n                "role": "1",\n                "__v": 0\n            },\n            {\n                "_id": "634a6349e553096bd0c95c4b",\n                "account": "19855916679",\n                "password": "admin123",\n                "name": "Amoslier",\n                "sex": "1",\n                "location": "安徽-铜陵",\n                "avator": "http://127.0.0.1:5000/uploadCenter/files/1672479186555-avator2.jpg",\n                "role": "0",\n                "__v": 0\n            },\n            {\n                "_id": "634a63a0e553096bd0c95c4c",\n                "account": "15391612278",\n                "password": "admin123",\n                "name": "L",\n                "sex": "0",\n                "location": "安徽-铜陵",\n                "avator": "http://127.0.0.1:5000/uploadCenter/files/1672479203962-avator3.jpg",\n                "role": "0",\n                "__v": 0\n            },\n            {\n                "_id": "636616c07a179f73dd085492",\n                "account": "admin",\n                "password": "admin",\n                "name": "Admin",\n                "sex": "1",\n                "location": "安徽-铜陵",\n                "avator": "http://127.0.0.1:5000/uploadCenter/files/1672479218174-avator4.jpg",\n                "role": "1",\n                "__v": 0\n            },\n            {\n                "_id": "63730123c2b1a0a8b2d9558d",\n                "account": "17756287960",\n                "password": "admin123",\n                "role": "0",\n                "avator": "",\n                "name": "",\n                "sex": "",\n                "location": "安徽-滁州",\n                "__v": 0\n            }\n        ]\n    },\n    "message": "ok"\n}',
            },
          ],
        },
        {
          name: "register",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "account",
                  value: "123123",
                  type: "text",
                },
                {
                  key: "password",
                  value: "admin123",
                  type: "text",
                },
                {
                  key: "role",
                  value: "'0'",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/user/register",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["user", "register"],
            },
          },
          response: [
            {
              name: "register",
              originalRequest: {
                method: "POST",
                header: [],
                body: {
                  mode: "formdata",
                  formdata: [
                    {
                      key: "account",
                      value: "123123",
                      type: "text",
                    },
                    {
                      key: "password",
                      value: "admin123",
                      type: "text",
                    },
                    {
                      key: "role",
                      value: "0",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "http://127.0.0.1:5000/user/register",
                  protocol: "http",
                  host: ["127", "0", "0", "1"],
                  port: "5000",
                  path: ["user", "register"],
                },
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "json",
              header: [
                {
                  key: "X-Powered-By",
                  value: "Express",
                },
                {
                  key: "Access-Control-Allow-Origin",
                  value: "*",
                },
                {
                  key: "Content-Type",
                  value: "application/json; charset=utf-8",
                },
                {
                  key: "Content-Length",
                  value: "183",
                },
                {
                  key: "ETag",
                  value: 'W/"b7-Gd96+heAcQFPkHIb/fZtNpHqwHg"',
                },
                {
                  key: "Date",
                  value: "Thu, 23 Feb 2023 09:27:51 GMT",
                },
                {
                  key: "Connection",
                  value: "keep-alive",
                },
                {
                  key: "Keep-Alive",
                  value: "timeout=5",
                },
              ],
              cookie: [],
              body: '{\n    "code": 200,\n    "data": {\n        "user": {\n            "account": "123123",\n            "password": "admin123",\n            "role": "0",\n            "avator": "",\n            "name": "",\n            "sex": "",\n            "location": "",\n            "_id": "63f73197e4498fff7b3069eb",\n            "__v": 0\n        }\n    },\n    "message": "ok"\n}',
            },
          ],
        },
        {
          name: "login",
          request: {
            auth: {
              type: "bearer",
              bearer: [
                {
                  key: "token",
                  value: "",
                  type: "string",
                },
              ],
            },
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "account",
                  value: "admin",
                  type: "text",
                },
                {
                  key: "password",
                  value: "admin",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/user/login",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["user", "login"],
            },
          },
          response: [],
        },
        {
          name: "removeById",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_id",
                  value: "63f73540f92fb4fa40f2e18e",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/user/removeById",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["user", "removeById"],
            },
          },
          response: [
            {
              name: "removeById",
              originalRequest: {
                method: "POST",
                header: [],
                body: {
                  mode: "formdata",
                  formdata: [
                    {
                      key: "_id",
                      value: "63f73540f92fb4fa40f2e18e",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "http://127.0.0.1:5000/user/removeById",
                  protocol: "http",
                  host: ["127", "0", "0", "1"],
                  port: "5000",
                  path: ["user", "removeById"],
                },
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "json",
              header: [
                {
                  key: "X-Powered-By",
                  value: "Express",
                },
                {
                  key: "Access-Control-Allow-Origin",
                  value: "*",
                },
                {
                  key: "Content-Type",
                  value: "application/json; charset=utf-8",
                },
                {
                  key: "Content-Length",
                  value: "161",
                },
                {
                  key: "ETag",
                  value: 'W/"a1-BYQuGp7ryOwT9/MfwiKLwF9LSg4"',
                },
                {
                  key: "Date",
                  value: "Thu, 23 Feb 2023 09:43:37 GMT",
                },
                {
                  key: "Connection",
                  value: "keep-alive",
                },
                {
                  key: "Keep-Alive",
                  value: "timeout=5",
                },
              ],
              cookie: [],
              body: '{\n    "code": 200,\n    "data": {\n        "user": {\n            "_id": "63f73540f92fb4fa40f2e18e",\n            "account": "123123",\n            "role": "0",\n            "avator": "",\n            "name": "",\n            "sex": "",\n            "location": "",\n            "__v": 0\n        }\n    },\n    "message": "ok"\n}',
            },
          ],
        },
        {
          name: "modifyById",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "account",
                  value: "test",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "password",
                  value: "test",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "role",
                  value: "0",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "avator",
                  value: "http://127.0.0.1:5000/uploadCenter/files/1668048572823-avator.jpg",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "name",
                  value: "test",
                  type: "text",
                },
                {
                  key: "sex",
                  value: "",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "location",
                  value: "安徽滁州",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "_id",
                  value: "637304ecc2b1a0a8b2d955ab",
                  type: "text",
                },
                {
                  key: "__v",
                  value: "0",
                  type: "text",
                  disabled: true,
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/user/modifyById",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["user", "modifyById"],
            },
          },
          response: [
            {
              name: "modifyById",
              originalRequest: {
                method: "POST",
                header: [],
                body: {
                  mode: "formdata",
                  formdata: [
                    {
                      key: "account",
                      value: "test",
                      type: "text",
                      disabled: true,
                    },
                    {
                      key: "password",
                      value: "test",
                      type: "text",
                      disabled: true,
                    },
                    {
                      key: "role",
                      value: "0",
                      type: "text",
                      disabled: true,
                    },
                    {
                      key: "avator",
                      value: "http://127.0.0.1:5000/uploadCenter/files/1668048572823-avator.jpg",
                      type: "text",
                      disabled: true,
                    },
                    {
                      key: "name",
                      value: "test",
                      type: "text",
                    },
                    {
                      key: "sex",
                      value: "",
                      type: "text",
                      disabled: true,
                    },
                    {
                      key: "location",
                      value: "安徽滁州",
                      type: "text",
                      disabled: true,
                    },
                    {
                      key: "_id",
                      value: "637304ecc2b1a0a8b2d955ab",
                      type: "text",
                    },
                    {
                      key: "__v",
                      value: "0",
                      type: "text",
                      disabled: true,
                    },
                  ],
                },
                url: {
                  raw: "http://127.0.0.1:5000/user/modifyById",
                  protocol: "http",
                  host: ["127", "0", "0", "1"],
                  port: "5000",
                  path: ["user", "modifyById"],
                },
              },
              status: "OK",
              code: 200,
              _postman_previewlanguage: "json",
              header: [
                {
                  key: "X-Powered-By",
                  value: "Express",
                },
                {
                  key: "Access-Control-Allow-Origin",
                  value: "*",
                },
                {
                  key: "Content-Type",
                  value: "application/json; charset=utf-8",
                },
                {
                  key: "Content-Length",
                  value: "245",
                },
                {
                  key: "ETag",
                  value: 'W/"f5-qRrbmPUDd0DzUxl+JiVhuDb3Qsk"',
                },
                {
                  key: "Date",
                  value: "Thu, 23 Feb 2023 10:01:54 GMT",
                },
                {
                  key: "Connection",
                  value: "keep-alive",
                },
                {
                  key: "Keep-Alive",
                  value: "timeout=5",
                },
              ],
              cookie: [],
              body: '{\n    "code": 200,\n    "data": {\n        "user": {\n            "_id": "637304ecc2b1a0a8b2d955ab",\n            "account": "test",\n            "role": "0",\n            "avator": "http://127.0.0.1:5000/uploadCenter/files/1672479218174-avator4.jpg",\n            "name": "test321",\n            "sex": "",\n            "location": "安徽-黄山",\n            "__v": 0\n        }\n    },\n    "message": "ok"\n}',
            },
          ],
        },
        {
          name: "getUserById",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_id",
                  value: "634a46aae553096bd0c95c10",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/user/getUserById",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["user", "getUserById"],
            },
          },
          response: [],
        },
      ],
      event: [
        {
          listen: "prerequest",
          script: {
            type: "text/javascript",
            exec: [""],
          },
        },
        {
          listen: "test",
          script: {
            type: "text/javascript",
            exec: [""],
          },
        },
      ],
    },
    {
      name: "Tree",
      item: [
        {
          name: "getTreeList",
          request: {
            method: "POST",
            header: [],
            url: {
              raw: "http://127.0.0.1:5000/tree/getTreeList",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["tree", "getTreeList"],
            },
          },
          response: [],
        },
        {
          name: "getTreeById",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_id",
                  value: "634a4abee553096bd0c95c36",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/tree/getTreeById",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["tree", "getTreeById"],
            },
          },
          response: [],
        },
        {
          name: "addTree",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "ownerID",
                  value: "634a63a0e553096bd0c95c4c",
                  type: "text",
                },
                {
                  key: "type",
                  value: "test",
                  type: "text",
                },
                {
                  key: "state",
                  value: "0",
                  type: "text",
                },
                {
                  key: "height",
                  value: "",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "diameter",
                  value: "",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "branchPoint",
                  value: "",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "location",
                  value: "",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "describe",
                  value: "",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "imgs",
                  value: "",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "price",
                  value: "",
                  type: "text",
                  disabled: true,
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/tree/addTree",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["tree", "addTree"],
            },
          },
          response: [],
        },
        {
          name: "removeById",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_id",
                  value: "636b6fc95114d74461d66781",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/tree/removeById",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["tree", "removeById"],
            },
          },
          response: [],
        },
        {
          name: "modifyById",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_id",
                  value: "63774226c0acc1eac23a0f5b",
                  type: "text",
                },
                {
                  key: "ownerID",
                  value: "634a63a0e553096bd0c95c4c",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "type",
                  value: "test2",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "state",
                  value: "0",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "height",
                  value: "",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "diameter",
                  value: "",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "branchPoint",
                  value: "",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "location",
                  value: "",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "describe",
                  value: "",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "price",
                  value: "",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "imgs",
                  value: "",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "time",
                  value: "2022/1/1 11:40:00",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "owner",
                  value: "L",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "title",
                  value: "纯种金桔",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/tree/modifyById",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["tree", "modifyById"],
            },
          },
          response: [],
        },
        {
          name: "getTreeListByUserID",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "userID",
                  value: "634a63a0e553096bd0c95c4c",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/tree/getTreeListByUserID",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["tree", "getTreeListByUserID"],
            },
          },
          response: [],
        },
      ],
    },
    {
      name: "Record",
      item: [
        {
          name: "getRecordByUserID",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "userID",
                  value: "634a46aae553096bd0c95c10",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/record/getRecordByUserID",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["record", "getRecordByUserID"],
            },
          },
          response: [],
        },
        {
          name: "modifyRecordUser",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "userID1",
                  value: "634a46aae553096bd0c95c10",
                  type: "text",
                },
                {
                  key: "userID2",
                  value: "634a6349e553096bd0c95c4b",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/record/modifyRecordUser",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["record", "modifyRecordUser"],
            },
          },
          response: [],
        },
        {
          name: "modifyRecordTree",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "userID",
                  value: "634a46aae553096bd0c95c10",
                  type: "text",
                },
                {
                  key: "treeID",
                  value: "634a6764e553096bd0c95c53",
                  type: "text",
                },
                {
                  key: "mode",
                  value: "0",
                  type: "text",
                },
                {
                  key: "clearAll",
                  value: "0",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/record/modifyRecordTree",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["record", "modifyRecordTree"],
            },
          },
          response: [],
        },
        {
          name: "modifyRecordOrder",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "userID",
                  value: "634a46aae553096bd0c95c10",
                  type: "text",
                },
                {
                  key: "orderID",
                  value: "634a4b48e553096bd0c95c3d",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/record/modifyRecordOrder",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["record", "modifyRecordOrder"],
            },
          },
          response: [],
        },
      ],
    },
    {
      name: "Order",
      item: [
        {
          name: "getOrderList",
          request: {
            method: "POST",
            header: [],
            url: {
              raw: "http://127.0.0.1:5000/order/getOrderList",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["order", "getOrderList"],
            },
          },
          response: [],
        },
        {
          name: "getOrderListByUserID",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "userID",
                  value: "",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/order/getOrderListByUserID",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["order", "getOrderListByUserID"],
            },
          },
          response: [],
        },
        {
          name: "getOrderByTreeID",
          request: {
            method: "POST",
            header: [],
            url: {
              raw: "http://127.0.0.1:5000/order/getOrderByTreeID?treeID",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["order", "getOrderByTreeID"],
              query: [
                {
                  key: "treeID",
                  value: null,
                },
              ],
            },
          },
          response: [],
        },
        {
          name: "addOrder",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "treeID",
                  value: "634a679fe553096bd0c95c54",
                  type: "text",
                },
                {
                  key: "sellerID",
                  value: "634a63a0e553096bd0c95c4c",
                  type: "text",
                },
                {
                  key: "buyerID",
                  value: "634a46aae553096bd0c95c10",
                  type: "text",
                },
                {
                  key: "time",
                  value: "2022/11/11 15:50:10",
                  type: "text",
                },
                {
                  key: "state",
                  value: "0",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/order/addOrder",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["order", "addOrder"],
            },
          },
          response: [],
        },
        {
          name: "removeById",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_id",
                  value: "636f081e9aee2182d411d10a",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/order/removeById",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["order", "removeById"],
            },
          },
          response: [],
        },
        {
          name: "modifyById",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_id",
                  value: "636f08609aee2182d411d111",
                  type: "text",
                },
                {
                  key: "treeID",
                  value: "634a679fe553096bd0c95c54",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "buyerID",
                  value: "634a46aae553096bd0c95c10",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "sellerID",
                  value: "634a63a0e553096bd0c95c4c",
                  type: "text",
                  disabled: true,
                },
                {
                  key: "state",
                  value: "1",
                  type: "text",
                },
                {
                  key: "time",
                  value: "2022/11/11 15:50:10",
                  type: "text",
                  disabled: true,
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/order/modifyById",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["order", "modifyById"],
            },
          },
          response: [],
        },
        {
          name: "getOrderListByUserID",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "userID",
                  value: "634a6349e553096bd0c95c4b",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/order/getOrderListByUserID",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["order", "getOrderListByUserID"],
            },
          },
          response: [],
        },
        {
          name: "dataAnalysis",
          request: {
            method: "POST",
            header: [],
            url: {
              raw: "http://127.0.0.1:5000/order/dataAnalysis",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["order", "dataAnalysis"],
            },
          },
          response: [],
        },
        {
          name: "getOrderByTreeID",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "treeID",
                  value: "1",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/order/getOrderByTreeID",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["order", "getOrderByTreeID"],
            },
          },
          response: [],
        },
      ],
    },
    {
      name: "Socket",
      item: [
        {
          name: "addSocket",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "userID1",
                  value: "634a46aae553096bd0c95c10",
                  type: "text",
                },
                {
                  key: "userID2",
                  value: "634a63a0e553096bd0c95c4c",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/socket/addSocket",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["socket", "addSocket"],
            },
          },
          response: [],
        },
        {
          name: "removeById",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_id",
                  value: "63709f72b70b7d0eb88e93d3",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/socket/removeById",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["socket", "removeById"],
            },
          },
          response: [],
        },
        {
          name: "modifyById",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "_id",
                  value: "63709f83b70b7d0eb88e93d7",
                  type: "text",
                },
                {
                  key: "context[0].senderID",
                  value: "634a46aae553096bd0c95c10",
                  type: "text",
                },
                {
                  key: "context[0].time",
                  value: "2022/11/13 15:45:30",
                  type: "text",
                },
                {
                  key: "context[0].data.type",
                  value: "1",
                  type: "text",
                },
                {
                  key: "context[0].data.content",
                  value: "321",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/socket/modifyById",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["socket", "modifyById"],
            },
          },
          response: [],
        },
        {
          name: "getSocketByUserID",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "userID",
                  value: "634a46aae553096bd0c95c10",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/socket/getSocketByUserID",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["socket", "getSocketByUserID"],
            },
          },
          response: [],
        },
      ],
    },
    {
      name: "alipay",
      item: [
        {
          name: "pagePay",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "orderID",
                  value: "",
                  type: "text",
                },
                {
                  key: "title",
                  value: "",
                  type: "text",
                },
                {
                  key: "describe",
                  value: "",
                  type: "text",
                },
                {
                  key: "price",
                  value: "",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/alipay/pagePay",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["alipay", "pagePay"],
            },
          },
          response: [],
        },
        {
          name: "refund",
          request: {
            method: "POST",
            header: [],
            body: {
              mode: "formdata",
              formdata: [
                {
                  key: "orderID",
                  value: "",
                  type: "text",
                },
                {
                  key: "price",
                  value: "",
                  type: "text",
                },
              ],
            },
            url: {
              raw: "http://127.0.0.1:5000/alipay/refund",
              protocol: "http",
              host: ["127", "0", "0", "1"],
              port: "5000",
              path: ["alipay", "refund"],
            },
          },
          response: [],
        },
      ],
    },
  ],
  auth: {
    type: "bearer",
    bearer: [
      {
        key: "token",
        value:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzNjYxNmMwN2ExNzlmNzNkZDA4NTQ5MiIsImFjY291bnQiOiJhZG1pbiIsInBhc3N3b3JkIjoiYWRtaW4iLCJuYW1lIjoiQWRtaW4iLCJzZXgiOiIxIiwibG9jYXRpb24iOiLlronlvr0t6ZOc6Zm1IiwiYXZhdG9yIjoiaHR0cDovLzEyNy4wLjAuMTo1MDAwL3VwbG9hZENlbnRlci9maWxlcy8xNjcyNDc5MjE4MTc0LWF2YXRvcjQuanBnIiwicm9sZSI6IjIiLCJfX3YiOjAsInN0YXR1cyI6IjEifSwiaWF0IjoxNjc5MzczMDY4LCJleHAiOjE2Nzk0MTYyNjh9.ejZxqBSnqZ0qlBQw8zL2qBe0XSydvwiRhzzIB7UYL1M",
        type: "string",
      },
    ],
  },
  event: [
    {
      listen: "prerequest",
      script: {
        type: "text/javascript",
        exec: [""],
      },
    },
    {
      listen: "test",
      script: {
        type: "text/javascript",
        exec: [""],
      },
    },
  ],
};
module.exports = apiDoc.item;
