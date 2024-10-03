<script>
import HeaderJumboTron from './HeaderJumboTron.vue';

export default {
    components: {
        HeaderJumboTron
    },
    data() {
        return {};
    },
    methods: {
        openOffcanvas(event) {
            // Previene il comportamento predefinito del link
            event.preventDefault();
            // Usa Bootstrap per mostrare l'offcanvas
            const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasScrolling'));
            offcanvas.show();
        }
    }
};
</script>

<template>
    <div>
        <div class="header">
            <div class="header-nav">
                <!-- Link di navigazione separati -->
                <router-link :to="{ name: 'about' }" class="links">Chi siamo</router-link>
                <router-link :to="{ name: 'services' }" class="links">Servizi</router-link>
                <!-- Link per Contatti con evento click per aprire l'offcanvas -->
                <a href="#" @click="openOffcanvas" class="links">Contatti</a>
            </div>
        </div>

        <!-- Jumbotron -->
        <HeaderJumboTron></HeaderJumboTron>

        <!-- Offcanvas -->
        <div 
          class="offcanvas offcanvas-start" 
          data-bs-scroll="true" 
          data-bs-backdrop="false" 
          tabindex="-1" 
          id="offcanvasScrolling" 
          aria-labelledby="offcanvasScrollingLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Informazioni di Contatto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <p>Puoi contattarci tramite email all'indirizzo: <strong>info@example.com</strong></p>
            <p>Oppure chiamaci al numero: <strong>(123) 456-7890</strong></p>
            <p>Visita il nostro sito per ulteriori informazioni.</p>
          </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    position: absolute;
    top: 0;
    left: 0;
    width: 99%;
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
