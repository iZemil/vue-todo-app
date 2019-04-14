<template lang="pug">
  div
    el-card(
      class="box-card"
      shadow="hover"
      v-for="({completed, text}, index) in list"
      :key="index"
    )
      div(
        v-bind:style="{ textDecoration: completed ? 'line-through' : '' }"
        v-on:click="$emit('toggleCompleted', index)"
      )
        el-button(size="mini" circle v-bind:icon="completed ? 'el-icon-check' : 'el-icon-minus'")
        .todo-text {{ text }}

      el-button-group
        el-button(size="mini" icon="el-icon-edit")
        el-button(size="mini" icon="el-icon-delete" v-on:click="$emit('deleteTodo', index)")
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

<style lang="stylus">
.box-card {
  margin-bottom: 12px;

  .el-card__body {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .todo-text {
    display: inline-block;
    margin-left: 10px;
  }
}
</style>
