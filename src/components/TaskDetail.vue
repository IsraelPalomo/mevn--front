<template>
  <h2>Task detail</h2>
  <div class="form">
    <form @submit.prevent="handleUpdate()">
      <input type="text" v-model="currentTask.title" />
      <textarea rows="3" v-model="currentTask.description"></textarea>
      <button>Update</button>
    </form>
    <button class="btn-delete" @click="handleDeleteTask">Delate</button>
  </div>
</template>

<script setup lang="ts">
import { Task } from '@/interface/Task';
import { getTask, updateTask, deleteTask } from '@/services/TasksServices';
import { onMounted, ref, Ref } from 'vue';
import { useRoute } from 'vue-router';
import Router from './../router';

let currentTask: Ref<Task> = ref({});
let id = useRoute().params.id;

onMounted(() => {
  loadTask(useRoute().params.id);
});

const handleUpdate = async () => {
  if (typeof id === 'string') {
    await updateTask(id, currentTask.value);
    Router.push('/tasks');
  }
};

const loadTask = async (id: any) => {
  const res = await getTask(id);
  currentTask.value = res.data;
  console.log(res);
};

const handleDeleteTask = async () => {
  if (typeof id === 'string') {
    const res = await deleteTask(id);
    console.log(res);
    Router.push('/tasks');
  }
};
</script>

<style scoped lang="scss">
h2 {
  text-align: center;
  margin-top: 5rem;
}
.form {
  background-color: #323223;
  width: 60vw;
  border-radius: 5px;
  padding: 3rem 1rem;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  gap: 1rem;
  form {
    display: grid;
    justify-content: center;
    gap: 1rem;
    input {
      width: 15rem;
    }
    textarea {
      width: 15rem;
    }
    button {
      border: none;
      padding: 0.5rem 1rem;
      border-radius: 7px;
      color: white;
      background-color: rgb(69, 177, 98);
      opacity: 0.7;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
    }
  }
  .btn-delete {
    background-color: #7f2f2a;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 7px;
    color: white;
    opacity: 0.7;
    cursor: pointer;
    margin: 0 auto;
    width: 100%;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
