<template lang="pug">
  ul
    li(
        v-for="({completed, text}, index) in list"
        :key="index"
      )
      span(
        v-bind:style="{ textDecoration: completed ? 'line-through' : '' }"
        v-on:click="$emit('toggleCompleted', index)"
      ) {{ index + 1 }}. {{ text }}

      button(v-on:click="$emit('deleteTodo', index)") X
</template>

<script>
export default {
  name: 'TodoList',
  props: ['list'],
  data() {
    return {};
  },
};
</script>

<style lang="stylus"></style>
