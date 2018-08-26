<template>
  <div>
    <h1>This is user main page</h1>
    <userProfileComp></userProfileComp>
    <router-view></router-view>
  </div>
</template>

<script>
import UserProfile from './UserProfile.vue'
export default {
  components: {
    userProfileComp: UserProfile
  }
}
</script>