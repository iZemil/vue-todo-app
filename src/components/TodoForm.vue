<template lang="pug">
  el-form(:inline="true")

    el-form-item
      el-input(
        type="text" 
        placeholder="Write a new todo..."
        v-model="newTodo"
        v-on:change="changeNewTodo"
      )
    el-form-item
      el-button(type="primary" @click="addTodo") Add
</template>

<script>
export default {
  name: 'TodoForm',
  props: ['title'],
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    changeNewTodo(value) {
      this.newTodo = value;
    },
    addTodo() {
      if (this.newTodo.trim()) {
        this.$emit('addTodo', this.newTodo);
        this.newTodo = '';
      }
    },
  },
};
</script>

<style lang="stylus"></style>
