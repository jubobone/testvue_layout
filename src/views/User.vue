<template>
  <div>
    <h1>This is user main page</h1>
    <userDetailComp/>
  </div>
</template>

<script>
import UserDetail from '../components/user/UserProfile.vue'
export default {
  components: {
    userDetailComp: UserDetail
  }
}
</script>

<style>
