<template lang='pug'>
  main
    h1 Todo app

    TodoForm(title="Form title" @addTodo="addTodo")

    input(type="text" placeholder="Search" v-bind:value="searchValue" v-on:change="changeSearch")

    p list length: {{listLen}}

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
    changeSearch(e) {
      this.searchValue = e.target.value;
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
}

main {
  padding: 20px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
