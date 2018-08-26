<template>
    <div class="basic-layout">
        <app-header></app-header>
        <router-view/>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>
