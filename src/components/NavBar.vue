<template>
  <!--<div id="nav" class="nav">
    <router-link to="/" class="brand">Real World Events</router-link>
    <nav>
      <router-link :to="{ name: 'event-list' }">List</router-link> |
      <router-link :to="{ name: 'event-create' }">Create</router-link>
    </nav>
  </div>-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
    <div class="container">
      <router-link class="navbar-brand text-white" to="/"
        >Wonderland</router-link
      >

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link " to="/">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link " to="/adminboard" v-if="isAuth"
              >Adminboard</router-link
            >
          </li>

          <li class="nav-item">
            <a
              style="cursor: pointer"
              v-if="isAuth"
              class="nav-link"
              @click="logout"
              >Logout</a
            >
            <router-link v-else class="nav-link" to="/register"
              >Login</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    isAuth() {
      return this.$store.getters.isAuth
    }
  },
  methods: {
    logout() {
      console.log('lodgout')
      this.$store.commit('UNSET_USER')
      this.$router.push('/')
    }
  }
}
</script>
