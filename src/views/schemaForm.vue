<template>
  <div>{{title}}
    <schema-form></schema-form>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, watchEffect, reactive, ref, Ref } from 'vue'
import SchemaForm from 'lib/index'
export default defineComponent({
  setup() {
    return {
      title: 'form demo'
    }
  }
})
</script>
