<template lang="">
    <header>
        <h1>TODO LIST</h1>
    </header>
    <div id="todo">
        <AddTodo @add-task="addTask"/>
        <TodoItem v-for="todo in todos" :key="todo.id" :TodoProps="todo" @change-complete="changeStatus" @delete-item="deleteTask" @edit-item="editTask"/>
    </div>
</template>
<script>

import { ref } from "vue";
import TodoItem from './TodoItem.vue';
import AddTodo from './AddTodo.vue';

export default {
    name: "Todo",
    components: {
        TodoItem,
        AddTodo
    },
     setup() {   
        const todos = ref([{ id: 1, text: "todo 1", completed: true} , { id: 2, text: "todo 2", completed: false} , { id: 3, text: "todo 3", completed: false}]);  

        const changeStatus = (id) => {
            todos.value =  todos.value.map((e) => {
                if(e.id === id) e.completed = !e.completed
                return e;
            })
        }
        const deleteTask = (id) => {
            todos.value = todos.value.filter((e) => e.id !== id)
        }
        const addTask = (newtask) => {
            todos.value.push(newtask);
        }
        const editTask = (id , textedit) => {
            todos.value = todos.value.map((e) => {
                if(e.id === id) e.text = textedit
                return e;
            })

        }
        return {todos , changeStatus , addTask , deleteTask , editTask}
     }
};
</script>
<style></style>
