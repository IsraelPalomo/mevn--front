<template>
  <h2>List Tasks</h2>
  <div class="task-list">
    <p
      v-for="task in tasks"
      :key="task._id"
      @click="Router.push(`/tasks/${task._id}`)"
    >
      {{ task.title }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { getTasks } from '@/services/TasksServices';
import { onMounted, Ref, ref } from 'vue';
import { Task } from '@/interface/Task';
import Router from './../router';

let tasks: Ref<Task[]> = ref([]);

const GetTask = async () => {
  const res = await getTasks();
  tasks.value = res.data;
  console.log(res.data);
};

onMounted(() => {
  GetTask();
});
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
  margin-top: 5rem;
}
.task-list {
  width: 60vw;
  background-color: #323223;
  color: white;
  border-radius: 5px;
  padding: 1rem;
  margin: 0 auto;
  height: 20rem;
  overflow-y: auto;
  margin-top: 1rem;

  p {
    border-bottom: solid 2px rgba(255, 255, 255, 0.304);
    cursor: pointer;
    padding: 0.3rem;
    opacity: 0.7;
    &:hover {
      opacity: 1;
      border-bottom: solid 2px rgba(255, 255, 255, 0.51);
    }
  }
}
</style>
