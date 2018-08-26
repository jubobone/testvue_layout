<template>
  <nav class="navbar nav-pills navbar-expand-md navbar-dark bg-company fixed-top">
    <div class="container">
        <b-navbar-brand><router-link to="/">Brand</router-link></b-navbar-brand>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <b-nav-item><router-link to="/find">Find</router-link></b-nav-item>
            <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
          </ul>
          <ul class="navbar-nav">
            <b-nav-item><router-link to="/user">Signin</router-link></b-nav-item>
          </ul>
        </div>
    </div>
  </nav>
</template>

<style scoped>
  .bg-company {
      background-color: #7d511d;
  }
</style>
