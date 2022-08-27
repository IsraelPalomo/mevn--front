<template>
  <h2>New Task</h2>
  <div class="form">
    <form @submit.prevent="SaveTask()">
      <input type="text" v-model="task.title" placeholder="Write a title" />
      <textarea
        rows="3"
        v-model="task.description"
        placeholder="Write a description"
      ></textarea>
      <button>Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Task } from '@/interface/Task';
import { createTask } from '@/services/TasksServices';
import Router from './../router';
const task: Task = {
  title: '' as string,
  description: '' as string,
};

const SaveTask = async () => {
  const res = await createTask(task);
  console.log(res);
  Router.push('/tasks');
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
}
</style>
