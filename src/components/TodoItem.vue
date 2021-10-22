<template lang="">
    <div class="listtodo">
        <input type = "checkbox" :checked="TodoProps.completed" @change="handleComplete"/>
        <div :class="[TodoProps.completed ? 'done' : '']">{{ TodoProps.text}}</div>
        <form @submit.prevent="editItem">
        <input type="text" v-model="textedit"/>
        <input type="submit" value="edit"/>
        </form>
  
        <button @click="deleteItem">delete</button>
    </div>
</template>
<script>

import {ref} from "vue"
export default {
    name: 'TodoItem',
    props: ['TodoProps'],
    setup(props , context) {

        const textedit = ref('')
        const handleComplete = () => {
            context.emit("change-complete" , props.TodoProps.id)
        }
        const deleteItem = () => {
            context.emit("delete-item" , props.TodoProps.id)
        }
        const editItem = () => {
            context.emit("edit-item" , props.TodoProps.id , textedit.value);
            console.log(textedit.value);
            textedit.value = ''
        }

        return{
            handleComplete,
            deleteItem,
            textedit,
            editItem
        }
    }
  
}
</script>
<style>
    .listtodo{
        display: flex;
        justify-content: center;
    }
    .done{
        text-decoration: line-through;
    }
</style>