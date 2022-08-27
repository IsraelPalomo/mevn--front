<template>
  <div class="navbar">
    <div class="navbar_title"><p class="title">FullStackApp</p></div>
    <div class="links">
      <router-link to="/tasks">Takt List</router-link>
      <router-link to="/tasks/new">Create Task</router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.navbar {
  background-color: #323223;
  padding: 1rem;
  box-sizing: content-box;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .navbar_title {
    .title {
      font-size: 15px;
      letter-spacing: 3px;
      font-family: 'Arial', Courier, monospace;
    }
  }
  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    a {
      text-decoration: none;
      padding: 0.3rem;
      background-color: whitesmoke;
      opacity: 0.7;
      border-radius: 5px;
      &:hover {
        opacity: 1;
        transition-duration: 0.2s;
        transition-timing-function: ease;
        transform: translateY(-2px);
      }
    }
  }
}
</style>
