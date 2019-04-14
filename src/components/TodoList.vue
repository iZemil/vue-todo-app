<template lang="pug">
  div
    el-card(
      class="box-card"
      shadow="hover"
      v-for="({completed, text, editable}, index) in list"
      :key="index"
    )
      div(
        v-bind:style="{ textDecoration: completed ? 'line-through' : '' }"
      )
        el-button(
          size="mini"
          circle v-bind:icon="completed ? 'el-icon-check' : 'el-icon-minus'"
          @click="$emit('toggleCompleted', index)"
        )

        input.todo-text(
          v-if="editable"
          v-bind:value="text"
          @change="({ target: { value } }) => $emit('editTodo', index, value)"
        )
        .todo-text(v-else) {{ text }}

      el-button-group
        el-button(size="mini" icon="el-icon-edit" v-on:click="$emit('toggleEditing', index)")
        el-button(size="mini" icon="el-icon-delete" v-on:click="$emit('deleteTodo', index)")
</template>

<script>
export default {
  name: 'TodoList',
  props: ['list'],
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
