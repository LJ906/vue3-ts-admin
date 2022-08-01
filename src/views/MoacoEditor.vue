
<template>
  <div>schema</div>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'lijin',
      other
    })
    function other() {
      return 1
    }
    return {
      ...toRefs(state)
    }
  }
})
</script>
