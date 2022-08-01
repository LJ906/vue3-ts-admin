# API 设计

```js
<JsonSchemaForm
  schema={schema} // schema规则
  value={data} // 要校验的表单对象
  onChange={handleChange} // 表单对象key发生变化时触发
  locale={locale}
  contextRef={someRef}  // 表单实例
  uiSchema={uiSchema}
>
</JsonSchemaForm>

```