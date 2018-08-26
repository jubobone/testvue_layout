<template>
  <div class="app">
    <appLayout></appLayout>
    <router-view/>
  </div>
</template>

<script>
import Layout from './components/shared/Layout.vue'
export default {
  components: {
    appLayout: Layout
  }
}
</script>
