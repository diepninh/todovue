<template lang="">
    <form @submit.prevent="handleSubmit">
        <input type='text' placeholder='please input task' v-model="title"/>
        <input type='submit' value='add'/>
    </form>
</template>
<script>

import {ref} from 'vue'

export default {
    name: "AddTodo",
    setup(props , context) {
        const title = ref('');

        const handleSubmit = () => {
            const newtask = {
                id: 4 ,
                text: title.value,
                completed: false
            }
            context.emit('add-task', newtask )
        }
        return {
            title , handleSubmit
        }
    }
}
</script>
<style lang="">
    
</style>