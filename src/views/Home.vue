<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <appHeader></appHeader>
  </div>
</template>

<script>
import Header from '@/components/shared/Header.vue'

export default {
  name: 'home',
  components: {
    appHeader: Header
  }
}
</script>
