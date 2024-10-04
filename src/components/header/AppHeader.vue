<script>
import OffcanvasContact from '../../pages/OffcanvasContact.vue';



export default {
    components: {
        OffcanvasContact,
    },
    methods: {
        openOffcanvas(event) {
            const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasScrolling'));
            offcanvas.show();
        }
    }
};
</script>

<template>
    <div class="header">
        <div class="header-nav">
            <router-link :to="{ name: 'home' }" class="links">Home</router-link>
            <router-link :to="{ name: 'about' }" class="links">Chi siamo</router-link>
            <router-link :to="{ name: 'services' }" class="links">Servizi</router-link>
            <a href="#" @click="openOffcanvas" class="links">Contatti</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1; 
    display: flex;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5); // Sfondo trasparente
    color: white; 
    padding: 20px;
}

.header-nav {
    display: flex;
    justify-content: space-around;
    width: 50%; // Larghezza dei link di navigazione
}

.links {
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
}

.links:hover {
    color: #138085; // Effetto hover sui link
}

.jumbotron {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
</style>

