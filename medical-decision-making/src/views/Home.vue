<template>
  <v-container>
    <v-row class="align-center">
      <v-col cols="1">
        <img
          src="/images/head_injury.png"
          alt="Head Injury"
          style="max-width: 200%"
        />
      </v-col>
      <h4>Head Injury</h4>
      <v-col>
        <v-btn color="indigo" @click="$router.push('/head-injury')">
          Head Injury
        </v-btn>
        <v-btn color="indigo" @click="$router.push('/head-injury-no-ct')">
          Head Injury No CT
        </v-btn>
        <v-btn color="indigo" @click="$router.push('/concussion')">
          Concussion
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped></style>
