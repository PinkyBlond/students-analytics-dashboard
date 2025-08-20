<template>
    <div id="app">
      <h1>{{ message }}</h1>
      <button @click="count++">Count is: {{ count }}</button>
      
      <!-- Practice area for tutorial examples -->
      <div class="tutorial-practice">
        <h2>Vue.js Tutorial Practice</h2>
        <!-- Add your tutorial examples here -->
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'App',
    setup() {
      const message = ref('Hello Vue!')
      const count = ref(0)
  
      return {
        message,
        count
      }
    }
  }
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  .tutorial-practice {
    margin-top: 40px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  </style>