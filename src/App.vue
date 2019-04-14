<template lang='pug'>
  el-container
    el-header
      el-menu(class="el-menu-demo" mode="horizontal")
        el-menu-item App

    el-main
      main
        h1 Todo app

        TodoForm(title="Form title" @addTodo="addTodo")

        p Items: {{listLen}}

        el-input(
          class="search-input"
          placeholder="Search todos"
          prefix-icon="el-icon-search"
          clearable
          v-model="searchValue"
          v-on:change="changeSearch"
        )

        TodoList(
          :list="featuredList"
          @toggleCompleted="toggleCompleted"
          @deleteTodo="deleteTodo"
        )
</template>

<script>
import uuid from 'uuid/v4';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default {
  name: 'App',
  components: {
    TodoForm,
    TodoList,
  },
  data() {
    return {
      list: [
        { id: uuid(), text: 'do homework', completed: false },
        { id: uuid(), text: 'work on yourself', completed: true },
        { id: uuid(), text: 'walking with dog', completed: false },
      ],
      searchValue: '',
    };
  },
  computed: {
    featuredList() {
      if (!this.searchValue) {
        return this.list;
      }

      return this.list.filter(({ text }) => text.indexOf(this.searchValue) > -1);
    },
    listLen() {
      return this.featuredList.length;
    },
  },
  methods: {
    addTodo(text) {
      this.list.push({ id: uuid(), text, completed: false });
    },
    deleteTodo(index) {
      this.list.splice(index, 1);
    },
    toggleCompleted(index) {
      const todo = this.list[index];
      const isCompleted = todo.completed;
      const newTodo = { ...todo, completed: !isCompleted };

      this.list.splice(index, 1, newTodo);
    },
    changeSearch(value) {
      this.searchValue = value;
    },
  },
};
</script>

<style lang="stylus">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  padding: 20px;
}

.search-input {
  margin-bottom: 20px;
}
</style>
