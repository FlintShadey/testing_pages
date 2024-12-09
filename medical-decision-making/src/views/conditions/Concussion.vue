
<template>
  <div class="condition">
    <h2>Information about Concussion</h2>
    <button class="back-button" @click="$router.push('/')">Back to Home</button>
  </div>
</template>

<script>
export default {
  name: "concussion",
};
</script>

<style scoped>
.condition {
  text-align: center;
  padding: 20px;
}
.back-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #666;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.back-button:hover {
  background-color: #555;
}
</style>
