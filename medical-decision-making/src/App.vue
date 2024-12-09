<template>
  <v-app>
    <v-main>
      <v-container>
        <h1 class="text-center mt-4 mb-6">Medical Decision Making</h1>
`        <!-- <v-btn color="blue" large class="mb-4" @click="$router.push('/')">
          Home
        </v-btn>
        <v-btn color="blue" large class="mb-4" @click="$router.push('/about')">
          About
        </v-btn>` -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
nav {
  margin: 20px 0;
}
</style>
