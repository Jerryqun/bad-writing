"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[5813],{15813:(function(n,a,e){e.r(a);const d=[{value:"\u6587\u6863\u5B9A\u4F4D\uFF1A\u4E0D\u4F9D\u8D56\u6E90\u7801\u7684 aiForm \u4ECE\u96F6\u5B9E\u65BD\u89C4\u683C\uFF0C\u540C\u65F6\u4FDD\u7559\u65E7\u5B9E\u73B0\u884C\u4E3A\u4F5C\u4E3A\u8FC1\u79FB\u98CE\u9669\u53C2\u8003\u3002",paraId:0,tocIndex:0},{value:"\u9002\u7528\u8BFB\u8005\uFF1A\u540E\u7AEF\u3001\u524D\u7AEF\u3001\u6D4B\u8BD5\u3001\u67B6\u6784\u3001SRE\u3001Agent/Skill \u5F00\u53D1\u8005\u3002",paraId:1,tocIndex:0},{value:"\u72B6\u6001\u6807\u8BC6\uFF1A**\u3010\u73B0\u72B6\u3011",paraId:2,tocIndex:0},{value:"\u53EA\u7528\u4E8E\u89E3\u91CA\u65E7\u884C\u4E3A\u4E0E\u8FC1\u79FB\u98CE\u9669\uFF1B",paraId:2,tocIndex:0},{value:"\u3010\u589E\u5F3A\u3011**\u8868\u793A\u4ECE\u96F6\u5F00\u53D1\u5FC5\u987B\u5B9E\u73B0\u7684\u76EE\u6807\u8BBE\u8BA1\u3002",paraId:2,tocIndex:0},{value:"\u5B9E\u65BD\u51B3\u7B56\uFF1A\u672C\u6587\u4EF6\u7528\u4E8E\u5168\u65B0\u5F00\u53D1\u65F6\uFF0C\u5FC5\u987B\u4EE5\u751F\u4EA7\u589E\u5F3A\u65B9\u6848\u548C\u7B2C 32 \u7AE0\u6700\u7EC8\u51B3\u7B56\u4E3A\u51C6\uFF0C\u4E0D\u5F97\u590D\u523B\u201C\u5F53\u524D\u5B9E\u73B0\u201D\u7684\u5DF2\u77E5\u7F3A\u9677\u3002\u82E5\u73B0\u72B6\u63CF\u8FF0\u3001\u65E9\u671F\u793A\u4F8B\u4E0E\u6700\u7EC8\u51B3\u7B56\u51B2\u7A81\uFF0C\u4EE5\u7B2C 32 \u7AE0\u4E3A\u552F\u4E00\u51C6\u5219\u3002",paraId:3,tocIndex:0},{value:"aiForm \u7528\u4E00\u5957\u516C\u5171\u80FD\u529B\u627F\u8F7D\u591A\u79CD\u52A8\u6001\u4E1A\u52A1\u8868\u5355\u3002\u4F20\u7EDF\u65B9\u6848\u901A\u5E38\u4E3A\u6BCF\u5F20\u4E1A\u52A1\u8868\u5355\u521B\u5EFA\u4E00\u5F20 MySQL \u8868\uFF0C\u5B57\u6BB5\u53D8\u5316\u9700\u8981\u6267\u884C ",paraId:4,tocIndex:1},{value:"ALTER TABLE",paraId:4,tocIndex:1},{value:"\u3001\u4FEE\u6539\u5B9E\u4F53\u548C\u53D1\u5E03\u4EE3\u7801\u3002aiForm \u5C06\u201C\u8868\u5355\u7ED3\u6784\u201D\u548C\u201C\u8868\u5355\u6570\u636E\u201D\u62BD\u8C61\u4E3A\u5143\u6570\u636E\u4E0E JSON \u6570\u636E\uFF1A",paraId:4,tocIndex:1},{value:`\u4E00\u5F20\u903B\u8F91 aiForm
= ai_form_schema \u4E2D 1 \u6761 Schema
+ ai_form_data \u4E2D N \u6761 Data
+ \u53EF\u9009\u7684 MongoDB \u67E5\u8BE2\u526F\u672C
+ \u53EF\u9009\u7684 Elasticsearch \u641C\u7D22\u526F\u672C
`,paraId:5,tocIndex:1},{value:"\u6BCF\u5F20\u8868\u5355\u7531 32 \u4F4D ",paraId:6,tocIndex:1},{value:"formKey",paraId:6,tocIndex:1},{value:" \u552F\u4E00\u6807\u8BC6\u3002\u6240\u6709\u52A8\u6001\u5B57\u6BB5\u5B58\u5165 JSON\uFF0C\u4E0D\u6620\u5C04\u6210 MySQL \u72EC\u7ACB\u5217\uFF0C\u6240\u4EE5\u65B0\u589E\u3001\u5220\u9664\u6216\u8C03\u6574\u5B57\u6BB5\u4E0D\u9700\u8981\u4FEE\u6539 ",paraId:6,tocIndex:1},{value:"ai_form_data",paraId:6,tocIndex:1},{value:" \u8868\u7ED3\u6784\u3002",paraId:6,tocIndex:1},{value:"\u6839\u636E JSON Schema \u52A8\u6001\u521B\u5EFA\u8868\u5355\uFF0C\u4E0D\u65B0\u589E Java \u5B9E\u4F53\u548C MySQL \u4E1A\u52A1\u8868\u3002",paraId:7,tocIndex:2},{value:"\u63D0\u4F9B\u7EDF\u4E00\u65B0\u589E\u3001\u4FEE\u6539\u3001\u5220\u9664\u3001\u8BE6\u60C5\u3001\u5206\u9875\u3001\u6E38\u6807\u548C\u6279\u91CF\u63A5\u53E3\u3002",paraId:7,tocIndex:2},{value:"\u652F\u6301 MongoDB \u52A8\u6001\u6761\u4EF6\u67E5\u8BE2\u4E0E Elasticsearch \u5927\u6570\u636E\u641C\u7D22\u3001\u7EDF\u8BA1\u3002",paraId:7,tocIndex:2},{value:"\u652F\u6301 Owner\u3001\u884C\u7EA7\u8BFB\u6743\u9650\u548C\u5206\u64CD\u4F5C\u5199\u6743\u9650\u3002",paraId:7,tocIndex:2},{value:"\u540C\u65F6\u5411 REST \u524D\u7AEF\u4E0E Agent Tool \u66B4\u9732\u80FD\u529B\u3002",paraId:7,tocIndex:2},{value:"\u652F\u6301 Schema \u6F14\u8FDB\u3001\u5168\u91CF\u540C\u6B65\u548C\u5916\u90E8\u6570\u636E\u6E90\u63A5\u5165\u3002",paraId:7,tocIndex:2},{value:"\u5728\u751F\u4EA7\u589E\u5F3A\u65B9\u6848\u4E2D\u5B9E\u73B0\u53EF\u8FFD\u8E2A\u3001\u53EF\u8865\u507F\u3001\u53EF\u56DE\u6EDA\u7684\u6700\u7EC8\u4E00\u81F4\u6027\u3002",paraId:7,tocIndex:2},{value:"aiForm \u4E0D\u8D1F\u8D23\u524D\u7AEF\u9875\u9762\u5E03\u5C40 DSL\u3001\u7EC4\u4EF6\u6E32\u67D3\u5668\u6216\u53EF\u89C6\u5316\u62D6\u62FD\u8BBE\u8BA1\u5668\u3002",paraId:8,tocIndex:3},{value:"MySQL ",paraId:8,tocIndex:3},{value:"LONGTEXT",paraId:8,tocIndex:3},{value:" \u4E0D\u8D1F\u8D23\u52A8\u6001\u5B57\u6BB5\u590D\u6742\u8FC7\u6EE4\u548C\u805A\u5408\u3002",paraId:8,tocIndex:3},{value:"\u5F53\u524D\u5B9E\u73B0\u4E0D\u63D0\u4F9B\u8DE8 MySQL\u3001MongoDB\u3001Elasticsearch \u7684\u5206\u5E03\u5F0F\u5F3A\u4E8B\u52A1\u3002",paraId:8,tocIndex:3},{value:"\u5F53\u524D ",paraId:8,tocIndex:3},{value:"version",paraId:8,tocIndex:3},{value:" \u4E0D\u662F\u5B8C\u6574\u7684 Schema \u5386\u53F2\u7248\u672C\u673A\u5236\u3002",paraId:8,tocIndex:3},{value:"Maven \u6A21\u5757",paraId:9,tocIndex:5},{value:"aiForm \u804C\u8D23",paraId:9,tocIndex:5},{value:"\u5173\u952E\u5185\u5BB9",paraId:9,tocIndex:5},{value:"ai-form-client",paraId:9,tocIndex:5},{value:"\u8DE8\u6A21\u5757\u8C03\u7528\u5951\u7EA6",paraId:9,tocIndex:5},{value:"FormCallerContext",paraId:9,tocIndex:5},{value:"ai-form-service",paraId:9,tocIndex:5},{value:"\u9879\u76EE\u65E2\u6709\u670D\u52A1\u5C42\u6A21\u5757",paraId:9,tocIndex:5},{value:"\u5BF9\u5916\u670D\u52A1\u4F9D\u8D56\u8FB9\u754C",paraId:9,tocIndex:5},{value:"ai-form-core",paraId:9,tocIndex:5},{value:"\u6838\u5FC3\u4E1A\u52A1\u4E0E\u5B58\u50A8\u7F16\u6392",paraId:9,tocIndex:5},{value:"Schema\u3001CRUD\u3001\u6743\u9650\u3001Mongo\u3001ES\u3001\u540C\u6B65\u3001Mapper",paraId:9,tocIndex:5},{value:"ai-form-application",paraId:9,tocIndex:5},{value:"\u5E94\u7528\u5165\u53E3",paraId:9,tocIndex:5},{value:"REST Controller\u3001Agent Tool\u3001\u6570\u636E\u6E90\u914D\u7F6E",paraId:9,tocIndex:5},{value:"\u63A8\u8350\u5B9E\u73B0\u5305\u6309\u804C\u8D23\u5212\u5206\u4E3A ",paraId:9,tocIndex:5},{value:"client",paraId:9,tocIndex:5},{value:"\u3001",paraId:9,tocIndex:5},{value:"domain",paraId:9,tocIndex:5},{value:"\u3001",paraId:9,tocIndex:5},{value:"mapper",paraId:9,tocIndex:5},{value:"\u3001",paraId:9,tocIndex:5},{value:"service",paraId:9,tocIndex:5},{value:"\u3001",paraId:9,tocIndex:5},{value:"permission",paraId:9,tocIndex:5},{value:"\u3001",paraId:9,tocIndex:5},{value:"query",paraId:9,tocIndex:5},{value:"\u3001",paraId:9,tocIndex:5},{value:"sync",paraId:9,tocIndex:5},{value:"\u3001",paraId:9,tocIndex:5},{value:"web",paraId:9,tocIndex:5},{value:" \u548C ",paraId:9,tocIndex:5},{value:"agent",paraId:9,tocIndex:5},{value:"\uFF0C\u5177\u4F53\u76EE\u5F55\u7531\u76EE\u6807\u5DE5\u7A0B\u89C4\u8303\u51B3\u5B9A\u3002",paraId:9,tocIndex:5},{value:`graph TD
    FE["Web \u524D\u7AEF"] --> REST["REST Controller"]
    AGENT["AI Agent"] --> TOOL["Agent Tool"]
    REST --> CTX["FormCallerContext"]
    TOOL --> CTX
    CTX --> PERM["Permission Service"]
    PERM --> SCHEMA["Schema Service"]
    PERM --> DATA["Data Service"]
    SCHEMA --> MYSQL["MySQL"]
    DATA --> MYSQL
    DATA --> MONGO["MongoDB"]
    DATA --> ES["Elasticsearch"]
    SCHEMA --> SYNC["Sync Service"]
    SYNC --> MYSQL
    SYNC --> MONGO
    SYNC --> ES
`,paraId:10,tocIndex:6},{value:"\u7C7B",paraId:11,tocIndex:7},{value:"\u804C\u8D23",paraId:11,tocIndex:7},{value:"FormSchemaController",paraId:11,tocIndex:7},{value:"Schema REST \u521B\u5EFA\u3001\u66F4\u65B0\u3001\u5220\u9664\u3001\u8BE6\u60C5\u3001\u5217\u8868\u3001\u6570\u636E\u6E90\u5F00\u5173",paraId:11,tocIndex:7},{value:"FormDataController",paraId:11,tocIndex:7},{value:"\u6570\u636E REST CRUD\u3001\u67E5\u8BE2\u3001\u6279\u91CF\u64CD\u4F5C",paraId:11,tocIndex:7},{value:"FormDataEsController",paraId:11,tocIndex:7},{value:"ES \u641C\u7D22\u3001\u7EDF\u8BA1\u548C\u7D22\u5F15\u7BA1\u7406",paraId:11,tocIndex:7},{value:"MongoIndexController",paraId:11,tocIndex:7},{value:"Mongo \u7EC4\u5408\u7D22\u5F15\u7BA1\u7406",paraId:11,tocIndex:7},{value:"AiFormSchemaAgentTools",paraId:11,tocIndex:7},{value:"Agent \u521B\u5EFA/\u67E5\u8BE2 Schema\u3001\u67E5\u8BE2\u5360\u4F4D\u7B26",paraId:11,tocIndex:7},{value:"AiFormDataAgentTools",paraId:11,tocIndex:7},{value:"Agent \u6570\u636E CRUD \u4E0E Mongo \u67E5\u8BE2",paraId:11,tocIndex:7},{value:"AiFormEsAgentTools",paraId:11,tocIndex:7},{value:"Agent ES \u641C\u7D22\u3001\u56FE\u8868\u3001\u8BA1\u6570",paraId:11,tocIndex:7},{value:"FormSchemaServiceImpl",paraId:11,tocIndex:7},{value:"Schema \u6821\u9A8C\u3001Owner\u3001\u5F00\u5173\u3001\u540C\u6B65\u4EFB\u52A1\u89E6\u53D1",paraId:11,tocIndex:7},{value:"FormDataServiceImpl",paraId:11,tocIndex:7},{value:"CRUD \u7F16\u6392\u3001\u6743\u9650\u3001MySQL/Mongo/ES \u5199\u5165\u4E0E\u8BFB\u53D6\u964D\u7EA7",paraId:11,tocIndex:7},{value:"FormPermissionServiceImpl",paraId:11,tocIndex:7},{value:"\u6743\u9650\u6811\u89E3\u6790\u3001\u53D8\u91CF\u66FF\u6362\u3001\u5E03\u5C14\u5316\u7B80\u3001\u5199\u6743\u9650\u5224\u5B9A",paraId:11,tocIndex:7},{value:"FormDataMongoServiceImpl",paraId:11,tocIndex:7},{value:"BSON \u6587\u6863\u6784\u5EFA\u3001Mongo CRUD\u3001\u7D22\u5F15\u3001Collection \u5207\u6362",paraId:11,tocIndex:7},{value:"FormDataEsServiceImpl",paraId:11,tocIndex:7},{value:"Mapping\u3001ES \u641C\u7D22\u548C\u56FE\u8868\u7F16\u6392",paraId:11,tocIndex:7},{value:"EsIndexManager",paraId:11,tocIndex:7},{value:"ES alias\u3001\u7269\u7406\u7D22\u5F15\u3001\u6279\u91CF\u5199\u5165\u3001\u539F\u5B50\u5207\u6362",paraId:11,tocIndex:7},{value:"FormDataSyncServiceImpl",paraId:11,tocIndex:7},{value:"\u5168\u91CF/\u5916\u90E8\u589E\u91CF\u540C\u6B65\u3001\u9501\u3001\u5FC3\u8DF3\u3001\u8FDB\u5EA6",paraId:11,tocIndex:7},{value:"FormDataParser",paraId:11,tocIndex:7},{value:"Schema \u6821\u9A8C\u3001\u52A8\u6001\u503C\u7C7B\u578B\u5316\u3001ES Mapping \u751F\u6210",paraId:11,tocIndex:7},{value:"**\u3010\u73B0\u72B6\u3011**\u521B\u5EFA Schema \u65F6\u751F\u6210\uFF1A",paraId:12,tocIndex:9},{value:`UUID.randomUUID().toString().replace("-", "")
`,paraId:13,tocIndex:9},{value:"\u793A\u4F8B\uFF1A",paraId:14,tocIndex:9},{value:`c74ecb481f0a4ed591f14749c9b1c562
`,paraId:15,tocIndex:9},{value:"formKey",paraId:16,tocIndex:9},{value:" \u540C\u65F6\u7528\u4E8E\uFF1A",paraId:16,tocIndex:9},{value:"ai_form_schema.form_key",paraId:17,tocIndex:9},{value:" \u552F\u4E00\u952E\u3002",paraId:17,tocIndex:9},{value:"ai_form_data.form_key",paraId:17,tocIndex:9},{value:" \u903B\u8F91\u5173\u8054\u952E\u3002",paraId:17,tocIndex:9},{value:"Mongo Collection \u540E\u7F00\u3002",paraId:17,tocIndex:9},{value:"ES alias \u548C\u7269\u7406\u7D22\u5F15\u540E\u7F00\u3002",paraId:17,tocIndex:9},{value:"API\u3001Agent Tool\u3001\u6743\u9650\u548C\u540C\u6B65\u4EFB\u52A1\u7684\u8DEF\u7531\u952E\u3002",paraId:17,tocIndex:9},{value:"\u5B8C\u6574\u7ED3\u6784\uFF1A",paraId:18,tocIndex:10},{value:`{
  "fields": [
    {
      "fieldId": "customerName",
      "fieldName": "\u5BA2\u6237\u540D\u79F0",
      "fieldType": "string",
      "required": true,
      "defaultValue": null
    },
    {
      "fieldId": "description",
      "fieldName": "\u5BA2\u6237\u63CF\u8FF0",
      "fieldType": "text",
      "required": false
    },
    {
      "fieldId": "employeeCount",
      "fieldName": "\u5458\u5DE5\u6570\u91CF",
      "fieldType": "integer"
    },
    {
      "fieldId": "annualRevenue",
      "fieldName": "\u5E74\u6536\u5165",
      "fieldType": "number"
    },
    {
      "fieldId": "establishedAt",
      "fieldName": "\u6210\u7ACB\u65F6\u95F4",
      "fieldType": "date",
      "dateFormat": "yyyy-MM-dd"
    },
    {
      "fieldId": "active",
      "fieldName": "\u662F\u5426\u6709\u6548",
      "fieldType": "boolean",
      "defaultValue": true
    },
    {
      "fieldId": "tags",
      "fieldName": "\u6807\u7B7E",
      "fieldType": "array",
      "arraySeparator": ",",
      "arrayElementType": "string"
    }
  ]
}
`,paraId:19,tocIndex:10},{value:"\u5C5E\u6027",paraId:20,tocIndex:11},{value:"\u7C7B\u578B",paraId:20,tocIndex:11},{value:"\u5FC5\u586B",paraId:20,tocIndex:11},{value:"\u542B\u4E49",paraId:20,tocIndex:11},{value:"fieldId",paraId:20,tocIndex:11},{value:"String",paraId:20,tocIndex:11},{value:"\u662F",paraId:20,tocIndex:11},{value:"\u7A33\u5B9A\u5B57\u6BB5\u6807\u8BC6\uFF0C\u6570\u636E JSON \u7684 key",paraId:20,tocIndex:11},{value:"fieldName",paraId:20,tocIndex:11},{value:"String",paraId:20,tocIndex:11},{value:"\u662F",paraId:20,tocIndex:11},{value:"\u5C55\u793A\u540D\uFF0C\u53EF\u4FEE\u6539\u4F46\u4E0D\u5E94\u5F71\u54CD\u5B58\u91CF\u6570\u636E",paraId:20,tocIndex:11},{value:"fieldType",paraId:20,tocIndex:11},{value:"String",paraId:20,tocIndex:11},{value:"\u662F",paraId:20,tocIndex:11},{value:"string/text/integer/number/date/boolean/array",paraId:20,tocIndex:11},{value:"required",paraId:20,tocIndex:11},{value:"Boolean",paraId:20,tocIndex:11},{value:"\u5426",paraId:20,tocIndex:11},{value:"\u521B\u5EFA\u548C\u5B8C\u6574\u66F4\u65B0\u65F6\u5FC5\u987B\u5B58\u5728\u4E14\u975E null",paraId:20,tocIndex:11},{value:"defaultValue",paraId:20,tocIndex:11},{value:"JSON value",paraId:20,tocIndex:11},{value:"\u5426",paraId:20,tocIndex:11},{value:"\u7C7B\u578B\u5FC5\u987B\u4E0E fieldType \u4E00\u81F4\uFF1B\u53EA\u5728\u521B\u5EFA\u65F6\u8865\u9F50\u7F3A\u5931\u5B57\u6BB5",paraId:20,tocIndex:11},{value:"dateFormat",paraId:20,tocIndex:11},{value:"String",paraId:20,tocIndex:11},{value:"\u65E5\u671F\u53EF\u9009",paraId:20,tocIndex:11},{value:"\u4EC5\u5141\u8BB8 ",paraId:20,tocIndex:11},{value:"yyyy-MM-dd",paraId:20,tocIndex:11},{value:" \u6216 ISO 8601 date-time",paraId:20,tocIndex:11},{value:"arraySeparator",paraId:20,tocIndex:11},{value:"String",paraId:20,tocIndex:11},{value:"\u6570\u7EC4\u8FC1\u79FB\u53EF\u9009",paraId:20,tocIndex:11},{value:"\u4EC5\u4F9B\u5916\u90E8\u5BFC\u5165\u517C\u5BB9\uFF1B\u6B63\u5F0F API \u5FC5\u987B\u4F20 JSON Array",paraId:20,tocIndex:11},{value:"arrayElementType",paraId:20,tocIndex:11},{value:"String",paraId:20,tocIndex:11},{value:"\u6570\u7EC4\u5FC5\u586B",paraId:20,tocIndex:11},{value:"\u53EA\u5141\u8BB8 string/integer/number/boolean/date",paraId:20,tocIndex:11},{value:"fieldType",paraId:21,tocIndex:12},{value:"MySQL JSON",paraId:21,tocIndex:12},{value:"Java/BSON",paraId:21,tocIndex:12},{value:"ES Mapping",paraId:21,tocIndex:12},{value:"\u793A\u4F8B",paraId:21,tocIndex:12},{value:"string",paraId:21,tocIndex:12},{value:"JSON \u5B57\u7B26\u4E32",paraId:21,tocIndex:12},{value:"String",paraId:21,tocIndex:12},{value:"keyword",paraId:21,tocIndex:12},{value:'"\u676D\u5DDE\u516C\u53F8"',paraId:21,tocIndex:12},{value:"text",paraId:21,tocIndex:12},{value:"JSON \u5B57\u7B26\u4E32",paraId:21,tocIndex:12},{value:"String",paraId:21,tocIndex:12},{value:"text + keyword \u5B50\u5B57\u6BB5",paraId:21,tocIndex:12},{value:'"\u957F\u6587\u672C\u8BF4\u660E"',paraId:21,tocIndex:12},{value:"integer",paraId:21,tocIndex:12},{value:"JSON \u6574\u6570",paraId:21,tocIndex:12},{value:"Long",paraId:21,tocIndex:12},{value:"long",paraId:21,tocIndex:12},{value:"120",paraId:21,tocIndex:12},{value:"number",paraId:21,tocIndex:12},{value:"JSON \u6570\u5B57",paraId:21,tocIndex:12},{value:"BigDecimal/Decimal128",paraId:21,tocIndex:12},{value:"double",paraId:21,tocIndex:12},{value:"99.50",paraId:21,tocIndex:12},{value:"date",paraId:21,tocIndex:12},{value:"ISO \u5B57\u7B26\u4E32",paraId:21,tocIndex:12},{value:"LocalDate \u6216 Instant",paraId:21,tocIndex:12},{value:"date",paraId:21,tocIndex:12},{value:'"2026-06-30"',paraId:21,tocIndex:12},{value:"boolean",paraId:21,tocIndex:12},{value:"JSON \u5E03\u5C14",paraId:21,tocIndex:12},{value:"Boolean",paraId:21,tocIndex:12},{value:"boolean",paraId:21,tocIndex:12},{value:"true",paraId:21,tocIndex:12},{value:"array",paraId:21,tocIndex:12},{value:"JSON \u6570\u7EC4",paraId:21,tocIndex:12},{value:"List",paraId:21,tocIndex:12},{value:"\u6309\u5143\u7D20\u7C7B\u578B\u6620\u5C04",paraId:21,tocIndex:12},{value:'["A","B"]',paraId:21,tocIndex:12},{value:"\u3010\u73B0\u72B6\u98CE\u9669\u3011",paraId:21,tocIndex:12},{value:"parseData",paraId:21,tocIndex:12},{value:" \u7C7B\u578B\u8F6C\u6362\u5931\u8D25\u65F6\u53EF\u80FD\u8FD4\u56DE\u539F\u59CB\u5B57\u7B26\u4E32\u6216 ",paraId:21,tocIndex:12},{value:"null",paraId:21,tocIndex:12},{value:"\uFF0C\u800C\u4E0D\u662F\u62D2\u7EDD\u5199\u5165\u3002MySQL \u4ECD\u4FDD\u5B58\u539F\u59CB JSON\uFF0C\u4F46 Mongo/ES \u53EF\u80FD\u51FA\u73B0\u7C7B\u578B\u4E0D\u4E00\u81F4\u6216 Mapping \u51B2\u7A81\u3002",paraId:21,tocIndex:12},{value:"\u3010\u73B0\u72B6\u3011",paraId:22,tocIndex:13},{value:"FormDataParser.validateSchema",paraId:22,tocIndex:13},{value:" \u6821\u9A8C\uFF1A",paraId:22,tocIndex:13},{value:"JSON \u53EF\u89E3\u6790\u4E3A ",paraId:23,tocIndex:13},{value:"FormSchemaBO",paraId:23,tocIndex:13},{value:"\u3002",paraId:23,tocIndex:13},{value:"fields",paraId:23,tocIndex:13},{value:" \u975E\u7A7A\u3002",paraId:23,tocIndex:13},{value:"fieldId",paraId:23,tocIndex:13},{value:"\u3001",paraId:23,tocIndex:13},{value:"fieldType",paraId:23,tocIndex:13},{value:"\u3001",paraId:23,tocIndex:13},{value:"fieldName",paraId:23,tocIndex:13},{value:" \u975E\u7A7A\u3002",paraId:23,tocIndex:13},{value:"fieldId",paraId:23,tocIndex:13},{value:" \u4E0D\u91CD\u590D\u3002",paraId:23,tocIndex:13},{value:"fieldId",paraId:23,tocIndex:13},{value:" \u4E0D\u4E0E\u7CFB\u7EDF\u5B57\u6BB5\u91CD\u540D\u3002",paraId:23,tocIndex:13},{value:"fieldType",paraId:23,tocIndex:13},{value:` \u5C5E\u4E8E\u679A\u4E3E\u767D\u540D\u5355\u3002
\u7CFB\u7EDF\u4FDD\u7559\u5B57\u6BB5\u5305\u62EC `,paraId:23,tocIndex:13},{value:"id",paraId:23,tocIndex:13},{value:"\u3001",paraId:23,tocIndex:13},{value:"data",paraId:23,tocIndex:13},{value:"\u3001",paraId:23,tocIndex:13},{value:"formKey",paraId:23,tocIndex:13},{value:"\u3001",paraId:23,tocIndex:13},{value:"gmtCreate",paraId:23,tocIndex:13},{value:"\u3001",paraId:23,tocIndex:13},{value:"gmtModified",paraId:23,tocIndex:13},{value:"\u3001",paraId:23,tocIndex:13},{value:"creator",paraId:23,tocIndex:13},{value:"\u3001",paraId:23,tocIndex:13},{value:"modifier",paraId:23,tocIndex:13},{value:"\u3001",paraId:23,tocIndex:13},{value:"isDeleted/is_deleted",paraId:23,tocIndex:13},{value:` \u7B49\u4EE3\u7801\u5E38\u91CF\u5B9A\u4E49\u7684\u5B57\u6BB5\u3002
**\u3010\u589E\u5F3A\u3011**\u8FD8\u5E94\u6821\u9A8C\uFF1A`,paraId:23,tocIndex:13},{value:"fieldId",paraId:24,tocIndex:13},{value:" \u5339\u914D ",paraId:24,tocIndex:13},{value:"^[A-Za-z][A-Za-z0-9_]{0,63}$",paraId:24,tocIndex:13},{value:"\u3002",paraId:24,tocIndex:13},{value:"fieldName",paraId:24,tocIndex:13},{value:" \u957F\u5EA6\u4E0D\u8D85\u8FC7 128\u3002",paraId:24,tocIndex:13},{value:"defaultValue",paraId:24,tocIndex:13},{value:" \u80FD\u6309\u7C7B\u578B\u89E3\u6790\u3002",paraId:24,tocIndex:13},{value:"arrayElementType",paraId:24,tocIndex:13},{value:" \u5C5E\u4E8E\u5141\u8BB8\u7684\u6807\u91CF\u7C7B\u578B\u3002",paraId:24,tocIndex:13},{value:"\u65E5\u671F\u683C\u5F0F\u767D\u540D\u5355\uFF0C\u7981\u6B62\u4EFB\u610F\u590D\u6742\u683C\u5F0F\u3002",paraId:24,tocIndex:13},{value:"Schema \u603B\u5927\u5C0F\u3001\u5B57\u6BB5\u6570\u548C\u5D4C\u5957\u6DF1\u5EA6\u4E0A\u9650\u3002",paraId:24,tocIndex:13},{value:"Schema \u4E2D ",paraId:24,tocIndex:13},{value:"required=true",paraId:24,tocIndex:13},{value:" \u7684\u5B57\u6BB5\u5728\u521B\u5EFA/\u66F4\u65B0\u6570\u636E\u65F6\u5FC5\u987B\u5B58\u5728\u4E14\u975E\u7A7A\u3002",paraId:24,tocIndex:13},{value:"\u672C\u7AE0\u5148\u89E3\u91CA\u6838\u5FC3\u8868\uFF0C\u5B8C\u6574\u53EF\u6267\u884C DDL \u5DF2\u5185\u5D4C\u5728\u7B2C 22 \u7AE0\uFF0C\u4E0D\u4F9D\u8D56\u4EFB\u4F55\u5916\u90E8 SQL \u6587\u4EF6\u3002",paraId:25,tocIndex:14},{value:"\u4E00\u6761\u8BB0\u5F55\u63CF\u8FF0\u4E00\u5F20\u903B\u8F91\u8868\u5355\u3002",paraId:26,tocIndex:15},{value:"\u5217",paraId:27,tocIndex:15},{value:"\u7C7B\u578B",paraId:27,tocIndex:15},{value:"\u8BF4\u660E",paraId:27,tocIndex:15},{value:"id",paraId:27,tocIndex:15},{value:"BIGINT",paraId:27,tocIndex:15},{value:"\u81EA\u589E\u4E3B\u952E",paraId:27,tocIndex:15},{value:"form_key",paraId:27,tocIndex:15},{value:"VARCHAR(64)",paraId:27,tocIndex:15},{value:"\u8868\u5355\u552F\u4E00\u952E\uFF0C\u552F\u4E00\u7D22\u5F15",paraId:27,tocIndex:15},{value:"form_name",paraId:27,tocIndex:15},{value:"VARCHAR(128)",paraId:27,tocIndex:15},{value:"\u8868\u5355\u540D\u79F0",paraId:27,tocIndex:15},{value:"schema_definition",paraId:27,tocIndex:15},{value:"LONGTEXT",paraId:27,tocIndex:15},{value:"\u5B57\u6BB5\u5B9A\u4E49 JSON \u5B57\u7B26\u4E32",paraId:27,tocIndex:15},{value:"version",paraId:27,tocIndex:15},{value:"INT",paraId:27,tocIndex:15},{value:"\u5F53\u524D\u503C\u521B\u5EFA\u65F6\u4E3A 1",paraId:27,tocIndex:15},{value:"mongo_enabled",paraId:27,tocIndex:15},{value:"TINYINT",paraId:27,tocIndex:15},{value:"0 \u5173\u95ED\uFF0C1 \u5F00\u542F\uFF0C\u9ED8\u8BA4 1",paraId:27,tocIndex:15},{value:"es_enabled",paraId:27,tocIndex:15},{value:"TINYINT",paraId:27,tocIndex:15},{value:"0 \u5173\u95ED\uFF0C1 \u5F00\u542F\uFF0C\u9ED8\u8BA4 0",paraId:27,tocIndex:15},{value:"sync_status",paraId:27,tocIndex:15},{value:"TINYINT",paraId:27,tocIndex:15},{value:"0 \u6B63\u5E38\uFF0C1 \u540C\u6B65\u4E2D",paraId:27,tocIndex:15},{value:"data_source_type",paraId:27,tocIndex:15},{value:"TINYINT",paraId:27,tocIndex:15},{value:"0 API\uFF0C1 \u5916\u90E8\u5168\u91CF\uFF0C2 \u5916\u90E8\u589E\u91CF",paraId:27,tocIndex:15},{value:"last_sync_time",paraId:27,tocIndex:15},{value:"DATETIME",paraId:27,tocIndex:15},{value:"\u5916\u90E8\u589E\u91CF\u540C\u6B65\u6E38\u6807",paraId:27,tocIndex:15},{value:"permission_config",paraId:27,tocIndex:15},{value:"LONGTEXT",paraId:27,tocIndex:15},{value:"\u6743\u9650\u914D\u7F6E JSON",paraId:27,tocIndex:15},{value:"owners",paraId:27,tocIndex:15},{value:"VARCHAR(1024)",paraId:27,tocIndex:15},{value:"Owner \u7528\u6237 ID JSON \u6570\u7EC4",paraId:27,tocIndex:15},{value:"client_id",paraId:27,tocIndex:15},{value:"VARCHAR(64)",paraId:27,tocIndex:15},{value:"\u8C03\u7528\u65B9\u6807\u8BC6",paraId:27,tocIndex:15},{value:"is_deleted",paraId:27,tocIndex:15},{value:"TINYINT",paraId:27,tocIndex:15},{value:"Schema \u903B\u8F91\u5220\u9664",paraId:27,tocIndex:15},{value:"\u5BA1\u8BA1\u5217",paraId:27,tocIndex:15},{value:"VARCHAR/DATETIME",paraId:27,tocIndex:15},{value:"creator\u3001modifier\u3001\u521B\u5EFA/\u4FEE\u6539\u65F6\u95F4",paraId:27,tocIndex:15},{value:"\u5173\u952E\u7D22\u5F15\uFF1A",paraId:27,tocIndex:15},{value:`PRIMARY KEY (id);
UNIQUE KEY uk_form_key (form_key);
KEY idx_is_deleted (is_deleted);
`,paraId:28,tocIndex:15},{value:"\u6BCF\u6B21\u8868\u5355\u63D0\u4EA4\u4EA7\u751F\u4E00\u884C\u3002",paraId:29,tocIndex:16},{value:`CREATE TABLE ai_form_data (
  id BIGINT NOT NULL AUTO_INCREMENT,
  form_key VARCHAR(64) NOT NULL,
  data LONGTEXT DEFAULT NULL,
  date_key VARCHAR(128) DEFAULT NULL,
  is_deleted TINYINT NOT NULL DEFAULT 0,
  creator VARCHAR(64) DEFAULT NULL,
  gmt_create DATETIME DEFAULT NULL,
  modifier VARCHAR(64) DEFAULT NULL,
  gmt_modified DATETIME DEFAULT NULL,
  PRIMARY KEY (id),
  KEY idx_form_key_deleted_id (form_key, is_deleted, id),
  KEY idx_form_key_date_key (form_key, date_key),
  KEY idx_gmt_modified (gmt_modified)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`,paraId:30,tocIndex:16},{value:"\u6CE8\u610F\uFF1ADDL \u672A\u58F0\u660E\u7269\u7406\u5916\u952E\uFF0C\u5173\u8054\u5B8C\u6574\u6027\u7531\u5E94\u7528\u901A\u8FC7 ",paraId:31,tocIndex:16},{value:"formKey",paraId:31,tocIndex:16},{value:" \u4FDD\u8BC1\u3002",paraId:31,tocIndex:16},{value:"Schema \u884C\uFF1A",paraId:32,tocIndex:17},{value:`id = 10
form_key = c74ecb481f0a4ed591f14749c9b1c562
form_name = \u5BA2\u6237\u767B\u8BB0\u8868
schema_definition = {"fields":[{"fieldId":"customerName",...}]}
version = 1
mongo_enabled = 1
es_enabled = 1
owners = ["100001"]
`,paraId:33,tocIndex:17},{value:"Data \u884C\uFF1A",paraId:34,tocIndex:17},{value:`id = 1001
form_key = c74ecb481f0a4ed591f14749c9b1c562
data = {"customerName":"\u676D\u5DDE\u516C\u53F8","employeeCount":120,"active":true}
creator = 100001
is_deleted = 0
`,paraId:35,tocIndex:17},{value:"\u7B2C\u4E8C\u6B21\u63D0\u4EA4\u4E0D\u4F1A\u65B0\u589E\u5217\uFF0C\u800C\u662F\u65B0\u589E\u53E6\u4E00\u884C\uFF1A",paraId:36,tocIndex:17},{value:`id = 1002
form_key = c74ecb481f0a4ed591f14749c9b1c562
data = {"customerName":"\u4E0A\u6D77\u516C\u53F8","employeeCount":80,"active":true}
`,paraId:37,tocIndex:17},{value:"\u65B0\u589E ",paraId:38,tocIndex:18},{value:"phone",paraId:38,tocIndex:18},{value:" \u540E\uFF1A",paraId:38,tocIndex:18},{value:`{"customerName":"\u65B0\u5BA2\u6237","phone":"13800000000"}
`,paraId:39,tocIndex:18},{value:"\u65E7\u6570\u636E\u4ECD\u53EF\u4FDD\u6301\uFF1A",paraId:40,tocIndex:18},{value:`{"customerName":"\u65E7\u5BA2\u6237"}
`,paraId:41,tocIndex:18},{value:"\u884C\u4E3A\u89C4\u5219\uFF1A",paraId:42,tocIndex:18},{value:"\u53D8\u66F4",paraId:43,tocIndex:18},{value:"MySQL \u662F\u5426\u6539\u8868",paraId:43,tocIndex:18},{value:"\u65E7 JSON",paraId:43,tocIndex:18},{value:"\u65B0 JSON",paraId:43,tocIndex:18},{value:"\u98CE\u9669",paraId:43,tocIndex:18},{value:"\u65B0\u589E\u53EF\u9009\u5B57\u6BB5",paraId:43,tocIndex:18},{value:"\u5426",paraId:43,tocIndex:18},{value:"\u65E0\u8BE5 key",paraId:43,tocIndex:18},{value:"\u53EF\u5E26\u65B0 key",paraId:43,tocIndex:18},{value:"\u4F4E",paraId:43,tocIndex:18},{value:"\u4FEE\u6539 ",paraId:43,tocIndex:18},{value:"fieldName",paraId:43,tocIndex:18},{value:"\u5426",paraId:43,tocIndex:18},{value:"\u4E0D\u53D8",paraId:43,tocIndex:18},{value:"\u4E0D\u53D8",paraId:43,tocIndex:18},{value:"\u4F4E",paraId:43,tocIndex:18},{value:"\u65B0\u589E\u5FC5\u586B\u5B57\u6BB5",paraId:43,tocIndex:18},{value:"\u5426",paraId:43,tocIndex:18},{value:"\u65E0\u8BE5 key",paraId:43,tocIndex:18},{value:"\u5E94\u8981\u6C42\u6709 key",paraId:43,tocIndex:18},{value:"\u9700\u9ED8\u8BA4\u503C/\u56DE\u586B",paraId:43,tocIndex:18},{value:"\u5220\u9664\u5B57\u6BB5",paraId:43,tocIndex:18},{value:"\u5426",paraId:43,tocIndex:18},{value:"\u65E7\u503C\u4ECD\u5B58\u5728",paraId:43,tocIndex:18},{value:"\u4E0D\u518D\u5199\u5165",paraId:43,tocIndex:18},{value:"\u5B58\u50A8\u6B8B\u7559",paraId:43,tocIndex:18},{value:"\u91CD\u547D\u540D ",paraId:43,tocIndex:18},{value:"fieldId",paraId:43,tocIndex:18},{value:"\u5426",paraId:43,tocIndex:18},{value:"\u4ECD\u662F\u65E7 key",paraId:43,tocIndex:18},{value:"\u4F7F\u7528\u65B0 key",paraId:43,tocIndex:18},{value:"\u7B49\u4EF7\u4E8E\u5220\u65E7\u589E\u65B0",paraId:43,tocIndex:18},{value:"\u4FEE\u6539\u7C7B\u578B",paraId:43,tocIndex:18},{value:"\u5426",paraId:43,tocIndex:18},{value:"\u539F\u503C\u4E0D\u53D8",paraId:43,tocIndex:18},{value:"\u6309\u65B0\u7C7B\u578B\u89E3\u91CA",paraId:43,tocIndex:18},{value:"Mongo/ES \u8F6C\u6362\u98CE\u9669",paraId:43,tocIndex:18},{value:"\u8868",paraId:44,tocIndex:19},{value:"\u7528\u9014",paraId:44,tocIndex:19},{value:"\u5F53\u524D\u72B6\u6001",paraId:44,tocIndex:19},{value:"ai_form_data_mongo_sync",paraId:44,tocIndex:19},{value:"Mongo \u5199\u5931\u8D25\u8BB0\u5F55",paraId:44,tocIndex:19},{value:"\u5DF2\u5199\u5165\uFF1B\u8865\u507F\u95ED\u73AF\u9700\u6838\u5B9E/\u589E\u5F3A",paraId:44,tocIndex:19},{value:"ai_form_mongo_index",paraId:44,tocIndex:19},{value:"Mongo \u7EC4\u5408\u7D22\u5F15\u5143\u6570\u636E",paraId:44,tocIndex:19},{value:"\u5DF2\u4F7F\u7528",paraId:44,tocIndex:19},{value:"ai_form_sync_progress",paraId:44,tocIndex:19},{value:"\u5168\u91CF\u540C\u6B65\u4EFB\u52A1\u4E0E\u8FDB\u5EA6",paraId:44,tocIndex:19},{value:"\u5DF2\u4F7F\u7528",paraId:44,tocIndex:19},{value:"ai_form_sync_cursor",paraId:44,tocIndex:19},{value:"\u65E7 ES \u589E\u91CF\u6E38\u6807",paraId:44,tocIndex:19},{value:"DDL \u6CE8\u660E\u5F53\u524D\u672A\u4F7F\u7528",paraId:44,tocIndex:19},{value:"ai_form_sync_lock",paraId:44,tocIndex:19},{value:"\u5168\u5C40\u540C\u6B65\u9501\u3001\u8282\u70B9\u3001\u5FC3\u8DF3",paraId:44,tocIndex:19},{value:"\u5DF2\u4F7F\u7528",paraId:44,tocIndex:19},{value:"ai_form_data_external",paraId:44,tocIndex:19},{value:"\u5916\u90E8\u5168\u91CF\u8986\u76D6\u6570\u636E",paraId:44,tocIndex:19},{value:"\u5DF2\u4F7F\u7528",paraId:44,tocIndex:19},{value:"ai_form_data_incremental",paraId:44,tocIndex:19},{value:"\u5916\u90E8\u589E\u91CF UPSERT \u6570\u636E",paraId:44,tocIndex:19},{value:"\u5DF2\u4F7F\u7528",paraId:44,tocIndex:19},{value:"ai_form_data_es_sync",paraId:44,tocIndex:19},{value:"ES \u5199\u5931\u8D25\u8BB0\u5F55",paraId:44,tocIndex:19},{value:"\u5DF2\u5199\u5165\uFF0CDDL \u660E\u786E\u91CD\u8BD5\u5C1A\u672A\u5B9E\u73B0",paraId:44,tocIndex:19},{value:"\u63A8\u8350\u53EA\u7528\u56FA\u5B9A\u5217\u6267\u884C\uFF1A",paraId:45,tocIndex:20},{value:`SELECT * FROM ai_form_data
WHERE form_key = ? AND is_deleted = 0 AND id > ?
ORDER BY id ASC LIMIT ?;
`,paraId:46,tocIndex:20},{value:"\u4E0D\u63A8\u8350\u5728 ",paraId:47,tocIndex:20},{value:"LONGTEXT data",paraId:47,tocIndex:20},{value:" \u4E0A\u505A\u5927\u91CF ",paraId:47,tocIndex:20},{value:"LIKE",paraId:47,tocIndex:20},{value:" \u6216 JSON \u5B57\u6BB5\u8FC7\u6EE4\u3002\u590D\u6742\u52A8\u6001\u6761\u4EF6\u4EA4\u7ED9 Mongo\uFF0C\u5168\u6587\u641C\u7D22\u548C\u7EDF\u8BA1\u4EA4\u7ED9 ES\u3002",paraId:47,tocIndex:20},{value:"database\uFF1A",paraId:48,tocIndex:22},{value:"ai_form",paraId:48,tocIndex:22},{value:"\u3002",paraId:48,tocIndex:22},{value:"Collection\uFF1A",paraId:48,tocIndex:22},{value:"form_data_{formKey}",paraId:48,tocIndex:22},{value:"\u3002",paraId:48,tocIndex:22},{value:"\u5168\u91CF\u540C\u6B65\u4E34\u65F6 Collection\uFF1A",paraId:48,tocIndex:22},{value:"form_data_{formKey}_tmp",paraId:48,tocIndex:22},{value:"\u3002",paraId:48,tocIndex:22},{value:"\u914D\u7F6E\u952E\uFF1A",paraId:48,tocIndex:22},{value:"spring.data.mongodb.uri",paraId:48,tocIndex:22},{value:"\uFF0C\u5404\u73AF\u5883\u6CE8\u5165\uFF0C\u4E0D\u5728\u6587\u6863\u4FDD\u5B58\u771F\u5B9E\u51ED\u636E\u3002",paraId:48,tocIndex:22},{value:`{
  "_id": 1001,
  "data": {
    "customerName": "\u676D\u5DDE\u516C\u53F8",
    "employeeCount": 120,
    "annualRevenue": 99.5,
    "establishedAt": "BSON Date",
    "active": true,
    "tags": ["\u91CD\u70B9", "\u534E\u4E1C"]
  },
  "gmtCreate": "BSON Date",
  "gmtModified": "BSON Date",
  "creator": "100001",
  "modifier": "100001"
}
`,paraId:49,tocIndex:23},{value:"FormDataMongoServiceImpl.buildDocument",paraId:50,tocIndex:23},{value:" \u4F1A\u8BFB\u53D6\u5F53\u524D Schema\uFF0C\u7528 ",paraId:50,tocIndex:23},{value:"FormDataParser.parseData",paraId:50,tocIndex:23},{value:" \u5C06 MySQL \u539F\u59CB JSON \u8F6C\u6210\u7C7B\u578B\u5316\u5B57\u6BB5\u3002",paraId:50,tocIndex:23},{value:"ai_form_mongo_index.index_keys",paraId:51,tocIndex:24},{value:" \u4FDD\u5B58\u5B57\u6BB5 ID \u6570\u7EC4\uFF0C\u4F8B\u5982\uFF1A",paraId:51,tocIndex:24},{value:`["customerName", "active"]
`,paraId:52,tocIndex:24},{value:"\u521B\u5EFA\u7684\u771F\u5B9E\u7EC4\u5408\u7D22\u5F15\u5B57\u6BB5\u4E3A\uFF1A",paraId:53,tocIndex:24},{value:`{"data.customerName": 1, "data.active": 1}
`,paraId:54,tocIndex:24},{value:"\u7D22\u5F15\u5EFA\u8BAE\uFF1A",paraId:55,tocIndex:24},{value:"\u53EA\u4E3A\u9AD8\u9891\u7B5B\u9009\u3001\u6392\u5E8F\u5B57\u6BB5\u5EFA\u7D22\u5F15\u3002",paraId:56,tocIndex:24},{value:"\u7EC4\u5408\u7D22\u5F15\u987A\u5E8F\u9075\u5FAA\u7B49\u503C\u3001\u6392\u5E8F\u3001\u8303\u56F4\u539F\u5219\u3002",paraId:56,tocIndex:24},{value:"\u7981\u6B62\u6BCF\u4E2A\u52A8\u6001\u5B57\u6BB5\u90FD\u5EFA\u7D22\u5F15\u3002",paraId:56,tocIndex:24},{value:"\u4E0A\u7EBF\u524D\u7528\u771F\u5B9E\u67E5\u8BE2\u9A8C\u8BC1 explain \u548C\u9009\u62E9\u6027\u3002",paraId:56,tocIndex:24},{value:`alias: form_data_{formKey}
physical: form_data_{formKey}_v1
physical: form_data_{formKey}_v2
`,paraId:57,tocIndex:26},{value:"\u5BF9\u5916\u8BFB\u5199\u59CB\u7EC8\u4F7F\u7528 alias\u3002\u5168\u91CF\u540C\u6B65\u5199\u5165\u975E\u6D3B\u8DC3\u7269\u7406\u7D22\u5F15\uFF0C\u5B8C\u6210\u540E\u539F\u5B50\u5207\u6362 alias\u3002",paraId:58,tocIndex:26},{value:`{
  "properties": {
    "gmtCreate": {"type":"date","format":"yyyy-MM-dd HH:mm:ss"},
    "gmtModified": {"type":"date","format":"yyyy-MM-dd HH:mm:ss"},
    "creator": {"type":"keyword"},
    "modifier": {"type":"keyword"},
    "isDeleted": {"type":"integer"},
    "data": {
      "properties": {
        "customerName": {"type":"keyword"},
        "description": {
          "type":"text",
          "fields":{"keyword":{"type":"keyword","ignore_above":256}}
        },
        "employeeCount": {"type":"long"},
        "annualRevenue": {"type":"double"},
        "establishedAt": {"type":"date","format":"yyyy-MM-dd"},
        "active": {"type":"boolean"},
        "tags": {"type":"keyword"}
      }
    }
  }
}
`,paraId:59,tocIndex:27},{value:"page",paraId:60,tocIndex:28},{value:" \u6A21\u5F0F\u4F7F\u7528 ",paraId:60,tocIndex:28},{value:"from + size",paraId:60,tocIndex:28},{value:"\uFF0C\u9002\u5408\u6D45\u5206\u9875\u3002",paraId:60,tocIndex:28},{value:"cursor",paraId:60,tocIndex:28},{value:" \u6A21\u5F0F\u6309 ",paraId:60,tocIndex:28},{value:"id",paraId:60,tocIndex:28},{value:" \u6392\u5E8F\u5E76\u4F7F\u7528 ",paraId:60,tocIndex:28},{value:"search_after",paraId:60,tocIndex:28},{value:"\uFF0C\u9002\u5408\u8FDE\u7EED\u7FFB\u9875\u3002",paraId:60,tocIndex:28},{value:"\u67E5\u8BE2\u5F3A\u5236\u8FC7\u6EE4 ",paraId:60,tocIndex:28},{value:"isDeleted=0",paraId:60,tocIndex:28},{value:"\u3002",paraId:60,tocIndex:28},{value:"\u56FE\u8868\u652F\u6301\u7EF4\u5EA6 terms/date \u5206\u7EC4\uFF0C\u4EE5\u53CA ",paraId:60,tocIndex:28},{value:"sum/avg/max/min/count",paraId:60,tocIndex:28},{value:" \u6307\u6807\u3002",paraId:60,tocIndex:28},{value:"text",paraId:60,tocIndex:28},{value:" \u5B57\u6BB5\u7CBE\u786E\u5339\u914D\u3001\u6392\u5E8F\u3001\u805A\u5408\u4F7F\u7528 ",paraId:60,tocIndex:28},{value:".keyword",paraId:60,tocIndex:28},{value:"\u3002",paraId:60,tocIndex:28},{value:`{
  "logic": "AND",
  "children": [
    {"fieldId":"active","exp":"=","value":"true"},
    {
      "logic": "OR",
      "children": [
        {"fieldId":"employeeCount","exp":">=","value":"100"},
        {"fieldId":"customerName","exp":"like","value":"\u676D\u5DDE"}
      ]
    }
  ]
}
`,paraId:61,tocIndex:30},{value:"\u903B\u8F91\u8282\u70B9\u4F7F\u7528 ",paraId:62,tocIndex:30},{value:"logic + children",paraId:62,tocIndex:30},{value:"\uFF0C\u53F6\u5B50\u8282\u70B9\u4F7F\u7528 ",paraId:62,tocIndex:30},{value:"fieldId + exp + value",paraId:62,tocIndex:30},{value:"\u3002",paraId:62,tocIndex:30},{value:"value",paraId:62,tocIndex:30},{value:" \u662F JSON \u6807\u91CF\u6216\u6570\u7EC4\uFF0C\u4E0D\u4F7F\u7528\u9017\u53F7\u5B57\u7B26\u4E32\u6A21\u62DF\u96C6\u5408\uFF1B\u6743\u9650\u5360\u4F4D\u7B26\u4F7F\u7528 JSON \u5B57\u7B26\u4E32\uFF0C\u51FD\u6570\u53EF\u989D\u5916\u4F7F\u7528 ",paraId:62,tocIndex:30},{value:"fnArgs",paraId:62,tocIndex:30},{value:"\u3002",paraId:62,tocIndex:30},{value:"exp",paraId:63,tocIndex:31},{value:"\u8BED\u4E49",paraId:63,tocIndex:31},{value:"\u63A8\u8350\u7C7B\u578B",paraId:63,tocIndex:31},{value:"=",paraId:63,tocIndex:31},{value:"\u7B49\u4E8E",paraId:63,tocIndex:31},{value:"\u5168\u90E8\u6807\u91CF",paraId:63,tocIndex:31},{value:"!=",paraId:63,tocIndex:31},{value:"\u4E0D\u7B49\u4E8E",paraId:63,tocIndex:31},{value:"\u5168\u90E8\u6807\u91CF",paraId:63,tocIndex:31},{value:">",paraId:63,tocIndex:31},{value:"\u3001",paraId:63,tocIndex:31},{value:">=",paraId:63,tocIndex:31},{value:"\u3001",paraId:63,tocIndex:31},{value:"<",paraId:63,tocIndex:31},{value:"\u3001",paraId:63,tocIndex:31},{value:"<=",paraId:63,tocIndex:31},{value:"\u8303\u56F4\u6BD4\u8F83",paraId:63,tocIndex:31},{value:"integer/number/date",paraId:63,tocIndex:31},{value:"like",paraId:63,tocIndex:31},{value:"\u5305\u542B/\u6A21\u7CCA\u5339\u914D",paraId:63,tocIndex:31},{value:"string/text",paraId:63,tocIndex:31},{value:"in",paraId:63,tocIndex:31},{value:"\u5B57\u6BB5\u503C\u5C5E\u4E8E\u96C6\u5408",paraId:63,tocIndex:31},{value:"\u6807\u91CF\uFF0Cvalue \u5FC5\u987B\u4E3A JSON \u6570\u7EC4",paraId:63,tocIndex:31},{value:"arrIn",paraId:63,tocIndex:31},{value:"\u6570\u7EC4\u5305\u542B\u4EFB\u4E00\u76EE\u6807\u5143\u7D20",paraId:63,tocIndex:31},{value:"array\uFF0Cvalue \u5FC5\u987B\u4E3A JSON \u6570\u7EC4",paraId:63,tocIndex:31},{value:"arrAll",paraId:63,tocIndex:31},{value:"\u6570\u7EC4\u5305\u542B\u5168\u90E8\u76EE\u6807\u5143\u7D20",paraId:63,tocIndex:31},{value:"array\uFF0Cvalue \u5FC5\u987B\u4E3A JSON \u6570\u7EC4",paraId:63,tocIndex:31},{value:"\u67E5\u8BE2\u503C\u5FC5\u987B\u6309 Schema \u4E25\u683C\u8F6C\u6362\uFF1B\u4EFB\u4F55\u7C7B\u578B\u9519\u8BEF\u8FD4\u56DE ",paraId:63,tocIndex:31},{value:"CONDITION_INVALID",paraId:63,tocIndex:31},{value:"\uFF0C\u7981\u6B62\u4EE5\u5B57\u7B26\u4E32\u7EE7\u7EED\u67E5\u8BE2\u3002",paraId:63,tocIndex:31},{value:"\u7EDF\u4E00\u54CD\u5E94\uFF1A",paraId:64,tocIndex:32},{value:`{"success":true,"code":"OK","message":"success","data":{},"traceId":"..."}
`,paraId:65,tocIndex:32},{value:"\u5206\u9875\u6570\u636E\u4F7F\u7528 ",paraId:66,tocIndex:32},{value:"PageResult<T>",paraId:66,tocIndex:32},{value:"\uFF0C\u4E3B\u8981\u5305\u542B ",paraId:66,tocIndex:32},{value:"pageNum",paraId:66,tocIndex:32},{value:"\u3001",paraId:66,tocIndex:32},{value:"pageSize",paraId:66,tocIndex:32},{value:"\u3001",paraId:66,tocIndex:32},{value:"total",paraId:66,tocIndex:32},{value:"\u3001",paraId:66,tocIndex:32},{value:"list",paraId:66,tocIndex:32},{value:"\u3001",paraId:66,tocIndex:32},{value:"hasNext",paraId:66,tocIndex:32},{value:"\u3001",paraId:66,tocIndex:32},{value:"nextCursor",paraId:66,tocIndex:32},{value:"\u3002",paraId:66,tocIndex:32},{value:"Method",paraId:67,tocIndex:33},{value:"URL",paraId:67,tocIndex:33},{value:"\u7528\u9014",paraId:67,tocIndex:33},{value:"\u6743\u9650",paraId:67,tocIndex:33},{value:"POST",paraId:67,tocIndex:33},{value:"/api/form/schema/create",paraId:67,tocIndex:33},{value:"\u521B\u5EFA Schema",paraId:67,tocIndex:33},{value:"\u767B\u5F55\u7528\u6237\u6210\u4E3A Owner",paraId:67,tocIndex:33},{value:"PUT",paraId:67,tocIndex:33},{value:"/api/form/schema/update",paraId:67,tocIndex:33},{value:"\u66F4\u65B0 Schema",paraId:67,tocIndex:33},{value:"Owner",paraId:67,tocIndex:33},{value:"DELETE",paraId:67,tocIndex:33},{value:"/api/form/schema/delete",paraId:67,tocIndex:33},{value:"\u5220\u9664 Schema",paraId:67,tocIndex:33},{value:"Owner",paraId:67,tocIndex:33},{value:"GET",paraId:67,tocIndex:33},{value:"/api/form/schema/detail",paraId:67,tocIndex:33},{value:"Schema \u8BE6\u60C5",paraId:67,tocIndex:33},{value:"\u5F53\u524D\u672A\u5F3A\u5236 Owner",paraId:67,tocIndex:33},{value:"GET",paraId:67,tocIndex:33},{value:"/api/form/schema/list",paraId:67,tocIndex:33},{value:"Schema \u5206\u9875\u5217\u8868",paraId:67,tocIndex:33},{value:"\u767B\u5F55\u6001",paraId:67,tocIndex:33},{value:"PUT",paraId:67,tocIndex:33},{value:"/api/form/schema/datasource",paraId:67,tocIndex:33},{value:"\u66F4\u65B0 Mongo/ES \u5F00\u5173",paraId:67,tocIndex:33},{value:"Owner",paraId:67,tocIndex:33},{value:"GET",paraId:67,tocIndex:33},{value:"/api/form/schema/placeholders",paraId:67,tocIndex:33},{value:"\u6743\u9650\u5360\u4F4D\u7B26",paraId:67,tocIndex:33},{value:"\u767B\u5F55\u6001",paraId:67,tocIndex:33},{value:"\u521B\u5EFA\u8BF7\u6C42\uFF1A",paraId:67,tocIndex:33},{value:`POST /api/form/schema/create
Content-Type: application/json
`,paraId:68,tocIndex:33},{value:`{
  "formName": "\u5BA2\u6237\u767B\u8BB0\u8868",
  "schemaDefinition": "{\\"fields\\":[{\\"fieldId\\":\\"customerName\\",\\"fieldName\\":\\"\u5BA2\u6237\u540D\u79F0\\",\\"fieldType\\":\\"string\\",\\"required\\":true}]}",
  "mongoEnabled": 1,
  "esEnabled": 1,
  "dataSourceType": 0,
  "permissionConfig": null
}
`,paraId:69,tocIndex:33},{value:"\u54CD\u5E94 ",paraId:70,tocIndex:33},{value:"data",paraId:70,tocIndex:33},{value:" \u662F\u65B0\u751F\u6210\u7684 ",paraId:70,tocIndex:33},{value:"formKey",paraId:70,tocIndex:33},{value:`\u3002\u521B\u5EFA\u4EBA\u7531\u767B\u5F55\u6001\u53D6\u5F97\uFF0C\u8C03\u7528\u65B9\u4E0D\u80FD\u6307\u5B9A Owner\u3002
\u66F4\u65B0\u8BF7\u6C42\u5FC5\u987B\u4F20\u5F53\u524D `,paraId:70,tocIndex:33},{value:"version",paraId:70,tocIndex:33},{value:"\uFF0C\u53EF\u540C\u65F6\u4F20 ",paraId:70,tocIndex:33},{value:"formName/schemaDefinition/mongoEnabled/esEnabled/dataSourceType/permissionConfig/owners",paraId:70,tocIndex:33},{value:"\u3002",paraId:70,tocIndex:33},{value:"owners",paraId:70,tocIndex:33},{value:" \u82E5\u4F20\u5165\u4E0D\u5F97\u4E3A\u7A7A\uFF1B\u7248\u672C\u4E0D\u5339\u914D\u8FD4\u56DE HTTP 409 \u4E0E ",paraId:70,tocIndex:33},{value:"SCHEMA_VERSION_CONFLICT",paraId:70,tocIndex:33},{value:"\u3002",paraId:70,tocIndex:33},{value:"Method",paraId:71,tocIndex:34},{value:"URL",paraId:71,tocIndex:34},{value:"\u8BF7\u6C42\u5173\u952E\u5B57\u6BB5",paraId:71,tocIndex:34},{value:"\u4E0A\u9650",paraId:71,tocIndex:34},{value:"POST",paraId:71,tocIndex:34},{value:"/api/form/data/add",paraId:71,tocIndex:34},{value:"formKey,data",paraId:71,tocIndex:34},{value:" + ",paraId:71,tocIndex:34},{value:"Idempotency-Key",paraId:71,tocIndex:34},{value:" Header",paraId:71,tocIndex:34},{value:"\u5355\u6761",paraId:71,tocIndex:34},{value:"PUT",paraId:71,tocIndex:34},{value:"/api/form/data/update",paraId:71,tocIndex:34},{value:"id,version,formKey,data",paraId:71,tocIndex:34},{value:"\u5355\u6761\uFF0C\u5168\u91CF\u8986\u76D6 JSON",paraId:71,tocIndex:34},{value:"DELETE",paraId:71,tocIndex:34},{value:"/api/form/data/delete",paraId:71,tocIndex:34},{value:"Body ",paraId:71,tocIndex:34},{value:"formKey,dataId,version",paraId:71,tocIndex:34},{value:"\u5355\u6761",paraId:71,tocIndex:34},{value:"GET",paraId:71,tocIndex:34},{value:"/api/form/data/detail",paraId:71,tocIndex:34},{value:"Query ",paraId:71,tocIndex:34},{value:"formKey,dataId",paraId:71,tocIndex:34},{value:"\u5355\u6761",paraId:71,tocIndex:34},{value:"POST",paraId:71,tocIndex:34},{value:"/api/form/data/search",paraId:71,tocIndex:34},{value:"\u67E5\u8BE2 DTO",paraId:71,tocIndex:34},{value:"pageSize \u6700\u5927 200",paraId:71,tocIndex:34},{value:"POST",paraId:71,tocIndex:34},{value:"/api/form/data/batch",paraId:71,tocIndex:34},{value:"Data DTO \u6570\u7EC4",paraId:71,tocIndex:34},{value:"REST \u6700\u5927 500",paraId:71,tocIndex:34},{value:"DELETE",paraId:71,tocIndex:34},{value:"/api/form/data/batch",paraId:71,tocIndex:34},{value:"Body ",paraId:71,tocIndex:34},{value:"formKey,items[{id,version}]",paraId:71,tocIndex:34},{value:"REST \u6700\u5927 500",paraId:71,tocIndex:34},{value:"\u65B0\u589E\u8BF7\u6C42\uFF1A",paraId:71,tocIndex:34},{value:`{
  "formKey": "c74ecb481f0a4ed591f14749c9b1c562",
  "data": "{\\"customerName\\":\\"\u676D\u5DDE\u516C\u53F8\\",\\"employeeCount\\":120}"
}
`,paraId:72,tocIndex:34},{value:"\u6CE8\u610F\uFF1A",paraId:73,tocIndex:34},{value:"formKey",paraId:73,tocIndex:34},{value:" \u5FC5\u987B\u4F4D\u4E8E\u8BF7\u6C42\u6839\u5C42\u7EA7\uFF1B",paraId:73,tocIndex:34},{value:"data",paraId:73,tocIndex:34},{value:" \u662F JSON \u5B57\u7B26\u4E32\uFF0C\u4E0D\u8981\u8BEF\u4F20\u6210\uFF1A",paraId:73,tocIndex:34},{value:`{"data":{"formKey":"...","data":"..."}}
`,paraId:74,tocIndex:34},{value:"\u641C\u7D22\u8BF7\u6C42\uFF1A",paraId:75,tocIndex:34},{value:`{
  "formKey": "c74ecb481f0a4ed591f14749c9b1c562",
  "searchEngine": "mongo",
  "conditionTree": {
    "logic":"AND",
    "children":[{"fieldId":"active","exp":"=","value":"true"}]
  },
  "pageMode":"page",
  "pageNum":1,
  "pageSize":20,
  "sortField":"employeeCount",
  "sortOrder":2
}
`,paraId:76,tocIndex:34},{value:"Method",paraId:77,tocIndex:35},{value:"URL",paraId:77,tocIndex:35},{value:"\u7528\u9014",paraId:77,tocIndex:35},{value:"POST",paraId:77,tocIndex:35},{value:"/api/form/es/index",paraId:77,tocIndex:35},{value:"\u6839\u636E\u5B57\u6BB5\u5B9A\u4E49\u521B\u5EFA mapping/index",paraId:77,tocIndex:35},{value:"POST",paraId:77,tocIndex:35},{value:"/api/form/es/search",paraId:77,tocIndex:35},{value:"ES \u6761\u4EF6\u6811\u641C\u7D22",paraId:77,tocIndex:35},{value:"POST",paraId:77,tocIndex:35},{value:"/api/form/es/chart",paraId:77,tocIndex:35},{value:"\u56FE\u8868\u805A\u5408",paraId:77,tocIndex:35},{value:"GET",paraId:77,tocIndex:35},{value:"/api/form/es/count",paraId:77,tocIndex:35},{value:"\u672A\u5220\u9664\u6570\u636E\u8BA1\u6570",paraId:77,tocIndex:35},{value:"GET",paraId:77,tocIndex:35},{value:"/api/form/mongo-index/list",paraId:77,tocIndex:35},{value:"Mongo \u7D22\u5F15\u5217\u8868",paraId:77,tocIndex:35},{value:"POST",paraId:77,tocIndex:35},{value:"/api/form/mongo-index/create",paraId:77,tocIndex:35},{value:"\u521B\u5EFA\u7EC4\u5408\u7D22\u5F15",paraId:77,tocIndex:35},{value:"DELETE",paraId:77,tocIndex:35},{value:"/api/form/mongo-index/delete",paraId:77,tocIndex:35},{value:"\u5220\u9664\u7D22\u5F15",paraId:77,tocIndex:35},{value:"Tool",paraId:78,tocIndex:36},{value:"\u7528\u9014",paraId:78,tocIndex:36},{value:"\u8BFB\u5199",paraId:78,tocIndex:36},{value:"create_form_schema",paraId:78,tocIndex:36},{value:"\u521B\u5EFA Schema",paraId:78,tocIndex:36},{value:"\u5199",paraId:78,tocIndex:36},{value:"update_data_source",paraId:78,tocIndex:36},{value:"\u66F4\u65B0\u6570\u636E\u6E90\u7C7B\u578B/\u5F00\u5173",paraId:78,tocIndex:36},{value:"\u5199\uFF0COwner",paraId:78,tocIndex:36},{value:"get_form_schema_detail",paraId:78,tocIndex:36},{value:"Schema \u8BE6\u60C5",paraId:78,tocIndex:36},{value:"\u8BFB",paraId:78,tocIndex:36},{value:"get_form_schema_list",paraId:78,tocIndex:36},{value:"Schema \u5217\u8868",paraId:78,tocIndex:36},{value:"\u8BFB",paraId:78,tocIndex:36},{value:"get_form_placeholders",paraId:78,tocIndex:36},{value:"\u6743\u9650\u5360\u4F4D\u7B26",paraId:78,tocIndex:36},{value:"\u8BFB",paraId:78,tocIndex:36},{value:"search_form_data",paraId:78,tocIndex:36},{value:"Mongo/\u9ED8\u8BA4\u6761\u4EF6\u67E5\u8BE2",paraId:78,tocIndex:36},{value:"\u8BFB",paraId:78,tocIndex:36},{value:"get_form_data_detail",paraId:78,tocIndex:36},{value:"\u6570\u636E\u8BE6\u60C5",paraId:78,tocIndex:36},{value:"\u8BFB",paraId:78,tocIndex:36},{value:"create_form_data",paraId:78,tocIndex:36},{value:"\u65B0\u589E\u6570\u636E",paraId:78,tocIndex:36},{value:"\u5199\uFF0CAgent Tool \u5F3A\u5236 Owner",paraId:78,tocIndex:36},{value:"update_form_data",paraId:78,tocIndex:36},{value:"\u5168\u91CF\u66F4\u65B0\u6570\u636E",paraId:78,tocIndex:36},{value:"\u5199\uFF0CAgent Tool \u5F3A\u5236 Owner",paraId:78,tocIndex:36},{value:"delete_form_data",paraId:78,tocIndex:36},{value:"\u903B\u8F91\u5220\u9664",paraId:78,tocIndex:36},{value:"\u5199\uFF0CAgent Tool \u5F3A\u5236 Owner",paraId:78,tocIndex:36},{value:"batch_create_form_data",paraId:78,tocIndex:36},{value:"\u6279\u91CF\u65B0\u589E",paraId:78,tocIndex:36},{value:"\u5199\uFF0C\u6700\u5927 100",paraId:78,tocIndex:36},{value:"batch_delete_form_data",paraId:78,tocIndex:36},{value:"\u6279\u91CF\u5220\u9664",paraId:78,tocIndex:36},{value:"\u5199\uFF0C\u6700\u5927 100",paraId:78,tocIndex:36},{value:"es_search_form_data",paraId:78,tocIndex:36},{value:"ES \u67E5\u8BE2",paraId:78,tocIndex:36},{value:"\u8BFB",paraId:78,tocIndex:36},{value:"es_chart_query",paraId:78,tocIndex:36},{value:"ES \u805A\u5408",paraId:78,tocIndex:36},{value:"\u8BFB",paraId:78,tocIndex:36},{value:"get_form_data_count",paraId:78,tocIndex:36},{value:"ES \u8BA1\u6570",paraId:78,tocIndex:36},{value:"\u8BFB",paraId:78,tocIndex:36},{value:"Agent Tool \u4E0A\u4E0B\u6587\u94FE\u8DEF\uFF1A",paraId:78,tocIndex:36},{value:`AgentRequestContext
\u2192 employeeId
\u2192 employeeNo
\u2192 \u7EC4\u7EC7\u5355\u5143\u4FE1\u606F
\u2192 FormCallerContext
\u2192 \u6743\u9650\u53D8\u91CF\u9884\u8BA1\u7B97
\u2192 Service
`,paraId:79,tocIndex:36},{value:`{
  "userId": "100001",
  "clientId": "\u793A\u4F8B\u4E1A\u52A1\u7CFB\u7EDF",
  "params": {
    "userId": "100001",
    "employeeNo": "WB100001",
    "orgPaths": ["\u534E\u4E1C\u5927\u533A"],
    "orgPathsWithSub": ["\u534E\u4E1C\u5927\u533A", "\u6D59\u6C5F\u56E2\u961F"]
  }
}
`,paraId:80,tocIndex:38},{value:"REST \u4ECE\u7EDF\u4E00\u8EAB\u4EFD\u8BA4\u8BC1\u7CFB\u7EDF\u767B\u5F55\u6001\u4E0E ",paraId:81,tocIndex:38},{value:"WebRequestContext",paraId:81,tocIndex:38},{value:" \u6784\u5EFA\uFF1BAgent Tool \u4ECE Agent \u8BF7\u6C42\u4E0A\u4E0B\u6587\u6784\u5EFA\u3002",paraId:81,tocIndex:38},{value:`{
  "enabled": true,
  "rootNode": {
    "logic": "OR",
    "children": [
      {"fieldId":"ownerEmployeeNo","exp":"=","value":"\${param:employeeNo}"},
      {"fieldId":"orgName","exp":"in","value":"\${param:orgPathsWithSub}"}
    ]
  },
  "writePermission": {
    "createCondition": {"fieldId":"orgName","exp":"in","value":"\${param:orgPaths}"},
    "updateCondition": {"fieldId":"ownerEmployeeNo","exp":"=","value":"\${param:employeeNo}"},
    "deleteCondition": {"fieldId":"ownerEmployeeNo","exp":"=","value":"\${param:employeeNo}"}
  }
}
`,paraId:82,tocIndex:39},{value:"\u5360\u4F4D\u7B26",paraId:83,tocIndex:40},{value:"\u7C7B\u578B",paraId:83,tocIndex:40},{value:"\u503C",paraId:83,tocIndex:40},{value:"${param:employeeNo}",paraId:83,tocIndex:40},{value:"single",paraId:83,tocIndex:40},{value:"\u5F53\u524D\u7528\u6237\u5458\u5DE5\u7F16\u53F7",paraId:83,tocIndex:40},{value:"${param:orgPaths}",paraId:83,tocIndex:40},{value:"list",paraId:83,tocIndex:40},{value:"\u6240\u5C5E\u7EC4\u7EC7\u5355\u5143",paraId:83,tocIndex:40},{value:"${param:orgPathsWithSub}",paraId:83,tocIndex:40},{value:"list",paraId:83,tocIndex:40},{value:"\u6240\u5C5E\u7EC4\u7EC7\u5355\u5143\u53CA\u4E0B\u7EA7",paraId:83,tocIndex:40},{value:"${fn:managedOrgNames}",paraId:83,tocIndex:40},{value:"list",paraId:83,tocIndex:40},{value:"\u7528\u6237\u4F5C\u4E3A\u7BA1\u7406\u5458\u8D1F\u8D23\u7684\u7EC4\u7EC7\u5355\u5143",paraId:83,tocIndex:40},{value:"${user.xxx}",paraId:83,tocIndex:40},{value:"legacy",paraId:83,tocIndex:40},{value:"\u517C\u5BB9\u65E7\u683C\u5F0F",paraId:83,tocIndex:40},{value:`graph TD
    A["\u8BFB\u53D6 permissionConfig"] --> B{"\u5F53\u524D\u7528\u6237\u662F Owner"}
    B -->|\u662F| C["\u65E0\u6761\u4EF6\u653E\u884C"]
    B -->|\u5426| D{"enabled \u4E3A true"}
    D -->|\u5426| C
    D -->|\u662F| E["\u9009\u62E9 READ \u6216\u5199\u64CD\u4F5C\u6761\u4EF6\u6811"]
    E --> F["\u66FF\u6362 param/fn \u5360\u4F4D\u7B26"]
    F --> G["\u5E03\u5C14\u5316\u7B80"]
    G --> H{"\u7ED3\u679C"}
    H -->|TRUE| C
    H -->|FALSE| I["\u62D2\u7EDD\u6216\u8FD4\u56DE\u7A7A"]
    H -->|CONDITION| J["\u4E0E\u7528\u6237\u6761\u4EF6 AND \u5408\u5E76"]
`,paraId:84,tocIndex:41},{value:`**\u3010\u73B0\u72B6\u98CE\u9669\u3011**\u6743\u9650 JSON \u89E3\u6790\u5931\u8D25\u65F6\u8BFB\u6743\u9650\u903B\u8F91\u6309\u672A\u542F\u7528\u5904\u7406\uFF0C\u5B58\u5728\u914D\u7F6E\u635F\u574F\u540E\u653E\u5927\u6743\u9650\u7684\u98CE\u9669\u3002
**\u3010\u589E\u5F3A\u3011**\u751F\u4EA7\u73AF\u5883\u5E94 fail closed\uFF1A\u914D\u7F6E\u53D1\u5E03\u65F6\u5F3A\u6821\u9A8C\uFF1B\u8FD0\u884C\u65F6\u89E3\u6790\u5931\u8D25\u62D2\u7EDD\u8BF7\u6C42\u5E76\u544A\u8B66\uFF1BOwner \u64CD\u4F5C\u8BB0\u5F55\u5BA1\u8BA1\u65E5\u5FD7\uFF1B`,paraId:85,tocIndex:41},{value:"clientId",paraId:85,tocIndex:41},{value:" \u5FC5\u987B\u7EB3\u5165 Schema \u5217\u8868\u3001\u8BE6\u60C5\u548C\u6570\u636E\u8BBF\u95EE\u9694\u79BB\u3002",paraId:85,tocIndex:41},{value:"\u672C\u7AE0\u56FE\u793A\u8BF4\u660E\u65E7\u5B9E\u73B0\u7684\u6570\u636E\u6D41\u548C\u8FC1\u79FB\u98CE\u9669\uFF1B\u5168\u65B0\u5F00\u53D1\u7684\u5199\u5165\u6D41\u7A0B\u5FC5\u987B\u6267\u884C\u7B2C 32 \u7AE0\u7684 MySQL \u4E8B\u5B9E\u6E90 + Outbox \u65B9\u6848\u3002",paraId:86,tocIndex:42},{value:`sequenceDiagram
    participant C as Client
    participant S as SchemaService
    participant M as MySQL
    participant E as Elasticsearch
    C->>S: formName + schemaDefinition
    S->>S: \u6821\u9A8C Schema
    S->>S: \u6821\u9A8C\u81F3\u5C11\u4E00\u4E2A\u641C\u7D22\u5F15\u64CE\u5F00\u542F
    S->>S: \u751F\u6210 formKey \u4E0E Owner
    S->>M: INSERT ai_form_schema
    opt esEnabled=1
        S->>E: \u9884\u5EFA mapping + v1 + alias
    end
    S-->>C: formKey
`,paraId:87,tocIndex:43},{value:"ES \u9884\u5EFA\u5931\u8D25\u53EA\u8BB0\u5F55\u65E5\u5FD7\uFF0C\u4E0D\u56DE\u6EDA Schema \u521B\u5EFA\uFF1B\u540E\u7EED\u5168\u91CF\u540C\u6B65\u515C\u5E95\u3002",paraId:88,tocIndex:43},{value:`sequenceDiagram
    participant C as Client
    participant D as DataService
    participant P as Permission
    participant M as MySQL
    participant G as MongoDB
    participant E as Elasticsearch
    C->>D: formKey + data
    D->>D: \u6821\u9A8C\u540C\u6B65\u9501\u4E0E\u6570\u636E\u6E90\u7C7B\u578B
    D->>P: CREATE \u6743\u9650
    P-->>D: \u653E\u884C
    D->>M: \u5F00\u542F MySQL \u4E8B\u52A1\u5E76 INSERT
    opt mongoEnabled=1
        D->>G: save \u7C7B\u578B\u5316\u6587\u6863
        alt Mongo \u5931\u8D25
            G-->>D: \u5F02\u5E38
            D->>M: \u6807\u8BB0\u4E8B\u52A1\u56DE\u6EDA
            D-->>C: \u5931\u8D25
        end
    end
    M-->>D: \u63D0\u4EA4\u4E8B\u52A1
    opt esEnabled=1
        D->>E: \u4E8B\u52A1\u540E\u5199 ES
        alt ES \u5931\u8D25
            D->>M: \u5199 ai_form_data_es_sync
        end
    end
    D-->>C: dataId
`,paraId:89,tocIndex:44},{value:"\u66F4\u65B0\u662F\u5B8C\u6574 ",paraId:90,tocIndex:45},{value:"data",paraId:90,tocIndex:45},{value:" JSON \u8986\u76D6\uFF0C\u4E0D\u662F JSON Patch\u3002",paraId:90,tocIndex:45},{value:"\u66F4\u65B0\u5148\u8BFB\u53D6\u539F\u8BB0\u5F55\u5E76\u6821\u9A8C UPDATE \u6743\u9650\u3002",paraId:90,tocIndex:45},{value:"MySQL \u66F4\u65B0\u4E0E Mongo ",paraId:90,tocIndex:45},{value:"save",paraId:90,tocIndex:45},{value:" \u4F7F\u7528\u540C\u4E00\u5E94\u7528\u7F16\u6392\u4E8B\u52A1\u8DEF\u5F84\u3002",paraId:90,tocIndex:45},{value:"\u5220\u9664\u5728 MySQL \u4E2D\u8BBE\u7F6E ",paraId:90,tocIndex:45},{value:"is_deleted=1",paraId:90,tocIndex:45},{value:"\uFF0CMongo \u7269\u7406\u5220\u9664\uFF0CES \u6587\u6863\u8BBE\u7F6E ",paraId:90,tocIndex:45},{value:"isDeleted=1",paraId:90,tocIndex:45},{value:"\u3002",paraId:90,tocIndex:45},{value:"\u5BF9\u5916\u65B0\u589E/\u66F4\u65B0/\u5220\u9664\u62D2\u7EDD ",paraId:90,tocIndex:45},{value:"dataSourceType=1/2",paraId:90,tocIndex:45},{value:" \u7684\u5916\u90E8\u8868\u5355\u76F4\u63A5\u5199\u5165\u3002",paraId:90,tocIndex:45},{value:`Mongo \u547D\u4E2D
\u2192 \u5426\u5219 ES \u547D\u4E2D\u4E14\u672A\u903B\u8F91\u5220\u9664
\u2192 \u5426\u5219\u6309 dataSourceType \u4ECE MySQL \u515C\u5E95
\u2192 \u5BF9\u6700\u7EC8\u8BB0\u5F55\u6267\u884C\u884C\u7EA7\u6743\u9650\u6821\u9A8C
`,paraId:91,tocIndex:46},{value:`graph LR
    Q["Search DTO"] --> P["\u5408\u5E76\u6743\u9650\u6761\u4EF6"]
    P --> E{"searchEngine"}
    E -->|mongo/\u7A7A| M["Mongo \u6761\u4EF6\u67E5\u8BE2"]
    E -->|es| S["ES \u6761\u4EF6\u641C\u7D22"]
    M --> R["FormDataVO PageResult"]
    S --> R
`,paraId:92,tocIndex:47},{value:"**\u3010\u73B0\u72B6\u3011**\u51C6\u786E\u63CF\u8FF0\u5982\u4E0B\uFF1A",paraId:93,tocIndex:49},{value:"MySQL \u7531 ",paraId:94,tocIndex:49},{value:"TransactionTemplate",paraId:94,tocIndex:49},{value:" \u7BA1\u7406\u672C\u5730\u4E8B\u52A1\u3002",paraId:94,tocIndex:49},{value:"Mongo \u5199\u5165\u5728\u4E8B\u52A1\u56DE\u8C03\u4E2D\u8C03\u7528\uFF0C\u4F46 Mongo \u5E76\u672A\u52A0\u5165 MySQL XA \u4E8B\u52A1\u3002",paraId:94,tocIndex:49},{value:"Mongo \u629B\u5F02\u5E38\u65F6\u5E94\u7528\u8C03\u7528 ",paraId:94,tocIndex:49},{value:"status.setRollbackOnly()",paraId:94,tocIndex:49},{value:" \u56DE\u6EDA MySQL\u3002",paraId:94,tocIndex:49},{value:"ES \u5728 MySQL \u4E8B\u52A1\u63D0\u4EA4\u540E\u5199\u5165\u3002",paraId:94,tocIndex:49},{value:"ES \u5931\u8D25\u53EA\u8BB0\u5F55 ",paraId:94,tocIndex:49},{value:"ai_form_data_es_sync",paraId:94,tocIndex:49},{value:"\uFF0C\u63A5\u53E3\u4ECD\u6210\u529F\u3002",paraId:94,tocIndex:49},{value:"Mongo \u5931\u8D25\u8BB0\u5F55\u5728\u4E8B\u52A1\u5916\u5199\u5165 ",paraId:94,tocIndex:49},{value:"ai_form_data_mongo_sync",paraId:94,tocIndex:49},{value:`\uFF0C\u4E3B\u8BF7\u6C42\u5931\u8D25\u3002
\u56E0\u6B64\u53EF\u79F0\u4E3A\u201C\u5E94\u7528\u7F16\u6392\u7684 MySQL + Mongo \u53CC\u5199\u201D\uFF0C\u4E0D\u80FD\u79F0\u4E3A\u4E25\u683C\u8DE8\u5E93\u4E8B\u52A1\u3002`,paraId:94,tocIndex:49},{value:"\u9636\u6BB5",paraId:95,tocIndex:50},{value:"\u5BA2\u6237\u7AEF\u7ED3\u679C",paraId:95,tocIndex:50},{value:"MySQL",paraId:95,tocIndex:50},{value:"Mongo",paraId:95,tocIndex:50},{value:"ES",paraId:95,tocIndex:50},{value:"\u8865\u507F",paraId:95,tocIndex:50},{value:"MySQL \u5931\u8D25",paraId:95,tocIndex:50},{value:"\u5931\u8D25",paraId:95,tocIndex:50},{value:"\u56DE\u6EDA",paraId:95,tocIndex:50},{value:"\u672A\u5199/\u4E0D\u786E\u5B9A",paraId:95,tocIndex:50},{value:"\u4E0D\u5199",paraId:95,tocIndex:50},{value:"\u67E5\u65E5\u5FD7",paraId:95,tocIndex:50},{value:"Mongo \u5931\u8D25",paraId:95,tocIndex:50},{value:"\u5931\u8D25",paraId:95,tocIndex:50},{value:"\u56DE\u6EDA",paraId:95,tocIndex:50},{value:"\u53EF\u80FD\u5931\u8D25\u6216\u90E8\u5206\u5B8C\u6210",paraId:95,tocIndex:50},{value:"\u4E0D\u5199",paraId:95,tocIndex:50},{value:"Mongo \u5931\u8D25\u8868\uFF1B\u9700\u5BF9\u8D26",paraId:95,tocIndex:50},{value:"ES \u5931\u8D25",paraId:95,tocIndex:50},{value:"\u6210\u529F",paraId:95,tocIndex:50},{value:"\u5DF2\u63D0\u4EA4",paraId:95,tocIndex:50},{value:"\u5DF2\u6210\u529F/\u672A\u542F\u7528",paraId:95,tocIndex:50},{value:"\u7F3A\u5931\u6216\u65E7\u503C",paraId:95,tocIndex:50},{value:"ES \u5931\u8D25\u8868\uFF0C\u5F53\u524D\u91CD\u8BD5\u672A\u5B8C\u6574\u5B9E\u73B0",paraId:95,tocIndex:50},{value:"\u54CD\u5E94\u4E22\u5931",paraId:95,tocIndex:50},{value:"\u5BA2\u6237\u7AEF\u672A\u77E5",paraId:95,tocIndex:50},{value:"\u53EF\u80FD\u6210\u529F",paraId:95,tocIndex:50},{value:"\u53EF\u80FD\u6210\u529F",paraId:95,tocIndex:50},{value:"\u53EF\u80FD\u6210\u529F",paraId:95,tocIndex:50},{value:"\u5F53\u524D\u65B0\u589E\u65E0\u5E42\u7B49\u952E",paraId:95,tocIndex:50},{value:"Mongo \u4E0D\u662F MySQL \u4E8B\u52A1\u53C2\u4E0E\u8005\uFF1A\u82E5 Mongo \u5DF2\u6210\u529F\u4F46\u968F\u540E\u53D1\u751F\u8FDB\u7A0B\u6545\u969C\u3001MySQL \u6700\u7EC8\u56DE\u6EDA\uFF0C\u4ECD\u53EF\u80FD\u7559\u4E0B\u5B64\u513F\u6587\u6863\uFF0C\u5FC5\u987B\u4F9D\u9760\u5BF9\u8D26\u4FEE\u590D\u3002",paraId:95,tocIndex:50},{value:`\u672C\u8282\u4E3A\u6982\u5FF5\u8BF4\u660E\uFF1B\u5168\u65B0\u5B9E\u73B0\u7684\u6700\u7EC8 DDL\u3001\u72B6\u6001\u679A\u4E3E\u3001\u8BA4\u9886\u3001\u91CD\u8BD5\u3001\u4E71\u5E8F\u4FDD\u62A4\u4E0E\u6B7B\u4FE1\u91CD\u653E\u5FC5\u987B\u4E25\u683C\u6267\u884C\u7B2C 32.8 \u8282\u3002
\u63A8\u8350\u5C06 MySQL \u8BBE\u4E3A\u552F\u4E00\u4E8B\u5B9E\u6E90\uFF1A`,paraId:96,tocIndex:51},{value:`MySQL \u4E8B\u52A1\uFF1A\u4E1A\u52A1\u6570\u636E + outbox \u4E8B\u4EF6
\u2192 \u4E8B\u52A1\u63D0\u4EA4
\u2192 \u6D88\u8D39\u8005\u8BFB\u53D6 outbox
\u2192 \u5E42\u7B49 upsert Mongo
\u2192 \u5E42\u7B49 upsert ES
\u2192 \u6807\u8BB0\u5404\u76EE\u6807\u5B8C\u6210
\u2192 \u5931\u8D25\u6307\u6570\u9000\u907F
\u2192 \u8D85\u9650\u8FDB\u5165 DEAD \u5E76\u544A\u8B66
`,paraId:97,tocIndex:51},{value:"\u5EFA\u8BAE Outbox DDL\uFF1A",paraId:98,tocIndex:51},{value:`CREATE TABLE ai_form_outbox (
  id BIGINT NOT NULL AUTO_INCREMENT,
  event_id VARCHAR(64) NOT NULL,
  form_key VARCHAR(64) NOT NULL,
  data_id BIGINT NOT NULL,
  event_type VARCHAR(32) NOT NULL,
  payload LONGTEXT NOT NULL,
  mongo_status TINYINT NOT NULL DEFAULT 0,
  es_status TINYINT NOT NULL DEFAULT 0,
  retry_count INT NOT NULL DEFAULT 0,
  next_retry_time DATETIME DEFAULT NULL,
  last_error VARCHAR(1024) DEFAULT NULL,
  gmt_create DATETIME NOT NULL,
  gmt_modified DATETIME NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uk_event_id (event_id),
  KEY idx_retry (mongo_status, es_status, next_retry_time)
);
`,paraId:99,tocIndex:51},{value:"\u6D88\u8D39\u8005\u4EE5 ",paraId:100,tocIndex:51},{value:"(formKey,dataId,eventVersion)",paraId:100,tocIndex:51},{value:" \u5E42\u7B49\u3002\u5220\u9664\u4F7F\u7528\u5893\u7891\u4E8B\u4EF6\uFF0C\u4E0D\u80FD\u53EA\u4F9D\u8D56\u7269\u7406\u5220\u9664\u3002\u53EA\u6709 Mongo/ES \u90FD\u5B8C\u6210\u540E\u624D\u5F52\u6863\u4E8B\u4EF6\u3002",paraId:100,tocIndex:51},{value:"Schema JSON \u53D8\u5316\u6216\u641C\u7D22\u5F15\u64CE\u4ECE 0 \u5207\u5230 1 \u65F6\u521B\u5EFA\u5168\u91CF\u540C\u6B65\u4EFB\u52A1\u3002",paraId:101,tocIndex:53},{value:"ai_form_sync_progress",paraId:101,tocIndex:53},{value:" \u5206\u522B\u521B\u5EFA Mongo\u3001ES \u4EFB\u52A1\u3002",paraId:101,tocIndex:53},{value:"\u540C\u6B65\u671F\u95F4\u8BFB\u64CD\u4F5C\u7EE7\u7EED\u8BFB\u53D6\u65E7 Collection/alias\u3002",paraId:101,tocIndex:53},{value:"\u5199\u64CD\u4F5C\u901A\u8FC7 ",paraId:101,tocIndex:53},{value:"sync_status",paraId:101,tocIndex:53},{value:" \u88AB\u9650\u5236\u3002",paraId:101,tocIndex:53},{value:"Mongo \u5199\u5165 ",paraId:101,tocIndex:53},{value:"_tmp",paraId:101,tocIndex:53},{value:" Collection\uFF0C\u5B8C\u6210\u540E\u91CD\u547D\u540D\u5207\u6362\u3002",paraId:101,tocIndex:53},{value:"ES \u5199\u5165\u975E\u6D3B\u8DC3 ",paraId:101,tocIndex:53},{value:"_v1/_v2",paraId:101,tocIndex:53},{value:"\uFF0C\u5B8C\u6210\u540E\u539F\u5B50\u5207\u6362 alias\u3002",paraId:101,tocIndex:53},{value:`graph TD
    A["Schema \u66F4\u65B0"] --> B["\u521B\u5EFA\u540C\u6B65\u4EFB\u52A1"]
    B --> C["\u83B7\u53D6\u5168\u5C40\u9501\u4E0E\u8868\u5355\u9501"]
    C --> D["\u521B\u5EFA Mongo tmp"]
    C --> E["\u521B\u5EFA ES \u975E\u6D3B\u8DC3\u7D22\u5F15"]
    D --> F["\u4ECE MySQL \u5206\u6279\u8BFB\u53D6\u5E76\u7C7B\u578B\u5316"]
    E --> F
    F --> G["\u6821\u9A8C\u540C\u6B65\u6570\u91CF"]
    G --> H["Mongo Collection \u91CD\u547D\u540D"]
    G --> I["ES Alias \u539F\u5B50\u5207\u6362"]
    H --> J["\u5B8C\u6210\u4EFB\u52A1\u5E76\u91CA\u653E\u9501"]
    I --> J
`,paraId:102,tocIndex:53},{value:"\u521B\u5EFA Schema \u65F6 ",paraId:103,tocIndex:54},{value:"version=1",paraId:103,tocIndex:54},{value:"\uFF0C\u4F46 ",paraId:103,tocIndex:54},{value:"updateSchema",paraId:103,tocIndex:54},{value:" \u672A\u9012\u589E\u7248\u672C\uFF0C\u4E5F\u6CA1\u6709\u5386\u53F2\u7248\u672C\u8868\u3002ES ",paraId:103,tocIndex:54},{value:"_v1/_v2",paraId:103,tocIndex:54},{value:" \u662F\u53CC\u7F13\u51B2\u7269\u7406\u7D22\u5F15\uFF0C\u4E0D\u7B49\u4E8E\u4E1A\u52A1 Schema \u7248\u672C\u3002",paraId:103,tocIndex:54},{value:"\u672C\u8282 DDL \u7528\u4E8E\u89E3\u91CA\u6F14\u8FDB\u601D\u8DEF\uFF1B\u5168\u65B0\u5B9E\u73B0\u5FC5\u987B\u4F7F\u7528\u7B2C 32.2 \u8282\u5305\u542B clientId\u3001JSON \u7C7B\u578B\u548C\u6700\u7EC8\u7EA6\u675F\u7684\u8868\u5B9A\u4E49\u3002",paraId:104,tocIndex:55},{value:`CREATE TABLE ai_form_schema_version (
  id BIGINT NOT NULL AUTO_INCREMENT,
  form_key VARCHAR(64) NOT NULL,
  version INT NOT NULL,
  schema_definition LONGTEXT NOT NULL,
  change_type VARCHAR(32) NOT NULL,
  change_summary VARCHAR(1024) DEFAULT NULL,
  migration_status TINYINT NOT NULL DEFAULT 0,
  creator VARCHAR(64) NOT NULL,
  gmt_create DATETIME NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uk_form_version (form_key, version)
);
`,paraId:105,tocIndex:55},{value:"\u66F4\u65B0\u91C7\u7528\u4E50\u89C2\u9501\uFF1A",paraId:106,tocIndex:55},{value:`UPDATE ai_form_schema
SET schema_definition=?, version=version+1, modifier=?, gmt_modified=NOW()
WHERE form_key=? AND version=? AND is_deleted=0;
`,paraId:107,tocIndex:55},{value:"\u5F71\u54CD\u884C\u6570\u4E0D\u662F 1 \u65F6\u8FD4\u56DE 409\uFF0C\u8981\u6C42\u5BA2\u6237\u7AEF\u5237\u65B0 Schema \u540E\u91CD\u8BD5\u3002",paraId:108,tocIndex:55},{value:"\u53D8\u66F4",paraId:109,tocIndex:56},{value:"\u7B49\u7EA7",paraId:109,tocIndex:56},{value:"\u53D1\u5E03\u7B56\u7565",paraId:109,tocIndex:56},{value:"\u4FEE\u6539 fieldName",paraId:109,tocIndex:56},{value:"\u517C\u5BB9",paraId:109,tocIndex:56},{value:"\u76F4\u63A5\u53D1\u5E03",paraId:109,tocIndex:56},{value:"\u65B0\u589E\u53EF\u9009\u5B57\u6BB5",paraId:109,tocIndex:56},{value:"\u517C\u5BB9",paraId:109,tocIndex:56},{value:"\u76F4\u63A5\u53D1\u5E03\u5E76\u540C\u6B65\u7D22\u5F15",paraId:109,tocIndex:56},{value:"\u65B0\u589E\u5E26\u9ED8\u8BA4\u503C\u5FC5\u586B\u5B57\u6BB5",paraId:109,tocIndex:56},{value:"\u6761\u4EF6\u517C\u5BB9",paraId:109,tocIndex:56},{value:"\u5148\u56DE\u586B\u518D\u542F\u7528 required",paraId:109,tocIndex:56},{value:"\u5220\u9664\u5B57\u6BB5",paraId:109,tocIndex:56},{value:"\u4E0D\u517C\u5BB9",paraId:109,tocIndex:56},{value:"\u5148\u505C\u6B62\u5199\u5165\uFF0C\u4FDD\u7559\u8BFB\u53D6\u7A97\u53E3\uFF0C\u518D\u6E05\u7406",paraId:109,tocIndex:56},{value:"\u91CD\u547D\u540D fieldId",paraId:109,tocIndex:56},{value:"\u4E0D\u517C\u5BB9",paraId:109,tocIndex:56},{value:"\u65B0\u65E7\u5B57\u6BB5\u53CC\u5199\u5E76\u8FC1\u79FB",paraId:109,tocIndex:56},{value:"string\u2192text",paraId:109,tocIndex:56},{value:"\u6761\u4EF6\u517C\u5BB9",paraId:109,tocIndex:56},{value:"\u91CD\u5EFA ES Mapping",paraId:109,tocIndex:56},{value:"string\u2192integer/date",paraId:109,tocIndex:56},{value:"\u4E0D\u517C\u5BB9",paraId:109,tocIndex:56},{value:"\u9884\u626B\u63CF\u3001\u8F6C\u6362\u5931\u8D25\u6E05\u5355\u3001\u8FC1\u79FB",paraId:109,tocIndex:56},{value:"\u4FEE\u6539\u6570\u7EC4\u5143\u7D20\u7C7B\u578B",paraId:109,tocIndex:56},{value:"\u4E0D\u517C\u5BB9",paraId:109,tocIndex:56},{value:"\u5168\u91CF\u8FC1\u79FB",paraId:109,tocIndex:56},{value:"\u8FC1\u79FB\u6D41\u7A0B\uFF1A\u8349\u7A3F Schema \u2192 diff \u2192 \u517C\u5BB9\u6027\u68C0\u67E5 \u2192 \u6570\u636E\u9884\u626B\u63CF \u2192 \u521B\u5EFA\u7248\u672C \u2192 \u5168\u91CF\u8FC1\u79FB \u2192 \u6821\u9A8C \u2192 \u5207\u6362 \u2192 \u89C2\u5BDF \u2192 \u6E05\u7406\u65E7\u7248\u672C\u3002",paraId:109,tocIndex:56},{value:"dataSourceType",paraId:110,tocIndex:57},{value:"\u6570\u636E\u8868",paraId:110,tocIndex:57},{value:"\u5199\u5165\u6A21\u5F0F",paraId:110,tocIndex:57},{value:"API CRUD",paraId:110,tocIndex:57},{value:"0",paraId:110,tocIndex:57},{value:"ai_form_data",paraId:110,tocIndex:57},{value:"\u6B63\u5E38 API \u5199\u5165",paraId:110,tocIndex:57},{value:"\u5141\u8BB8",paraId:110,tocIndex:57},{value:"1",paraId:110,tocIndex:57},{value:"ai_form_data_external",paraId:110,tocIndex:57},{value:"\u5916\u90E8\u5168\u91CF\u8986\u76D6",paraId:110,tocIndex:57},{value:"\u62D2\u7EDD\u666E\u901A CRUD",paraId:110,tocIndex:57},{value:"2",paraId:110,tocIndex:57},{value:"ai_form_data_incremental",paraId:110,tocIndex:57},{value:"\u6309 date_key UPSERT",paraId:110,tocIndex:57},{value:"\u62D2\u7EDD\u666E\u901A CRUD",paraId:110,tocIndex:57},{value:"\u589E\u91CF\u8868\u4F7F\u7528\u552F\u4E00\u952E\uFF1A",paraId:110,tocIndex:57},{value:`UNIQUE KEY uk_form_datekey (form_key, date_key)
`,paraId:111,tocIndex:57},{value:"\u5916\u90E8\u589E\u91CF\u5F53\u524D\u6309 ",paraId:112,tocIndex:57},{value:"gmt_modified",paraId:112,tocIndex:57},{value:" \u67E5\u8BE2 ",paraId:112,tocIndex:57},{value:"[pt, nt)",paraId:112,tocIndex:57},{value:"\u3002Mongo \u6216\u6574\u4F53\u5F02\u5E38\u65F6\u4E0D\u4F1A\u63A8\u8FDB\u6E38\u6807\uFF1B\u4F46 ES bulk \u4EC5\u90E8\u5206\u5931\u8D25\u65F6\u5F53\u524D\u5B9E\u73B0\u4ECD\u4F1A\u63A8\u8FDB ",paraId:112,tocIndex:57},{value:"last_sync_time=nt",paraId:112,tocIndex:57},{value:`\uFF0C\u5B58\u5728\u5931\u8D25\u8BB0\u5F55\u8D8A\u8FC7\u65F6\u95F4\u7A97\u53E3\u7684\u98CE\u9669\u3002\u589E\u5F3A\u7248\u5FC5\u987B\u5728\u6240\u6709\u76EE\u6807\u6210\u529F\u540E\u518D\u63A8\u8FDB\u6E38\u6807\uFF0C\u6216\u5C06\u5931\u8D25 ID \u6301\u4E45\u5316\u91CD\u8BD5\u3002
**\u3010\u589E\u5F3A\u3011**\u5E94\u589E\u52A0\uFF1A`,paraId:112,tocIndex:57},{value:"\u6E90\u7AEF\u7A33\u5B9A\u6E38\u6807\u4F18\u5148\u4E8E\u7EAF\u65F6\u95F4\u6233\u3002",paraId:113,tocIndex:57},{value:"\u65F6\u95F4\u6233\u76F8\u540C\u8BB0\u5F55\u4F7F\u7528 ",paraId:113,tocIndex:57},{value:"(gmt_modified,id)",paraId:113,tocIndex:57},{value:" \u590D\u5408\u6E38\u6807\u3002",paraId:113,tocIndex:57},{value:"\u6279\u6B21 checksum\u3001\u6E90/\u76EE\u6807 count \u548C\u62BD\u6837 hash\u3002",paraId:113,tocIndex:57},{value:"\u5931\u8D25\u4E0D\u63A8\u8FDB\u6E38\u6807\uFF0C\u91CD\u8DD1\u4F9D\u8D56 ",paraId:113,tocIndex:57},{value:"date_key",paraId:113,tocIndex:57},{value:" \u5E42\u7B49\u3002",paraId:113,tocIndex:57},{value:"\u5168\u65B0\u9879\u76EE\u4EE5 LTS\u3001\u751F\u6001\u517C\u5BB9\u548C\u53EF\u8FD0\u7EF4\u6027\u4F18\u5148\uFF0C\u4E0D\u76F4\u63A5\u6CBF\u7528\u65E7\u7CFB\u7EDF\u7248\u672C\uFF0C\u4E5F\u4E0D\u91C7\u7528 alpha\u3001beta\u3001rc\u3001EA \u6216\u521A\u53D1\u5E03\u4F46\u4F9D\u8D56\u751F\u6001\u5C1A\u672A\u9A8C\u8BC1\u7684\u7248\u672C\u3002\u8868\u4E2D ",paraId:114,tocIndex:59},{value:"x",paraId:114,tocIndex:59},{value:" \u8868\u793A\u5728\u5BF9\u5E94\u5927\u7248\u672C\u5185\u4F7F\u7528\u901A\u8FC7\u6D4B\u8BD5\u7684\u6700\u65B0\u5B89\u5168\u8865\u4E01\uFF0C\u5E76\u901A\u8FC7 Maven Wrapper\u3001",paraId:114,tocIndex:59},{value:"package-lock.json",paraId:114,tocIndex:59},{value:"\u3001\u5BB9\u5668\u955C\u50CF digest \u548C\u90E8\u7F72\u6E05\u5355\u9501\u5B9A\u5B9E\u9645\u7248\u672C\u3002",paraId:114,tocIndex:59},{value:"\u65E7\u5B9E\u73B0\u517C\u5BB9\u6808\u4E3A Java 17\u3001Spring Boot 2.7.18\u3001MyBatis 2.1.0 \u548C Elasticsearch Rest High Level Client 7.17.18\uFF0C\u4EC5\u7528\u4E8E\u8FC1\u79FB\u6216\u6838\u5BF9\u73B0\u72B6\uFF1B\u5168\u65B0\u5F00\u53D1\u7981\u6B62\u4EE5\u8BE5\u7EC4\u5408\u4E3A\u9ED8\u8BA4\u57FA\u7EBF\u3002",paraId:115,tocIndex:59},{value:"\u7C7B\u522B",paraId:116,tocIndex:60},{value:"\u63A8\u8350\u57FA\u7EBF",paraId:116,tocIndex:60},{value:"\u7EA6\u675F",paraId:116,tocIndex:60},{value:"JDK",paraId:116,tocIndex:60},{value:"Eclipse Temurin JDK 25 LTS",paraId:116,tocIndex:60},{value:"\u7EDF\u4E00\u7F16\u8BD1\u548C\u8FD0\u884C\u7248\u672C\uFF0C\u7981\u6B62\u4F7F\u7528 JRE-only \u955C\u50CF",paraId:116,tocIndex:60},{value:"Spring Boot",paraId:116,tocIndex:60},{value:"4.1.x",paraId:116,tocIndex:60},{value:"\u4F7F\u7528\u540C\u7CFB\u5217\u6700\u65B0\u8865\u4E01\uFF0C\u4F9D\u8D56\u7248\u672C\u7531 Boot BOM \u7BA1\u7406",paraId:116,tocIndex:60},{value:"Spring Framework",paraId:116,tocIndex:60},{value:"\u7531 Spring Boot \u7BA1\u7406",paraId:116,tocIndex:60},{value:"\u7981\u6B62\u5355\u72EC\u8986\u76D6\u6838\u5FC3 Framework \u7248\u672C",paraId:116,tocIndex:60},{value:"\u6784\u5EFA\u5DE5\u5177",paraId:116,tocIndex:60},{value:"Maven 3.9.x + Maven Wrapper",paraId:116,tocIndex:60},{value:"CI \u53EA\u6267\u884C ",paraId:116,tocIndex:60},{value:"./mvnw",paraId:116,tocIndex:60},{value:"\uFF0CJava \u7F16\u8BD1\u76EE\u6807\u4E3A 25",paraId:116,tocIndex:60},{value:"\u6570\u636E\u8BBF\u95EE",paraId:116,tocIndex:60},{value:"MyBatis Spring Boot Starter 4.x",paraId:116,tocIndex:60},{value:"\u4E0E Spring Boot 4.x \u5BF9\u9F50\uFF0C\u7981\u6B62\u7EE7\u7EED\u4F7F\u7528 2.1.0",paraId:116,tocIndex:60},{value:"JSON",paraId:116,tocIndex:60},{value:"Jackson 3.x\uFF0C\u7531 Boot BOM \u7BA1\u7406",paraId:116,tocIndex:60},{value:"\u65B0\u4EE3\u7801\u4E0D\u5F15\u5165 FastJSON\uFF1B\u65F6\u95F4\u683C\u5F0F\u96C6\u4E2D\u914D\u7F6E",paraId:116,tocIndex:60},{value:"MySQL",paraId:116,tocIndex:60},{value:"8.4 LTS",paraId:116,tocIndex:60},{value:"utf8mb4",paraId:116,tocIndex:60},{value:"\u3001InnoDB\uFF0C\u4F7F\u7528\u6700\u65B0 8.4 \u5B89\u5168\u8865\u4E01",paraId:116,tocIndex:60},{value:"MongoDB",paraId:116,tocIndex:60},{value:"8.0.x",paraId:116,tocIndex:60},{value:"\u751F\u4EA7\u4F7F\u7528\u526F\u672C\u96C6\u6216\u6258\u7BA1\u96C6\u7FA4\uFF0C\u4E0D\u4F7F\u7528\u5355\u8282\u70B9",paraId:116,tocIndex:60},{value:"Elasticsearch",paraId:116,tocIndex:60},{value:"9.x",paraId:116,tocIndex:60},{value:"\u96C6\u7FA4\u4E0E Java API Client \u4FDD\u6301\u540C\u4E00\u5927\u7248\u672C\uFF0C\u4F18\u5148\u540C\u4E00\u5C0F\u7248\u672C",paraId:116,tocIndex:60},{value:"ES Java Client",paraId:116,tocIndex:60},{value:"Elasticsearch Java API Client 9.x",paraId:116,tocIndex:60},{value:"\u7981\u6B62\u4F7F\u7528\u5DF2\u6DD8\u6C70\u7684 Rest High Level Client",paraId:116,tocIndex:60},{value:"Node.js",paraId:116,tocIndex:60},{value:"24 LTS",paraId:116,tocIndex:60},{value:"\u4EC5\u7528\u4E8E\u7BA1\u7406\u524D\u7AEF\u6784\u5EFA\uFF0C\u4F7F\u7528\u5BF9\u5E94\u6700\u65B0\u5B89\u5168\u8865\u4E01",paraId:116,tocIndex:60},{value:"\u524D\u7AEF",paraId:116,tocIndex:60},{value:"\u6700\u65B0\u7A33\u5B9A\u7248 React\u3001Ant Design\u3001TypeScript\u3001Vite",paraId:116,tocIndex:60},{value:"\u521D\u59CB\u5316\u9A8C\u8BC1\u540E\u7531 ",paraId:116,tocIndex:60},{value:"package-lock.json",paraId:116,tocIndex:60},{value:" \u56FA\u5B9A",paraId:116,tocIndex:60},{value:"\u5BB9\u5668\u89C4\u8303",paraId:116,tocIndex:60},{value:"OCI Image Spec",paraId:116,tocIndex:60},{value:"Linux ",paraId:116,tocIndex:60},{value:"amd64",paraId:116,tocIndex:60},{value:" \u548C ",paraId:116,tocIndex:60},{value:"arm64",paraId:116,tocIndex:60},{value:" \u6784\u5EFA\u81F3\u5C11\u9A8C\u8BC1\u76EE\u6807\u751F\u4EA7\u67B6\u6784",paraId:116,tocIndex:60},{value:"\u7F16\u6392\u5E73\u53F0",paraId:116,tocIndex:60},{value:"Kubernetes 1.32+ \u7684\u53D7\u652F\u6301\u7248\u672C",paraId:116,tocIndex:60},{value:"\u96C6\u7FA4\u63A7\u5236\u9762\u91C7\u7528\u4F9B\u5E94\u5546\u4ECD\u652F\u6301\u7684\u5F53\u524D\u7248\u6216\u524D\u4E00\u7248",paraId:116,tocIndex:60},{value:"\u82E5\u57FA\u7840\u8BBE\u65BD\u6682\u4E0D\u652F\u6301\u4E0A\u8FF0\u7248\u672C\uFF0C\u5FC5\u987B\u5728\u9879\u76EE\u542F\u52A8\u524D\u5F62\u6210\u517C\u5BB9\u77E9\u9635\u548C\u5347\u7EA7\u8BA1\u5212\uFF1B\u4E0D\u5F97\u5728\u5F00\u53D1\u4E2D\u9014\u9759\u9ED8\u964D\u7EA7\u3002\u6570\u636E\u5E93\u9A71\u52A8\u3001Spring Data MongoDB \u548C Jackson \u5747\u4F18\u5148\u4F7F\u7528 Spring Boot BOM \u7248\u672C\uFF0C\u4E0D\u624B\u5DE5\u62FC\u88C5\u4F9D\u8D56\u3002",paraId:117,tocIndex:60},{value:"\u5FC5\u987B\u5177\u6709\u72EC\u7ACB\u7684 ",paraId:118,tocIndex:61},{value:"local",paraId:118,tocIndex:61},{value:"\u3001",paraId:118,tocIndex:61},{value:"test",paraId:118,tocIndex:61},{value:"\u3001",paraId:118,tocIndex:61},{value:"staging",paraId:118,tocIndex:61},{value:"\u3001",paraId:118,tocIndex:61},{value:"production",paraId:118,tocIndex:61},{value:" \u914D\u7F6E\uFF1A",paraId:118,tocIndex:61},{value:"\u73AF\u5883",paraId:119,tocIndex:61},{value:"\u7528\u9014",paraId:119,tocIndex:61},{value:"\u6570\u636E\u4E0E\u4F9D\u8D56\u8981\u6C42",paraId:119,tocIndex:61},{value:"local",paraId:119,tocIndex:61},{value:"\u672C\u5730\u5F00\u53D1",paraId:119,tocIndex:61},{value:"\u53EF\u4F7F\u7528 Docker Compose\uFF1B\u514D\u767B\u5F55\u4EC5\u5141\u8BB8\u5728\u6B64\u73AF\u5883\u542F\u7528",paraId:119,tocIndex:61},{value:"test",paraId:119,tocIndex:61},{value:"\u81EA\u52A8\u5316\u6D4B\u8BD5",paraId:119,tocIndex:61},{value:"\u72EC\u7ACB\u4E34\u65F6\u6570\u636E\u5E93\uFF1B\u96C6\u6210\u6D4B\u8BD5\u53EF\u4F7F\u7528 Testcontainers",paraId:119,tocIndex:61},{value:"staging",paraId:119,tocIndex:61},{value:"\u53D1\u5E03\u524D\u9A8C\u8BC1",paraId:119,tocIndex:61},{value:"\u62D3\u6251\u3001\u7248\u672C\u548C\u914D\u7F6E\u7ED3\u6784\u4E0E\u751F\u4EA7\u4E00\u81F4\uFF0C\u4F7F\u7528\u8131\u654F\u6570\u636E",paraId:119,tocIndex:61},{value:"production",paraId:119,tocIndex:61},{value:"\u6B63\u5F0F\u6D41\u91CF",paraId:119,tocIndex:61},{value:"\u7981\u6B62 mock \u8EAB\u4EFD\u3001\u9ED8\u8BA4\u5BC6\u7801\u3001\u8C03\u8BD5\u7AEF\u70B9\u548C\u81EA\u52A8\u5EFA\u8868",paraId:119,tocIndex:61},{value:"\u7981\u6B62\u8DE8\u73AF\u5883\u5171\u7528\u6570\u636E\u5E93\u3001Mongo database\u3001ES index alias\u3001\u6D88\u606F\u961F\u5217 topic \u6216\u5BC6\u94A5\u3002\u6240\u6709\u8D44\u6E90\u540D\u5FC5\u987B\u5E26\u73AF\u5883\u6807\u8BC6\uFF1B\u751F\u4EA7\u53D8\u66F4\u5148\u7ECF\u8FC7 staging \u9A8C\u8BC1\u3002",paraId:120,tocIndex:61},{value:`spring:
  application:
    name: ai-form-platform
  datasource:
    url: \${MYSQL_URL}
    username: \${MYSQL_USERNAME}
    password: \${MYSQL_PASSWORD}
    hikari:
      maximum-pool-size: \${MYSQL_POOL_MAX:20}
      minimum-idle: \${MYSQL_POOL_MIN:5}
      connection-timeout: 3000
      validation-timeout: 1000
  data:
    mongodb:
      uri: \${MONGO_URI}
  lifecycle:
    timeout-per-shutdown-phase: 30s
server:
  shutdown: graceful
management:
  endpoints:
    web:
      exposure:
        include: health,info,prometheus
  endpoint:
    health:
      probes:
        enabled: true
aiform:
  auth:
    mode: \${AUTH_MODE:required}
  es:
    uris: \${ES_URIS}
    username: \${ES_USERNAME}
    password: \${ES_PASSWORD}
  sync:
    executor:
      core-pool-size: \${SYNC_CORE_POOL_SIZE:4}
      max-pool-size: \${SYNC_MAX_POOL_SIZE:8}
      queue-capacity: \${SYNC_QUEUE_CAPACITY:64}
`,paraId:121,tocIndex:62},{value:"AUTH_MODE=mock",paraId:122,tocIndex:62},{value:" \u53EA\u5141\u8BB8 ",paraId:122,tocIndex:62},{value:"local/test",paraId:122,tocIndex:62},{value:" \u4E14\u5FC5\u987B\u663E\u5F0F\u914D\u7F6E\uFF0C\u9ED8\u8BA4 ",paraId:122,tocIndex:62},{value:"required",paraId:122,tocIndex:62},{value:" \u8868\u793A\u5FC5\u987B\u7531\u6B63\u5F0F\u8EAB\u4EFD\u63D0\u4F9B\u5668\u4EA7\u751F\u7528\u6237\u4E0A\u4E0B\u6587\u3002\u5E94\u7528\u5728 ",paraId:122,tocIndex:62},{value:"staging/production",paraId:122,tocIndex:62},{value:" \u68C0\u6D4B\u5230 mock \u65F6\u5FC5\u987B\u542F\u52A8\u5931\u8D25\u3002\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u5927\u5C0F\u5E94\u6839\u636E\u5B9E\u4F8B\u8FDE\u63A5\u4E0A\u9650\u3001Pod \u6570\u91CF\u548C\u540E\u53F0\u4EFB\u52A1\u5E76\u53D1\u5171\u540C\u8BA1\u7B97\uFF0C\u4E0D\u80FD\u76F4\u63A5\u590D\u5236\u793A\u4F8B\u9ED8\u8BA4\u503C\u3002",paraId:122,tocIndex:62},{value:"MySQL \u4F7F\u7528\u4E3B\u4ECE\u6216\u6258\u7BA1\u9AD8\u53EF\u7528\u5B9E\u4F8B\uFF0C\u5F00\u542F\u81EA\u52A8\u5907\u4EFD\u3001\u65F6\u95F4\u70B9\u6062\u590D\u548C\u6162 SQL \u91C7\u96C6\uFF1BSchema \u8FC1\u79FB\u7EDF\u4E00\u7531 Flyway \u6267\u884C\uFF0C\u5E94\u7528\u751F\u4EA7\u542F\u52A8\u65F6\u7981\u6B62\u81EA\u52A8\u4FEE\u6539\u8868\u7ED3\u6784\u3002",paraId:123,tocIndex:63},{value:"MongoDB \u4F7F\u7528\u4E09\u8282\u70B9\u526F\u672C\u96C6\u6216\u6258\u7BA1\u9AD8\u53EF\u7528\u96C6\u7FA4\uFF0C\u542F\u7528\u8BA4\u8BC1\u3001TLS\u3001\u5907\u4EFD\u548C\u78C1\u76D8\u544A\u8B66\uFF1B\u5E94\u7528\u8FDE\u63A5\u5FC5\u987B\u5305\u542B\u8D85\u65F6\u3001\u91CD\u8BD5\u5199\u548C\u526F\u672C\u96C6\u53C2\u6570\u3002",paraId:123,tocIndex:63},{value:"Elasticsearch \u4F7F\u7528\u81F3\u5C11\u4E09\u4E2A master-eligible \u8282\u70B9\u7684\u751F\u4EA7\u96C6\u7FA4\u6216\u6258\u7BA1\u670D\u52A1\uFF0C\u6570\u636E\u8282\u70B9\u6309\u5BB9\u91CF\u89C4\u5212\uFF1B\u542F\u7528 TLS\u3001\u8BA4\u8BC1\u3001\u5FEB\u7167\u4ED3\u5E93\u3001\u78C1\u76D8\u6C34\u4F4D\u548C JVM/GC \u544A\u8B66\u3002",paraId:123,tocIndex:63},{value:"MySQL\u3001MongoDB \u548C Elasticsearch \u4E0D\u4E0E\u5E94\u7528\u5BB9\u5668\u90E8\u7F72\u5728\u540C\u4E00 Pod\uFF0C\u4E0D\u4F7F\u7528\u5BB9\u5668\u4E34\u65F6\u78C1\u76D8\u4FDD\u5B58\u751F\u4EA7\u6570\u636E\u3002",paraId:123,tocIndex:63},{value:"\u4E09\u7C7B\u5B58\u50A8\u7684\u7248\u672C\u5347\u7EA7\u5FC5\u987B\u5148\u9A8C\u8BC1\u9A71\u52A8\u517C\u5BB9\u3001\u7D22\u5F15\u91CD\u5EFA\u3001\u5907\u4EFD\u6062\u590D\u548C\u56DE\u6EDA\u8DEF\u5F84\u3002",paraId:123,tocIndex:63},{value:"\u540E\u7AEF\u4F7F\u7528\u591A\u9636\u6BB5\u6784\u5EFA\uFF1A\u6784\u5EFA\u9636\u6BB5\u4F7F\u7528\u56FA\u5B9A digest \u7684 Temurin JDK 25 \u955C\u50CF\uFF0C\u8FD0\u884C\u9636\u6BB5\u4F7F\u7528\u975E root\u3001\u5305\u542B\u5B8C\u6574 JDK 25 \u7684\u7CBE\u7B80\u5B89\u5168\u955C\u50CF\u3002\u955C\u50CF\u8981\u6C42\uFF1A",paraId:124,tocIndex:64},{value:"\u8FDB\u7A0B\u4F7F\u7528\u56FA\u5B9A\u975E root UID/GID\uFF0C\u6839\u6587\u4EF6\u7CFB\u7EDF\u53EA\u8BFB\u3002",paraId:125,tocIndex:64},{value:"/tmp",paraId:125,tocIndex:64},{value:" \u4F7F\u7528\u53D7\u9650\u4E34\u65F6\u5377\uFF0C\u7981\u6B62\u5199\u5165\u5E94\u7528\u76EE\u5F55\u3002",paraId:125,tocIndex:64},{value:"\u4E0D\u5728\u955C\u50CF\u5C42\u5199\u5165\u5BC6\u7801\u3001\u8BC1\u4E66\u79C1\u94A5\u6216\u73AF\u5883\u914D\u7F6E\u3002",paraId:125,tocIndex:64},{value:"\u4F7F\u7528 ",paraId:125,tocIndex:64},{value:"-XX:MaxRAMPercentage",paraId:125,tocIndex:64},{value:" \u7B49\u5BB9\u5668\u611F\u77E5\u53C2\u6570\uFF0C\u4E0D\u624B\u5DE5\u5199\u6B7B\u4E0E Pod limit \u4E0D\u5339\u914D\u7684 ",paraId:125,tocIndex:64},{value:"-Xmx",paraId:125,tocIndex:64},{value:"\u3002",paraId:125,tocIndex:64},{value:"\u8F93\u51FA\u7ED3\u6784\u5316\u65E5\u5FD7\u5230 stdout/stderr\uFF0C\u4E0D\u5728\u5BB9\u5668\u5185\u6EDA\u52A8\u65E5\u5FD7\u6587\u4EF6\u3002",paraId:125,tocIndex:64},{value:"\u955C\u50CF\u5FC5\u987B\u6267\u884C\u4F9D\u8D56\u3001\u8BB8\u53EF\u8BC1\u3001\u6F0F\u6D1E\u548C SBOM \u626B\u63CF\uFF1B\u4E25\u91CD\u6F0F\u6D1E\u672A\u8C41\u514D\u4E0D\u5F97\u53D1\u5E03\u3002",paraId:125,tocIndex:64},{value:"\u955C\u50CF tag \u7528\u4E8E\u53EF\u8BFB\u6027\uFF0C\u751F\u4EA7\u90E8\u7F72\u5FC5\u987B\u5F15\u7528\u4E0D\u53EF\u53D8 digest\u3002",paraId:125,tocIndex:64},{value:"\u7BA1\u7406\u524D\u7AEF\u4F7F\u7528 Node.js 24 LTS \u591A\u9636\u6BB5\u6784\u5EFA\uFF0C\u6267\u884C ",paraId:126,tocIndex:64},{value:"npm ci",paraId:126,tocIndex:64},{value:"\u3001\u6D4B\u8BD5\u548C\u751F\u4EA7\u6784\u5EFA\u540E\uFF0C\u4EC5\u5C06\u9759\u6001\u4EA7\u7269\u590D\u5236\u5230 Nginx \u6216\u9759\u6001\u8D44\u6E90\u670D\u52A1\u3002\u6784\u5EFA\u955C\u50CF\u4E0D\u5F97\u8FDB\u5165\u751F\u4EA7\u8FD0\u884C\u955C\u50CF\u3002",paraId:126,tocIndex:64},{value:"\u540E\u7AEF\u4F7F\u7528 ",paraId:127,tocIndex:65},{value:"Deployment + Service + Ingress/Gateway",paraId:127,tocIndex:65},{value:"\uFF0C\u521D\u59CB\u81F3\u5C11\u4E24\u4E2A\u526F\u672C\uFF0C\u8DE8\u8282\u70B9\u6216\u53EF\u7528\u533A\u5206\u6563\u3002\u5FC5\u987B\u914D\u7F6E\uFF1A",paraId:127,tocIndex:65},{value:"startupProbe",paraId:128,tocIndex:65},{value:"\uFF1A\u5141\u8BB8 Schema \u7F13\u5B58\u548C\u4F9D\u8D56\u5BA2\u6237\u7AEF\u5B8C\u6210\u521D\u59CB\u5316\u3002",paraId:128,tocIndex:65},{value:"readinessProbe",paraId:128,tocIndex:65},{value:"\uFF1A\u53EA\u51B3\u5B9A\u662F\u5426\u63A5\u6D41\u91CF\uFF0C\u4E0D\u56E0\u77ED\u65F6 ES/Mongo \u964D\u7EA7\u76F4\u63A5\u91CD\u542F\u8FDB\u7A0B\u3002",paraId:128,tocIndex:65},{value:"livenessProbe",paraId:128,tocIndex:65},{value:"\uFF1A\u53EA\u68C0\u6D4B\u8FDB\u7A0B\u662F\u5426\u5931\u6D3B\uFF0C\u7981\u6B62\u6267\u884C\u91CD\u578B\u6570\u636E\u5E93\u67E5\u8BE2\u3002",paraId:128,tocIndex:65},{value:"preStop",paraId:128,tocIndex:65},{value:" \u4E0E\u4E0D\u5C11\u4E8E 30 \u79D2\u7684 ",paraId:128,tocIndex:65},{value:"terminationGracePeriodSeconds",paraId:128,tocIndex:65},{value:"\uFF0C\u914D\u5408 Spring graceful shutdown\u3002",paraId:128,tocIndex:65},{value:"CPU/memory ",paraId:128,tocIndex:65},{value:"requests",paraId:128,tocIndex:65},{value:" \u548C ",paraId:128,tocIndex:65},{value:"limits",paraId:128,tocIndex:65},{value:"\uFF0C\u7981\u6B62\u65E0\u8D44\u6E90\u8FB9\u754C\u8FD0\u884C\u3002",paraId:128,tocIndex:65},{value:"PodDisruptionBudget",paraId:128,tocIndex:65},{value:"\u3001\u62D3\u6251\u5206\u6563\u548C\u6EDA\u52A8\u53D1\u5E03 ",paraId:128,tocIndex:65},{value:"maxUnavailable=0",paraId:128,tocIndex:65},{value:"\u3002",paraId:128,tocIndex:65},{value:"HorizontalPodAutoscaler",paraId:128,tocIndex:65},{value:" \u4EE5 CPU\u3001\u8BF7\u6C42\u5EF6\u8FDF\u548C\u961F\u5217\u79EF\u538B\u7EFC\u5408\u6269\u7F29\u5BB9\uFF1B\u540C\u6B65 worker \u4E0E\u5728\u7EBF API \u8D1F\u8F7D\u8F83\u5927\u65F6\u5E94\u62C6\u4E3A\u72EC\u7ACB Deployment\u3002",paraId:128,tocIndex:65},{value:"\u9ED8\u8BA4\u62D2\u7EDD\u7684 NetworkPolicy\uFF0C\u4EC5\u5F00\u653E\u524D\u7AEF\u5165\u53E3\u53CA\u5230 MySQL\u3001MongoDB\u3001Elasticsearch\u3001\u914D\u7F6E\u548C\u89C2\u6D4B\u670D\u52A1\u7684\u5FC5\u8981\u51FA\u53E3\u3002",paraId:128,tocIndex:65},{value:"\u521D\u59CB\u8D44\u6E90\u5EFA\u8BAE\u4EC5\u4F5C\u4E3A\u538B\u6D4B\u8D77\u70B9\uFF1AAPI Pod ",paraId:129,tocIndex:65},{value:"requests: 1 CPU/2Gi",paraId:129,tocIndex:65},{value:"\u3001",paraId:129,tocIndex:65},{value:"limits: 2 CPU/4Gi",paraId:129,tocIndex:65},{value:"\uFF1B\u540C\u6B65 Worker ",paraId:129,tocIndex:65},{value:"requests: 1 CPU/2Gi",paraId:129,tocIndex:65},{value:"\u3001",paraId:129,tocIndex:65},{value:"limits: 4 CPU/8Gi",paraId:129,tocIndex:65},{value:"\u3002\u6700\u7EC8\u503C\u5FC5\u987B\u7531\u771F\u5B9E Schema \u5BBD\u5EA6\u3001\u6279\u91CF\u5927\u5C0F\u3001\u5E76\u53D1\u548C GC \u538B\u6D4B\u786E\u5B9A\u3002",paraId:129,tocIndex:65},{value:"CI \u987A\u5E8F\u4E3A\u9759\u6001\u68C0\u67E5\u3001\u5355\u5143\u6D4B\u8BD5\u3001\u96C6\u6210\u6D4B\u8BD5\u3001\u524D\u7AEF\u6D4B\u8BD5\u3001\u751F\u4EA7\u6784\u5EFA\u3001\u955C\u50CF\u626B\u63CF\u3001\u90E8\u7F72 staging\u3001\u7AEF\u5230\u7AEF\u9A8C\u8BC1\u3001\u4EBA\u5DE5\u6216\u7B56\u7565\u51C6\u5165\u3001\u751F\u4EA7\u53D1\u5E03\u3002",paraId:130,tocIndex:66},{value:"\u6570\u636E\u5E93\u53D8\u66F4\u5FC5\u987B\u5411\u524D\u517C\u5BB9\uFF0C\u9075\u5FAA\u201C\u5148\u6269\u5C55\u3001\u518D\u53CC\u5199/\u8FC1\u79FB\u3001\u540E\u6536\u7F29\u201D\uFF0C\u7981\u6B62\u5E94\u7528\u53D1\u5E03\u4E0E\u7834\u574F\u6027 DDL \u540C\u65F6\u6267\u884C\u3002",paraId:130,tocIndex:66},{value:"\u540E\u7AEF\u4F7F\u7528\u6EDA\u52A8\u6216\u91D1\u4E1D\u96C0\u53D1\u5E03\uFF1BSchema \u7248\u672C\u548C API \u81F3\u5C11\u517C\u5BB9\u524D\u540E\u4E24\u4E2A\u5E94\u7528\u7248\u672C\u5171\u5B58\u3002",paraId:130,tocIndex:66},{value:"\u5E94\u7528\u56DE\u6EDA\u4F7F\u7528\u4E0A\u4E00\u4E0D\u53EF\u53D8\u955C\u50CF digest\uFF1B\u6570\u636E\u5E93\u3001Mongo Collection \u548C ES alias \u5FC5\u987B\u5177\u6709\u72EC\u7ACB\u56DE\u6EDA\u65B9\u6848\u3002",paraId:130,tocIndex:66},{value:"\u53D1\u5E03\u671F\u95F4\u76D1\u63A7\u9519\u8BEF\u7387\u3001P95/P99\u3001JVM\u3001\u8FDE\u63A5\u6C60\u3001\u540C\u6B65\u79EF\u538B\u548C\u4E00\u81F4\u6027\u5DEE\u5F02\uFF0C\u8D85\u8FC7\u9608\u503C\u81EA\u52A8\u505C\u6B62\u6216\u56DE\u6EDA\u3002",paraId:130,tocIndex:66},{value:"\u7981\u6B62\u5C06\u771F\u5B9E\u5730\u5740\u3001\u8D26\u53F7\u3001\u5BC6\u7801\u548C token \u5199\u5165 Git\u3001\u955C\u50CF\u3001\u542F\u52A8\u53C2\u6570\u6216\u524D\u7AEF\u6784\u5EFA\u53D8\u91CF\u3002",paraId:131,tocIndex:67},{value:"\u5BC6\u94A5\u901A\u8FC7 Kubernetes Secret \u5BF9\u63A5\u5916\u90E8\u5BC6\u94A5\u7BA1\u7406\u670D\u52A1\uFF0C\u4EE5\u6587\u4EF6\u6216\u53D7\u63A7\u73AF\u5883\u53D8\u91CF\u6CE8\u5165\u5E76\u652F\u6301\u8F6E\u6362\u3002",paraId:131,tocIndex:67},{value:"\u6570\u636E\u5E93\u8D26\u6237\u6309\u6700\u5C0F\u6743\u9650\u62C6\u5206\u8FD0\u884C\u8D26\u6237\u4E0E\u8FC1\u79FB\u8D26\u6237\uFF1B\u751F\u4EA7\u5E94\u7528\u8D26\u6237\u65E0 DDL \u6743\u9650\u3002",paraId:131,tocIndex:67},{value:"MongoDB\u3001Elasticsearch \u548C MySQL \u4EC5\u5141\u8BB8\u540E\u7AEF\u79C1\u7F51\u8BBF\u95EE\uFF0C\u4F20\u8F93\u94FE\u8DEF\u542F\u7528 TLS\u3002",paraId:131,tocIndex:67},{value:"\u65E5\u5FD7\u4E0D\u5F97\u8F93\u51FA\u5B8C\u6574 ",paraId:131,tocIndex:67},{value:"data",paraId:131,tocIndex:67},{value:"\u3001\u6743\u9650\u914D\u7F6E\u3001\u8BF7\u6C42\u51ED\u636E\u548C\u5F02\u5E38\u4E2D\u7684\u8FDE\u63A5 URI\u3002",paraId:131,tocIndex:67},{value:"REST\u3001Agent Tool \u548C RPC \u90FD\u5FC5\u987B\u9A8C\u8BC1\u8EAB\u4EFD\u3001clientId \u548C\u6743\u9650\uFF1B\u5F00\u53D1\u514D\u767B\u5F55\u4E0D\u80FD\u8FDB\u5165 staging/production\u3002",paraId:131,tocIndex:67},{value:"\u5BB9\u5668\u3001\u4F9D\u8D56\u548C\u57FA\u7840\u955C\u50CF\u6309\u56FA\u5B9A\u5468\u671F\u5B89\u88C5\u5B89\u5168\u8865\u4E01\u5E76\u91CD\u65B0\u6784\u5EFA\uFF0C\u4E0D\u5728\u8FD0\u884C\u5BB9\u5668\u5185\u4E34\u65F6\u5347\u7EA7\u3002",paraId:131,tocIndex:67},{value:"Java\u3001Spring Boot\u3001\u6570\u636E\u5E93\u9A71\u52A8\u4E0E\u670D\u52A1\u7AEF\u7248\u672C\u7B26\u5408\u9501\u5B9A\u7684\u517C\u5BB9\u77E9\u9635\u3002",paraId:132,tocIndex:68},{value:"Flyway \u6821\u9A8C\u901A\u8FC7\uFF0C\u751F\u4EA7\u73AF\u5883\u4E0D\u5B58\u5728\u5F85\u6267\u884C\u7684\u672A\u5BA1\u6279\u8FC1\u79FB\u3002",paraId:132,tocIndex:68},{value:"MySQL\u3001MongoDB \u4E0E Elasticsearch \u53EF\u8FDE\u63A5\uFF0C\u6743\u9650\u7B26\u5408\u6700\u5C0F\u6743\u9650\u6E05\u5355\u3002",paraId:132,tocIndex:68},{value:"ES cluster health\u3001\u6A21\u677F\u3001ILM/\u5FEB\u7167\u548C alias \u6743\u9650\u6B63\u5E38\u3002",paraId:132,tocIndex:68},{value:"\u540C\u6B65\u7EBF\u7A0B\u6C60\u3001\u8FDE\u63A5\u6C60\u548C\u6279\u91CF\u53C2\u6570\u5408\u6CD5\u4E14\u672A\u8D85\u8FC7\u8D44\u6E90\u9884\u7B97\u3002",paraId:132,tocIndex:68},{value:"\u5931\u8D25\u8868\u3001\u9501\u8868\u3001\u4EFB\u52A1\u8868\u548C Outbox \u53EF\u8BFB\u5199\u3002",paraId:132,tocIndex:68},{value:"staging/production",paraId:132,tocIndex:68},{value:" \u672A\u542F\u7528 mock \u8EAB\u4EFD\u3001\u8C03\u8BD5\u65E5\u5FD7\u6216\u4E0D\u5B89\u5168\u7BA1\u7406\u7AEF\u70B9\u3002",paraId:132,tocIndex:68},{value:"readiness\u3001liveness\u3001graceful shutdown\u3001\u6307\u6807\u548C trace \u4E0A\u62A5\u5747\u901A\u8FC7\u90E8\u7F72\u9A8C\u6536\u3002",paraId:132,tocIndex:68},{value:"\u63A8\u8350\u6307\u6807\uFF1A",paraId:133,tocIndex:69},{value:"\u6307\u6807",paraId:134,tocIndex:69},{value:"\u6807\u7B7E",paraId:134,tocIndex:69},{value:"\u544A\u8B66\u5EFA\u8BAE",paraId:134,tocIndex:69},{value:"aiform_api_latency",paraId:134,tocIndex:69},{value:"api/formKey/result",paraId:134,tocIndex:69},{value:"P95 \u8D85\u9608\u503C",paraId:134,tocIndex:69},{value:"aiform_write_total",paraId:134,tocIndex:69},{value:"target/result/op",paraId:134,tocIndex:69},{value:"\u9519\u8BEF\u7387\u6301\u7EED\u5347\u9AD8",paraId:134,tocIndex:69},{value:"aiform_sync_backlog",paraId:134,tocIndex:69},{value:"target/formKey",paraId:134,tocIndex:69},{value:"\u79EF\u538B\u8D85\u9608\u503C",paraId:134,tocIndex:69},{value:"aiform_sync_latency",paraId:134,tocIndex:69},{value:"target/mode",paraId:134,tocIndex:69},{value:"\u5168\u91CF\u4EFB\u52A1\u8D85\u65F6",paraId:134,tocIndex:69},{value:"aiform_consistency_diff",paraId:134,tocIndex:69},{value:"target/formKey",paraId:134,tocIndex:69},{value:"\u5DEE\u5F02\u5927\u4E8E 0",paraId:134,tocIndex:69},{value:"aiform_permission_denied",paraId:134,tocIndex:69},{value:"op/clientId",paraId:134,tocIndex:69},{value:"\u5F02\u5E38\u7A81\u589E",paraId:134,tocIndex:69},{value:"aiform_executor_active",paraId:134,tocIndex:69},{value:"pool",paraId:134,tocIndex:69},{value:"\u957F\u671F\u8FBE\u5230\u4E0A\u9650",paraId:134,tocIndex:69},{value:"aiform_dead_event_total",paraId:134,tocIndex:69},{value:"target",paraId:134,tocIndex:69},{value:"\u5927\u4E8E 0 \u7ACB\u5373\u544A\u8B66",paraId:134,tocIndex:69},{value:"\u65E5\u5FD7\u7EDF\u4E00\u643A\u5E26 ",paraId:134,tocIndex:69},{value:"traceId/formKey/dataId/eventId/userId/clientId/op",paraId:134,tocIndex:69},{value:"\u3002\u7981\u6B62\u8BB0\u5F55\u5BC6\u7801\u548C\u672A\u7ECF\u8131\u654F\u7684\u5927\u6BB5\u8868\u5355\u6570\u636E\u3002",paraId:134,tocIndex:69},{value:"\u6A21\u5757",paraId:135,tocIndex:71},{value:"\u5FC5\u6D4B\u573A\u666F",paraId:135,tocIndex:71},{value:"Schema \u6821\u9A8C",paraId:135,tocIndex:71},{value:"\u975E\u6CD5 JSON\u3001\u7A7A\u5B57\u6BB5\u3001\u91CD\u590D ID\u3001\u4FDD\u7559\u5B57\u6BB5\u3001\u975E\u6CD5\u7C7B\u578B",paraId:135,tocIndex:71},{value:"\u7C7B\u578B\u8F6C\u6362",paraId:135,tocIndex:71},{value:"\u6570\u5B57\u3001\u6574\u6570\u622A\u65AD\u3001\u65E5\u671F\u4E25\u683C\u683C\u5F0F\u3001\u5E03\u5C14\u3001\u6570\u7EC4\u3001\u5931\u8D25\u884C\u4E3A",paraId:135,tocIndex:71},{value:"Mapping",paraId:135,tocIndex:71},{value:"\u4E03\u79CD\u7C7B\u578B\u3001text.keyword\u3001\u7CFB\u7EDF\u5B57\u6BB5",paraId:135,tocIndex:71},{value:"\u6761\u4EF6\u6811",paraId:135,tocIndex:71},{value:"AND/OR \u5D4C\u5957\u3001\u7A7A\u8282\u70B9\u3001\u5168\u90E8\u8FD0\u7B97\u7B26\u3001\u7C7B\u578B\u8F6C\u6362",paraId:135,tocIndex:71},{value:"\u6743\u9650",paraId:135,tocIndex:71},{value:"Owner\u3001\u65E0\u914D\u7F6E\u3001\u53D8\u91CF\u7F3A\u5931\u3001OR/AND \u6052\u771F\u5047\u3001\u56DB\u79CD\u64CD\u4F5C",paraId:135,tocIndex:71},{value:"\u6587\u6863\u6784\u5EFA",paraId:135,tocIndex:71},{value:"MySQL JSON \u5230 BSON/ES \u6587\u6863\u4E0E\u5BA1\u8BA1\u5B57\u6BB5",paraId:135,tocIndex:71},{value:"Schema diff",paraId:135,tocIndex:71},{value:"\u517C\u5BB9\u4E0E\u4E0D\u517C\u5BB9\u53D8\u66F4\u5206\u7C7B",paraId:135,tocIndex:71},{value:"\u521B\u5EFA Schema \u540E\u5F53\u524D\u7248\u672C\u3001\u5386\u53F2\u7248\u672C\u3001Owner\u3001clientId \u6B63\u786E\u3002",paraId:136,tocIndex:72},{value:"Mongo/ES \u540C\u65F6\u5173\u95ED\u65F6\u521B\u5EFA\u5931\u8D25\u3002",paraId:136,tocIndex:72},{value:"\u65B0\u589E\u540E MySQL \u4E8B\u5B9E\u884C\u3001\u5E42\u7B49\u7ED3\u679C\u548C Outbox \u4F4D\u4E8E\u540C\u4E00\u4E8B\u52A1\uFF1B\u6D88\u8D39\u8005\u6700\u7EC8\u751F\u6210\u6B63\u786E\u7C7B\u578B\u526F\u672C\u3002",paraId:136,tocIndex:72},{value:"Mongo/ES \u6545\u969C\u65F6\u4E8B\u5B9E\u4E8B\u52A1\u4ECD\u6210\u529F\uFF0COutbox \u8FDB\u5165 RETRY\uFF1B\u6062\u590D\u540E\u81EA\u52A8\u8FFD\u5E73\u3002",paraId:136,tocIndex:72},{value:"\u91CD\u590D ",paraId:136,tocIndex:72},{value:"Idempotency-Key",paraId:136,tocIndex:72},{value:" \u548C\u76F8\u540C\u8BF7\u6C42\u8FD4\u56DE\u539F dataId\uFF1B\u8BF7\u6C42\u4F53\u4E0D\u540C\u8FD4\u56DE\u51B2\u7A81\u3002",paraId:136,tocIndex:72},{value:"\u66F4\u65B0\u4E0E\u5220\u9664 version \u4E0D\u5339\u914D\u8FD4\u56DE 409\uFF0C\u4E8B\u5B9E\u884C\u548C Outbox \u5747\u4E0D\u53D8\u5316\u3002",paraId:136,tocIndex:72},{value:"\u5220\u9664\u540E MySQL \u903B\u8F91\u5220\u9664\uFF0C\u6D88\u8D39\u8005\u6700\u7EC8\u5220\u9664 Mongo \u5E76\u5904\u7406 ES \u5893\u7891\u3002",paraId:136,tocIndex:72},{value:"Mongo/ES \u672A\u547D\u4E2D\u65F6\u8BE6\u60C5\u964D\u7EA7\u5230 MySQL\uFF0C\u4E14\u4ECD\u6267\u884C clientId \u4E0E\u884C\u6743\u9650\u3002",paraId:136,tocIndex:72},{value:"\u884C\u6743\u9650\u4E0E\u7528\u6237\u67E5\u8BE2\u6761\u4EF6\u6B63\u786E AND \u5408\u5E76\uFF1B\u6743\u9650\u914D\u7F6E\u635F\u574F\u65F6 fail closed\u3002",paraId:136,tocIndex:72},{value:"\u4E0D\u540C clientId \u5373\u4F7F\u731C\u4E2D formKey/dataId \u4E5F\u4E0D\u53EF\u8BFB\u53D6\u3001\u4FEE\u6539\u6216\u679A\u4E3E\u3002",paraId:136,tocIndex:72},{value:"Schema \u4FEE\u6539\u540E\u8BFB\u8BF7\u6C42\u65E0\u4E2D\u65AD\uFF0C\u5207\u6362\u540E\u4F7F\u7528\u65B0\u7C7B\u578B\uFF1B\u65E7 version \u66F4\u65B0\u51B2\u7A81\u3002",paraId:136,tocIndex:72},{value:"\u5916\u90E8\u589E\u91CF\u91CD\u590D\u6267\u884C\u4E0D\u4EA7\u751F\u91CD\u590D sourceKey\uFF0C\u76F8\u540C\u65F6\u95F4\u6233\u6309\u590D\u5408\u6E38\u6807\u65E0\u9057\u6F0F\u3002",paraId:136,tocIndex:72},{value:"\u540C\u6B65\u8282\u70B9\u5B95\u673A\u540E\u79DF\u7EA6\u8FC7\u671F\u53EF\u63A5\u7BA1\uFF0C\u65E7 fencing token \u4E0D\u80FD\u63D0\u4EA4\u7ED3\u679C\u3002",paraId:136,tocIndex:72},{value:"Outbox \u91CD\u590D\u3001\u4E71\u5E8F\u548C\u5E76\u53D1\u6D88\u8D39\u5747\u4FDD\u6301\u6700\u7EC8\u7248\u672C\u6B63\u786E\uFF1B\u8D85\u9650\u8FDB\u5165 DEAD \u5E76\u53EF\u5BA1\u8BA1\u91CD\u653E\u3002",paraId:136,tocIndex:72},{value:"\u6570\u636E\u91CF",paraId:137,tocIndex:73},{value:"\u67E5\u8BE2\u65B9\u5F0F",paraId:137,tocIndex:73},{value:"\u76EE\u6807\u793A\u4F8B",paraId:137,tocIndex:73},{value:"1 \u4E07",paraId:137,tocIndex:73},{value:"Mongo \u666E\u901A\u5206\u9875",paraId:137,tocIndex:73},{value:"P95 < 300ms",paraId:137,tocIndex:73},{value:"100 \u4E07",paraId:137,tocIndex:73},{value:"Mongo \u6709\u7D22\u5F15\u7B5B\u9009",paraId:137,tocIndex:73},{value:"P95 < 500ms",paraId:137,tocIndex:73},{value:"100 \u4E07",paraId:137,tocIndex:73},{value:"ES \u641C\u7D22/\u6E38\u6807",paraId:137,tocIndex:73},{value:"P95 < 500ms",paraId:137,tocIndex:73},{value:"100 \u4E07",paraId:137,tocIndex:73},{value:"ES \u5355\u7EF4\u805A\u5408",paraId:137,tocIndex:73},{value:"P95 < 2s",paraId:137,tocIndex:73},{value:"1000 \u6761\u6279\u91CF\u540C\u6B65",paraId:137,tocIndex:73},{value:"Mongo/ES bulk",paraId:137,tocIndex:73},{value:"\u65E0\u5355\u6761\u5FAA\u73AF\u7F51\u7EDC\u74F6\u9888",paraId:137,tocIndex:73},{value:"\u5B9E\u9645\u9608\u503C\u9700\u6309\u90E8\u7F72\u8D44\u6E90\u3001\u5B57\u6BB5\u6570\u548C\u67E5\u8BE2\u590D\u6742\u5EA6\u538B\u6D4B\u786E\u5B9A\uFF0C\u4E0D\u80FD\u76F4\u63A5\u628A\u793A\u4F8B\u4F5C\u4E3A\u7EBF\u4E0A\u627F\u8BFA\u3002",paraId:137,tocIndex:73},{value:"\u514D\u767B\u5F55\u5F00\u53D1\u8EAB\u4EFD\u8C03\u7528 ",paraId:138,tocIndex:74},{value:"/api/auth/me",paraId:138,tocIndex:74},{value:"\uFF0C\u6838\u5BF9\u7528\u6237\u3001\u7EC4\u7EC7\u3001\u89D2\u8272\u548C clientId\u3002",paraId:138,tocIndex:74},{value:"\u521B\u5EFA\u4E03\u79CD\u5B57\u6BB5 Schema\uFF0C\u53D6\u5F97 formKey \u548C version=1\u3002",paraId:138,tocIndex:74},{value:"\u4F7F\u7528\u5E42\u7B49\u952E\u65B0\u589E\u4E24\u6761\u6570\u636E\uFF0C\u6838\u5BF9\u4E8B\u5B9E\u884C\u3001Outbox \u548C\u6700\u7EC8 Mongo/ES \u526F\u672C\u3002",paraId:138,tocIndex:74},{value:"\u91CD\u590D\u8BF7\u6C42\u9A8C\u8BC1\u5E42\u7B49\uFF1B\u65E7 version \u66F4\u65B0\u9A8C\u8BC1 409\u3002",paraId:138,tocIndex:74},{value:"Mongo \u6761\u4EF6\u67E5\u8BE2\u6570\u5B57\u8303\u56F4\uFF0CES \u641C\u7D22\u6587\u672C\u5E76\u6309\u5B57\u6BB5\u6392\u5E8F\u3002",paraId:138,tocIndex:74},{value:"ES \u6309\u7EC4\u7EC7\u5355\u5143\u5206\u7EC4 count\u3002",paraId:138,tocIndex:74},{value:"\u66F4\u65B0\u5B8C\u6574 JSON\uFF0C\u7B49\u5F85\u6295\u5F71\u5B8C\u6210\u540E\u6838\u5BF9\u4E09\u7AEF\u7248\u672C\u4E0E\u5185\u5BB9\u3002",paraId:138,tocIndex:74},{value:"\u5220\u9664\u4E00\u6761\uFF0C\u786E\u8BA4\u4E8B\u5B9E\u6E90\u903B\u8F91\u5220\u9664\u4E14\u4E24\u4E2A\u526F\u672C\u6700\u7EC8\u4E0D\u53EF\u89C1\u3002",paraId:138,tocIndex:74},{value:"\u65B0\u589E\u53EF\u9009\u5B57\u6BB5\u5E76\u89E6\u53D1\u5168\u91CF\u540C\u6B65\uFF0C\u5207\u6362\u671F\u95F4\u65E7\u6570\u636E\u6301\u7EED\u53EF\u8BFB\u3002",paraId:138,tocIndex:74},{value:"\u9A8C\u8BC1\u65E7\u8BB0\u5F55\u7F3A\u5B57\u6BB5\u3001\u65B0\u8BB0\u5F55\u5E26\u5B57\u6BB5\u5747\u53EF\u8BFB\u53D6\u3002",paraId:138,tocIndex:74},{value:"\u6CE8\u5165 Mongo/ES \u6545\u969C\uFF0C\u9A8C\u8BC1\u4E3B\u5199\u6210\u529F\u3001Outbox \u91CD\u8BD5\u3001\u6B7B\u4FE1\u4E0E\u6062\u590D\u8FFD\u5E73\u3002",paraId:138,tocIndex:74},{value:"\u635F\u574F\u6743\u9650\u914D\u7F6E\uFF0C\u9A8C\u8BC1 fail closed\uFF1B\u5207\u6362 clientId\uFF0C\u9A8C\u8BC1\u8D44\u6E90\u5B8C\u5168\u9694\u79BB\u3002",paraId:138,tocIndex:74},{value:"\u6267\u884C\u5916\u90E8\u5FEB\u7167\u548C\u590D\u5408\u6E38\u6807\u589E\u91CF\uFF0C\u9A8C\u8BC1\u5931\u8D25\u4E0D\u63A8\u8FDB\u6E38\u6807\u53CA\u5BF9\u8D26\u5F52\u96F6\u3002",paraId:138,tocIndex:74},{value:"\u6062\u590D\u670D\u52A1\u5E76\u9A8C\u8BC1\u8865\u507F\u3001\u5BA1\u8BA1\u3001\u6307\u6807\u548C\u544A\u8B66\u95ED\u73AF\u3002",paraId:138,tocIndex:74},{value:`\u4EA4\u4ED8\uFF1AMaven \u591A\u6A21\u5757\u3001\u7EDF\u4E00 Result/PageResult\u3001\u6700\u7EC8 Flyway baseline\uFF08\u7528\u6237/\u7EC4\u7EC7\u3001Schema/Data\u3001\u5E42\u7B49\u3001Outbox\u3001\u540C\u6B65\u3001\u5BA1\u8BA1\u5168\u8868\uFF09\u3001DO/Mapper/XML\u3001\u4E8B\u52A1\u6A21\u677F\u3002
\u9A8C\u6536\uFF1ADDL \u53EF\u91CD\u590D\u7BA1\u7406\uFF1BSchema/Data \u57FA\u7840 Mapper \u96C6\u6210\u6D4B\u8BD5\u901A\u8FC7\u3002`,paraId:139,tocIndex:76},{value:`\u4EA4\u4ED8\uFF1A\u5B57\u6BB5\u6A21\u578B\u3001\u7C7B\u578B\u679A\u4E3E\u3001Schema \u6821\u9A8C\u3001formKey\u3001Owner\u3001\u7248\u672C\u5386\u53F2\u3001\u517C\u5BB9\u6027 diff\u3002
\u9A8C\u6536\uFF1A\u5408\u6CD5 Schema \u53EF\u521B\u5EFA\uFF1B\u975E\u6CD5\u5B9A\u4E49\u660E\u786E\u8FD4\u56DE 400\uFF1B\u5E76\u53D1\u66F4\u65B0\u8FD4\u56DE 409\u3002`,paraId:140,tocIndex:77},{value:`\u4EA4\u4ED8\uFF1A\u65B0\u589E\u3001\u5168\u91CF\u66F4\u65B0\u3001\u903B\u8F91\u5220\u9664\u3001\u8BE6\u60C5\u3001\u5BA1\u8BA1\u3001\u5916\u90E8\u6570\u636E\u6E90\u5199\u4FDD\u62A4\u3001\u5E42\u7B49\u952E\u3002
\u9A8C\u6536\uFF1A\u540C\u4E00\u4E1A\u52A1\u5E42\u7B49\u952E\u53EA\u4EA7\u751F\u4E00\u6761\u6570\u636E\uFF1B\u6240\u6709\u64CD\u4F5C\u6709\u5BA1\u8BA1\u8BB0\u5F55\u3002`,paraId:141,tocIndex:78},{value:`\u4EA4\u4ED8\uFF1A\u7C7B\u578B\u5316\u6587\u6863\u3001Collection\u3001\u6761\u4EF6\u8F6C\u6362\u3001\u5206\u9875/\u6E38\u6807\u3001\u7EC4\u5408\u7D22\u5F15\u3001Outbox \u6D88\u8D39\u8005\u3002
\u9A8C\u6536\uFF1A\u4E03\u79CD\u5B57\u6BB5\u7C7B\u578B\u6B63\u786E\uFF1B\u6761\u4EF6\u6811\u4E0E\u6743\u9650\u6811\u67E5\u8BE2\u7ED3\u679C\u4E00\u81F4\u3002`,paraId:142,tocIndex:79},{value:`\u4EA4\u4ED8\uFF1AMapping\u3001alias\u3001v1/v2\u3001\u641C\u7D22\u3001search_after\u3001\u56FE\u8868\u805A\u5408\u3001Bulk \u6D88\u8D39\u3002
\u9A8C\u6536\uFF1AMapping \u56FA\u5B9A\uFF1B\u6DF1\u5206\u9875\u4E0D\u4F7F\u7528\u8D85\u5927 from\uFF1B\u805A\u5408\u503C\u6B63\u786E\u3002`,paraId:143,tocIndex:80},{value:`\u4EA4\u4ED8\uFF1ACallerContext\u3001Owner\u3001\u8BFB\u5199\u6761\u4EF6\u6811\u3001\u5360\u4F4D\u7B26 Registry\u3001fail-closed\u3001clientId \u9694\u79BB\u3002
\u9A8C\u6536\uFF1A\u8DE8\u7528\u6237\u3001\u8DE8 clientId \u4E0D\u6CC4\u6F0F\uFF1B\u53D8\u91CF\u7F3A\u5931\u4E0D\u4F1A\u6269\u5927\u6743\u9650\u3002`,paraId:144,tocIndex:81},{value:`\u4EA4\u4ED8\uFF1A\u4EFB\u52A1\u961F\u5217\u3001\u9501\u3001\u5FC3\u8DF3\u3001\u5168\u91CF\u84DD\u7EFF\u5207\u6362\u3001\u5916\u90E8\u589E\u91CF\u3001\u7248\u672C\u8FC1\u79FB\u3001\u56DE\u6EDA\u3002
\u9A8C\u6536\uFF1A\u540C\u6B65\u671F\u95F4\u53EF\u8BFB\uFF1B\u5207\u6362\u539F\u5B50\uFF1B\u5931\u8D25\u53EF\u6062\u590D\uFF1B\u6570\u636E count/hash \u4E00\u81F4\u3002`,paraId:145,tocIndex:82},{value:`\u4EA4\u4ED8\uFF1A\u5168\u90E8 API/Tool\u3001\u9650\u6D41\u3001Metrics\u3001Tracing\u3001\u544A\u8B66\u3001\u7BA1\u7406\u67E5\u8BE2\u3001\u64CD\u4F5C\u624B\u518C\u3002
\u9A8C\u6536\uFF1A\u5951\u7EA6\u6D4B\u8BD5\u3001\u6545\u969C\u6F14\u7EC3\u3001\u5BB9\u91CF\u538B\u6D4B\u548C\u5B89\u5168\u5BA1\u8BA1\u901A\u8FC7\u3002`,paraId:146,tocIndex:83},{value:`\u4EA4\u4ED8\uFF1A\u72EC\u7ACB React + TypeScript \u7BA1\u7406\u7AEF\u3001Schema \u7F16\u8F91\u5668\u3001\u52A8\u6001\u6570\u636E\u7BA1\u7406\u3001\u540C\u6B65\u4EFB\u52A1\u548C\u56FE\u8868\u7EDF\u8BA1\u9875\u9762\u3002
\u9A8C\u6536\uFF1A\u56DB\u7C7B\u7BA1\u7406\u6D41\u7A0B\u5168\u90E8\u53EF\u5728\u6D4F\u89C8\u5668\u5B8C\u6210\uFF1B\u8DEF\u7531\u5237\u65B0\u4E0D\u4E22\u5931\uFF1B\u63A5\u53E3\u5931\u8D25\u5C55\u793A\u670D\u52A1\u7AEF\u539F\u59CB `,paraId:147,tocIndex:84},{value:"message",paraId:147,tocIndex:84},{value:"\uFF1B\u751F\u4EA7\u6784\u5EFA\u4E0E\u524D\u7AEF\u81EA\u52A8\u5316\u6D4B\u8BD5\u901A\u8FC7\u3002",paraId:147,tocIndex:84},{value:"\u9879\u76EE",paraId:148,tocIndex:85},{value:"\u5F53\u524D\u5B9E\u73B0",paraId:148,tocIndex:85},{value:"\u751F\u4EA7\u76EE\u6807",paraId:148,tocIndex:85},{value:"\u4F18\u5148\u7EA7",paraId:148,tocIndex:85},{value:"\u52A8\u6001\u5B57\u6BB5",paraId:148,tocIndex:85},{value:"LONGTEXT JSON + \u7C7B\u578B\u5316\u526F\u672C",paraId:148,tocIndex:85},{value:"\u4FDD\u6301",paraId:148,tocIndex:85},{value:"\u5DF2\u5B8C\u6210",paraId:148,tocIndex:85},{value:"Schema \u7248\u672C",paraId:148,tocIndex:85},{value:"\u56FA\u5B9A/\u5355\u884C version\uFF0C\u65E0\u5386\u53F2",paraId:148,tocIndex:85},{value:"\u5386\u53F2\u3001\u4E50\u89C2\u9501\u3001\u56DE\u6EDA",paraId:148,tocIndex:85},{value:"P0",paraId:148,tocIndex:85},{value:"\u6570\u636E\u6821\u9A8C",paraId:148,tocIndex:85},{value:"\u8F6C\u6362\u5931\u8D25\u53EF\u964D\u7EA7",paraId:148,tocIndex:85},{value:"\u5199\u5165\u524D\u4E25\u683C\u62D2\u7EDD",paraId:148,tocIndex:85},{value:"P0",paraId:148,tocIndex:85},{value:"\u4E00\u81F4\u6027",paraId:148,tocIndex:85},{value:"\u5E94\u7528\u53CC\u5199 + ES \u5931\u8D25\u8868",paraId:148,tocIndex:85},{value:"Outbox + \u5E42\u7B49 + \u91CD\u8BD5 + \u5BF9\u8D26",paraId:148,tocIndex:85},{value:"P0",paraId:148,tocIndex:85},{value:"ES \u91CD\u8BD5",paraId:148,tocIndex:85},{value:"\u8868\u5DF2\u9884\u7559\uFF0C\u672A\u5B8C\u6574\u5B9E\u73B0",paraId:148,tocIndex:85},{value:"\u6307\u6570\u9000\u907F\u548C\u6B7B\u4FE1",paraId:148,tocIndex:85},{value:"P0",paraId:148,tocIndex:85},{value:"\u65B0\u589E\u5E42\u7B49",paraId:148,tocIndex:85},{value:"\u65E0\u4E1A\u52A1\u5E42\u7B49\u952E",paraId:148,tocIndex:85},{value:"formKey + idempotencyKey",paraId:148,tocIndex:85},{value:"P0",paraId:148,tocIndex:85},{value:"\u6743\u9650\u635F\u574F",paraId:148,tocIndex:85},{value:"\u90E8\u5206\u573A\u666F\u653E\u884C",paraId:148,tocIndex:85},{value:"fail closed",paraId:148,tocIndex:85},{value:"P0",paraId:148,tocIndex:85},{value:"clientId \u9694\u79BB",paraId:148,tocIndex:85},{value:"\u5B58\u5B57\u6BB5\uFF0C\u9694\u79BB\u9700\u52A0\u5F3A",paraId:148,tocIndex:85},{value:"\u6240\u6709\u67E5\u8BE2\u5F3A\u5236\u8FC7\u6EE4",paraId:148,tocIndex:85},{value:"P0",paraId:148,tocIndex:85},{value:"\u7C7B\u578B\u8FC1\u79FB",paraId:148,tocIndex:85},{value:"\u5168\u91CF\u91CD\u5EFA\u526F\u672C",paraId:148,tocIndex:85},{value:"\u9884\u626B\u63CF\u3001\u8FC1\u79FB\u3001\u56DE\u6EDA",paraId:148,tocIndex:85},{value:"P1",paraId:148,tocIndex:85},{value:"\u53EF\u89C2\u6D4B\u6027",paraId:148,tocIndex:85},{value:"\u65E5\u5FD7\u4E3A\u4E3B",paraId:148,tocIndex:85},{value:"\u6307\u6807\u3001\u94FE\u8DEF\u3001\u5DEE\u5F02\u62A5\u544A",paraId:148,tocIndex:85},{value:"P1",paraId:148,tocIndex:85},{value:"\u5BB9\u91CF\u6CBB\u7406",paraId:148,tocIndex:85},{value:"\u57FA\u7840\u5206\u9875\u9650\u5236",paraId:148,tocIndex:85},{value:"\u9650\u6D41\u3001\u914D\u989D\u3001Schema \u4E0A\u9650",paraId:148,tocIndex:85},{value:"P1",paraId:148,tocIndex:85},{value:"\u6570\u636E\u6E05\u7406",paraId:148,tocIndex:85},{value:"\u5220\u9664\u5B57\u6BB5\u6B8B\u7559 JSON",paraId:148,tocIndex:85},{value:"\u5EF6\u8FDF\u6E05\u7406\u4E0E\u4FDD\u7559\u7B56\u7565",paraId:148,tocIndex:85},{value:"P2",paraId:148,tocIndex:85},{value:"formKey",paraId:149,tocIndex:86},{value:" \u662F\u5168\u94FE\u8DEF\u552F\u4E00\u903B\u8F91\u8868\u6807\u8BC6\uFF0C\u7981\u6B62\u590D\u7528\u6216\u7531\u5BA2\u6237\u7AEF\u731C\u6D4B\u751F\u6210\u3002",paraId:149,tocIndex:86},{value:"MySQL \u4FDD\u5B58\u539F\u59CB JSON\uFF0CMongo/ES \u4FDD\u5B58\u6309 Schema \u7C7B\u578B\u5316\u540E\u7684\u67E5\u8BE2\u526F\u672C\u3002",paraId:149,tocIndex:86},{value:"\u5B57\u6BB5\u8EAB\u4EFD\u7531 ",paraId:149,tocIndex:86},{value:"fieldId",paraId:149,tocIndex:86},{value:" \u51B3\u5B9A\uFF0C",paraId:149,tocIndex:86},{value:"fieldName",paraId:149,tocIndex:86},{value:" \u4EC5\u7528\u4E8E\u663E\u793A\u3002",paraId:149,tocIndex:86},{value:"\u65B0\u589E\u5B57\u6BB5\u4E0D\u6539 MySQL \u8868\uFF1B\u4E0D\u517C\u5BB9\u7C7B\u578B\u53D8\u5316\u5FC5\u987B\u7ECF\u8FC7\u8FC1\u79FB\u3002",paraId:149,tocIndex:86},{value:"\u81F3\u5C11\u542F\u7528 Mongo \u6216 ES \u4E2D\u4E00\u4E2A\u641C\u7D22\u5F15\u64CE\u3002",paraId:149,tocIndex:86},{value:"\u751F\u4EA7\u5199\u5165\u91C7\u7528 MySQL \u4E8B\u5B9E\u6E90 + \u540C\u4E8B\u52A1 Outbox\uFF1BMongo/ES \u4EC5\u662F\u53EF\u91CD\u5EFA\u7684\u6700\u7EC8\u4E00\u81F4\u67E5\u8BE2\u526F\u672C\u3002",paraId:149,tocIndex:86},{value:"\u6240\u6709\u67E5\u8BE2\u5FC5\u987B\u5408\u5E76\u884C\u6743\u9650\uFF0COwner \u8C41\u514D\u4ECD\u9700\u5BA1\u8BA1\u3002",paraId:149,tocIndex:86},{value:"Schema \u53D8\u66F4\u5FC5\u987B\u91CD\u5EFA\u53D7\u5F71\u54CD\u7684 Mongo/ES \u6570\u636E\u7ED3\u6784\u3002",paraId:149,tocIndex:86},{value:"\u751F\u4EA7\u5B9E\u73B0\u5FC5\u987B\u5177\u5907\u5E42\u7B49\u3001Outbox\u3001\u91CD\u8BD5\u3001\u6B7B\u4FE1\u3001\u5BF9\u8D26\u548C\u7248\u672C\u56DE\u6EDA\uFF0C\u5177\u4F53\u7B97\u6CD5\u4EE5\u7B2C 32 \u7AE0\u4E3A\u51C6\u3002",paraId:149,tocIndex:86},{value:"\u914D\u7F6E\u6587\u4EF6\u548C\u6280\u672F\u6587\u6863\u4E0D\u5F97\u5305\u542B\u771F\u5B9E\u8FDE\u63A5\u51ED\u636E\u3002",paraId:149,tocIndex:86},{value:"\u672C\u7AE0\u5F00\u59CB\u7ED9\u51FA\u53EF\u76F4\u63A5\u7F16\u7801\u7684\u5B8C\u6574\u89C4\u683C\u3002\u5B9E\u73B0\u8005\u4E0D\u9700\u8981\u8BBF\u95EE\u539F\u4ED3\u5E93\uFF0C\u53EA\u9700\u6309\u672C\u7AE0\u53CA\u540E\u7EED\u7AE0\u8282\u5EFA\u7ACB\u5DE5\u7A0B\u3001\u6570\u636E\u8868\u3001\u5BF9\u8C61\u6A21\u578B\u548C\u670D\u52A1\u8FB9\u754C\u3002",paraId:150,tocIndex:87},{value:`aiform-platform/
\u251C\u2500\u2500 backend/
\u2502   \u251C\u2500\u2500 aiform-client/       context\u3001DTO\u3001VO\u3001RPC \u63A5\u53E3
\u2502   \u251C\u2500\u2500 aiform-core/         domain\u3001mapper\u3001service\u3001permission\u3001query
\u2502   \u251C\u2500\u2500 aiform-infra/        mysql\u3001mongo\u3001elasticsearch\u3001outbox\u3001sync
\u2502   \u2514\u2500\u2500 aiform-application/  REST\u3001Agent Tool\u3001RPC \u5B9E\u73B0\u3001config\u3001scheduler
\u251C\u2500\u2500 frontend/
\u2502   \u2514\u2500\u2500 ai-form-admin/       React\u3001TypeScript\u3001Ant Design\u3001Vite
\u251C\u2500\u2500 deploy/
\u2502   \u251C\u2500\u2500 compose/             \u672C\u5730 MySQL\u3001MongoDB\u3001Elasticsearch
\u2502   \u2514\u2500\u2500 kubernetes/          Deployment\u3001Service\u3001Ingress\u3001ConfigMap
\u2514\u2500\u2500 migrations/              Flyway \u7248\u672C\u5316 SQL
`,paraId:151,tocIndex:88},{value:"\u540E\u7AEF\u4F9D\u8D56\u65B9\u5411\u56FA\u5B9A\u4E3A ",paraId:152,tocIndex:88},{value:"application \u2192 infra/core \u2192 client",paraId:152,tocIndex:88},{value:"\uFF1B",paraId:152,tocIndex:88},{value:"client",paraId:152,tocIndex:88},{value:" \u4E0D\u4F9D\u8D56 Web\u3001\u6570\u636E\u5E93\u6216\u7EC4\u7EC7\u670D\u52A1\uFF1B",paraId:152,tocIndex:88},{value:"core",paraId:152,tocIndex:88},{value:" \u4E0D\u8BFB\u53D6 HTTP Session\u3002\u7BA1\u7406\u524D\u7AEF\u53EA\u8C03\u7528 REST\uFF0C\u4E0D\u76F4\u8FDE MySQL\u3001MongoDB \u6216 Elasticsearch\u3002\u8EAB\u4EFD\u7EDF\u4E00\u901A\u8FC7 ",paraId:152,tocIndex:88},{value:"FormCallerContext",paraId:152,tocIndex:88},{value:" \u663E\u5F0F\u4F20\u5165\u3002",paraId:152,tocIndex:88},{value:`public interface FormSchemaService {
    String createSchema(FormSchemaCreateDTO dto, FormCallerContext ctx);
    FormSchemaDetailVO updateSchema(FormSchemaUpdateDTO dto, FormCallerContext ctx);
    boolean deleteSchema(String formKey, Integer expectedVersion,
                         FormCallerContext ctx);
    FormSchemaDetailVO getSchemaDetail(String formKey, FormCallerContext ctx);
    PageResult<FormSchemaVO> getSchemaList(FormSchemaQueryDTO dto,
                                            FormCallerContext ctx);
    FormSchemaDetailVO updateDataSourceConfig(
        String formKey, Integer expectedVersion, Boolean mongoEnabled,
        Boolean esEnabled, FormCallerContext ctx
    );
}

public interface FormDataService {
    DataWriteResult addData(FormDataCreateDTO dto, FormCallerContext ctx);
    DataWriteResult updateData(FormDataUpdateDTO dto, FormCallerContext ctx);
    DataWriteResult deleteData(String formKey, Long dataId, Integer version,
                               FormCallerContext ctx);
    FormDataVO getDataDetail(String formKey, Long dataId, FormCallerContext ctx);
    PageResult<FormDataVO> search(ConditionTreeSearchDTO dto, FormCallerContext ctx);
    List<DataWriteResult> batchAddData(List<FormDataCreateDTO> list,
                                       FormCallerContext ctx);
    List<DataWriteResult> batchDeleteData(String formKey,
                                          List<DeleteItemDTO> items,
                                          FormCallerContext ctx);
}

public interface FormPermissionService {
    PermissionResolveResult resolve(String formKey, FormCallerContext ctx);
    void checkWritePermission(String formKey, WriteOpType op,
                              FormCallerContext ctx, Map<String, Object> dataDoc);
    boolean isOwner(String formKey, FormCallerContext ctx);
}
`,paraId:153,tocIndex:89},{value:`public class FormCallerContext implements Serializable {
    private String userId;
    private String clientId;
    private String employeeNo;
    private Set<String> orgIds;
    private Set<String> orgPaths;
    private Set<String> orgPathsWithSub;
    private Set<String> roleCodes;
    private Map<String, Object> params;
}

public class FormFieldDefinition {
    private String fieldId;
    private String fieldName;
    private String fieldType;
    private String dateFormat;
    private String arraySeparator;
    private String arrayElementType;
    private Boolean required;
    private JsonNode defaultValue;
}

public class ConditionNode implements Serializable {
    private String logic;
    private List<ConditionNode> children;
    private String fieldId;
    private JsonNode value;
    private String exp;
    private List<String> fnArgs;
    public boolean isLogicNode() { return logic != null && !logic.isBlank(); }
}

public class FormPermissionConfig implements Serializable {
    private Boolean enabled;
    private ConditionNode rootNode;
    private WritePermissionConfig writePermission;
}

public class WritePermissionConfig implements Serializable {
    private ConditionNode createCondition;
    private ConditionNode updateCondition;
    private ConditionNode deleteCondition;
}
`,paraId:154,tocIndex:90},{value:`public class FormSchemaCreateDTO {
    private String formName;
    private String schemaDefinition;
    private Integer mongoEnabled;
    private Integer esEnabled;
    private Integer dataSourceType;
    private String permissionConfig;
}

public class FormSchemaUpdateDTO {
    private String formKey;
    private Integer version;
    private String formName;
    private String schemaDefinition;
    private Integer mongoEnabled;
    private Integer esEnabled;
    private Integer dataSourceType;
    private String permissionConfig;
    private List<String> owners;
}

public class FormSchemaQueryDTO {
    private String formName;
    private String formKey;
    private Integer pageNum;
    private Integer pageSize;
}

public class FormDataCreateDTO {
    private String formKey;
    private String data;
    private String idempotencyKey;
}

public class FormDataUpdateDTO {
    private Long id;
    private Integer version;
    private String formKey;
    private String data;
}

public class DeleteItemDTO {
    private Long id;
    private Integer version;
}

public class ConditionTreeSearchDTO {
    private String formKey;
    private ConditionNode conditionTree;
    private String searchEngine;
    private Integer pageNum;
    private Integer pageSize;
    private String sortField;
    private Integer sortOrder;
    private String pageMode;
    private Long cursor;
    private String cursorDirection;
}

public class EsChartQueryDTO {
    private String formKey;
    private String dimensionField;
    private String dimensionInterval;
    private String metricField;
    private String metricAggType;
    private String metricSort;
    private ConditionNode conditionTree;
}
`,paraId:155,tocIndex:91},{value:`public class Result<T> {
    private boolean success;
    private String code;
    private String message;
    private T data;
    private String traceId;
}

public class PageResult<T> {
    private Integer pageNum;
    private Integer pageSize;
    private Long total;
    private Integer totalPages;
    private List<T> list;
    private Long nextCursor;
    private Boolean hasNext;
}

public class DataWriteResult {
    private Long id;
    private Integer version;
    private Boolean projectionPending;
}

public class FormDataVO {
    private Long id;
    private String formKey;
    private Integer version;
    private String data;
    private Instant gmtCreate;
    private Instant gmtModified;
    private String creator;
    private String modifier;
}

public class FormSchemaDetailVO {
    private Long id;
    private String formKey;
    private String formName;
    private String schemaDefinition;
    private Integer version;
    private Integer mongoEnabled;
    private Integer esEnabled;
    private Integer dataSourceType;
    private String permissionConfig;
    private List<String> owners;
    private String creator;
    private String clientId;
    private Instant lastSyncTime;
    private Instant gmtCreate;
    private Instant gmtModified;
}
`,paraId:156,tocIndex:92},{value:"\u6240\u6709\u65F6\u95F4\u5728 Java \u4E2D\u4F7F\u7528 ",paraId:157,tocIndex:92},{value:"Instant",paraId:157,tocIndex:92},{value:"\uFF0C\u6570\u636E\u5E93\u4F7F\u7528 UTC\uFF0CREST/RPC \u7EDF\u4E00\u8F93\u51FA ISO 8601 UTC\uFF0C\u4F8B\u5982 ",paraId:157,tocIndex:92},{value:"2026-06-30T08:00:00Z",paraId:157,tocIndex:92},{value:"\uFF1B\u524D\u7AEF\u6309\u7528\u6237\u65F6\u533A\u5C55\u793A\u3002",paraId:157,tocIndex:92},{value:"data",paraId:157,tocIndex:92},{value:" \u548C ",paraId:157,tocIndex:92},{value:"schemaDefinition",paraId:157,tocIndex:92},{value:" \u5728 REST/RPC \u5BF9\u8C61\u4E2D\u5747\u4E3A JSON \u5B57\u7B26\u4E32\uFF0C\u4E0D\u80FD\u64C5\u81EA\u6539\u6210\u5D4C\u5957\u5BF9\u8C61\uFF0C\u5426\u5219\u4F1A\u7834\u574F\u5951\u7EA6\u3002",paraId:157,tocIndex:92},{value:"\u4EE5\u4E0B 10 \u5F20\u8868\u7528\u4E8E\u89E3\u91CA\u65E7\u5B9E\u73B0\u7684\u6570\u636E\u7ED3\u6784\u548C\u8FC1\u79FB\u6765\u6E90\uFF0C\u4E0D\u662F\u5168\u65B0\u751F\u4EA7\u9879\u76EE\u7684\u6700\u7EC8\u5EFA\u8868\u96C6\u5408\u3002\u5168\u65B0\u5F00\u53D1\u5FC5\u987B\u901A\u8FC7 Flyway \u6267\u884C\u7B2C 32 \u7AE0\u89C4\u5B9A\u7684\u6700\u7EC8\u8868\u96C6\u5408\u53CA\u7EA6\u675F\uFF1B\u5DF2\u6709\u73AF\u5883\u7981\u6B62\u76F4\u63A5 ",paraId:158,tocIndex:93},{value:"DROP TABLE",paraId:158,tocIndex:93},{value:"\u3002",paraId:158,tocIndex:93},{value:`CREATE DATABASE IF NOT EXISTS ai_form
  DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE ai_form;

CREATE TABLE ai_form_schema (
  id BIGINT NOT NULL AUTO_INCREMENT,
  form_key VARCHAR(64) NOT NULL,
  form_name VARCHAR(128) NOT NULL,
  schema_definition LONGTEXT DEFAULT NULL,
  version INT NOT NULL DEFAULT 1,
  mongo_enabled TINYINT NOT NULL DEFAULT 1,
  es_enabled TINYINT NOT NULL DEFAULT 0,
  sync_status TINYINT NOT NULL DEFAULT 0,
  data_source_type TINYINT NOT NULL DEFAULT 0,
  last_sync_time DATETIME DEFAULT NULL,
  permission_config LONGTEXT DEFAULT NULL,
  owners VARCHAR(1024) DEFAULT NULL,
  client_id VARCHAR(64) DEFAULT NULL,
  is_deleted TINYINT NOT NULL DEFAULT 0,
  creator VARCHAR(64) DEFAULT NULL,
  gmt_create DATETIME DEFAULT NULL,
  modifier VARCHAR(64) DEFAULT NULL,
  gmt_modified DATETIME DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY uk_form_key (form_key),
  KEY idx_is_deleted (is_deleted)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_data (
  id BIGINT NOT NULL AUTO_INCREMENT,
  form_key VARCHAR(64) NOT NULL,
  data LONGTEXT DEFAULT NULL,
  date_key VARCHAR(128) DEFAULT NULL,
  is_deleted TINYINT NOT NULL DEFAULT 0,
  creator VARCHAR(64) DEFAULT NULL,
  gmt_create DATETIME DEFAULT NULL,
  modifier VARCHAR(64) DEFAULT NULL,
  gmt_modified DATETIME DEFAULT NULL,
  PRIMARY KEY (id),
  KEY idx_form_key_deleted_id (form_key, is_deleted, id),
  KEY idx_form_key_date_key (form_key, date_key),
  KEY idx_gmt_modified (gmt_modified)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_data_mongo_sync (
  id BIGINT NOT NULL AUTO_INCREMENT,
  form_key VARCHAR(64) NOT NULL,
  data_id BIGINT NOT NULL,
  sync_type TINYINT NOT NULL,
  sync_num INT NOT NULL DEFAULT 0,
  is_deleted TINYINT NOT NULL DEFAULT 0,
  creator VARCHAR(64), gmt_create DATETIME,
  modifier VARCHAR(64), gmt_modified DATETIME,
  PRIMARY KEY (id),
  KEY idx_form_key (form_key),
  KEY idx_sync_num (sync_num)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_mongo_index (
  id BIGINT NOT NULL AUTO_INCREMENT,
  form_key VARCHAR(64) NOT NULL,
  index_keys VARCHAR(512) DEFAULT NULL,
  index_name VARCHAR(128) DEFAULT NULL,
  index_status TINYINT NOT NULL DEFAULT 1,
  is_deleted TINYINT NOT NULL DEFAULT 0,
  creator VARCHAR(64), gmt_create DATETIME,
  modifier VARCHAR(64), gmt_modified DATETIME,
  PRIMARY KEY (id), KEY idx_form_key (form_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_sync_progress (
  id BIGINT NOT NULL AUTO_INCREMENT,
  form_key VARCHAR(64) NOT NULL,
  sync_type TINYINT NOT NULL,
  sync_mode TINYINT NOT NULL,
  sync_status TINYINT NOT NULL DEFAULT 1,
  total_count BIGINT NOT NULL DEFAULT 0,
  synced_count BIGINT NOT NULL DEFAULT 0,
  start_time DATETIME DEFAULT NULL,
  end_time DATETIME DEFAULT NULL,
  error_msg TEXT DEFAULT NULL,
  is_deleted TINYINT NOT NULL DEFAULT 0,
  creator VARCHAR(64), gmt_create DATETIME,
  modifier VARCHAR(64), gmt_modified DATETIME,
  PRIMARY KEY (id),
  KEY idx_status_mode (sync_status, sync_mode),
  KEY idx_form_key (form_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_sync_cursor (
  id BIGINT NOT NULL AUTO_INCREMENT,
  sync_type TINYINT NOT NULL,
  last_sync_time DATETIME NOT NULL,
  is_deleted TINYINT NOT NULL DEFAULT 0,
  creator VARCHAR(64), gmt_create DATETIME,
  modifier VARCHAR(64), gmt_modified DATETIME,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_sync_lock (
  id BIGINT NOT NULL AUTO_INCREMENT,
  lock_key VARCHAR(128) NOT NULL,
  server_id VARCHAR(128) DEFAULT NULL,
  lock_time DATETIME DEFAULT NULL,
  last_heartbeat DATETIME DEFAULT NULL,
  is_deleted TINYINT NOT NULL DEFAULT 0,
  creator VARCHAR(64), gmt_create DATETIME,
  modifier VARCHAR(64), gmt_modified DATETIME,
  PRIMARY KEY (id), UNIQUE KEY uk_lock_key (lock_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_data_external (
  id BIGINT NOT NULL AUTO_INCREMENT,
  form_key VARCHAR(64) NOT NULL,
  data LONGTEXT DEFAULT NULL,
  date_key VARCHAR(128) DEFAULT NULL,
  is_deleted TINYINT NOT NULL DEFAULT 0,
  creator VARCHAR(64), gmt_create DATETIME,
  modifier VARCHAR(64), gmt_modified DATETIME,
  PRIMARY KEY (id),
  KEY idx_form_key_id (form_key, id),
  KEY idx_form_key_date_key (form_key, date_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_data_incremental (
  id BIGINT NOT NULL AUTO_INCREMENT,
  form_key VARCHAR(64) NOT NULL,
  data LONGTEXT DEFAULT NULL,
  date_key VARCHAR(128) NOT NULL,
  is_deleted TINYINT NOT NULL DEFAULT 0,
  creator VARCHAR(64),
  gmt_create DATETIME DEFAULT CURRENT_TIMESTAMP,
  modifier VARCHAR(64),
  gmt_modified DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uk_form_datekey (form_key, date_key),
  KEY idx_form_key_modified (form_key, gmt_modified)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_data_es_sync (
  id BIGINT NOT NULL AUTO_INCREMENT,
  form_key VARCHAR(64) NOT NULL,
  data_id BIGINT NOT NULL,
  sync_type TINYINT NOT NULL,
  retry_count INT NOT NULL DEFAULT 0,
  max_retry INT NOT NULL DEFAULT 5,
  next_retry_time DATETIME DEFAULT NULL,
  error_msg VARCHAR(1024) DEFAULT NULL,
  is_deleted TINYINT NOT NULL DEFAULT 0,
  creator VARCHAR(64), gmt_create DATETIME,
  modifier VARCHAR(64), gmt_modified DATETIME,
  PRIMARY KEY (id),
  KEY idx_form_key (form_key),
  KEY idx_gmt_create (gmt_create)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`,paraId:159,tocIndex:93},{value:"\u5BF9\u8C61",paraId:160,tocIndex:94},{value:"\u5B57\u6BB5",paraId:160,tocIndex:94},{value:"\u503C",paraId:160,tocIndex:94},{value:"Schema",paraId:160,tocIndex:94},{value:"sync_status",paraId:160,tocIndex:94},{value:"0 \u6B63\u5E38\uFF1B1 \u540C\u6B65\u4E2D",paraId:160,tocIndex:94},{value:"Schema",paraId:160,tocIndex:94},{value:"data_source_type",paraId:160,tocIndex:94},{value:"0 \u5185\u90E8 API\uFF1B1 \u5916\u90E8\u5168\u91CF\uFF1B2 \u5916\u90E8\u589E\u91CF",paraId:160,tocIndex:94},{value:"SyncProgress",paraId:160,tocIndex:94},{value:"sync_type",paraId:160,tocIndex:94},{value:"1 Mongo\uFF1B2 ES",paraId:160,tocIndex:94},{value:"SyncProgress",paraId:160,tocIndex:94},{value:"sync_mode",paraId:160,tocIndex:94},{value:"1 \u5168\u91CF\uFF1B2 \u4FDD\u7559\u7684\u589E\u91CF\u6A21\u5F0F",paraId:160,tocIndex:94},{value:"SyncProgress",paraId:160,tocIndex:94},{value:"sync_status",paraId:160,tocIndex:94},{value:"1 \u5F85\u6267\u884C\uFF1B2 \u6267\u884C\u4E2D\uFF1B3 \u5B8C\u6210\uFF1B4 \u5931\u8D25",paraId:160,tocIndex:94},{value:"MongoIndex",paraId:160,tocIndex:94},{value:"index_status",paraId:160,tocIndex:94},{value:"1 \u521B\u5EFA\u4E2D\uFF1B2 \u6B63\u5E38",paraId:160,tocIndex:94},{value:"\u5931\u8D25\u8BB0\u5F55",paraId:160,tocIndex:94},{value:"sync_type",paraId:160,tocIndex:94},{value:"1 \u65B0\u589E/\u66F4\u65B0\uFF1B2 \u5220\u9664",paraId:160,tocIndex:94},{value:"ai_form_sync_cursor",paraId:160,tocIndex:94},{value:" \u4E3A\u5386\u53F2\u4FDD\u7559\u8868\uFF0C\u5F53\u524D\u5B9E\u65F6 ES \u4E09\u5199\u4E0D\u8BFB\u53D6\u5B83\u3002\u4E0D\u8981\u5C06\u5B83\u5B9E\u73B0\u6210\u65B0\u7684\u5B9A\u65F6 ES \u6E38\u6807\u4EFB\u52A1\uFF0C\u9664\u975E\u660E\u786E\u6539\u53D8\u67B6\u6784\u3002",paraId:160,tocIndex:94},{value:"Mapper \u5FC5\u987B\u53EA\u6309\u56FA\u5B9A\u5217\u67E5\u8BE2 MySQL\uFF0C\u52A8\u6001\u5B57\u6BB5\u67E5\u8BE2\u4EA4\u7ED9 Mongo/ES\u3002\u6838\u5FC3 SQL \u5982\u4E0B\uFF1A",paraId:161,tocIndex:95},{value:`-- Schema
SELECT * FROM ai_form_schema
WHERE form_key = ? AND is_deleted = 0 LIMIT 1;

-- \u5185\u90E8\u6570\u636E\u6E38\u6807\u5206\u9875
SELECT * FROM ai_form_data
WHERE form_key = ? AND is_deleted = 0 AND id > ?
ORDER BY id ASC LIMIT ?;

-- \u903B\u8F91\u5220\u9664
UPDATE ai_form_data
SET is_deleted=1, modifier=?, gmt_modified=?
WHERE id=? AND is_deleted=0;

-- \u8868\u5355\u7EA7\u540C\u6B65\u9501
UPDATE ai_form_schema
SET sync_status=1, gmt_modified=NOW()
WHERE form_key=? AND is_deleted=0 AND sync_status=0;

-- \u89E3\u9501
UPDATE ai_form_schema SET sync_status=0, gmt_modified=NOW()
WHERE form_key=? AND is_deleted=0;

-- \u5916\u90E8\u589E\u91CF UPSERT
INSERT INTO ai_form_data_incremental
(form_key,date_key,data,is_deleted,creator,modifier)
VALUES (?,?,?,?,?,?)
ON DUPLICATE KEY UPDATE
  data=VALUES(data), is_deleted=VALUES(is_deleted),
  modifier=VALUES(modifier), gmt_modified=CURRENT_TIMESTAMP;
`,paraId:162,tocIndex:95},{value:"\u6BCF\u4E2A\u66F4\u65B0/\u5220\u9664\u65B9\u6CD5\u5FC5\u987B\u68C0\u67E5\u5F71\u54CD\u884C\u6570\u3002Schema \u4E0E\u6570\u636E\u67E5\u8BE2\u90FD\u9ED8\u8BA4\u8FC7\u6EE4 ",paraId:163,tocIndex:95},{value:"is_deleted=0",paraId:163,tocIndex:95},{value:"\u3002\u6279\u91CF\u63D2\u5165\u9700\u8981\u56DE\u586B\u81EA\u589E ID\uFF0C\u5426\u5219\u65E0\u6CD5\u6784\u5EFA Mongo ",paraId:163,tocIndex:95},{value:"_id",paraId:163,tocIndex:95},{value:" \u548C ES document id\u3002",paraId:163,tocIndex:95},{value:`validateSchema(json):
  if json blank: error "Schema\u4E0D\u80FD\u4E3A\u7A7A"
  schema = parse json; parse failure -> 400
  if fields empty: error
  seen = Set()
  for field in fields:
    require fieldId, fieldName, fieldType
    reject fieldId in SYSTEM_FIELDS
    reject duplicate fieldId
    reject fieldType not in seven-type whitelist
`,paraId:164,tocIndex:97},{value:"\u5F53\u524D\u5B9E\u73B0\u53EA\u6821\u9A8C\u7ED3\u6784\uFF0C\u4E0D\u5F3A\u5236 ",paraId:165,tocIndex:97},{value:"required/defaultValue/dateFormat/arrayElementType",paraId:165,tocIndex:97},{value:" \u7684\u6570\u636E\u8BED\u4E49\u3002\u82E5\u8981\u590D\u523B\u73B0\u72B6\uFF0C\u4E0D\u8981\u5728 CRUD \u4E2D\u989D\u5916\u62D2\u7EDD\u7F3A\u5C11 required \u7684\u6570\u636E\uFF1B\u82E5\u5EFA\u8BBE\u751F\u4EA7\u589E\u5F3A\u7248\uFF0C\u5E94\u5728\u4E00\u4E2A\u72EC\u7ACB ",paraId:165,tocIndex:97},{value:"FormDataValidator",paraId:165,tocIndex:97},{value:" \u4E2D\u8865\u9F50\uFF0C\u907F\u514D\u6539\u53D8\u89E3\u6790\u5668\u517C\u5BB9\u8BED\u4E49\u3002",paraId:165,tocIndex:97},{value:`parseData(dataJson, fieldDefs):
  result = {}
  blank -> result
  JSON parse failure -> \u8BB0\u5F55 error\uFF0C\u8FD4\u56DE\u7A7A result
  fieldDefs empty -> \u539F\u6837\u8FD4\u56DE\u5168\u90E8 key/value
  for each fieldDef:
    if dataJson \u4E0D\u542B fieldId: continue
    raw = data[fieldId]
    null -> result[fieldId] = null
    else result[fieldId] = parseValue(raw, fieldDef)
  return result
`,paraId:166,tocIndex:98},{value:"\u5F53 Schema \u5B58\u5728\u65F6\uFF0C\u672A\u5B9A\u4E49\u5B57\u6BB5\u4E0D\u4F1A\u8FDB\u5165 Mongo/ES \u6587\u6863\uFF0C\u4F46\u539F\u59CB\u5B57\u6BB5\u4ECD\u4FDD\u7559\u5728 MySQL ",paraId:167,tocIndex:98},{value:"data",paraId:167,tocIndex:98},{value:" \u4E2D\u3002\u7C7B\u578B\u8F6C\u6362\u89C4\u5219\uFF1A",paraId:167,tocIndex:98},{value:`string/text -> \u4EC5\u63A5\u53D7 JSON String
number -> BigDecimal\uFF1B\u62D2\u7EDD NaN\u3001Infinity \u548C\u8D85\u8FC7\u5B9E\u73B0\u7CBE\u5EA6\u4E0A\u9650\u7684\u503C
integer -> Long\uFF1B\u8F93\u5165\u5305\u542B\u5C0F\u6570\u6216\u8D8A\u754C\u65F6\u5931\u8D25
\u65E5\u671F -> \`yyyy-MM-dd\` \u89E3\u6790\u4E3A LocalDate\uFF1BISO date-time \u89E3\u6790\u4E3A Instant \u5E76\u89C4\u8303\u5316 UTC
boolean -> \u4EC5\u63A5\u53D7 JSON true/false
array -> \u6B63\u5F0F API \u5FC5\u987B\u4E3A JSON Array\uFF0C\u9010\u9879\u6309 arrayElementType \u4E25\u683C\u8F6C\u6362
`,paraId:168,tocIndex:98},{value:"\u4EFB\u4F55\u5F02\u5E38\u90FD\u8FD4\u56DE\u5B57\u6BB5\u7EA7 ",paraId:169,tocIndex:98},{value:"ValidationError(fieldId,code,message)",paraId:169,tocIndex:98},{value:"\u3002\u6B63\u5F0F\u65B0\u589E/\u66F4\u65B0\u5728\u5B58\u5728\u4EFB\u4E00\u9519\u8BEF\u65F6\u8FD4\u56DE ",paraId:169,tocIndex:98},{value:"DATA_TYPE_MISMATCH",paraId:169,tocIndex:98},{value:" \u4E14\u4E0D\u5199\u5165\uFF1B\u65E7\u6570\u636E\u8FC1\u79FB\u53EF\u5728\u9694\u79BB\u7684\u5BFC\u5165\u9002\u914D\u5668\u4E2D\u4F7F\u7528 ",paraId:169,tocIndex:98},{value:"arraySeparator",paraId:169,tocIndex:98},{value:" \u7B49\u517C\u5BB9\u89C4\u5219\uFF0C\u4F46\u4E0D\u5F97\u590D\u7528\u5230\u5728\u7EBF API\u3002",paraId:169,tocIndex:98},{value:`_id, data, formKey, gmtCreate, gmtModified,
creator, modifier, isDeleted
`,paraId:170,tocIndex:99},{value:"Mongo/ES \u4E2D ",paraId:171,tocIndex:99},{value:"_id",paraId:171,tocIndex:99},{value:" \u4F7F\u7528 MySQL \u6570\u636E\u4E3B\u952E\u3002\u7528\u6237\u5B57\u6BB5\u5168\u90E8\u4F4D\u4E8E ",paraId:171,tocIndex:99},{value:"data",paraId:171,tocIndex:99},{value:" \u5BF9\u8C61\u4E0B\uFF0C\u7981\u6B62\u7528\u6237\u5B57\u6BB5\u4E0E\u7CFB\u7EDF\u5B57\u6BB5\u540C\u540D\u3002",paraId:171,tocIndex:99},{value:`reserved field -> \u539F\u8DEF\u5F84\uFF0C\u4F8B\u5982 _id\u3001creator\u3001gmtCreate
user field     -> data.{fieldId}
text + ES like -> data.{fieldId}.keyword
`,paraId:172,tocIndex:101},{value:"exp",paraId:173,tocIndex:102},{value:"Mongo",paraId:173,tocIndex:102},{value:"Elasticsearch",paraId:173,tocIndex:102},{value:"\u503C\u5904\u7406",paraId:173,tocIndex:102},{value:"=",paraId:173,tocIndex:102},{value:"Criteria.is",paraId:173,tocIndex:102},{value:"termQuery",paraId:173,tocIndex:102},{value:"\u6309 Schema \u7C7B\u578B\u5316",paraId:173,tocIndex:102},{value:"!=",paraId:173,tocIndex:102},{value:"Criteria.ne",paraId:173,tocIndex:102},{value:"mustNot(termQuery)",paraId:173,tocIndex:102},{value:"\u6309 Schema \u7C7B\u578B\u5316",paraId:173,tocIndex:102},{value:">",paraId:173,tocIndex:102},{value:"gt",paraId:173,tocIndex:102},{value:"range.gt",paraId:173,tocIndex:102},{value:"\u6570\u5B57/\u65E5\u671F",paraId:173,tocIndex:102},{value:">=",paraId:173,tocIndex:102},{value:"gte",paraId:173,tocIndex:102},{value:"range.gte",paraId:173,tocIndex:102},{value:"\u6570\u5B57/\u65E5\u671F",paraId:173,tocIndex:102},{value:"<",paraId:173,tocIndex:102},{value:"lt",paraId:173,tocIndex:102},{value:"range.lt",paraId:173,tocIndex:102},{value:"\u6570\u5B57/\u65E5\u671F",paraId:173,tocIndex:102},{value:"<=",paraId:173,tocIndex:102},{value:"lte",paraId:173,tocIndex:102},{value:"range.lte",paraId:173,tocIndex:102},{value:"\u6570\u5B57/\u65E5\u671F",paraId:173,tocIndex:102},{value:"like",paraId:173,tocIndex:102},{value:"\u8F6C\u4E49\u540E\u7684 regex",paraId:173,tocIndex:102},{value:"wildcard keyword",paraId:173,tocIndex:102},{value:"\u7981\u6B62\u76F4\u63A5\u63A5\u53D7\u6B63\u5219\u8868\u8FBE\u5F0F",paraId:173,tocIndex:102},{value:"in",paraId:173,tocIndex:102},{value:"in(list)",paraId:173,tocIndex:102},{value:"termsQuery",paraId:173,tocIndex:102},{value:"JSON \u6570\u7EC4\u9010\u9879\u7C7B\u578B\u5316",paraId:173,tocIndex:102},{value:"arrIn",paraId:173,tocIndex:102},{value:"in(list)",paraId:173,tocIndex:102},{value:"termsQuery",paraId:173,tocIndex:102},{value:"\u6570\u7EC4\u5305\u542B\u4EFB\u4E00",paraId:173,tocIndex:102},{value:"arrAll",paraId:173,tocIndex:102},{value:"all(list)",paraId:173,tocIndex:102},{value:"\u591A\u4E2A term must",paraId:173,tocIndex:102},{value:"\u6570\u7EC4\u5305\u542B\u5168\u90E8",paraId:173,tocIndex:102},{value:`toQuery(node):
  if node null: return null
  if node.logic exists:
    children = node.children.map(toQuery).filter(not null)
    if children empty: return null
    return AND ? and(children) : or(children)
  path = resolvePath(node.fieldId)
  typedValue = convertBySchema(node.fieldId, node.value, node.exp)
  return buildLeaf(path, node.exp, typedValue)
`,paraId:174,tocIndex:103},{value:"logic",paraId:175,tocIndex:103},{value:" \u53EA\u63A5\u53D7\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u7684 AND/OR\u3002\u5B57\u6BB5 ID\u3001\u6392\u5E8F\u5B57\u6BB5\u5FC5\u987B\u5728 Schema \u6216\u7CFB\u7EDF\u5B57\u6BB5\u767D\u540D\u5355\u4E2D\uFF0C\u7981\u6B62\u628A\u5BA2\u6237\u7AEF\u5B57\u6BB5\u540D\u76F4\u63A5\u62FC\u5165 Mongo/ES \u67E5\u8BE2\u3002",paraId:175,tocIndex:103},{value:"Mongo cursor\uFF1A",paraId:176,tocIndex:104},{value:`next:  _id > cursor\uFF0C\u6309 _id ASC\uFF0Climit pageSize
prev:  _id < cursor\uFF0C\u6309 _id DESC\uFF0Climit pageSize\uFF0C\u8FD4\u56DE\u524D\u53CD\u8F6C
`,paraId:177,tocIndex:104},{value:"ES cursor\uFF1A\u6309 ",paraId:178,tocIndex:104},{value:"_id",paraId:178,tocIndex:104},{value:" \u56FA\u5B9A\u6392\u5E8F\uFF0C\u4F7F\u7528 ",paraId:178,tocIndex:104},{value:"search_after",paraId:178,tocIndex:104},{value:"\uFF1B\u8FD4\u56DE\u672B\u6761 ",paraId:178,tocIndex:104},{value:"_id",paraId:178,tocIndex:104},{value:" \u4F5C\u4E3A ",paraId:178,tocIndex:104},{value:"nextCursor",paraId:178,tocIndex:104},{value:"\u3002\u666E\u901A\u5206\u9875 ",paraId:178,tocIndex:104},{value:"from=(pageNum-1)*pageSize",paraId:178,tocIndex:104},{value:"\uFF0C\u7EDF\u4E00 ",paraId:178,tocIndex:104},{value:"pageSize<=200",paraId:178,tocIndex:104},{value:"\u3002\u751F\u4EA7\u73AF\u5883\u5E94\u9650\u5236 ",paraId:178,tocIndex:104},{value:"from+size<=10000",paraId:178,tocIndex:104},{value:"\u3002",paraId:178,tocIndex:104},{value:"Web \u5165\u53E3\u4ECE\u767B\u5F55\u6001\u53D6\u5F97 ",paraId:179,tocIndex:106},{value:"employeeId",paraId:179,tocIndex:106},{value:" \u548C\u7528\u6237\u7EC4\u7EC7\u4FE1\u606F\uFF1A",paraId:179,tocIndex:106},{value:`ctx.userId = employeeId
ctx.clientId = \u8C03\u7528\u7CFB\u7EDF\u56FA\u5B9A\u6807\u8BC6
ctx.params.userId = employeeId
ctx.params.employeeNo = profile.employeeNo
ctx.params.orgPaths = \u5F53\u524D\u6240\u5C5E\u7EC4\u7EC7\u5355\u5143\u540D\u79F0\u96C6\u5408
ctx.params.orgPathsWithSub = \u6240\u5C5E\u7EC4\u7EC7\u5355\u5143\u53CA\u9012\u5F52\u4E0B\u7EA7\u540D\u79F0\u96C6\u5408
ctx.params.__orgList__ = \u539F\u59CB\u7EC4\u7EC7\u5355\u5143\u5BF9\u8C61\uFF0C\u4EC5\u51FD\u6570\u6267\u884C\u5185\u90E8\u4F7F\u7528
`,paraId:180,tocIndex:106},{value:"Agent Tool \u5165\u53E3\u5FC5\u987B\u4ECE Agent \u8BF7\u6C42\u4E0A\u4E0B\u6587\u53D6\u5F97 ",paraId:181,tocIndex:106},{value:"employeeId",paraId:181,tocIndex:106},{value:"\uFF1B\u65E0\u6CD5\u8BC6\u522B\u7528\u6237\u65F6\u76F4\u63A5\u5931\u8D25\uFF0C\u7981\u6B62\u4F7F\u7528 system \u515C\u5E95\u8D26\u53F7\u3002",paraId:181,tocIndex:106},{value:`preparePermission(formKey, op, ctx):
  schema = load schema
  schema/permissionConfig empty -> return
  owner -> return
  config invalid -> throw PERMISSION_CONFIG_INVALID\uFF08fail closed\uFF09
  tree = READ ? rootNode : writePermission.treeFor(op)
  collect every \${fn:name} in tree
  execute each distinct function once
  ctx.params["fn:" + name] = result
`,paraId:182,tocIndex:107},{value:"\u5F53\u524D\u5185\u7F6E ",paraId:183,tocIndex:107},{value:"${fn:managedOrgNames}",paraId:183,tocIndex:107},{value:"\uFF1A\u4ECE ",paraId:183,tocIndex:107},{value:"__orgList__",paraId:183,tocIndex:107},{value:" \u4E2D\u7B5B\u9009 ",paraId:183,tocIndex:107},{value:"isManager=true",paraId:183,tocIndex:107},{value:" \u7684\u7EC4\u7EC7\u5355\u5143\u540D\u5E76\u53BB\u91CD\u3002\u5E26\u53C2\u51FD\u6570\u53EF\u7EA6\u5B9A ",paraId:183,tocIndex:107},{value:"${fn:name:param}",paraId:183,tocIndex:107},{value:"\uFF0C\u7ED3\u679C key \u4FDD\u6301 ",paraId:183,tocIndex:107},{value:"fn:name:param",paraId:183,tocIndex:107},{value:"\u3002",paraId:183,tocIndex:107},{value:"\u89E3\u6790\u7ED3\u679C\u53EA\u6709\uFF1A",paraId:184,tocIndex:108},{value:`TRUE  = NO_RESTRICTION\uFF0C\u65E0\u6743\u9650\u7EA6\u675F
FALSE = DENY_ALL\uFF0C\u62D2\u7EDD\u5168\u90E8
NODE  = CONDITION\uFF0C\u5F97\u5230\u53EF\u6267\u884C\u6761\u4EF6\u6811
`,paraId:185,tocIndex:108},{value:"\u53F6\u5B50\u89C4\u5219\uFF1A\u5B57\u9762\u91CF\u4FDD\u6301\u4E0D\u53D8\uFF1B\u5360\u4F4D\u7B26\u4ECE ",paraId:186,tocIndex:108},{value:"ctx.params",paraId:186,tocIndex:108},{value:" \u53D6\u503C\uFF1B\u503C\u4E3A List \u65F6\u9017\u53F7\u8FDE\u63A5\uFF0C\u82E5\u539F exp \u4E3A ",paraId:186,tocIndex:108},{value:"=",paraId:186,tocIndex:108},{value:" \u5219\u5347\u7EA7\u4E3A ",paraId:186,tocIndex:108},{value:"in",paraId:186,tocIndex:108},{value:`\uFF1Bnull \u6216\u7A7A\u96C6\u5408\u4E3A FALSE\uFF1B\u7A7A fieldId \u4E3A TRUE\u3002
\u903B\u8F91\u5316\u7B80\u771F\u503C\u8868\uFF1A`,paraId:186,tocIndex:108},{value:"\u8282\u70B9",paraId:187,tocIndex:108},{value:"\u5B50\u7ED3\u679C",paraId:187,tocIndex:108},{value:"\u7ED3\u679C",paraId:187,tocIndex:108},{value:"AND",paraId:187,tocIndex:108},{value:"\u4EFB\u4E00 FALSE",paraId:187,tocIndex:108},{value:"FALSE",paraId:187,tocIndex:108},{value:"AND",paraId:187,tocIndex:108},{value:"TRUE \u5B50\u8282\u70B9",paraId:187,tocIndex:108},{value:"\u4E22\u5F03\u8BE5\u5B50\u8282\u70B9",paraId:187,tocIndex:108},{value:"AND",paraId:187,tocIndex:108},{value:"\u5168 TRUE/\u65E0\u5269\u4F59",paraId:187,tocIndex:108},{value:"TRUE",paraId:187,tocIndex:108},{value:"OR",paraId:187,tocIndex:108},{value:"\u4EFB\u4E00 TRUE",paraId:187,tocIndex:108},{value:"TRUE",paraId:187,tocIndex:108},{value:"OR",paraId:187,tocIndex:108},{value:"FALSE \u5B50\u8282\u70B9",paraId:187,tocIndex:108},{value:"\u4E22\u5F03\u8BE5\u5B50\u8282\u70B9",paraId:187,tocIndex:108},{value:"OR",paraId:187,tocIndex:108},{value:"\u5168 FALSE/\u65E0\u5269\u4F59",paraId:187,tocIndex:108},{value:"FALSE",paraId:187,tocIndex:108},{value:"\u4EFB\u610F",paraId:187,tocIndex:108},{value:"\u4EC5\u5269\u4E00\u4E2A NODE",paraId:187,tocIndex:108},{value:"\u8FD4\u56DE\u8BE5 NODE",paraId:187,tocIndex:108},{value:`perm = resolve(formKey, ctx)
DENY_ALL -> \u641C\u7D22\u8FD4\u56DE\u7A7A\u9875\uFF0C\u8BE6\u60C5\u8FD4\u56DE null
NO_RESTRICTION -> \u4FDD\u7559\u7528\u6237\u67E5\u8BE2\u6811
CONDITION -> searchTree = AND(userTree, perm.tree)
\u8BE6\u60C5 -> matches(perm.tree, recordDocument) \u624D\u8FD4\u56DE
`,paraId:188,tocIndex:109},{value:`checkWritePermission(formKey, op, ctx, dataDoc):
  schema \u4E0D\u5B58\u5728 -> error
  owner -> allow
  config \u7A7A/disabled -> allow
  treeFor(op) \u7A7A -> allow
  resolved = resolveNode(tree, ctx)
  TRUE -> allow
  FALSE -> deny
  combined = dataDoc + ctx.params
  matches(resolved.node, combined) false -> deny
`,paraId:189,tocIndex:110},{value:"CREATE \u4F7F\u7528\u63D0\u4EA4\u6570\u636E\u52A0\u8EAB\u4EFD\u53C2\u6570\uFF1BUPDATE/DELETE \u5FC5\u987B\u5148\u8BFB\u73B0\u6709\u8BB0\u5F55\uFF0C\u7528\u73B0\u6709\u6570\u636E\u505A\u6743\u9650\u5224\u65AD\uFF0C\u9632\u6B62\u8C03\u7528\u8005\u901A\u8FC7\u65B0\u503C\u7ED5\u8FC7\u6743\u9650\u3002\u6279\u91CF\u5220\u9664\u5F53\u524D\u53EA\u8FDB\u884C\u6279\u6B21\u7EA7\u6821\u9A8C\uFF1B\u751F\u4EA7\u589E\u5F3A\u7248\u5E94\u9010\u6761\u6821\u9A8C\u6216\u9650\u5236\u4E3A Owner\u3002",paraId:190,tocIndex:110},{value:`AND -> every child matches
OR  -> any child matches
=\u3001!= -> \u4E24\u8FB9\u90FD\u53EF\u8F6C\u6570\u5B57\u65F6\u6309 BigDecimal \u6BD4\uFF0C\u5426\u5219\u6309\u5B57\u7B26\u4E32
\u8303\u56F4\u6BD4\u8F83 -> \u6570\u5B57\u4F18\u5148\uFF0C\u5426\u5219\u5B57\u7B26\u4E32\u5B57\u5178\u5E8F
like -> actual.contains(expected)
in/arrIn -> \u4EFB\u4E00\u76EE\u6807\u503C\u547D\u4E2D
arrAll -> \u6240\u6709\u76EE\u6807\u503C\u90FD\u5B58\u5728
`,paraId:191,tocIndex:111},{value:"\u6743\u9650\u914D\u7F6E\u4FDD\u5B58\u65F6\u5FC5\u987B\u5F3A\u6821\u9A8C\uFF0C\u8FD0\u884C\u65F6\u89E3\u6790\u5931\u8D25\u5FC5\u987B fail closed \u5E76\u8FD4\u56DE ",paraId:192,tocIndex:111},{value:"PERMISSION_CONFIG_INVALID",paraId:192,tocIndex:111},{value:"\u3002\u65E7\u7CFB\u7EDF\u53EF\u80FD\u5B58\u5728\u914D\u7F6E\u635F\u574F\u540E\u653E\u884C\u7684\u6570\u636E\uFF0C\u8FC1\u79FB\u524D\u5FC5\u987B\u626B\u63CF\u5E76\u4FEE\u590D\u3002",paraId:192,tocIndex:111},{value:`validate schema
mongo = dto.mongoEnabled ?? 1
es = dto.esEnabled ?? 0
if mongo==0 and es==0: error
require ctx.userId and ctx.clientId
formKey = uuidWithoutHyphen()
insert schema(version=1, owner=[userId], syncStatus=0, audit fields)
if es==1:
  try create mapping + physical _v1 + alias
  catch log error, do not rollback schema
return formKey
`,paraId:193,tocIndex:113},{value:`require idempotencyKey
load schema by clientId+formKey and require syncStatus==0
reject dataSourceType 1/2
strict validate and type data; any error -> 400
check CREATE permission against typed data
transaction:
  claim idempotency key and compare request hash
  completed duplicate -> return existing dataId/version
  insert MySQL fact row(version=1)
  insert Outbox UPSERT event(eventVersion=1, full typed snapshot)
  complete idempotency result
commit
return id/version/projectionPending=true
`,paraId:194,tocIndex:114},{value:"\u5FC5\u987B\u643A\u5E26\u5F53\u524D ",paraId:195,tocIndex:115},{value:"version",paraId:195,tocIndex:115},{value:"\u3002\u6309 ",paraId:195,tocIndex:115},{value:"clientId+formKey+id",paraId:195,tocIndex:115},{value:" \u8BFB\u53D6\u65E7\u8BB0\u5F55\u5E76\u6821\u9A8C UPDATE \u6743\u9650\uFF1B\u4E25\u683C\u6821\u9A8C\u5B8C\u6574\u66FF\u6362 JSON\uFF1BMySQL \u4EE5 version \u6761\u4EF6\u66F4\u65B0\u5E76\u9012\u589E\u7248\u672C\uFF0C\u540C\u4E00\u4E8B\u52A1\u5199 UPSERT Outbox\u3002\u5F71\u54CD\u884C\u6570\u4E0D\u662F 1 \u8FD4\u56DE ",paraId:195,tocIndex:115},{value:"DATA_VERSION_CONFLICT",paraId:195,tocIndex:115},{value:"\u3002",paraId:195,tocIndex:115},{value:"\u5FC5\u987B\u643A\u5E26\u5F53\u524D ",paraId:196,tocIndex:116},{value:"version",paraId:196,tocIndex:116},{value:"\u3002\u8BFB\u53D6\u539F\u8BB0\u5F55\u5E76\u6821\u9A8C DELETE \u6743\u9650\uFF1BMySQL \u903B\u8F91\u5220\u9664\u4E14 version+1\uFF0C\u540C\u4E00\u4E8B\u52A1\u5199 DELETE \u5893\u7891 Outbox\u3002Mongo \u7269\u7406\u5220\u9664\u3001ES \u5220\u9664/\u5893\u7891\u7531\u6D88\u8D39\u8005\u5F02\u6B65\u6267\u884C\u3002",paraId:196,tocIndex:116},{value:"REST \u5355\u6279\u6700\u5927 500\uFF0CAgent Tool \u5355\u6279\u6700\u5927 100\u3002",paraId:197,tocIndex:117},{value:"\u540C\u4E00\u6279\u5FC5\u987B\u4F7F\u7528\u76F8\u540C ",paraId:197,tocIndex:117},{value:"formKey",paraId:197,tocIndex:117},{value:"\uFF0C\u6BCF\u6761\u6570\u636E\u5FC5\u987B\u6709\u72EC\u7ACB\u5E42\u7B49\u952E\u3002",paraId:197,tocIndex:117},{value:"\u5168\u6279\u5148\u5B8C\u6210 Schema\u3001\u6743\u9650\u548C\u7C7B\u578B\u6821\u9A8C\uFF0C\u518D\u5728\u4E00\u4E2A MySQL \u4E8B\u52A1\u4E2D\u5199\u4E8B\u5B9E\u884C\u3001\u5E42\u7B49\u7ED3\u679C\u548C Outbox\uFF1B\u4EFB\u4E00\u5931\u8D25\u6574\u6279\u56DE\u6EDA\u3002",paraId:197,tocIndex:117},{value:"\u6279\u91CF\u63A5\u53E3\u8FD4\u56DE\u6BCF\u6761 ",paraId:197,tocIndex:117},{value:"dataId/version/projectionPending",paraId:197,tocIndex:117},{value:"\uFF0C\u526F\u672C\u7531\u6D88\u8D39\u8005\u6279\u91CF\u5199\u5165\u3002",paraId:197,tocIndex:117},{value:"Schema \u53D8\u5316\u6216\u5F15\u64CE 0\u21921 \u65F6\uFF0C\u4E3A\u5DF2\u542F\u7528\u76EE\u6807\u5404\u63D2\u5165\u4E00\u6761 ",paraId:198,tocIndex:119},{value:"ai_form_sync_job",paraId:198,tocIndex:119},{value:"\uFF1A",paraId:198,tocIndex:119},{value:"status=0",paraId:198,tocIndex:119},{value:"\u3001",paraId:198,tocIndex:119},{value:"sync_mode=1",paraId:198,tocIndex:119},{value:"\u3002\u6267\u884C\u5668\u6309 ",paraId:198,tocIndex:119},{value:"status,gmt_create",paraId:198,tocIndex:119},{value:" \u626B\u63CF\u5F85\u6267\u884C\u4EFB\u52A1\uFF0C\u7ADE\u4E89\u8868\u5355\u7EA7\u79DF\u7EA6\u9501\uFF1B\u4E0D\u540C formKey \u53EF\u5E76\u884C\uFF0C\u540C\u4E00 formKey \u540C\u65F6\u53EA\u5141\u8BB8\u4E00\u4E2A\u8FC1\u79FB\u4EFB\u52A1\u3002",paraId:198,tocIndex:119},{value:`tryLock(lockKey,ownerId):
  INSERT lock(fencingToken=1,expiresAt=now+120s)
  duplicate:
    UPDATE ownerId=?, fencingToken=fencingToken+1, expiresAt=now+120s
    WHERE lockKey=? AND expiresAt<now
  affected != 1 -> false
  return current fencingToken
heartbeat: \u6BCF 30s \u5EF6\u957F expiresAt\uFF0C\u6761\u4EF6\u5FC5\u987B\u5305\u542B lockKey+ownerId+fencingToken
release: DELETE\uFF0C\u6761\u4EF6\u5FC5\u987B\u5305\u542B lockKey+ownerId+fencingToken
`,paraId:199,tocIndex:120},{value:"\u540C\u6B65\u4EFB\u52A1\u6BCF\u6B21\u66F4\u65B0\u8FDB\u5EA6\u548C\u5207\u6362\u8D44\u6E90\u524D\u90FD\u6821\u9A8C fencing token\uFF0C\u65E7\u6301\u6709\u8005\u5373\u4F7F\u6062\u590D\u4E5F\u4E0D\u80FD\u8986\u76D6\u65B0\u6301\u6709\u8005\u7ED3\u679C\u3002\u903B\u8F91\u9501\u4F7F\u7528 ",paraId:200,tocIndex:120},{value:"SYNC:{clientId}:{formKey}:{target}",paraId:200,tocIndex:120},{value:"\uFF1B\u5916\u90E8\u5168\u91CF\u548C\u589E\u91CF\u4F7F\u7528\u72EC\u7ACB target\u3002",paraId:200,tocIndex:120},{value:`executeFullSync(formKey):
  acquire form lock or skip
  schema = load
  sourceTable = routeByDataSourceType
  mongoTarget = form_data_{formKey}_tmp
  esTarget = inactive(form_data_{formKey}_v1/v2)
  drop stale temporary resources
  create temp collection / physical index with current mapping
  lastId = 0
  loop:
    rows = source.selectAfterId(formKey,lastId,batchSize)
    if empty: break
    typedDocs = rows.map(parse by current schema)
    bulk insert Mongo temp and ES target
    update progress syncedCount
    lastId = rows.last.id
  verify source count == target count
  Mongo: rename current to backup if needed, rename tmp to official
  ES: one alias request REMOVE old + ADD new
  mark task completed
  asynchronously delete old resources
on failure:
  drop temp resources only
  keep old serving resources
  mark task failed with truncated error
finally unlock form
`,paraId:201,tocIndex:121},{value:"Mongo \u5207\u6362\u5FC5\u987B\u8003\u8651\u6B63\u5F0F Collection \u5DF2\u5B58\u5728\uFF1A\u63A8\u8350 ",paraId:202,tocIndex:121},{value:"official\u2192backup",paraId:202,tocIndex:121},{value:"\u3001",paraId:202,tocIndex:121},{value:"tmp\u2192official",paraId:202,tocIndex:121},{value:"\u3001\u6210\u529F\u540E\u5220\u9664 backup\uFF1B\u4EFB\u4E00\u6B65\u5931\u8D25\u5E94\u5C1D\u8BD5\u6062\u590D backup\u3002ES alias \u5207\u6362\u5FC5\u987B\u5728\u5355\u4E2A\u539F\u5B50\u8BF7\u6C42\u4E2D\u5B8C\u6210\u3002",paraId:202,tocIndex:121},{value:"\u5916\u90E8\u5168\u91CF\uFF1A\u751F\u6210\u65B0\u7684 ",paraId:203,tocIndex:122},{value:"snapshot_version",paraId:203,tocIndex:122},{value:"\uFF0C\u5B8C\u6574\u5199\u5165 ",paraId:203,tocIndex:122},{value:"ai_form_external_snapshot_data",paraId:203,tocIndex:122},{value:"\uFF0C\u6309\u5F53\u524D Schema \u4E25\u683C\u7C7B\u578B\u5316\u5E76\u6784\u5EFA\u65B0 Mongo Collection/ES \u7269\u7406\u7D22\u5F15\uFF1Bcount/hash \u6821\u9A8C\u901A\u8FC7\u540E\uFF0C\u4F7F\u7528 Schema version \u4E50\u89C2\u9501\u5207\u6362 ",paraId:203,tocIndex:122},{value:"active_snapshot_version",paraId:203,tocIndex:122},{value:" \u548C\u67E5\u8BE2\u526F\u672C\u3002\u5931\u8D25\u65F6\u5220\u9664\u672A\u6FC0\u6D3B\u5FEB\u7167\uFF0C\u65E7\u5FEB\u7167\u7EE7\u7EED\u670D\u52A1\u3002",paraId:203,tocIndex:122},{value:"\u5916\u90E8\u589E\u91CF\u56FA\u5B9A\u4F7F\u7528\u590D\u5408\u6E38\u6807\uFF1A",paraId:204,tocIndex:122},{value:`cursor = (sourceModifiedAt, sourceId)
rows = SELECT ... WHERE formKey=? AND
       (source_modified_at > cursor.time OR
       (source_modified_at = cursor.time AND id > cursor.id))
       ORDER BY source_modified_at,id LIMIT batchSize
strict validate rows
UPSERT MySQL incremental facts
write Mongo and ES bulk with version protection
if all targets success:
  UPDATE cursor SET time=?,sourceId=?,version=version+1 WHERE version=?
else:
  persist every failed sourceKey to incremental_failure
  do not advance cursor
`,paraId:205,tocIndex:122},{value:"\u91CD\u590D\u5904\u7406\u4F9D\u9760 ",paraId:206,tocIndex:122},{value:"formKey+sourceKey",paraId:206,tocIndex:122},{value:"\u3001Mongo ",paraId:206,tocIndex:122},{value:"_id",paraId:206,tocIndex:122},{value:" \u548C ES external version \u5E42\u7B49\u3002\u5931\u8D25\u9879\u6309\u7B2C 32.9 \u8282\u4F18\u5148\u91CD\u8BD5\uFF1B\u7981\u6B62\u51FA\u73B0\u201C\u8BB0\u5F55 ES \u5931\u8D25\u4F46\u4ECD\u63A8\u8FDB\u65F6\u95F4\u7A97\u53E3\u201D\u7684\u884C\u4E3A\u3002",paraId:206,tocIndex:122},{value:"\u6240\u6709\u63A5\u53E3\u4F7F\u7528 ",paraId:207,tocIndex:123},{value:"Content-Type: application/json",paraId:207,tocIndex:123},{value:"\uFF08\u7EAF Query \u63A5\u53E3\u9664\u5916\uFF09\uFF0C\u767B\u5F55\u5931\u8D25\u8FD4\u56DE 401\uFF0C\u6743\u9650\u5931\u8D25\u8FD4\u56DE 403\uFF0C\u53C2\u6570\u9519\u8BEF\u8FD4\u56DE 400\uFF0C\u51B2\u7A81\u8FD4\u56DE 409\uFF0C\u5185\u90E8\u9519\u8BEF\u8FD4\u56DE 500\u3002\u5F53\u524D\u5B9E\u73B0\u53EF\u80FD\u628A\u4E1A\u52A1\u5F02\u5E38\u7EDF\u4E00\u5305\u88C5\u4E3A 500\uFF1B\u65B0\u5B9E\u73B0\u5E94\u6309\u6B64\u89C4\u8303\u6620\u5C04\u3002",paraId:207,tocIndex:123},{value:"Method",paraId:208,tocIndex:124},{value:"URL",paraId:208,tocIndex:124},{value:"\u8F93\u5165",paraId:208,tocIndex:124},{value:"\u8F93\u51FA data",paraId:208,tocIndex:124},{value:"POST",paraId:208,tocIndex:124},{value:"/api/form/schema/create",paraId:208,tocIndex:124},{value:"FormSchemaCreateDTO",paraId:208,tocIndex:124},{value:"formKey",paraId:208,tocIndex:124},{value:"PUT",paraId:208,tocIndex:124},{value:"/api/form/schema/update",paraId:208,tocIndex:124},{value:"FormSchemaUpdateDTO\uFF08\u542B version\uFF09",paraId:208,tocIndex:124},{value:"FormSchemaDetailVO",paraId:208,tocIndex:124},{value:"DELETE",paraId:208,tocIndex:124},{value:"/api/form/schema/delete?formKey=&version=",paraId:208,tocIndex:124},{value:"formKey,version",paraId:208,tocIndex:124},{value:"boolean",paraId:208,tocIndex:124},{value:"GET",paraId:208,tocIndex:124},{value:"/api/form/schema/detail?formKey=",paraId:208,tocIndex:124},{value:"formKey + \u9690\u5F0F\u4E0A\u4E0B\u6587",paraId:208,tocIndex:124},{value:"FormSchemaDetailVO",paraId:208,tocIndex:124},{value:"GET",paraId:208,tocIndex:124},{value:"/api/form/schema/list",paraId:208,tocIndex:124},{value:"query DTO + \u9690\u5F0F\u4E0A\u4E0B\u6587",paraId:208,tocIndex:124},{value:"PageResult<FormSchemaVO>",paraId:208,tocIndex:124},{value:"PUT",paraId:208,tocIndex:124},{value:"/api/form/schema/datasource",paraId:208,tocIndex:124},{value:"formKey,version,mongoEnabled,esEnabled",paraId:208,tocIndex:124},{value:"FormSchemaDetailVO",paraId:208,tocIndex:124},{value:"GET",paraId:208,tocIndex:124},{value:"/api/form/schema/placeholders",paraId:208,tocIndex:124},{value:"\u65E0",paraId:208,tocIndex:124},{value:"PlaceholderDefinition[]",paraId:208,tocIndex:124},{value:"\u521B\u5EFA\u4E0E\u66F4\u65B0\u5FC5\u987B\u6821\u9A8C Mongo/ES \u4E0D\u540C\u65F6\u4E3A 0\uFF1BSchema \u66F4\u65B0\u5FC5\u987B\u643A\u5E26 version\uFF0C\u66F4\u65B0\u3001\u5220\u9664\u3001\u6570\u636E\u6E90\u5F00\u5173\u53EA\u5141\u8BB8 Owner \u6216 ",paraId:208,tocIndex:124},{value:"PLATFORM_ADMIN",paraId:208,tocIndex:124},{value:"\uFF0C\u5E76\u59CB\u7EC8\u6821\u9A8C clientId\u3002",paraId:208,tocIndex:124},{value:"Data \u63A5\u53E3\u5951\u7EA6\u89C1\u7B2C 8 \u7AE0\uFF0C\u8BF7\u989D\u5916\u6267\u884C\uFF1A\u8BF7\u6C42\u7684 ",paraId:209,tocIndex:125},{value:"id",paraId:209,tocIndex:125},{value:" \u5FC5\u987B\u5C5E\u4E8E ",paraId:209,tocIndex:125},{value:"formKey",paraId:209,tocIndex:125},{value:"\uFF1B\u67E5\u8BE2 ",paraId:209,tocIndex:125},{value:"sortField",paraId:209,tocIndex:125},{value:" \u5FC5\u987B\u767D\u540D\u5355\uFF1B\u6279\u91CF\u4E2D formKey \u5FC5\u987B\u4E00\u81F4\uFF1B\u66F4\u65B0\u662F\u5168\u91CF\u66FF\u6362\u800C\u4E0D\u662F patch\u3002",paraId:209,tocIndex:125},{value:"Method",paraId:210,tocIndex:126},{value:"URL",paraId:210,tocIndex:126},{value:"\u8F93\u5165",paraId:210,tocIndex:126},{value:"\u884C\u4E3A",paraId:210,tocIndex:126},{value:"POST",paraId:210,tocIndex:126},{value:"/api/form/sync/full?formKey=",paraId:210,tocIndex:126},{value:"formKey",paraId:210,tocIndex:126},{value:"\u521B\u5EFA\u5168\u91CF\u4EFB\u52A1",paraId:210,tocIndex:126},{value:"POST",paraId:210,tocIndex:126},{value:"/api/form/sync/execute",paraId:210,tocIndex:126},{value:"\u65E0",paraId:210,tocIndex:126},{value:"\u8C03\u5EA6\u6267\u884C\u5F85\u5904\u7406\u4EFB\u52A1",paraId:210,tocIndex:126},{value:"GET",paraId:210,tocIndex:126},{value:"/api/form/sync/progress?formKey=",paraId:210,tocIndex:126},{value:"formKey",paraId:210,tocIndex:126},{value:"\u8FD4\u56DE\u4EFB\u52A1\u8FDB\u5EA6\u5217\u8868",paraId:210,tocIndex:126},{value:"GET",paraId:210,tocIndex:126},{value:"/api/form/sync/status?formKey=",paraId:210,tocIndex:126},{value:"formKey",paraId:210,tocIndex:126},{value:"\u8FD4\u56DE\u662F\u5426\u540C\u6B65\u4E2D",paraId:210,tocIndex:126},{value:"POST",paraId:210,tocIndex:126},{value:"/api/form/sync/external",paraId:210,tocIndex:126},{value:"\u65E0/\u4EFB\u52A1\u53C2\u6570",paraId:210,tocIndex:126},{value:"\u6267\u884C\u5916\u90E8\u5168\u91CF\u540C\u6B65",paraId:210,tocIndex:126},{value:"POST",paraId:210,tocIndex:126},{value:"/api/form/sync/incremental",paraId:210,tocIndex:126},{value:"\u65E0/\u4EFB\u52A1\u53C2\u6570",paraId:210,tocIndex:126},{value:"\u6267\u884C\u5916\u90E8\u589E\u91CF\u540C\u6B65",paraId:210,tocIndex:126},{value:"\u540C\u6B65\u7BA1\u7406\u63A5\u53E3\u5FC5\u987B\u9650\u5236\u4E3A\u5185\u90E8\u8C03\u5EA6\u6216\u7BA1\u7406\u5458\uFF0C\u4E0D\u53EF\u76F4\u63A5\u66B4\u9732\u516C\u7F51\u3002",paraId:210,tocIndex:126},{value:`{
  "success": false,
  "code": "SCHEMA_INVALID",
  "message": "\u5B57\u6BB5fieldType\u4E0D\u5408\u6CD5: money, fieldId=price",
  "data": null,
  "traceId": "01J..."
}
`,paraId:211,tocIndex:127},{value:"\u8C03\u7528\u65B9\u5C55\u793A\u540E\u7AEF\u539F\u59CB ",paraId:212,tocIndex:127},{value:"message",paraId:212,tocIndex:127},{value:"\uFF0C\u670D\u52A1\u7AEF\u4E0D\u5F97\u5728 message \u4E2D\u8FD4\u56DE URI\u3001\u51ED\u636E\u3001SQL \u6216\u5B8C\u6574\u5806\u6808\u3002",paraId:212,tocIndex:127},{value:"Tool",paraId:213,tocIndex:129},{value:"\u5FC5\u586B\u53C2\u6570",paraId:213,tocIndex:129},{value:"\u53EF\u9009\u53C2\u6570",paraId:213,tocIndex:129},{value:"\u8FD4\u56DE\u5173\u952E\u5B57\u6BB5",paraId:213,tocIndex:129},{value:"create_form_schema",paraId:213,tocIndex:129},{value:"formName,schemaDefinition",paraId:213,tocIndex:129},{value:"mongoEnabled=1,esEnabled=0,dataSourceType=0,permissionConfig",paraId:213,tocIndex:129},{value:"success,formKey,errorMessage",paraId:213,tocIndex:129},{value:"get_form_schema_detail",paraId:213,tocIndex:129},{value:"formKey",paraId:213,tocIndex:129},{value:"\u65E0",paraId:213,tocIndex:129},{value:"success,data,errorMessage",paraId:213,tocIndex:129},{value:"get_form_schema_list",paraId:213,tocIndex:129},{value:"\u65E0",paraId:213,tocIndex:129},{value:"formName,formKey,pageNum=1,pageSize=20",paraId:213,tocIndex:129},{value:"success,page,errorMessage",paraId:213,tocIndex:129},{value:"get_form_placeholders",paraId:213,tocIndex:129},{value:"\u65E0",paraId:213,tocIndex:129},{value:"\u65E0",paraId:213,tocIndex:129},{value:"success,list,errorMessage",paraId:213,tocIndex:129},{value:"update_data_source",paraId:213,tocIndex:129},{value:"formKey,version",paraId:213,tocIndex:129},{value:"mongoEnabled,esEnabled,dataSourceType",paraId:213,tocIndex:129},{value:"success,data,errorMessage",paraId:213,tocIndex:129},{value:"search_form_data",paraId:213,tocIndex:129},{value:"formKey",paraId:213,tocIndex:129},{value:"conditionTreeJson,pageNum,pageSize,sortField,sortOrder,pageMode,cursor,cursorDirection",paraId:213,tocIndex:129},{value:"success,page,errorMessage",paraId:213,tocIndex:129},{value:"get_form_data_detail",paraId:213,tocIndex:129},{value:"formKey,dataId",paraId:213,tocIndex:129},{value:"\u65E0",paraId:213,tocIndex:129},{value:"success,data,errorMessage",paraId:213,tocIndex:129},{value:"create_form_data",paraId:213,tocIndex:129},{value:"formKey,data,idempotencyKey",paraId:213,tocIndex:129},{value:"\u65E0",paraId:213,tocIndex:129},{value:"success,dataId,version,projectionPending,errorMessage",paraId:213,tocIndex:129},{value:"update_form_data",paraId:213,tocIndex:129},{value:"formKey,dataId,version,data",paraId:213,tocIndex:129},{value:"\u65E0",paraId:213,tocIndex:129},{value:"success,version,projectionPending,errorMessage",paraId:213,tocIndex:129},{value:"delete_form_data",paraId:213,tocIndex:129},{value:"formKey,dataId,version",paraId:213,tocIndex:129},{value:"\u65E0",paraId:213,tocIndex:129},{value:"success,deleted,projectionPending,errorMessage",paraId:213,tocIndex:129},{value:"batch_create_form_data",paraId:213,tocIndex:129},{value:"dataListJson\uFF08\u6BCF\u9879\u542BidempotencyKey\uFF09",paraId:213,tocIndex:129},{value:"\u65E0\uFF0C\u6700\u591A100",paraId:213,tocIndex:129},{value:"success,data,errorMessage",paraId:213,tocIndex:129},{value:"batch_delete_form_data",paraId:213,tocIndex:129},{value:"formKey,itemsJson\uFF08id+version\uFF09",paraId:213,tocIndex:129},{value:"\u65E0\uFF0C\u6700\u591A100",paraId:213,tocIndex:129},{value:"success,deleted,errorMessage",paraId:213,tocIndex:129},{value:"es_search_form_data",paraId:213,tocIndex:129},{value:"formKey",paraId:213,tocIndex:129},{value:"\u67E5\u8BE2\u5206\u9875\u53C2\u6570",paraId:213,tocIndex:129},{value:"success,data,errorMessage",paraId:213,tocIndex:129},{value:"es_chart_query",paraId:213,tocIndex:129},{value:"formKey",paraId:213,tocIndex:129},{value:"\u7EF4\u5EA6\u3001\u6307\u6807\u3001\u6761\u4EF6\u6811",paraId:213,tocIndex:129},{value:"success,data,errorMessage",paraId:213,tocIndex:129},{value:"get_form_data_count",paraId:213,tocIndex:129},{value:"formKey",paraId:213,tocIndex:129},{value:"\u65E0",paraId:213,tocIndex:129},{value:"success,count,errorMessage",paraId:213,tocIndex:129},{value:"Agent Tool \u5199\u64CD\u4F5C\u5148\u6784\u5EFA\u767B\u5F55\u7528\u6237\u4E0A\u4E0B\u6587\uFF0C\u518D\u5F3A\u5236\u68C0\u67E5\u5F53\u524D\u7528\u6237\u4E3A\u8868\u5355 Owner\u3002\u4EFB\u4F55 Tool \u5F02\u5E38\u90FD\u8F6C\u6362\u6210 ",paraId:213,tocIndex:129},{value:"success=false + errorMessage",paraId:213,tocIndex:129},{value:"\uFF0C\u4E0D\u5411 Agent \u629B\u88F8\u5806\u6808\u3002",paraId:213,tocIndex:129},{value:`public interface FormDataRpcService {
    DataWriteResult addData(FormDataCreateDTO dto, FormCallerContext ctx);
    DataWriteResult updateData(FormDataUpdateDTO dto, FormCallerContext ctx);
    DataWriteResult deleteData(String formKey, Long id, Integer version,
                               FormCallerContext ctx);
    FormDataVO getDataDetail(String formKey, Long id, FormCallerContext ctx);
    PageResult<FormDataVO> search(ConditionTreeSearchDTO dto, FormCallerContext ctx);
}
`,paraId:214,tocIndex:130},{value:"\u5916\u90E8\u7CFB\u7EDF\u5FC5\u987B\u81EA\u884C\u63D0\u4F9B\u7A33\u5B9A ",paraId:215,tocIndex:130},{value:"clientId",paraId:215,tocIndex:130},{value:"\u3001\u7528\u6237 ID \u548C\u6743\u9650 params\u3002RPC \u5C42\u4E0D\u5F97\u4F2A\u9020\u7528\u6237\u6216\u7ED5\u8FC7 Service \u6743\u9650\u3002",paraId:215,tocIndex:130},{value:"\u7BA1\u7406\u524D\u7AEF\u662F aiForm \u7684\u5FC5\u4EA4\u4ED8\u6A21\u5757\uFF0C\u4E0D\u662F\u53EF\u9009\u6F14\u793A\u9875\u3002\u5FC5\u987B\u521B\u5EFA\u72EC\u7ACB TypeScript \u5DE5\u7A0B\uFF0C\u7981\u6B62\u4F7F\u7528 Thymeleaf\u3001\u8FD0\u884C\u65F6 Babel\u3001CDN \u811A\u672C\u62FC\u88C5\u6216\u5355\u6587\u4EF6 HTML \u4F5C\u4E3A\u6B63\u5F0F\u5B9E\u73B0\u3002",paraId:216,tocIndex:131},{value:"\u6280\u672F\u6808\u89C4\u5219\uFF1A",paraId:217,tocIndex:131},{value:"react",paraId:218,tocIndex:131},{value:"\u3001",paraId:218,tocIndex:131},{value:"react-dom",paraId:218,tocIndex:131},{value:"\u3001",paraId:218,tocIndex:131},{value:"antd",paraId:218,tocIndex:131},{value:" \u548C ",paraId:218,tocIndex:131},{value:"@ant-design/icons",paraId:218,tocIndex:131},{value:" \u4F7F\u7528\u9879\u76EE\u521D\u59CB\u5316\u65F6 npm registry \u7684\u6700\u65B0\u7A33\u5B9A\u7248\uFF0C\u4E0D\u4F7F\u7528 alpha\u3001beta\u3001rc \u6216 canary \u7248\u672C\u3002",paraId:218,tocIndex:131},{value:"\u4F7F\u7528\u6700\u65B0\u7A33\u5B9A\u7248 TypeScript \u4E0E Vite\uFF0C\u5F00\u542F ",paraId:218,tocIndex:131},{value:"strict",paraId:218,tocIndex:131},{value:"\uFF0C\u7981\u6B62\u4E1A\u52A1\u4EE3\u7801\u4F7F\u7528 ",paraId:218,tocIndex:131},{value:"any",paraId:218,tocIndex:131},{value:" \u7ED5\u8FC7\u7C7B\u578B\u68C0\u67E5\u3002",paraId:218,tocIndex:131},{value:"\u4F7F\u7528\u6700\u65B0\u7A33\u5B9A\u7248 ",paraId:218,tocIndex:131},{value:"react-router-dom",paraId:218,tocIndex:131},{value:" \u7BA1\u7406\u8DEF\u7531\uFF0C\u4F7F\u7528 ",paraId:218,tocIndex:131},{value:"@tanstack/react-query",paraId:218,tocIndex:131},{value:" \u7BA1\u7406\u670D\u52A1\u7AEF\u72B6\u6001\u3001\u7F13\u5B58\u5931\u6548\u548C\u8BF7\u6C42\u91CD\u8BD5\u3002",paraId:218,tocIndex:131},{value:"\u56FE\u8868\u4F7F\u7528\u6700\u65B0\u7A33\u5B9A\u7248 ECharts\uFF1B\u65E5\u671F\u7EDF\u4E00\u4F7F\u7528 Ant Design \u5F53\u524D\u9002\u914D\u7684\u65E5\u671F\u5E93\u3002",paraId:218,tocIndex:131},{value:"\u521D\u59CB\u5316\u9A8C\u8BC1\u901A\u8FC7\u540E\u63D0\u4EA4 ",paraId:218,tocIndex:131},{value:"package-lock.json",paraId:218,tocIndex:131},{value:"\uFF0C\u751F\u4EA7\u3001CI \u548C\u5F00\u53D1\u73AF\u5883\u7EDF\u4E00\u4F7F\u7528 ",paraId:218,tocIndex:131},{value:"npm ci",paraId:218,tocIndex:131},{value:"\uFF0C\u7981\u6B62\u6301\u7EED\u6F02\u79FB\u5230\u65B0\u7684 latest \u7248\u672C\u3002",paraId:218,tocIndex:131},{value:"\u521D\u59CB\u5316\u547D\u4EE4\u53C2\u8003\uFF1A",paraId:219,tocIndex:131},{value:`npm create vite@latest ai-form-admin -- --template react-ts
npm install react@latest react-dom@latest antd@latest @ant-design/icons@latest
npm install react-router-dom@latest @tanstack/react-query@latest echarts@latest
`,paraId:220,tocIndex:131},{value:"\u6267\u884C\u540E\u5FC5\u987B\u8FD0\u884C ",paraId:221,tocIndex:131},{value:"npm ls",paraId:221,tocIndex:131},{value:"\u3001\u7C7B\u578B\u68C0\u67E5\u3001\u6D4B\u8BD5\u548C\u751F\u4EA7\u6784\u5EFA\uFF1B\u53EA\u6709\u4F9D\u8D56\u6811\u65E0\u51B2\u7A81\u65F6\u624D\u80FD\u9501\u5B9A\u7248\u672C\u3002",paraId:221,tocIndex:131},{value:"\u5EFA\u8BAE\u76EE\u5F55\uFF1A",paraId:222,tocIndex:131},{value:`ai-form-admin/
  src/
    api/             REST DTO\u3001\u8BF7\u6C42\u5C01\u88C5\u3001\u9519\u8BEF\u8F6C\u6362
    components/      \u52A8\u6001\u5B57\u6BB5\u3001\u6761\u4EF6\u6811\u3001Schema \u7F16\u8F91\u5668
    layouts/         \u7BA1\u7406\u7AEF\u5E03\u5C40\u4E0E\u5BFC\u822A
    pages/           \u8868\u5355\u3001\u6570\u636E\u3001\u540C\u6B65\u3001\u7EDF\u8BA1\u9875\u9762
    providers/       QueryClient\u3001\u4E3B\u9898\u3001\u7528\u6237\u4E0A\u4E0B\u6587
    routes/          \u8DEF\u7531\u5B9A\u4E49\u4E0E\u8BBF\u95EE\u5B88\u536B
    types/           Schema\u3001Data\u3001Permission \u7C7B\u578B
    utils/           \u5B57\u6BB5\u8F6C\u6362\u3001\u6821\u9A8C\u4E0E\u683C\u5F0F\u5316
`,paraId:223,tocIndex:131},{value:"\u9ED8\u8BA4\u8BBF\u95EE\u524D\u7F00\u4E3A ",paraId:224,tocIndex:131},{value:"/admin/ai-form",paraId:224,tocIndex:131},{value:"\uFF0C\u8DEF\u7531\u5B9A\u4E49\u5982\u4E0B\uFF1A",paraId:224,tocIndex:131},{value:"\u8DEF\u7531",paraId:225,tocIndex:131},{value:"\u9875\u9762",paraId:225,tocIndex:131},{value:"\u529F\u80FD",paraId:225,tocIndex:131},{value:"/admin/ai-form/forms",paraId:225,tocIndex:131},{value:"\u8868\u5355\u7BA1\u7406",paraId:225,tocIndex:131},{value:"Schema CRUD\u3001\u5B57\u6BB5\u7F16\u8F91\u3001Owner\u3001\u5F15\u64CE\u5F00\u5173\u3001\u6743\u9650\u914D\u7F6E",paraId:225,tocIndex:131},{value:"/admin/ai-form/forms/:formKey/data",paraId:225,tocIndex:131},{value:"\u6570\u636E\u7BA1\u7406",paraId:225,tocIndex:131},{value:"\u52A8\u6001\u8868\u683C\u3001CRUD\u3001\u6761\u4EF6\u6811\u3001\u5206\u9875\u548C\u6E38\u6807",paraId:225,tocIndex:131},{value:"/admin/ai-form/forms/:formKey/sync",paraId:225,tocIndex:131},{value:"\u6570\u636E\u540C\u6B65",paraId:225,tocIndex:131},{value:"\u521B\u5EFA\u4EFB\u52A1\u3001\u6267\u884C\u3001\u8FDB\u5EA6\u3001\u5916\u90E8\u540C\u6B65\u548C\u5931\u8D25\u8BE6\u60C5",paraId:225,tocIndex:131},{value:"/admin/ai-form/forms/:formKey/analytics",paraId:225,tocIndex:131},{value:"\u56FE\u8868\u7EDF\u8BA1",paraId:225,tocIndex:131},{value:"ES \u641C\u7D22\u3001\u7EF4\u5EA6/\u6307\u6807\u805A\u5408\u548C\u56FE\u8868\u5C55\u793A",paraId:225,tocIndex:131},{value:"/admin/ai-form",paraId:226,tocIndex:131},{value:" \u5FC5\u987B\u91CD\u5B9A\u5411\u5230 ",paraId:226,tocIndex:131},{value:"/admin/ai-form/forms",paraId:226,tocIndex:131},{value:"\u3002\u6D4F\u89C8\u5668\u76F4\u63A5\u5237\u65B0\u4EFB\u610F\u5B50\u8DEF\u7531\u65F6\uFF0CWeb Server \u5FC5\u987B\u56DE\u9000\u5230 ",paraId:226,tocIndex:131},{value:"index.html",paraId:226,tocIndex:131},{value:"\uFF0C\u4F46 ",paraId:226,tocIndex:131},{value:"/api/**",paraId:226,tocIndex:131},{value:" \u4ECD\u8F6C\u53D1\u540E\u7AEF\u3002API \u6839\u5730\u5740\u4ECE ",paraId:226,tocIndex:131},{value:"VITE_API_BASE_URL",paraId:226,tocIndex:131},{value:" \u6CE8\u5165\uFF1B\u540C\u57DF\u90E8\u7F72\u65F6\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u7981\u6B62\u5728\u6E90\u7801\u4E2D\u5199\u6B7B\u57DF\u540D\u3002",paraId:226,tocIndex:131},{value:"\u514D\u767B\u5F55\u5F00\u53D1\u6A21\u5F0F\u4ECD\u4FDD\u7559\u5B8C\u6574\u7528\u6237\u94FE\u8DEF\uFF1A\u524D\u7AEF\u8C03\u7528\u5F53\u524D\u7528\u6237\u63A5\u53E3\u5C55\u793A\u5F00\u53D1\u7528\u6237\uFF0C\u5B9E\u9645 ",paraId:227,tocIndex:131},{value:"FormCallerContext",paraId:227,tocIndex:131},{value:" \u7531\u540E\u7AEF\u8EAB\u4EFD\u63D0\u4F9B\u5668\u6784\u5EFA\uFF0C\u524D\u7AEF\u4E0D\u5F97\u81EA\u884C\u63D0\u4EA4\u6216\u4F2A\u9020 ",paraId:227,tocIndex:131},{value:"userId",paraId:227,tocIndex:131},{value:"\u3001",paraId:227,tocIndex:131},{value:"employeeNo",paraId:227,tocIndex:131},{value:"\u3001\u7EC4\u7EC7\u4FE1\u606F\u3001creator\u3001modifier \u6216 clientId\u3002\u540E\u7EED\u63A5\u5165\u6B63\u5F0F\u8BA4\u8BC1\u65F6\u53EA\u66FF\u6362\u7528\u6237\u63D0\u4F9B\u5668\u548C\u8DEF\u7531\u5B88\u536B\uFF0C\u4E0D\u6539\u4E1A\u52A1\u9875\u9762\u3002",paraId:227,tocIndex:131},{value:"\u9875\u9762\u5305\u542B\u56DB\u7C7B\u7BA1\u7406\u80FD\u529B\uFF0C\u53EF\u4F7F\u7528\u4FA7\u8FB9\u5BFC\u822A\u6216\u9875\u5185 Tab\uFF0C\u4F46\u8DEF\u7531\u5FC5\u987B\u72EC\u7ACB\u3001\u53EF\u590D\u5236\u548C\u53EF\u5237\u65B0\uFF1A",paraId:228,tocIndex:131},{value:"\u6A21\u5757",paraId:229,tocIndex:131},{value:"\u529F\u80FD",paraId:229,tocIndex:131},{value:"\u8868\u5355\u7BA1\u7406",paraId:229,tocIndex:131},{value:"Schema CRUD\u3001\u5B57\u6BB5\u7F16\u8F91\u3001Owner\u3001\u5F15\u64CE\u5F00\u5173\u3001\u6743\u9650\u914D\u7F6E",paraId:229,tocIndex:131},{value:"\u6570\u636E\u7BA1\u7406",paraId:229,tocIndex:131},{value:"\u52A8\u6001\u8868\u683C\u3001CRUD\u3001\u6761\u4EF6\u6811\u3001\u5206\u9875/\u6E38\u6807",paraId:229,tocIndex:131},{value:"\u6570\u636E\u540C\u6B65",paraId:229,tocIndex:131},{value:"\u521B\u5EFA\u4EFB\u52A1\u3001\u6267\u884C\u3001\u8FDB\u5EA6\u3001\u5916\u90E8\u540C\u6B65",paraId:229,tocIndex:131},{value:"\u56FE\u8868\u7EDF\u8BA1",paraId:229,tocIndex:131},{value:"ES \u641C\u7D22\u3001\u7EF4\u5EA6/\u6307\u6807\u805A\u5408\u3001\u56FE\u8868\u5C55\u793A",paraId:229,tocIndex:131},{value:"\u5173\u952E\u7EC4\u4EF6\u884C\u4E3A\uFF1A",paraId:230,tocIndex:131},{value:"SchemaEditor",paraId:231,tocIndex:131},{value:" \u7EF4\u62A4 ",paraId:231,tocIndex:131},{value:"fields[]",paraId:231,tocIndex:131},{value:"\uFF0CfieldId \u521B\u5EFA\u540E\u9ED8\u8BA4\u4E0D\u53EF\u4FEE\u6539\uFF0C\u652F\u6301\u6392\u5E8F\u548C\u7C7B\u578B\u5C5E\u6027\u3002",paraId:231,tocIndex:131},{value:"FormFieldInput",paraId:231,tocIndex:131},{value:" \u6309\u7C7B\u578B\u6E32\u67D3 Input/TextArea/InputNumber/DatePicker/Switch/Select\u3002",paraId:231,tocIndex:131},{value:"ConditionNodeEditor",paraId:231,tocIndex:131},{value:" \u9012\u5F52\u7F16\u8F91 AND/OR\uFF1B\u53F6\u5B50\u5B57\u6BB5\u53D8\u5316\u65F6\u91CD\u7F6E\u4E0D\u517C\u5BB9\u8FD0\u7B97\u7B26\u548C\u503C\u3002",paraId:231,tocIndex:131},{value:"\u6570\u636E\u5217\u7531 Schema \u52A8\u6001\u751F\u6210\uFF0C\u7CFB\u7EDF\u5217\u56FA\u5B9A\u8FFD\u52A0\u3002",paraId:231,tocIndex:131},{value:"\u6743\u9650\u5F39\u7A97\u5206\u67E5\u8BE2\u3001\u65B0\u589E\u3001\u66F4\u65B0\u3001\u5220\u9664\u56DB\u5757\uFF1B\u65B0\u589E\u53EA\u5C55\u793A\u8EAB\u4EFD\u7EF4\u5EA6\u5B57\u6BB5\u3002",paraId:231,tocIndex:131},{value:"\u6240\u6709\u8BF7\u6C42\u663E\u793A loading\uFF1B\u5931\u8D25\u76F4\u63A5\u5C55\u793A\u54CD\u5E94 ",paraId:231,tocIndex:131},{value:"message",paraId:231,tocIndex:131},{value:"\uFF1B\u6210\u529F\u540E\u4F7F\u5BF9\u5E94 React Query \u7F13\u5B58\u5931\u6548\u5E76\u91CD\u65B0\u67E5\u8BE2\u670D\u52A1\u7AEF\uFF0C\u4E0D\u505A\u4E50\u89C2\u4F2A\u66F4\u65B0\u3002",paraId:231,tocIndex:131},{value:"\u9875\u9762\u5FC5\u987B\u8986\u76D6\u7A7A\u72B6\u6001\u3001\u9996\u6B21\u52A0\u8F7D\u3001\u5C40\u90E8\u5237\u65B0\u3001\u65E0\u6743\u9650\u3001\u4F9D\u8D56\u4E0D\u53EF\u7528\u548C\u8D85\u65F6\u72B6\u6001\uFF1B\u7834\u574F\u6027\u64CD\u4F5C\u5FC5\u987B\u4E8C\u6B21\u786E\u8BA4\u3002",paraId:231,tocIndex:131},{value:"\u684C\u9762\u7AEF\u4F18\u5148\u9002\u914D ",paraId:231,tocIndex:131},{value:"1280px",paraId:231,tocIndex:131},{value:" \u53CA\u4EE5\u4E0A\u5BBD\u5EA6\uFF0C\u5E76\u4FDD\u8BC1 ",paraId:231,tocIndex:131},{value:"1024px",paraId:231,tocIndex:131},{value:" \u4E0B\u6838\u5FC3\u64CD\u4F5C\u53EF\u7528\uFF1B\u52A8\u6001\u8868\u683C\u5141\u8BB8\u8868\u683C\u5BB9\u5668\u5185\u90E8\u6A2A\u5411\u6EDA\u52A8\uFF0C\u4E0D\u5F97\u6491\u5F00\u6574\u9875\u3002",paraId:231,tocIndex:131},{value:"\u524D\u7AEF\u9A8C\u6536\uFF1A",paraId:232,tocIndex:131},{value:"\u53EF\u4EE5\u5B8C\u6574\u521B\u5EFA Schema\u3001\u7F16\u8F91\u5B57\u6BB5\u3001\u914D\u7F6E\u6743\u9650\u5E76\u542F\u505C Mongo/ES\u3002",paraId:233,tocIndex:131},{value:"\u53EF\u4EE5\u57FA\u4E8E Schema \u52A8\u6001\u65B0\u589E\u3001\u4FEE\u6539\u3001\u5220\u9664\u3001\u67E5\u8BE2\u548C\u5206\u9875\u6570\u636E\u3002",paraId:233,tocIndex:131},{value:"\u53EF\u4EE5\u542F\u52A8\u540C\u6B65\u3001\u67E5\u770B\u5B9E\u65F6\u8FDB\u5EA6\u4E0E\u5931\u8D25\u539F\u56E0\u3002",paraId:233,tocIndex:131},{value:"\u53EF\u4EE5\u914D\u7F6E\u805A\u5408\u6761\u4EF6\u5E76\u6E32\u67D3\u7EDF\u8BA1\u56FE\u8868\u3002",paraId:233,tocIndex:131},{value:"\u5F00\u53D1\u514D\u767B\u5F55\u7528\u6237\u53EF\u6B63\u5E38\u6267\u884C Owner \u4E0E\u7EC4\u7EC7\u6743\u9650\u6D41\u7A0B\uFF0C\u524D\u7AEF\u4E0D\u80FD\u7BE1\u6539\u8EAB\u4EFD\u5B57\u6BB5\u3002",paraId:233,tocIndex:131},{value:"npm ci",paraId:233,tocIndex:131},{value:"\u3001TypeScript \u68C0\u67E5\u3001\u5355\u5143\u6D4B\u8BD5\u548C ",paraId:233,tocIndex:131},{value:"npm run build",paraId:233,tocIndex:131},{value:" \u5168\u90E8\u901A\u8FC7\u3002",paraId:233,tocIndex:131},{value:"HTTP \u72B6\u6001\u8868\u8FBE\u534F\u8BAE\u7ED3\u679C\uFF0C",paraId:234,tocIndex:133},{value:"Result.code",paraId:234,tocIndex:133},{value:" \u4F7F\u7528\u7A33\u5B9A\u5B57\u7B26\u4E32\u4F9B\u524D\u7AEF\u548C\u8C03\u7528\u65B9\u5224\u65AD\uFF0C",paraId:234,tocIndex:133},{value:"message",paraId:234,tocIndex:133},{value:" \u63D0\u4F9B\u53EF\u76F4\u63A5\u5C55\u793A\u7684\u5B89\u5168\u6587\u672C\u3002",paraId:234,tocIndex:133},{value:"HTTP",paraId:235,tocIndex:133},{value:"code",paraId:235,tocIndex:133},{value:"\u573A\u666F",paraId:235,tocIndex:133},{value:"400",paraId:235,tocIndex:133},{value:"VALIDATION_FAILED",paraId:235,tocIndex:133},{value:"\u901A\u7528\u53C2\u6570\u6821\u9A8C\u5931\u8D25",paraId:235,tocIndex:133},{value:"400",paraId:235,tocIndex:133},{value:"SCHEMA_INVALID",paraId:235,tocIndex:133},{value:"Schema JSON \u6216\u5B57\u6BB5\u5B9A\u4E49\u975E\u6CD5",paraId:235,tocIndex:133},{value:"400",paraId:235,tocIndex:133},{value:"DATA_TYPE_MISMATCH",paraId:235,tocIndex:133},{value:"\u52A8\u6001\u5B57\u6BB5\u65E0\u6CD5\u6309 Schema \u4E25\u683C\u8F6C\u6362",paraId:235,tocIndex:133},{value:"400",paraId:235,tocIndex:133},{value:"CONDITION_INVALID",paraId:235,tocIndex:133},{value:"\u6761\u4EF6\u6811\u3001\u8FD0\u7B97\u7B26\u6216\u6392\u5E8F\u5B57\u6BB5\u975E\u6CD5",paraId:235,tocIndex:133},{value:"401",paraId:235,tocIndex:133},{value:"UNAUTHENTICATED",paraId:235,tocIndex:133},{value:"\u65E0\u6CD5\u6784\u5EFA\u7528\u6237\u4E0A\u4E0B\u6587",paraId:235,tocIndex:133},{value:"403",paraId:235,tocIndex:133},{value:"CLIENT_ACCESS_DENIED",paraId:235,tocIndex:133},{value:"clientId \u4E0D\u5339\u914D",paraId:235,tocIndex:133},{value:"403",paraId:235,tocIndex:133},{value:"PERMISSION_DENIED",paraId:235,tocIndex:133},{value:"Owner\u3001\u89D2\u8272\u6216\u884C\u6743\u9650\u62D2\u7EDD",paraId:235,tocIndex:133},{value:"403",paraId:235,tocIndex:133},{value:"PERMISSION_CONFIG_INVALID",paraId:235,tocIndex:133},{value:"\u6743\u9650\u914D\u7F6E\u635F\u574F\u4E14\u65E0\u6CD5\u5B89\u5168\u89E3\u6790",paraId:235,tocIndex:133},{value:"404",paraId:235,tocIndex:133},{value:"SCHEMA_NOT_FOUND",paraId:235,tocIndex:133},{value:"\u8868\u5355\u4E0D\u5B58\u5728\u6216\u4E0D\u5C5E\u4E8E\u5F53\u524D clientId",paraId:235,tocIndex:133},{value:"404",paraId:235,tocIndex:133},{value:"DATA_NOT_FOUND",paraId:235,tocIndex:133},{value:"\u6570\u636E\u4E0D\u5B58\u5728\u6216\u4E0D\u53EF\u89C1",paraId:235,tocIndex:133},{value:"409",paraId:235,tocIndex:133},{value:"SCHEMA_VERSION_CONFLICT",paraId:235,tocIndex:133},{value:"Schema \u4E50\u89C2\u9501\u51B2\u7A81",paraId:235,tocIndex:133},{value:"409",paraId:235,tocIndex:133},{value:"DATA_VERSION_CONFLICT",paraId:235,tocIndex:133},{value:"\u6570\u636E\u4E50\u89C2\u9501\u51B2\u7A81",paraId:235,tocIndex:133},{value:"409",paraId:235,tocIndex:133},{value:"IDEMPOTENCY_CONFLICT",paraId:235,tocIndex:133},{value:"\u540C\u4E00\u5E42\u7B49\u952E\u5BF9\u5E94\u4E0D\u540C\u8BF7\u6C42\u4F53",paraId:235,tocIndex:133},{value:"409",paraId:235,tocIndex:133},{value:"SYNC_CONFLICT",paraId:235,tocIndex:133},{value:"\u8868\u5355\u6B63\u5728\u8FC1\u79FB\u6216\u540C\u6B65",paraId:235,tocIndex:133},{value:"429",paraId:235,tocIndex:133},{value:"RATE_LIMITED",paraId:235,tocIndex:133},{value:"\u8D85\u8FC7\u8C03\u7528\u914D\u989D",paraId:235,tocIndex:133},{value:"503",paraId:235,tocIndex:133},{value:"DEPENDENCY_UNAVAILABLE",paraId:235,tocIndex:133},{value:"\u5FC5\u9700\u4F9D\u8D56\u4E0D\u53EF\u7528",paraId:235,tocIndex:133},{value:"500",paraId:235,tocIndex:133},{value:"INTERNAL_ERROR",paraId:235,tocIndex:133},{value:"\u672A\u77E5\u5F02\u5E38\uFF0C\u53EA\u8FD4\u56DE traceId",paraId:235,tocIndex:133},{value:"\u5F02\u5E38\u5904\u7406\u5668\u5FC5\u987B\u8BB0\u5F55\u5B8C\u6574\u5185\u90E8\u5F02\u5E38\uFF0C\u4F46\u54CD\u5E94 ",paraId:236,tocIndex:133},{value:"message",paraId:236,tocIndex:133},{value:" \u4E0D\u5F97\u5305\u542B\u8FDE\u63A5 URI\u3001SQL\u3001\u51ED\u636E\u6216\u5806\u6808\u3002\u672A\u627E\u5230\u548C\u65E0\u6743\u9650\u5728\u9AD8\u654F\u573A\u666F\u53EF\u7EDF\u4E00\u8FD4\u56DE 404\uFF0C\u9632\u6B62\u679A\u4E3E\u8D44\u6E90\u3002",paraId:236,tocIndex:133},{value:"\u7981\u6B62\u5BA2\u6237\u7AEF\u51B3\u5B9A creator\u3001modifier\u3001owners \u521D\u59CB\u503C\u548C clientId\u3002",paraId:237,tocIndex:134},{value:"\u7981\u6B62\u52A8\u6001 SQL \u62FC\u63A5\u5B57\u6BB5\u3001\u6392\u5E8F\u548C\u8868\u540D\u3002",paraId:237,tocIndex:134},{value:"Mongo/ES field path \u5FC5\u987B\u6765\u81EA Schema \u767D\u540D\u5355\u3002",paraId:237,tocIndex:134},{value:"like",paraId:237,tocIndex:134},{value:" \u8F93\u5165\u5FC5\u987B\u8F6C\u4E49\u901A\u914D\u7B26\u548C\u6B63\u5219\u5B57\u7B26\uFF0C\u5E76\u9650\u5236\u957F\u5EA6\u3002",paraId:237,tocIndex:134},{value:"data",paraId:237,tocIndex:134},{value:"\u3001permissionConfig\u3001\u8FDE\u63A5\u914D\u7F6E\u65E5\u5FD7\u8131\u654F\u3002",paraId:237,tocIndex:134},{value:"\u540C\u6B65\u3001\u7D22\u5F15\u521B\u5EFA\u3001\u6743\u9650\u53D8\u66F4\u3001Schema \u5220\u9664\u548C\u6B7B\u4FE1\u91CD\u653E\u5FC5\u987B\u5BA1\u8BA1\u3002",paraId:237,tocIndex:134},{value:"\u6240\u6709\u670D\u52A1\u65B9\u6CD5\u5148\u6267\u884C clientId \u9694\u79BB\uFF0C\u518D\u6267\u884C Owner/\u89D2\u8272/\u884C\u6743\u9650\u5224\u65AD\u3002",paraId:237,tocIndex:134},{value:"\u672C\u7AE0\u662F\u5168\u65B0\u5B9E\u73B0\u7684\u552F\u4E00\u51B3\u7B56\u5C42\u3002\u524D\u6587\u201C\u73B0\u72B6\u201D\u7528\u4E8E\u7406\u89E3\u8FC1\u79FB\u6765\u6E90\uFF1B\u51FA\u73B0\u51B2\u7A81\u65F6\u5FC5\u987B\u6267\u884C\u672C\u7AE0\uFF0C\u4E0D\u5F97\u81EA\u884C\u9009\u62E9\u65E7\u884C\u4E3A\u3002",paraId:238,tocIndex:135},{value:"MySQL \u662F\u552F\u4E00\u4E8B\u5B9E\u6E90\uFF1B\u4E1A\u52A1\u4E8B\u52A1\u53EA\u5199 MySQL \u4E1A\u52A1\u884C\u3001\u5E42\u7B49\u8BB0\u5F55\u548C Outbox\uFF0C\u4E0D\u5728\u4E8B\u52A1\u4E2D\u540C\u6B65\u8C03\u7528 MongoDB \u6216 Elasticsearch\u3002",paraId:239,tocIndex:136},{value:"MongoDB \u548C Elasticsearch \u662F\u53EF\u91CD\u5EFA\u67E5\u8BE2\u526F\u672C\uFF0C\u7531 Outbox \u6D88\u8D39\u8005\u6700\u7EC8\u4E00\u81F4\u5199\u5165\uFF1B\u8BE6\u60C5\u67E5\u8BE2\u5141\u8BB8\u56DE\u9000 MySQL\uFF0C\u641C\u7D22\u63A5\u53E3\u8FD4\u56DE\u526F\u672C\u5F53\u524D\u53EF\u89C1\u72B6\u6001\u3002",paraId:239,tocIndex:136},{value:"\u65B0\u589E\u3001\u66F4\u65B0\u3001\u5220\u9664\u6210\u529F\u4EE5 MySQL \u4E8B\u52A1\u63D0\u4EA4\u4E3A\u51C6\uFF1B\u54CD\u5E94\u643A\u5E26\u6570\u636E ID\u3001\u6570\u636E\u7248\u672C\u548C ",paraId:239,tocIndex:136},{value:"projectionPending",paraId:239,tocIndex:136},{value:"\uFF0C\u8868\u793A\u67E5\u8BE2\u526F\u672C\u53EF\u80FD\u5C1A\u672A\u8FFD\u5E73\u3002",paraId:239,tocIndex:136},{value:"Schema \u4E0E\u6570\u636E\u66F4\u65B0\u90FD\u4F7F\u7528\u4E50\u89C2\u9501\u3002Schema \u4ECE\u7248\u672C 1 \u5F00\u59CB\uFF0C\u6570\u636E\u4ECE\u7248\u672C 1 \u5F00\u59CB\uFF0C\u51B2\u7A81\u7EDF\u4E00\u8FD4\u56DE 409\u3002",paraId:239,tocIndex:136},{value:"clientId",paraId:239,tocIndex:136},{value:" \u53EA\u80FD\u7531\u670D\u52A1\u7AEF\u8EAB\u4EFD\u63D0\u4F9B\u5668\u4EA7\u751F\u3002\u6240\u6709 Schema\u3001\u6570\u636E\u3001\u540C\u6B65\u3001\u7D22\u5F15\u548C\u5BA1\u8BA1\u67E5\u8BE2\u90FD\u5F3A\u5236\u643A\u5E26 clientId \u6761\u4EF6\uFF0COwner \u4E5F\u4E0D\u80FD\u8DE8 clientId\u3002",paraId:239,tocIndex:136},{value:"\u65B0\u5199\u5165\u4E25\u683C\u6267\u884C Schema \u6821\u9A8C\uFF0C\u4EFB\u4F55\u5B57\u6BB5\u8F6C\u6362\u9519\u8BEF\u6574\u6761\u8BF7\u6C42\u5931\u8D25\uFF1BMySQL\u3001MongoDB\u3001Elasticsearch \u4E0D\u5141\u8BB8\u4FDD\u5B58\u4E92\u76F8\u77DB\u76FE\u7684\u7C7B\u578B\u3002",paraId:239,tocIndex:136},{value:"fieldId",paraId:239,tocIndex:136},{value:" \u53D1\u5E03\u540E\u4E0D\u53EF\u76F4\u63A5\u4FEE\u6539\u3002\u91CD\u547D\u540D\u6309\u201C\u65B0\u589E\u5B57\u6BB5\u3001\u8FC1\u79FB\u6570\u636E\u3001\u505C\u5199\u65E7\u5B57\u6BB5\u3001\u5220\u9664\u65E7\u5B57\u6BB5\u201D\u6267\u884C\u3002",paraId:239,tocIndex:136},{value:"MySQL 8.4 \u6700\u7EC8\u8868\u4F7F\u7528\u539F\u751F ",paraId:239,tocIndex:136},{value:"JSON",paraId:239,tocIndex:136},{value:" \u7C7B\u578B\uFF1B\u65E7 ",paraId:239,tocIndex:136},{value:"LONGTEXT",paraId:239,tocIndex:136},{value:" \u4EC5\u4F5C\u4E3A\u8FC1\u79FB\u8F93\u5165\uFF0C\u8FC1\u79FB\u524D\u5FC5\u987B\u9010\u884C\u9A8C\u8BC1 ",paraId:239,tocIndex:136},{value:"JSON_VALID",paraId:239,tocIndex:136},{value:"\u3002",paraId:239,tocIndex:136},{value:"\u6570\u636E\u5E93\u65F6\u95F4\u7EDF\u4E00 UTC ",paraId:239,tocIndex:136},{value:"DATETIME(6)",paraId:239,tocIndex:136},{value:"\uFF0CJava \u4F7F\u7528 ",paraId:239,tocIndex:136},{value:"Instant",paraId:239,tocIndex:136},{value:"\uFF0CREST \u4F7F\u7528 ISO 8601 UTC\u3002",paraId:239,tocIndex:136},{value:"REST\u3001Agent Tool \u548C RPC \u53EA\u505A\u534F\u8BAE\u9002\u914D\uFF0C\u5FC5\u987B\u590D\u7528\u540C\u4E00 Application Service\u3001\u4E8B\u52A1\u3001\u6743\u9650\u548C\u6821\u9A8C\u903B\u8F91\u3002",paraId:239,tocIndex:136},{value:"Mongo/ES \u67E5\u8BE2\u526F\u672C\u7684\u7CFB\u7EDF\u5B57\u6BB5\u56FA\u5B9A\u5305\u542B ",paraId:239,tocIndex:136},{value:"_id/clientId/formKey/version/isDeleted/creator/modifier/gmtCreate/gmtModified",paraId:239,tocIndex:136},{value:"\uFF1B\u7528\u6237\u5B57\u6BB5\u53EA\u5141\u8BB8\u4F4D\u4E8E ",paraId:239,tocIndex:136},{value:"data",paraId:239,tocIndex:136},{value:" \u4E0B\u3002",paraId:239,tocIndex:136},{value:"\u5168\u65B0\u9879\u76EE\u4E0D\u521B\u5EFA\u7B2C 22 \u7AE0\u7684\u5386\u53F2\u4FDD\u7559\u8868\u3002Flyway \u6309\u4E0B\u5217\u804C\u8D23\u5EFA\u7ACB\u6700\u7EC8\u8868\uFF1A",paraId:240,tocIndex:137},{value:"\u8868",paraId:241,tocIndex:137},{value:"\u7528\u9014",paraId:241,tocIndex:137},{value:"sys_client",paraId:241,tocIndex:137},{value:"\u79DF\u6237/\u8C03\u7528\u65B9\u4E3B\u6570\u636E",paraId:241,tocIndex:137},{value:"sys_user",paraId:241,tocIndex:137},{value:"\u7528\u6237\u4E3B\u6570\u636E",paraId:241,tocIndex:137},{value:"sys_org",paraId:241,tocIndex:137},{value:"\u7EC4\u7EC7\u6811",paraId:241,tocIndex:137},{value:"sys_user_org",paraId:241,tocIndex:137},{value:"\u7528\u6237\u7EC4\u7EC7\u5173\u7CFB",paraId:241,tocIndex:137},{value:"sys_role",paraId:241,tocIndex:137},{value:"\u3001",paraId:241,tocIndex:137},{value:"sys_user_role",paraId:241,tocIndex:137},{value:"\u5E73\u53F0\u7BA1\u7406\u5458\u548C\u8FD0\u7EF4\u89D2\u8272",paraId:241,tocIndex:137},{value:"ai_form_schema",paraId:241,tocIndex:137},{value:"\u3001",paraId:241,tocIndex:137},{value:"ai_form_owner",paraId:241,tocIndex:137},{value:"\u5F53\u524D Schema \u4E0E Owner",paraId:241,tocIndex:137},{value:"ai_form_schema_version",paraId:241,tocIndex:137},{value:"\u4E0D\u53EF\u53D8 Schema \u5386\u53F2",paraId:241,tocIndex:137},{value:"ai_form_data",paraId:241,tocIndex:137},{value:"API \u8868\u5355\u6570\u636E\u4E8B\u5B9E\u8868",paraId:241,tocIndex:137},{value:"ai_form_external_snapshot_data",paraId:241,tocIndex:137},{value:"\u5916\u90E8\u5168\u91CF\u5FEB\u7167\u4E8B\u5B9E\u8868",paraId:241,tocIndex:137},{value:"ai_form_incremental_data",paraId:241,tocIndex:137},{value:"\u5916\u90E8\u589E\u91CF\u4E8B\u5B9E\u8868",paraId:241,tocIndex:137},{value:"ai_form_idempotency",paraId:241,tocIndex:137},{value:"\u65B0\u589E\u8BF7\u6C42\u5E42\u7B49\u7ED3\u679C",paraId:241,tocIndex:137},{value:"ai_form_outbox",paraId:241,tocIndex:137},{value:"Mongo/ES \u6700\u7EC8\u4E00\u81F4\u4E8B\u4EF6",paraId:241,tocIndex:137},{value:"ai_form_sync_job",paraId:241,tocIndex:137},{value:"\u3001",paraId:241,tocIndex:137},{value:"ai_form_sync_lock",paraId:241,tocIndex:137},{value:"\u540C\u6B65\u4EFB\u52A1\u4E0E\u79DF\u7EA6\u9501",paraId:241,tocIndex:137},{value:"ai_form_mongo_index",paraId:241,tocIndex:137},{value:"Mongo \u7D22\u5F15\u5143\u6570\u636E",paraId:241,tocIndex:137},{value:"ai_form_incremental_cursor",paraId:241,tocIndex:137},{value:"\u3001",paraId:241,tocIndex:137},{value:"ai_form_incremental_failure",paraId:241,tocIndex:137},{value:"\u590D\u5408\u6E38\u6807\u4E0E\u5931\u8D25\u91CD\u8BD5",paraId:241,tocIndex:137},{value:"ai_form_audit_log",paraId:241,tocIndex:137},{value:"\u9AD8\u98CE\u9669\u64CD\u4F5C\u5BA1\u8BA1",paraId:241,tocIndex:137},{value:"\u4EE5\u4E0B\u662F ",paraId:242,tocIndex:137},{value:"V1__baseline.sql",paraId:242,tocIndex:137},{value:" \u7684\u5B8C\u6574\u903B\u8F91\u5185\u5BB9\uFF1B\u53EF\u6309 Flyway \u6587\u4EF6\u62C6\u5206\uFF0C\u4F46\u5217\u3001\u552F\u4E00\u7EA6\u675F\u548C\u7D22\u5F15\u4E0D\u5F97\u7701\u7565\uFF1A",paraId:242,tocIndex:137},{value:`CREATE TABLE sys_client (
  client_id VARCHAR(64) NOT NULL,
  client_code VARCHAR(64) NOT NULL,
  client_name VARCHAR(128) NOT NULL,
  status TINYINT NOT NULL DEFAULT 1,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  gmt_modified DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (client_id), UNIQUE KEY uk_client_code (client_code),
  CHECK (status IN (0,1))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE sys_user (
  user_id VARCHAR(64) NOT NULL,
  user_code VARCHAR(64) NOT NULL,
  employee_no VARCHAR(64) DEFAULT NULL,
  display_name VARCHAR(128) NOT NULL,
  status TINYINT NOT NULL DEFAULT 1,
  source VARCHAR(32) NOT NULL DEFAULT 'LOCAL',
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  gmt_modified DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (user_id), UNIQUE KEY uk_user_code (user_code),
  UNIQUE KEY uk_employee_no (employee_no), CHECK (status IN (0,1))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE sys_org (
  client_id VARCHAR(64) NOT NULL,
  org_id VARCHAR(64) NOT NULL,
  org_code VARCHAR(64) NOT NULL,
  org_name VARCHAR(128) NOT NULL,
  parent_org_id VARCHAR(64) DEFAULT NULL,
  org_path VARCHAR(1024) NOT NULL,
  status TINYINT NOT NULL DEFAULT 1,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  gmt_modified DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (client_id,org_id), UNIQUE KEY uk_org_code (client_id,org_code),
  KEY idx_parent (client_id,parent_org_id), KEY idx_org_path (client_id,org_path(191)),
  CONSTRAINT fk_org_client FOREIGN KEY (client_id) REFERENCES sys_client(client_id),
  CONSTRAINT fk_org_parent FOREIGN KEY (client_id,parent_org_id)
    REFERENCES sys_org(client_id,org_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE sys_user_org (
  client_id VARCHAR(64) NOT NULL,
  user_id VARCHAR(64) NOT NULL, org_id VARCHAR(64) NOT NULL,
  is_primary TINYINT NOT NULL DEFAULT 0, is_manager TINYINT NOT NULL DEFAULT 0,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (client_id,user_id,org_id), KEY idx_org_user (client_id,org_id,user_id),
  CONSTRAINT fk_user_org_user FOREIGN KEY (user_id) REFERENCES sys_user(user_id),
  CONSTRAINT fk_user_org_org FOREIGN KEY (client_id,org_id)
    REFERENCES sys_org(client_id,org_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE sys_role (
  role_code VARCHAR(64) NOT NULL, role_name VARCHAR(128) NOT NULL,
  status TINYINT NOT NULL DEFAULT 1,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (role_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE sys_user_role (
  client_id VARCHAR(64) NOT NULL,
  user_id VARCHAR(64) NOT NULL, role_code VARCHAR(64) NOT NULL,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (client_id,user_id,role_code),
  KEY idx_role_user (client_id,role_code,user_id),
  CONSTRAINT fk_user_role_client FOREIGN KEY (client_id) REFERENCES sys_client(client_id),
  CONSTRAINT fk_user_role_user FOREIGN KEY (user_id) REFERENCES sys_user(user_id),
  CONSTRAINT fk_user_role_role FOREIGN KEY (role_code) REFERENCES sys_role(role_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_schema (
  id BIGINT NOT NULL AUTO_INCREMENT, client_id VARCHAR(64) NOT NULL,
  form_key VARCHAR(64) NOT NULL, form_name VARCHAR(128) NOT NULL,
  schema_definition JSON NOT NULL, permission_config JSON DEFAULT NULL,
  version INT NOT NULL DEFAULT 1, mongo_enabled TINYINT NOT NULL DEFAULT 1,
  es_enabled TINYINT NOT NULL DEFAULT 0, data_source_type TINYINT NOT NULL DEFAULT 0,
  sync_status TINYINT NOT NULL DEFAULT 0, active_snapshot_version BIGINT DEFAULT NULL,
  is_deleted TINYINT NOT NULL DEFAULT 0, creator VARCHAR(64) NOT NULL,
  modifier VARCHAR(64) NOT NULL,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  gmt_modified DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id), UNIQUE KEY uk_form_key (form_key),
  UNIQUE KEY uk_client_form (client_id,form_key),
  KEY idx_client_deleted_name (client_id,is_deleted,form_name),
  CONSTRAINT fk_schema_client FOREIGN KEY (client_id) REFERENCES sys_client(client_id),
  CHECK (mongo_enabled IN (0,1) AND es_enabled IN (0,1)),
  CHECK (data_source_type IN (0,1,2)), CHECK (sync_status IN (0,1))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_owner (
  client_id VARCHAR(64) NOT NULL,
  form_key VARCHAR(64) NOT NULL, user_id VARCHAR(64) NOT NULL,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (client_id,form_key,user_id),
  KEY idx_owner_user (client_id,user_id,form_key),
  CONSTRAINT fk_owner_schema FOREIGN KEY (client_id,form_key)
    REFERENCES ai_form_schema(client_id,form_key),
  CONSTRAINT fk_owner_user FOREIGN KEY (user_id) REFERENCES sys_user(user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_schema_version (
  id BIGINT NOT NULL AUTO_INCREMENT, client_id VARCHAR(64) NOT NULL,
  form_key VARCHAR(64) NOT NULL, version INT NOT NULL,
  schema_definition JSON NOT NULL, permission_config JSON DEFAULT NULL,
  change_type VARCHAR(32) NOT NULL, change_summary VARCHAR(1024) DEFAULT NULL,
  migration_status TINYINT NOT NULL DEFAULT 0, creator VARCHAR(64) NOT NULL,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id), UNIQUE KEY uk_form_version (form_key,version),
  KEY idx_client_form (client_id,form_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_data (
  id BIGINT NOT NULL AUTO_INCREMENT, client_id VARCHAR(64) NOT NULL,
  form_key VARCHAR(64) NOT NULL, version INT NOT NULL DEFAULT 1,
  data JSON NOT NULL, is_deleted TINYINT NOT NULL DEFAULT 0,
  creator VARCHAR(64) NOT NULL, modifier VARCHAR(64) NOT NULL,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  gmt_modified DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id), KEY idx_client_form_deleted_id (client_id,form_key,is_deleted,id),
  KEY idx_form_modified_id (form_key,gmt_modified,id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_external_snapshot_data (
  id BIGINT NOT NULL AUTO_INCREMENT, client_id VARCHAR(64) NOT NULL,
  form_key VARCHAR(64) NOT NULL, snapshot_version BIGINT NOT NULL,
  source_key VARCHAR(128) NOT NULL, data JSON NOT NULL,
  creator VARCHAR(64) NOT NULL, gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id), UNIQUE KEY uk_snapshot_key (form_key,snapshot_version,source_key),
  KEY idx_snapshot_read (client_id,form_key,snapshot_version,id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_incremental_data (
  id BIGINT NOT NULL AUTO_INCREMENT, client_id VARCHAR(64) NOT NULL,
  form_key VARCHAR(64) NOT NULL, source_key VARCHAR(128) NOT NULL,
  source_modified_at DATETIME(6) NOT NULL, data JSON NOT NULL,
  is_deleted TINYINT NOT NULL DEFAULT 0,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  gmt_modified DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id), UNIQUE KEY uk_incremental_key (form_key,source_key),
  KEY idx_incremental_cursor (form_key,source_modified_at,id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_idempotency (
  id BIGINT NOT NULL AUTO_INCREMENT, client_id VARCHAR(64) NOT NULL,
  form_key VARCHAR(64) NOT NULL, idempotency_key VARCHAR(128) NOT NULL,
  request_hash CHAR(64) NOT NULL, data_id BIGINT DEFAULT NULL,
  status TINYINT NOT NULL DEFAULT 0, expires_at DATETIME(6) NOT NULL,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  gmt_modified DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id), UNIQUE KEY uk_idempotency (client_id,form_key,idempotency_key),
  KEY idx_idempotency_expire (expires_at), CHECK (status IN (0,1))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_outbox (
  id BIGINT NOT NULL AUTO_INCREMENT, event_id VARCHAR(64) NOT NULL,
  client_id VARCHAR(64) NOT NULL, form_key VARCHAR(64) NOT NULL,
  source_type TINYINT NOT NULL DEFAULT 0, data_id BIGINT NOT NULL,
  event_version INT NOT NULL, event_type VARCHAR(16) NOT NULL, payload JSON NOT NULL,
  mongo_status TINYINT NOT NULL DEFAULT 0, es_status TINYINT NOT NULL DEFAULT 0,
  retry_count INT NOT NULL DEFAULT 0, available_at DATETIME(6) NOT NULL,
  processing_owner VARCHAR(128) DEFAULT NULL, processing_at DATETIME(6) DEFAULT NULL,
  last_error VARCHAR(1024) DEFAULT NULL,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  gmt_modified DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id), UNIQUE KEY uk_event_id (event_id),
  KEY idx_outbox_scan (available_at,mongo_status,es_status,id),
  KEY idx_outbox_aggregate (form_key,data_id,event_version)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_sync_job (
  id BIGINT NOT NULL AUTO_INCREMENT, job_id VARCHAR(64) NOT NULL,
  client_id VARCHAR(64) NOT NULL, form_key VARCHAR(64) NOT NULL,
  target_type TINYINT NOT NULL, sync_mode TINYINT NOT NULL,
  status TINYINT NOT NULL DEFAULT 0, total_count BIGINT NOT NULL DEFAULT 0,
  success_count BIGINT NOT NULL DEFAULT 0, failed_count BIGINT NOT NULL DEFAULT 0,
  cursor_json JSON DEFAULT NULL, error_message VARCHAR(1024) DEFAULT NULL,
  started_at DATETIME(6) DEFAULT NULL, finished_at DATETIME(6) DEFAULT NULL,
  creator VARCHAR(64) NOT NULL,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  gmt_modified DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id), UNIQUE KEY uk_job_id (job_id),
  KEY idx_sync_scan (status,gmt_create), KEY idx_sync_form (client_id,form_key,id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_sync_lock (
  lock_key VARCHAR(128) NOT NULL, owner_id VARCHAR(128) NOT NULL,
  fencing_token BIGINT NOT NULL, expires_at DATETIME(6) NOT NULL,
  gmt_modified DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (lock_key), KEY idx_lock_expire (expires_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_mongo_index (
  id BIGINT NOT NULL AUTO_INCREMENT, client_id VARCHAR(64) NOT NULL,
  form_key VARCHAR(64) NOT NULL, index_name VARCHAR(128) NOT NULL,
  index_keys JSON NOT NULL, status TINYINT NOT NULL DEFAULT 0,
  creator VARCHAR(64) NOT NULL,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  gmt_modified DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id), UNIQUE KEY uk_mongo_index_name (form_key,index_name),
  KEY idx_mongo_index_form (client_id,form_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_incremental_cursor (
  client_id VARCHAR(64) NOT NULL, form_key VARCHAR(64) NOT NULL,
  source_modified_at DATETIME(6) NOT NULL, source_id BIGINT NOT NULL,
  version INT NOT NULL DEFAULT 1,
  gmt_modified DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (client_id,form_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_incremental_failure (
  id BIGINT NOT NULL AUTO_INCREMENT, client_id VARCHAR(64) NOT NULL,
  form_key VARCHAR(64) NOT NULL, source_key VARCHAR(128) NOT NULL,
  target_type TINYINT NOT NULL, retry_count INT NOT NULL DEFAULT 0,
  next_retry_at DATETIME(6) NOT NULL, status TINYINT NOT NULL DEFAULT 0,
  last_error VARCHAR(1024) DEFAULT NULL,
  gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  gmt_modified DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id), UNIQUE KEY uk_incremental_failure (form_key,source_key,target_type),
  KEY idx_incremental_retry (status,next_retry_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE ai_form_audit_log (
  id BIGINT NOT NULL AUTO_INCREMENT, trace_id VARCHAR(64) NOT NULL,
  client_id VARCHAR(64) NOT NULL, user_id VARCHAR(64) NOT NULL,
  form_key VARCHAR(64) DEFAULT NULL, data_id BIGINT DEFAULT NULL,
  operation VARCHAR(64) NOT NULL, result VARCHAR(16) NOT NULL,
  detail JSON DEFAULT NULL, gmt_create DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (id), KEY idx_audit_form_time (client_id,form_key,gmt_create),
  KEY idx_audit_user_time (user_id,gmt_create)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`,paraId:243,tocIndex:137},{value:"\u6700\u7EC8\u72B6\u6001\u679A\u4E3E\u5FC5\u987B\u5728 Java\u3001SQL \u6CE8\u91CA\u3001OpenAPI \u548C\u524D\u7AEF\u5171\u7528\u540C\u4E00\u540D\u79F0\uFF1A",paraId:244,tocIndex:137},{value:"\u5BF9\u8C61\u5B57\u6BB5",paraId:245,tocIndex:137},{value:"\u6570\u503C",paraId:245,tocIndex:137},{value:"\u8BED\u4E49",paraId:245,tocIndex:137},{value:"sys_client/sys_user/sys_org/sys_role.status",paraId:245,tocIndex:137},{value:"0/1",paraId:245,tocIndex:137},{value:"DISABLED/ACTIVE",paraId:245,tocIndex:137},{value:"ai_form_schema.data_source_type",paraId:245,tocIndex:137},{value:"0/1/2",paraId:245,tocIndex:137},{value:"API/EXTERNAL_SNAPSHOT/EXTERNAL_INCREMENTAL",paraId:245,tocIndex:137},{value:"ai_form_schema.sync_status",paraId:245,tocIndex:137},{value:"0/1",paraId:245,tocIndex:137},{value:"READY/MIGRATING",paraId:245,tocIndex:137},{value:"ai_form_schema_version.migration_status",paraId:245,tocIndex:137},{value:"0/1/2/3/4",paraId:245,tocIndex:137},{value:"DRAFT/VALIDATING/MIGRATING/ACTIVE/FAILED",paraId:245,tocIndex:137},{value:"ai_form_idempotency.status",paraId:245,tocIndex:137},{value:"0/1",paraId:245,tocIndex:137},{value:"PROCESSING/COMPLETED",paraId:245,tocIndex:137},{value:"ai_form_outbox.source_type",paraId:245,tocIndex:137},{value:"0/1/2",paraId:245,tocIndex:137},{value:"API/EXTERNAL_SNAPSHOT/EXTERNAL_INCREMENTAL",paraId:245,tocIndex:137},{value:"ai_form_outbox.event_type",paraId:245,tocIndex:137},{value:"\u5B57\u7B26\u4E32",paraId:245,tocIndex:137},{value:"UPSERT/DELETE",paraId:245,tocIndex:137},{value:"ai_form_outbox.mongo_status/es_status",paraId:245,tocIndex:137},{value:"0/1/2/3/4/5",paraId:245,tocIndex:137},{value:"PENDING/PROCESSING/SUCCEEDED/RETRY/DEAD/SKIPPED",paraId:245,tocIndex:137},{value:"ai_form_sync_job.target_type",paraId:245,tocIndex:137},{value:"1/2",paraId:245,tocIndex:137},{value:"MONGO/ELASTICSEARCH",paraId:245,tocIndex:137},{value:"ai_form_sync_job.sync_mode",paraId:245,tocIndex:137},{value:"1/2/3/4",paraId:245,tocIndex:137},{value:"FULL/EXTERNAL_SNAPSHOT/EXTERNAL_INCREMENTAL/REPAIR",paraId:245,tocIndex:137},{value:"ai_form_sync_job.status",paraId:245,tocIndex:137},{value:"0/1/2/3/4",paraId:245,tocIndex:137},{value:"PENDING/RUNNING/SUCCEEDED/FAILED/CANCELLED",paraId:245,tocIndex:137},{value:"ai_form_mongo_index.status",paraId:245,tocIndex:137},{value:"0/1/2/3",paraId:245,tocIndex:137},{value:"CREATING/ACTIVE/FAILED/DELETING",paraId:245,tocIndex:137},{value:"ai_form_incremental_failure.target_type",paraId:245,tocIndex:137},{value:"1/2",paraId:245,tocIndex:137},{value:"MONGO/ELASTICSEARCH",paraId:245,tocIndex:137},{value:"ai_form_incremental_failure.status",paraId:245,tocIndex:137},{value:"0/1/2/3",paraId:245,tocIndex:137},{value:"PENDING/RETRYING/RESOLVED/DEAD",paraId:245,tocIndex:137},{value:"local/test",paraId:246,tocIndex:137},{value:" \u7684 ",paraId:246,tocIndex:137},{value:"V2__dev_identity.sql",paraId:246,tocIndex:137},{value:" \u53EF\u5199\u5165\u56FA\u5B9A\u5F00\u53D1\u8EAB\u4EFD\uFF0C\u751F\u4EA7\u8FC1\u79FB\u4E0D\u5F97\u5305\u542B\u8BE5\u6587\u4EF6\uFF1A",paraId:246,tocIndex:137},{value:`INSERT INTO sys_client(client_id,client_code,client_name)
VALUES ('DEV_CLIENT','dev-client','\u5F00\u53D1\u79DF\u6237');
INSERT INTO sys_org(client_id,org_id,org_code,org_name,org_path)
VALUES ('DEV_CLIENT','ORG_DEV','ORG_DEV','\u5F00\u53D1\u7EC4\u7EC7','/ORG_DEV/');
INSERT INTO sys_user(user_id,user_code,employee_no,display_name)
VALUES ('DEV_USER','dev-user','DEV000001','\u5F00\u53D1\u7528\u6237');
INSERT INTO sys_user_org(client_id,user_id,org_id,is_primary,is_manager)
VALUES ('DEV_CLIENT','DEV_USER','ORG_DEV',1,1);
INSERT INTO sys_role(role_code,role_name) VALUES ('PLATFORM_ADMIN','\u5E73\u53F0\u7BA1\u7406\u5458');
INSERT INTO sys_user_role(client_id,user_id,role_code)
VALUES ('DEV_CLIENT','DEV_USER','PLATFORM_ADMIN');
`,paraId:247,tocIndex:137},{value:`public interface IdentityProvider {
    FormCallerContext currentContext();
}
`,paraId:248,tocIndex:138},{value:"MockIdentityProvider",paraId:249,tocIndex:138},{value:" \u4EC5\u5728 ",paraId:249,tocIndex:138},{value:"local/test + AUTH_MODE=mock",paraId:249,tocIndex:138},{value:" \u52A0\u8F7D\uFF0C\u4ECE ",paraId:249,tocIndex:138},{value:"sys_user/sys_org",paraId:249,tocIndex:138},{value:" \u67E5\u8BE2 ",paraId:249,tocIndex:138},{value:"DEV_USER",paraId:249,tocIndex:138},{value:"\uFF0C\u4E0D\u5B58\u5728\u5219\u542F\u52A8\u5931\u8D25\u3002",paraId:249,tocIndex:138},{value:"\u6B63\u5F0F ",paraId:249,tocIndex:138},{value:"IdentityProvider",paraId:249,tocIndex:138},{value:" \u9A8C\u8BC1 SSO/JWT/OAuth \u540E\uFF0C\u5C06\u5916\u90E8\u8EAB\u4EFD\u6620\u5C04\u5230 ",paraId:249,tocIndex:138},{value:"sys_user.user_code",paraId:249,tocIndex:138},{value:"\uFF1B\u7528\u6237\u4E0D\u5B58\u5728\u65F6\u6309\u660E\u786E\u7684\u540C\u6B65\u7B56\u7565\u521B\u5EFA\u6216\u62D2\u7EDD\uFF0C\u7981\u6B62\u4F7F\u7528 system \u515C\u5E95\u3002",paraId:249,tocIndex:138},{value:"FormCallerContext",paraId:249,tocIndex:138},{value:" \u5FC5\u987B\u586B\u5145 ",paraId:249,tocIndex:138},{value:"userId/clientId/employeeNo/orgIds/orgPaths/orgPathsWithSub/roleCodes",paraId:249,tocIndex:138},{value:" \u5F3A\u7C7B\u578B\u5B57\u6BB5\uFF1B",paraId:249,tocIndex:138},{value:"params",paraId:249,tocIndex:138},{value:" \u53EA\u4FDD\u5B58\u7ECF\u767D\u540D\u5355\u6CE8\u518C\u7684\u6269\u5C55\u6743\u9650\u53D8\u91CF\uFF0CclientId \u6765\u81EA\u670D\u52A1\u7AEF\u914D\u7F6E\u6216\u53EF\u4FE1 token claim\u3002",paraId:249,tocIndex:138},{value:"GET /api/auth/me",paraId:249,tocIndex:138},{value:" \u8FD4\u56DE\u5F53\u524D\u7528\u6237\u57FA\u672C\u4FE1\u606F\u3001\u7EC4\u7EC7\u548C\u89D2\u8272\uFF1B\u524D\u7AEF\u53EA\u7528\u4E8E\u5C55\u793A\uFF0C\u4E0D\u628A\u8FD9\u4E9B\u5B57\u6BB5\u56DE\u4F20\u4E3A\u53EF\u4FE1\u8EAB\u4EFD\u3002",paraId:249,tocIndex:138},{value:"PLATFORM_ADMIN",paraId:249,tocIndex:138},{value:" \u53EF\u7BA1\u7406\u79DF\u6237\u5185 Schema\u3001\u540C\u6B65\u548C\u6B7B\u4FE1\uFF1B\u666E\u901A\u7528\u6237\u4F9D\u8D56 Owner \u4E0E\u884C\u6743\u9650\u3002\u4EFB\u4F55\u89D2\u8272\u90FD\u4E0D\u80FD\u8DE8 clientId\u3002",paraId:249,tocIndex:138},{value:"\u6700\u7EC8\u9650\u5236\u56FA\u5B9A\u5982\u4E0B\uFF1A",paraId:250,tocIndex:139},{value:"\u9879\u76EE",paraId:251,tocIndex:139},{value:"\u4E0A\u9650",paraId:251,tocIndex:139},{value:"\u5355 Schema \u5B57\u6BB5\u6570",paraId:251,tocIndex:139},{value:"200",paraId:251,tocIndex:139},{value:"Schema JSON",paraId:251,tocIndex:139},{value:"1 MiB",paraId:251,tocIndex:139},{value:"\u5355\u6761 data JSON",paraId:251,tocIndex:139},{value:"2 MiB",paraId:251,tocIndex:139},{value:"\u6761\u4EF6\u6811\u6DF1\u5EA6",paraId:251,tocIndex:139},{value:"10",paraId:251,tocIndex:139},{value:"\u6761\u4EF6\u6811\u8282\u70B9\u6570",paraId:251,tocIndex:139},{value:"200",paraId:251,tocIndex:139},{value:"\u6570\u7EC4\u5143\u7D20\u6570",paraId:251,tocIndex:139},{value:"1000",paraId:251,tocIndex:139},{value:"like",paraId:251,tocIndex:139},{value:" \u8F93\u5165\u957F\u5EA6",paraId:251,tocIndex:139},{value:"128",paraId:251,tocIndex:139},{value:"pageSize",paraId:251,tocIndex:139},{value:"200",paraId:251,tocIndex:139},{value:"REST \u6279\u91CF\u6761\u6570",paraId:251,tocIndex:139},{value:"500",paraId:251,tocIndex:139},{value:"Agent Tool \u6279\u91CF\u6761\u6570",paraId:251,tocIndex:139},{value:"100",paraId:251,tocIndex:139},{value:"FormDataValidator",paraId:252,tocIndex:139},{value:" \u8FD4\u56DE ",paraId:252,tocIndex:139},{value:"ValidationResult<T>(typedValue, errors)",paraId:252,tocIndex:139},{value:"\u3002\u65B0\u589E\u548C\u66F4\u65B0\u5FC5\u987B\u5148\u5B8C\u6210\u5168\u90E8\u6821\u9A8C\uFF0C\u518D\u5F00\u542F\u4E8B\u52A1\uFF1A\u672A\u77E5\u5B57\u6BB5\u3001\u7F3A\u5C11 required\u3001\u975E\u6CD5\u9ED8\u8BA4\u503C\u3001\u6574\u6570\u542B\u5C0F\u6570\u3001\u975E\u6CD5\u5E03\u5C14\u503C\u3001\u65E5\u671F\u4E0D\u5339\u914D\u767D\u540D\u5355\u683C\u5F0F\u3001\u6570\u7EC4\u5143\u7D20\u9519\u8BEF\u5747\u8FD4\u56DE ",paraId:252,tocIndex:139},{value:"DATA_TYPE_MISMATCH",paraId:252,tocIndex:139},{value:"\uFF0C\u7981\u6B62\u622A\u65AD\u3001\u8FD4\u56DE null \u6216\u4FDD\u7559\u539F\u5B57\u7B26\u4E32\u3002\u9ED8\u8BA4\u503C\u53EA\u5728\u521B\u5EFA\u65F6\u5BF9\u7F3A\u5931\u5B57\u6BB5\u8865\u9F50\uFF0C\u663E\u5F0F null \u4E0D\u89E6\u53D1\u9ED8\u8BA4\u503C\u3002\u66F4\u65B0\u662F\u5B8C\u6574\u66FF\u6362\uFF0Crequired \u5B57\u6BB5\u5FC5\u987B\u518D\u6B21\u6EE1\u8DB3\u3002ES Mapping \u8BBE\u7F6E ",paraId:252,tocIndex:139},{value:"dynamic: strict",paraId:252,tocIndex:139},{value:"\u3002",paraId:252,tocIndex:139},{value:"Controller \u4E0D\u63A5\u6536\u53EF\u4FE1 clientId\uFF1BApplication Service \u4ECE ",paraId:253,tocIndex:140},{value:"FormCallerContext",paraId:253,tocIndex:140},{value:" \u83B7\u53D6\u5E76\u6821\u9A8C\u975E\u7A7A\u3002",paraId:253,tocIndex:140},{value:"\u6240\u6709 Mapper \u67E5\u8BE2\u6761\u4EF6\u56FA\u5B9A\u5305\u542B ",paraId:253,tocIndex:140},{value:"client_id=?",paraId:253,tocIndex:140},{value:"\uFF1B\u6309 ID \u67E5\u8BE2\u4E5F\u5FC5\u987B\u4F7F\u7528 ",paraId:253,tocIndex:140},{value:"client_id + form_key + id",paraId:253,tocIndex:140},{value:"\u3002",paraId:253,tocIndex:140},{value:"Schema \u521B\u5EFA\u65F6 clientId\u3001creator\u3001\u9996\u4E2A Owner \u5747\u6765\u81EA\u4E0A\u4E0B\u6587\uFF1BOwner \u53D8\u5316\u5199 ",paraId:253,tocIndex:140},{value:"ai_form_owner",paraId:253,tocIndex:140},{value:" \u5E76\u8BB0\u5BA1\u8BA1\u3002",paraId:253,tocIndex:140},{value:"Owner \u53EA\u7ED5\u8FC7\u884C\u6761\u4EF6\uFF0C\u4E0D\u7ED5\u8FC7 clientId\u3001Schema \u72B6\u6001\u3001\u6570\u636E\u6E90\u53EA\u8BFB\u548C\u53C2\u6570\u6821\u9A8C\u3002",paraId:253,tocIndex:140},{value:"permissionConfig \u4FDD\u5B58\u524D\u5FC5\u987B\u89E3\u6790\u3001\u68C0\u67E5\u5B57\u6BB5/\u8FD0\u7B97\u7B26/\u5360\u4F4D\u7B26\u767D\u540D\u5355\u5E76\u7F16\u8BD1\u6210\u529F\u3002",paraId:253,tocIndex:140},{value:"\u8FD0\u884C\u65F6\u89E3\u6790\u5931\u8D25\u4E00\u5F8B\u8FD4\u56DE ",paraId:253,tocIndex:140},{value:"PERMISSION_CONFIG_INVALID",paraId:253,tocIndex:140},{value:" \u5E76\u544A\u8B66\uFF1B\u7981\u6B62\u4F7F\u7528\u65E7\u914D\u7F6E\u635F\u574F\u540E\u653E\u884C\u7684\u884C\u4E3A\u3002",paraId:253,tocIndex:140},{value:"READ \u7684 ",paraId:253,tocIndex:140},{value:"DENY_ALL",paraId:253,tocIndex:140},{value:"\uFF1A\u641C\u7D22\u8FD4\u56DE\u7A7A\u9875\uFF0C\u8BE6\u60C5\u8FD4\u56DE 404\uFF1B\u5199\u64CD\u4F5C\u8FD4\u56DE 403\u3002",paraId:253,tocIndex:140},{value:"UPDATE/DELETE \u6743\u9650\u57FA\u4E8E\u65E7\u8BB0\u5F55\u5224\u65AD\uFF0CUPDATE \u901A\u8FC7\u540E\u8FD8\u9700\u6821\u9A8C\u65B0\u8BB0\u5F55 Schema\uFF0C\u9632\u6B62\u901A\u8FC7\u6539\u503C\u6269\u5927\u6743\u9650\u3002",paraId:253,tocIndex:140},{value:"\u5BA2\u6237\u7AEF\u65B0\u589E\u6570\u636E\u5FC5\u987B\u63D0\u4F9B ",paraId:254,tocIndex:141},{value:"Idempotency-Key",paraId:254,tocIndex:141},{value:" \u8BF7\u6C42\u5934\uFF0CREST \u9002\u914D\u5C42\u5199\u5165 ",paraId:254,tocIndex:141},{value:"FormDataCreateDTO.idempotencyKey",paraId:254,tocIndex:141},{value:"\u3002\u952E\u957F\u5EA6 16\uFF5E128\uFF0C\u4FDD\u7559 24 \u5C0F\u65F6\u3002",paraId:254,tocIndex:141},{value:`canonical = canonicalJson({formKey,data})
requestHash = SHA-256(canonical)
BEGIN
  INSERT idempotency(status=0, requestHash)
  duplicate:
    load existing FOR UPDATE
    hash different -> IDEMPOTENCY_CONFLICT
    status=1 -> return existing dataId
  validate schema and permission
  INSERT ai_form_data(version=1)
  INSERT outbox(eventVersion=1,eventType=UPSERT,payload=snapshot)
  UPDATE idempotency SET status=1,dataId=?
COMMIT
return dataId/version/projectionPending=true
`,paraId:255,tocIndex:141},{value:"\u4E8B\u52A1\u5931\u8D25\u65F6\u5E42\u7B49\u884C\u4E00\u5E76\u56DE\u6EDA\u3002\u6279\u91CF\u65B0\u589E\u4E2D\u6BCF\u6761\u8BB0\u5F55\u5FC5\u987B\u6709\u72EC\u7ACB\u5E42\u7B49\u952E\uFF1B\u540C\u6279\u4EFB\u4E00\u6821\u9A8C\u5931\u8D25\u5219\u6574\u6279\u4E0D\u5199\u5165\u3002",paraId:256,tocIndex:141},{value:`UPDATE ai_form_data
SET data=?, version=version+1, modifier=?, gmt_modified=CURRENT_TIMESTAMP(6)
WHERE client_id=? AND form_key=? AND id=? AND version=? AND is_deleted=0;
`,paraId:257,tocIndex:142},{value:"\u5F71\u54CD\u884C\u6570\u4E0D\u662F 1 \u8FD4\u56DE ",paraId:258,tocIndex:142},{value:"DATA_VERSION_CONFLICT",paraId:258,tocIndex:142},{value:"\u3002\u540C\u4E00\u4E8B\u52A1\u5199\u5165 ",paraId:258,tocIndex:142},{value:"event_version=\u65E7version+1",paraId:258,tocIndex:142},{value:" \u7684 Outbox\u3002\u5220\u9664\u4E5F\u5FC5\u987B\u643A\u5E26\u6570\u636E version\uFF0C\u5E76\u5C06\u4E8B\u5B9E\u8868\u903B\u8F91\u5220\u9664\u3001version+1\uFF0C\u518D\u5199 DELETE \u5893\u7891\u4E8B\u4EF6\u3002",paraId:258,tocIndex:142},{value:"Schema \u66F4\u65B0\u5FC5\u987B\u643A\u5E26\u5F53\u524D version\uFF1A\u5148\u6267\u884C\u517C\u5BB9\u6027 diff \u548C\u6743\u9650\u914D\u7F6E\u7F16\u8BD1\uFF0C\u518D\u4EE5 ",paraId:259,tocIndex:142},{value:"WHERE client_id=? AND form_key=? AND version=?",paraId:259,tocIndex:142},{value:" \u66F4\u65B0\u5E76\u9012\u589E\u7248\u672C\uFF0C\u540C\u65F6\u63D2\u5165\u4E0D\u53EF\u53D8 ",paraId:259,tocIndex:142},{value:"ai_form_schema_version",paraId:259,tocIndex:142},{value:"\u3002\u4E0D\u517C\u5BB9\u53D8\u66F4\u5148\u521B\u5EFA\u8FC1\u79FB\u4EFB\u52A1\uFF0C\u4E0D\u76F4\u63A5\u66FF\u6362\u5F53\u524D\u53EF\u670D\u52A1\u7248\u672C\u3002",paraId:259,tocIndex:142},{value:"mongo_status/es_status",paraId:260,tocIndex:143},{value:"\uFF1A0 PENDING\u30011 PROCESSING\u30012 SUCCEEDED\u30013 RETRY\u30014 DEAD\u30015 SKIPPED\u3002\u76EE\u6807\u672A\u542F\u7528\u65F6\u5199 SKIPPED\u3002",paraId:260,tocIndex:143},{value:`claim:
  SELECT eligible rows WHERE available_at<=now
  ORDER BY id LIMIT 100 FOR UPDATE SKIP LOCKED
  set unfinished target PROCESSING, processingOwner/node, processingAt=now
process:
  UPSERT -> Mongo \u4F7F\u7528 \`_id + version<eventVersion\` \u6761\u4EF6\u66F4\u65B0\u5E76\u5199\u5165 version
            ES \u4F7F\u7528 \`version_type=external_gte\` \u548C eventVersion \u7D22\u5F15\u6587\u6863
  DELETE -> Mongo \u6309 \`_id + version<=eventVersion\` \u6761\u4EF6\u5220\u9664
            ES \u4F7F\u7528 external version \u5220\u9664\u6216\u5199\u7EDF\u4E00\u5893\u7891
success:
  target status=SUCCEEDED
failure:
  retryCount += 1
  retryCount < 12 -> RETRY, availableAt=now+backoff
  otherwise -> DEAD and critical alert
`,paraId:261,tocIndex:143},{value:"\u9000\u907F\u516C\u5F0F\u4E3A ",paraId:262,tocIndex:143},{value:"min(5\u79D2 \xD7 2^retryCount, 1\u5C0F\u65F6) + 0\uFF5E20% jitter",paraId:262,tocIndex:143},{value:"\u3002PROCESSING \u8D85\u8FC7 5 \u5206\u949F\u89C6\u4E3A\u6D88\u8D39\u8005\u5931\u8054\uFF0C\u53EF\u6062\u590D\u4E3A RETRY\u3002Mongo \u4E0E ES \u6587\u6863\u5FC5\u987B\u4FDD\u5B58 ",paraId:262,tocIndex:143},{value:"version=eventVersion",paraId:262,tocIndex:143},{value:"\u3002\u8BA4\u9886\u4E8B\u4EF6\u65F6\uFF0C\u540C\u4E00 ",paraId:262,tocIndex:143},{value:"formKey+dataId",paraId:262,tocIndex:143},{value:" \u53EA\u9886\u53D6\u6700\u5C0F\u672A\u5B8C\u6210 eventVersion\uFF1B\u5373\u4F7F\u4E0D\u540C\u8282\u70B9\u5E76\u53D1\uFF0CMongo \u6761\u4EF6\u66F4\u65B0\u548C ES external version \u4E5F\u5FC5\u987B\u963B\u6B62\u65E7\u4E8B\u4EF6\u8986\u76D6\u65B0\u4E8B\u4EF6\u3002\u53EA\u6709\u4E24\u4E2A\u76EE\u6807\u5747\u4E3A SUCCEEDED/SKIPPED \u624D\u53EF\u5F52\u6863\uFF1B\u6210\u529F\u4E8B\u4EF6\u4FDD\u7559 7 \u5929\uFF0CDEAD \u4E0D\u81EA\u52A8\u5220\u9664\u3002\u7BA1\u7406\u5458\u91CD\u653E DEAD \u65F6\u521B\u5EFA\u65B0 eventId \u5E76\u4FDD\u7559\u539F\u4E8B\u4EF6\u5BA1\u8BA1\u94FE\u3002",paraId:262,tocIndex:143},{value:"\u7B2C 22 \u7AE0\u7684 Mongo/ES \u5931\u8D25\u8868\u5728\u5168\u65B0\u5B9E\u73B0\u4E2D\u4E0D\u518D\u521B\u5EFA\uFF0C\u6240\u6709\u5B9E\u65F6\u526F\u672C\u5931\u8D25\u7EDF\u4E00\u8FDB\u5165 Outbox\uFF1B\u5168\u91CF\u540C\u6B65\u5931\u8D25\u8BB0\u5F55\u5728 ",paraId:263,tocIndex:143},{value:"ai_form_sync_job",paraId:263,tocIndex:143},{value:"\u3002",paraId:263,tocIndex:143},{value:"\u5916\u90E8\u5168\u91CF\u5148\u5199\u65B0\u7684 ",paraId:264,tocIndex:144},{value:"snapshot_version",paraId:264,tocIndex:144},{value:"\uFF0C\u5B8C\u6210 count/hash \u6821\u9A8C\u540E\u4EE5\u4E50\u89C2\u9501\u66F4\u65B0 ",paraId:264,tocIndex:144},{value:"active_snapshot_version",paraId:264,tocIndex:144},{value:"\uFF0C\u5931\u8D25\u65F6\u65E7\u5FEB\u7167\u7EE7\u7EED\u670D\u52A1\uFF1B\u65E7\u5FEB\u7167\u4FDD\u7559 7 \u5929\u3002",paraId:264,tocIndex:144},{value:"\u5916\u90E8\u589E\u91CF\u6E38\u6807\u56FA\u5B9A\u4E3A ",paraId:264,tocIndex:144},{value:"(source_modified_at, id)",paraId:264,tocIndex:144},{value:"\uFF0C\u67E5\u8BE2\u6761\u4EF6\u4E3A ",paraId:264,tocIndex:144},{value:"source_modified_at > t OR (source_modified_at=t AND id>lastId)",paraId:264,tocIndex:144},{value:"\u3002",paraId:264,tocIndex:144},{value:"\u6BCF\u6279\u53EA\u6709 MySQL UPSERT\u3001Mongo \u4E0E ES \u5168\u90E8\u6210\u529F\uFF0C\u6216\u5931\u8D25\u9879\u5DF2\u53EF\u9760\u5199\u5165 ",paraId:264,tocIndex:144},{value:"ai_form_incremental_failure",paraId:264,tocIndex:144},{value:" \u540E\uFF0C\u624D\u80FD\u4EE5 version \u4E50\u89C2\u9501\u63A8\u8FDB\u6E38\u6807\u3002",paraId:264,tocIndex:144},{value:"\u5931\u8D25\u9879\u4F18\u5148\u91CD\u8BD5\uFF0C\u6700\u591A 12 \u6B21\u540E\u8F6C DEAD \u5E76\u544A\u8B66\uFF1B\u624B\u52A8\u91CD\u8BD5\u63A5\u53E3\u4EC5\u5141\u8BB8 ",paraId:264,tocIndex:144},{value:"PLATFORM_ADMIN",paraId:264,tocIndex:144},{value:"\u3002",paraId:264,tocIndex:144},{value:"\u6BCF\u65E5\u5BF9\u8D26\u6BD4\u8F83\u4E8B\u5B9E\u6E90\u4E0E\u526F\u672C count\uFF0C\u5E76\u5BF9\u56FA\u5B9A\u6BD4\u4F8B\u8BB0\u5F55\u505A\u89C4\u8303\u5316 hash\uFF1B\u5DEE\u5F02\u4E0D\u4E3A 0 \u81EA\u52A8\u521B\u5EFA\u4FEE\u590D\u4EFB\u52A1\u3002",paraId:264,tocIndex:144},{value:"POST /api/form/data/add",paraId:265,tocIndex:145},{value:"\uFF1A\u5FC5\u987B\u5E26 ",paraId:265,tocIndex:145},{value:"Idempotency-Key",paraId:265,tocIndex:145},{value:"\uFF1B\u8FD4\u56DE ",paraId:265,tocIndex:145},{value:"{id,version,projectionPending}",paraId:265,tocIndex:145},{value:"\u3002",paraId:265,tocIndex:145},{value:"PUT /api/form/data/update",paraId:265,tocIndex:145},{value:"\uFF1A\u8BF7\u6C42\u5FC5\u987B\u5E26 ",paraId:265,tocIndex:145},{value:"id/formKey/version/data",paraId:265,tocIndex:145},{value:"\uFF1B\u8FD4\u56DE\u65B0\u7248\u672C\u3002",paraId:265,tocIndex:145},{value:"DELETE /api/form/data/delete",paraId:265,tocIndex:145},{value:"\uFF1A\u5FC5\u987B\u5E26 ",paraId:265,tocIndex:145},{value:"formKey/dataId/version",paraId:265,tocIndex:145},{value:"\u3002",paraId:265,tocIndex:145},{value:"PUT /api/form/schema/update",paraId:265,tocIndex:145},{value:" \u4E0E\u6570\u636E\u6E90\u5F00\u5173\uFF1A\u5FC5\u987B\u5E26 Schema version\uFF1B\u8FD4\u56DE\u66F4\u65B0\u540E\u7684\u8BE6\u60C5\u3002",paraId:265,tocIndex:145},{value:"\u6240\u6709\u5217\u8868\u63A5\u53E3\u4ECE\u4E0A\u4E0B\u6587\u9690\u5F0F\u9644\u52A0 clientId\uFF0C\u7981\u6B62\u8BF7\u6C42 DTO \u63D0\u4EA4 clientId\u3002",paraId:265,tocIndex:145},{value:"GET /api/auth/me",paraId:265,tocIndex:145},{value:"\uFF1A\u8FD4\u56DE\u5F53\u524D\u7528\u6237\u3001\u7EC4\u7EC7\u548C\u89D2\u8272\u3002",paraId:265,tocIndex:145},{value:"GET /api/form/outbox/dead",paraId:265,tocIndex:145},{value:"\u3001",paraId:265,tocIndex:145},{value:"POST /api/form/outbox/replay",paraId:265,tocIndex:145},{value:"\uFF1A\u4EC5\u5E73\u53F0\u7BA1\u7406\u5458\u3002",paraId:265,tocIndex:145},{value:"GET /api/form/sync/jobs",paraId:265,tocIndex:145},{value:"\u3001",paraId:265,tocIndex:145},{value:"POST /api/form/sync/jobs/{jobId}/retry",paraId:265,tocIndex:145},{value:"\uFF1A\u4EC5 Owner \u6216\u5E73\u53F0\u7BA1\u7406\u5458\u3002",paraId:265,tocIndex:145},{value:"\u5199\u63A5\u53E3\u8FD4\u56DE\u6210\u529F\u53EA\u4EE3\u8868\u4E8B\u5B9E\u6E90\u63D0\u4EA4\u6210\u529F\uFF1B",paraId:265,tocIndex:145},{value:"projectionPending=true",paraId:265,tocIndex:145},{value:" \u65F6\u524D\u7AEF\u63D0\u793A\u201C\u6570\u636E\u5DF2\u4FDD\u5B58\uFF0C\u68C0\u7D22\u7D22\u5F15\u540C\u6B65\u4E2D\u201D\u3002",paraId:265,tocIndex:145},{value:"Schema \u5217\u8868 ",paraId:266,tocIndex:146},{value:"staleTime=60s",paraId:266,tocIndex:146},{value:"\uFF1BSchema \u8BE6\u60C5 ",paraId:266,tocIndex:146},{value:"staleTime=5min",paraId:266,tocIndex:146},{value:"\uFF1B\u6570\u636E\u5217\u8868 ",paraId:266,tocIndex:146},{value:"staleTime=30s",paraId:266,tocIndex:146},{value:"\uFF1B\u540C\u6B65\u8FDB\u5EA6\u6BCF 2 \u79D2\u8F6E\u8BE2\u4E14 ",paraId:266,tocIndex:146},{value:"staleTime=0",paraId:266,tocIndex:146},{value:"\u3002",paraId:266,tocIndex:146},{value:"\u6240\u6709\u5199\u64CD\u4F5C\u6210\u529F\u540E\u6309 ",paraId:266,tocIndex:146},{value:"clientId/formKey",paraId:266,tocIndex:146},{value:" \u7CBE\u786E\u5931\u6548\u76F8\u5173 Query Key\uFF0C\u4E0D\u505A\u4E50\u89C2\u4F2A\u66F4\u65B0\u3002",paraId:266,tocIndex:146},{value:"Schema \u7F16\u8F91\u9875\u4FDD\u5B58\u65F6\u5FC5\u987B\u63D0\u4EA4 version\uFF1B409 \u65F6\u4FDD\u7559\u672C\u5730\u8349\u7A3F\uFF0C\u5C55\u793A\u670D\u52A1\u7AEF\u65B0\u7248\u672C\u5E76\u8BA9\u7528\u6237\u9009\u62E9\u91CD\u65B0\u5E94\u7528\u4FEE\u6539\u3002",paraId:266,tocIndex:146},{value:"\u6570\u636E\u7F16\u8F91\u9875\u63D0\u4EA4 version\uFF1B\u51B2\u7A81\u65F6\u91CD\u65B0\u62C9\u53D6\u5E76\u5C55\u793A\u5DEE\u5F02\uFF0C\u7981\u6B62\u9759\u9ED8\u8986\u76D6\u3002",paraId:266,tocIndex:146},{value:"fieldId",paraId:266,tocIndex:146},{value:" \u5DF2\u53D1\u5E03\u540E\u8F93\u5165\u6846\u53EA\u8BFB\uFF1B\u91CD\u547D\u540D\u5165\u53E3\u542F\u52A8\u8FC1\u79FB\u5411\u5BFC\u800C\u4E0D\u662F\u76F4\u63A5\u7F16\u8F91\u3002",paraId:266,tocIndex:146},{value:"\u6743\u9650\u914D\u7F6E\u56FA\u5B9A\u4E3A Read/Create/Update/Delete \u56DB\u4E2A\u9875\u7B7E\uFF0C\u6BCF\u4E2A\u9875\u7B7E\u4F7F\u7528\u540C\u4E00\u6761\u4EF6\u6811\u7F16\u8F91\u5668\u548C\u5B57\u6BB5/\u8FD0\u7B97\u7B26\u767D\u540D\u5355\u3002",paraId:266,tocIndex:146},{value:"\u52A8\u6001\u8868\u683C\u5217\u987A\u5E8F\u8DDF\u968F Schema fields\uFF0C\u6700\u540E\u8FFD\u52A0 ID\u3001\u7248\u672C\u3001\u521B\u5EFA\u4EBA\u3001\u521B\u5EFA\u65F6\u95F4\u3001\u4FEE\u6539\u4EBA\u3001\u4FEE\u6539\u65F6\u95F4\u3002",paraId:266,tocIndex:146},{value:"\u79BB\u7EBF\u65F6\u53EA\u5141\u8BB8\u67E5\u770B\u5DF2\u6709\u7F13\u5B58\u5E76\u660E\u786E\u663E\u793A\u79BB\u7EBF\u72B6\u6001\uFF0C\u7981\u6B62\u7F13\u5B58\u5199\u8BF7\u6C42\u7B49\u5F85\u81EA\u52A8\u91CD\u653E\u3002",paraId:266,tocIndex:146},{value:"\u9501\u5B9A JDK\u3001Spring Boot\u3001\u6570\u636E\u5E93\u3001Node \u548C\u524D\u7AEF\u4F9D\u8D56\u7248\u672C\uFF0C\u63D0\u4EA4 Wrapper \u4E0E lockfile\u3002",paraId:267,tocIndex:147},{value:"\u51C6\u5907 MySQL 8.4\u3001MongoDB \u526F\u672C\u96C6\u3001Elasticsearch \u96C6\u7FA4\u548C\u56DB\u5957\u9694\u79BB\u73AF\u5883\u3002",paraId:267,tocIndex:147},{value:"\u4F7F\u7528\u8FC1\u79FB\u8D26\u6237\u6267\u884C Flyway\uFF1B\u751F\u4EA7\u8FD0\u884C\u8D26\u6237\u53EA\u6388\u4E88 DML\u3002",paraId:267,tocIndex:147},{value:"local/test",paraId:267,tocIndex:147},{value:" \u663E\u5F0F\u542F\u7528 mock \u5E76\u6267\u884C\u5F00\u53D1\u8EAB\u4EFD\u79CD\u5B50\uFF1Bstaging/production \u5FC5\u987B\u62D2\u7EDD mock\u3002",paraId:267,tocIndex:147},{value:"\u6784\u5EFA\u540E\u7AEF\u3001\u524D\u7AEF\u548C\u4E0D\u53EF\u53D8\u955C\u50CF\uFF0C\u5B8C\u6210\u6D4B\u8BD5\u3001SBOM \u4E0E\u6F0F\u6D1E\u626B\u63CF\u3002",paraId:267,tocIndex:147},{value:"\u90E8\u7F72 Secret\u3001ConfigMap\u3001NetworkPolicy\u3001Deployment\u3001Service\u3001Ingress\u3001PDB \u548C HPA\u3002",paraId:267,tocIndex:147},{value:"\u9A8C\u8BC1 ",paraId:267,tocIndex:147},{value:"/actuator/health/liveness",paraId:267,tocIndex:147},{value:"\u3001",paraId:267,tocIndex:147},{value:"readiness",paraId:267,tocIndex:147},{value:"\u3001",paraId:267,tocIndex:147},{value:"/api/auth/me",paraId:267,tocIndex:147},{value:" \u548C\u4E09\u7C7B\u5B58\u50A8\u8FDE\u63A5\u3002",paraId:267,tocIndex:147},{value:"\u521B\u5EFA\u4E03\u79CD\u5B57\u6BB5 Schema\uFF0C\u6267\u884C CRUD\u3001\u6743\u9650\u3001\u5E42\u7B49\u3001\u4E50\u89C2\u9501\u3001Outbox\u3001\u540C\u6B65\u548C\u6545\u969C\u6CE8\u5165\u9A8C\u6536\u3002",paraId:267,tocIndex:147},{value:"\u9A8C\u8BC1\u5907\u4EFD\u6062\u590D\u3001ES \u5FEB\u7167\u3001Mongo \u6062\u590D\u3001Schema \u56DE\u6EDA\u548C\u955C\u50CF\u56DE\u6EDA\u3002",paraId:267,tocIndex:147},{value:"staging \u89C2\u5BDF\u901A\u8FC7\u540E\u9010\u6B65\u653E\u91CF\uFF0C\u751F\u4EA7\u7A33\u5B9A 24\uFF5E48 \u5C0F\u65F6\u518D\u6E05\u7406\u65E7\u8D44\u6E90\u3002",paraId:267,tocIndex:147},{value:"\u540E\u7AEF\u4EE5 Spring Boot BOM \u7BA1\u7406\u7248\u672C\uFF0C\u81F3\u5C11\u5305\u542B\uFF1A",paraId:268,tocIndex:148},{value:"\u4F5C\u7528",paraId:269,tocIndex:148},{value:"Maven \u5750\u6807",paraId:269,tocIndex:148},{value:"Web/JSON",paraId:269,tocIndex:148},{value:"org.springframework.boot:spring-boot-starter-web",paraId:269,tocIndex:148},{value:"\u53C2\u6570\u6821\u9A8C",paraId:269,tocIndex:148},{value:"org.springframework.boot:spring-boot-starter-validation",paraId:269,tocIndex:148},{value:"\u5065\u5EB7\u4E0E\u6307\u6807",paraId:269,tocIndex:148},{value:"org.springframework.boot:spring-boot-starter-actuator",paraId:269,tocIndex:148},{value:"\u3001Prometheus registry",paraId:269,tocIndex:148},{value:"\u8BA4\u8BC1\u6388\u6743",paraId:269,tocIndex:148},{value:"org.springframework.boot:spring-boot-starter-security",paraId:269,tocIndex:148},{value:"JDBC/\u4E8B\u52A1",paraId:269,tocIndex:148},{value:"org.springframework.boot:spring-boot-starter-jdbc",paraId:269,tocIndex:148},{value:"MyBatis",paraId:269,tocIndex:148},{value:"org.mybatis.spring.boot:mybatis-spring-boot-starter:4.x",paraId:269,tocIndex:148},{value:"MySQL \u9A71\u52A8",paraId:269,tocIndex:148},{value:"com.mysql:mysql-connector-j",paraId:269,tocIndex:148},{value:"\u6570\u636E\u8FC1\u79FB",paraId:269,tocIndex:148},{value:"org.flywaydb:flyway-core",paraId:269,tocIndex:148},{value:"\u3001",paraId:269,tocIndex:148},{value:"org.flywaydb:flyway-mysql",paraId:269,tocIndex:148},{value:"MongoDB",paraId:269,tocIndex:148},{value:"org.springframework.boot:spring-boot-starter-data-mongodb",paraId:269,tocIndex:148},{value:"Elasticsearch",paraId:269,tocIndex:148},{value:"co.elastic.clients:elasticsearch-java:9.x",paraId:269,tocIndex:148},{value:"API \u6587\u6863",paraId:269,tocIndex:148},{value:"\u4E0E Spring Boot 4 \u517C\u5BB9\u7684\u6700\u65B0\u7A33\u5B9A OpenAPI Starter",paraId:269,tocIndex:148},{value:"\u6D4B\u8BD5",paraId:269,tocIndex:148},{value:"JUnit 5\u3001Testcontainers MySQL/MongoDB/Elasticsearch\u3001REST Assured",paraId:269,tocIndex:148},{value:"\u5FC5\u987B\u914D\u7F6E ",paraId:270,tocIndex:148},{value:"maven-compiler-plugin",paraId:270,tocIndex:148},{value:"\u3001",paraId:270,tocIndex:148},{value:"maven-surefire-plugin",paraId:270,tocIndex:148},{value:"\u3001",paraId:270,tocIndex:148},{value:"maven-failsafe-plugin",paraId:270,tocIndex:148},{value:"\u3001",paraId:270,tocIndex:148},{value:"jacoco-maven-plugin",paraId:270,tocIndex:148},{value:" \u548C ",paraId:270,tocIndex:148},{value:"spring-boot-maven-plugin",paraId:270,tocIndex:148},{value:"\uFF1B\u5B9E\u9645\u7248\u672C\u7531 Boot BOM \u6216 Maven pluginManagement \u9501\u5B9A\u3002CI \u5FC5\u987B\u751F\u6210 OpenAPI JSON\uFF0C\u5E76\u901A\u8FC7\u5951\u7EA6\u6D4B\u8BD5\u9A8C\u8BC1 Controller \u4E0E DTO \u6CA1\u6709\u504F\u79BB\u7B2C 29\u300132.10 \u8282\u3002",paraId:270,tocIndex:148},{value:"\u524D\u7AEF\u8FD0\u884C\u4F9D\u8D56\u56FA\u5B9A\u4E3A React\u3001React DOM\u3001Ant Design\u3001React Router\u3001TanStack Query \u548C ECharts\uFF1B\u5F00\u53D1\u4F9D\u8D56\u56FA\u5B9A\u4E3A TypeScript\u3001Vite\u3001ESLint\u3001Vitest\u3001Testing Library \u548C Playwright\u3002\u6240\u6709\u4F9D\u8D56\u5148\u4F7F\u7528\u6700\u65B0\u7A33\u5B9A\u7248\u5B8C\u6210\u517C\u5BB9\u9A8C\u8BC1\uFF0C\u518D\u63D0\u4EA4 ",paraId:271,tocIndex:148},{value:"package-lock.json",paraId:271,tocIndex:148},{value:"\uFF1BCI \u53EA\u6267\u884C ",paraId:271,tocIndex:148},{value:"npm ci",paraId:271,tocIndex:148},{value:"\u3002",paraId:271,tocIndex:148},{value:"\u4EC5\u5F53\u4EE5\u4E0B\u5168\u90E8\u901A\u8FC7\uFF0C\u624D\u80FD\u58F0\u79F0\u201C\u53EA\u4F9D\u636E\u672C\u6587\u6863\u5B8C\u6210\u751F\u4EA7\u7248 aiForm\u201D\uFF1A",paraId:272,tocIndex:149},{value:"Flyway \u53EF\u4ECE\u7A7A\u5E93\u5EFA\u7ACB\u6700\u7EC8\u5168\u90E8\u8868\u3001\u7D22\u5F15\u3001\u7EA6\u675F\u548C\u73AF\u5883\u79CD\u5B50\u7B56\u7565\u3002",paraId:273,tocIndex:149},{value:"\u7528\u6237\u3001\u7EC4\u7EC7\u3001\u89D2\u8272\u3001\u5F00\u53D1\u514D\u767B\u5F55\u548C\u6B63\u5F0F IdentityProvider \u53EF\u66FF\u6362\u4E14\u884C\u4E3A\u4E00\u81F4\u3002",paraId:273,tocIndex:149},{value:"\u4E03\u79CD\u5B57\u6BB5\u4E25\u683C\u6821\u9A8C\uFF0C\u9519\u8BEF\u6570\u636E\u4E0D\u4F1A\u8FDB\u5165\u4EFB\u4F55\u5B58\u50A8\u3002",paraId:273,tocIndex:149},{value:"\u6240\u6709\u8D44\u6E90\u5F3A\u5236 clientId \u9694\u79BB\uFF0C\u6743\u9650\u914D\u7F6E\u635F\u574F\u65F6 fail closed\u3002",paraId:273,tocIndex:149},{value:"Schema/Data \u4E50\u89C2\u9501\u3001\u5E42\u7B49\u65B0\u589E\u548C\u6279\u91CF\u539F\u5B50\u6027\u6D4B\u8BD5\u901A\u8FC7\u3002",paraId:273,tocIndex:149},{value:"MySQL \u4E8B\u52A1\u63D0\u4EA4\u540E Outbox \u80FD\u5E42\u7B49\u5199\u5165 Mongo/ES\uFF0C\u91CD\u8BD5\u3001\u6B7B\u4FE1\u3001\u91CD\u653E\u548C\u4E71\u5E8F\u4FDD\u62A4\u6709\u6548\u3002",paraId:273,tocIndex:149},{value:"Mongo/ES \u6E05\u7A7A\u540E\u53EF\u4ECE\u4E8B\u5B9E\u6E90\u5168\u91CF\u91CD\u5EFA\uFF0C\u5207\u6362\u671F\u95F4\u65E7\u6570\u636E\u6301\u7EED\u53EF\u8BFB\u3002",paraId:273,tocIndex:149},{value:"\u5916\u90E8\u5168\u91CF\u5FEB\u7167\u3001\u590D\u5408\u589E\u91CF\u6E38\u6807\u3001\u5931\u8D25\u91CD\u8BD5\u548C\u5BF9\u8D26\u4FEE\u590D\u95ED\u73AF\u901A\u8FC7\u3002",paraId:273,tocIndex:149},{value:"REST\u3001Agent Tool\u3001RPC \u5BF9\u76F8\u540C\u8F93\u5165\u5F97\u5230\u4E00\u81F4\u6743\u9650\u548C\u4E1A\u52A1\u7ED3\u679C\u3002",paraId:273,tocIndex:149},{value:"\u7BA1\u7406\u524D\u7AEF\u53EF\u5B8C\u6210 Schema\u3001\u6570\u636E\u3001\u6743\u9650\u3001\u540C\u6B65\u3001\u7EDF\u8BA1\u3001\u51B2\u7A81\u5904\u7406\u548C\u6B7B\u4FE1\u91CD\u653E\u3002",paraId:273,tocIndex:149},{value:"\u5355\u5143\u3001\u96C6\u6210\u3001\u5951\u7EA6\u3001\u7AEF\u5230\u7AEF\u3001\u6027\u80FD\u3001\u6545\u969C\u6CE8\u5165\u548C\u5B89\u5168\u6D4B\u8BD5\u5168\u90E8\u901A\u8FC7\u3002",paraId:273,tocIndex:149},{value:"\u5BB9\u5668\u3001Kubernetes\u3001\u76D1\u63A7\u544A\u8B66\u3001\u5907\u4EFD\u6062\u590D\u548C\u53D1\u5E03\u56DE\u6EDA\u5B8C\u6210\u6F14\u7EC3\u3002",paraId:273,tocIndex:149},{value:"\u81F3\u6B64\uFF0C\u672C\u6587\u6863\u540C\u65F6\u4FDD\u7559\u65E7\u5B9E\u73B0\u8FC1\u79FB\u8BF4\u660E\u548C\u4ECE\u96F6\u5F00\u53D1\u7684\u552F\u4E00\u751F\u4EA7\u51B3\u7B56\u3002\u5B9E\u73B0\u8005\u65E0\u9700\u8BBF\u95EE\u6E90\u7801\u6216\u5176\u4ED6\u6587\u6863\uFF1B\u6240\u6709\u65E7\u884C\u4E3A\u4E0E\u7B2C 32 \u7AE0\u51B2\u7A81\u65F6\uFF0C\u5FC5\u987B\u6267\u884C\u7B2C 32 \u7AE0\u3002",paraId:274,tocIndex:149}];e.d(a,["texts",0,d])})}]);
