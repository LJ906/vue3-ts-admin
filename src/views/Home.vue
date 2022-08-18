<template>
  <div class="home">
    <SchemaForm></SchemaForm>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watchEffect, reactive, ref, Ref } from 'vue'
import SchemaForm from './schemaForm.vue'
// 测试数据
import demos from '../demos'

// TODO: 在lib中export
type Schema = any
type UISchema = any

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}
const schema = {
  type: 'string'
}
export default defineComponent({
  name: 'Home',
  components: {
    SchemaForm
  },
  setup() {
    const selectedRef: Ref<number> = ref(0)
    const demo: {
      schema: Schema | null
      data: any
      uiSchema: UISchema | null
      schemaCode: string
      dataCode: string
      uiSchemaCode: string
      customValidate: ((d: any, e: any) => void) | undefined
    } = reactive({
      schema: null,
      data: {},
      uiSchema: {},
      schemaCode: '',
      dataCode: '',
      uiSchemaCode: '',
      customValidate: undefined
    })

    watchEffect(() => {
      const index = selectedRef.value
      const d = demos[index]
      demo.schema = d.schema
      demo.data = d.default
      demo.uiSchema = d.uiSchema
      demo.schemaCode = toJson(d.schema)
      demo.dataCode = toJson(d.default)
      demo.uiSchemaCode = toJson(d.uiSchema)
    })

    // const schemaRef = ref()
    // const schemaCode = computed(() => {
    //   return toJson(schemaRef)
    // })
    const handleCodeChange = (
      filed: 'schema' | 'uiSchema' | 'data',
      value: string
    ) => {
      try {
        const json = JSON.parse(value)
        demo[filed] = json
      } catch (error) {
        console.log('error', error)
      }
    }

    const handleSchemaChange = (v: string) => handleCodeChange('schema', v)
    const handleDataChange = (v: string) => handleCodeChange('data', v)
    const handleUISchemaChange = (v: string) => handleCodeChange('uiSchema', v)

    return {
      // code: schemaCode,
      handleSchemaChange,
      handleDataChange,
      handleUISchemaChange,
      demo
    }
  }
})
</script>
