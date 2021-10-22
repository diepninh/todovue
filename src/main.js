import { createApp } from 'vue';
import Todo from './components/Todo.vue';
import router from './router';
import store from './store';

createApp(Todo).use(store).use(router).mount('#app');
