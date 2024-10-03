import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'




createApp(App).use(router).mount('#app')

// Importa Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Importa Bootstrap JS
import 'bootstrap';
