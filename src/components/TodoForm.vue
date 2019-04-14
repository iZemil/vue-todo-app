<template lang="pug">
  form(v-on:submit="addTodo")
    h3 {{title}}
    input(
      type="text" 
      placeholder="New todo"
      v-bind:value="newTodo"
      v-on:change="changeNewTodo"
    )
    input(type="submit" value="add")
</template>

<script>
export default {
  name: 'TodoForm',
  props: ['title'],
  data() {
    return {
      newTodo: 'some todo value',
    };
  },
  methods: {
    changeNewTodo(e) {
      this.newTodo = e.target.value;
    },
    addTodo() {
      this.$emit('addTodo', this.newTodo);
    },
  },
};
</script>

<style lang="stylus"></style>
