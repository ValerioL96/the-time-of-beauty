<script>




export default {
    components: {
    },
    methods: {
        openOffcanvas(event) {
            // Previene il comportamento predefinito del link
            event.preventDefault();

            // Assicurati che l'elemento esista prima di inizializzare l'offcanvas
            const offcanvasElement = document.getElementById('offcanvasScrolling');
            if (offcanvasElement) {
                const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
                offcanvas.show();
            } else {
                console.error('Offcanvas element not found');
            }
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
    <!-- Offcanvas -->
    <div 
        class="offcanvas offcanvas-end" 
        data-bs-scroll="true" 
        data-bs-backdrop="true" 
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
            <p>
                Il nostro indirizzo: <strong>The Time Of Beauty, Via Madonnella, Acerra</strong>
                <br>
                <br>
                <!-- Immagine cliccabile per aprire Google Maps -->
                <a 
                    href="https://www.google.com/maps/place/The+Time+Of+Beauty/@40.9490755,14.3770495,17z/data=!3m1!4b1!4m6!3m5!1s0x133bac09dc349c97:0x7b02caa877e8e908!8m2!3d40.9490755!4d14.3796244!16s%2Fg%2F11gf0pjg8c?entry=ttu&g_ep=EgoyMDI0MTAwMS4wIKXMDSoASAFQAw%3D%3D" 
                    target="_blank"
                >
                    <img 
                        src="/src/assets/img/Screenshot_4-10-2024_113034_www.google.com.jpeg" 
                        alt="Apri su Google Maps" 
                        class="map-image"
                    />
                </a>
            </p>
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

/* Offcanvas Styles */
.offcanvas {
    background: linear-gradient(145deg, #019DB4, #D99254); /* Sfumatura su tutto l'offcanvas */
    color: #fff; /* Colore del testo */
}

.offcanvas-header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* Linea di separazione */
}

.btn-close {
    background: transparent;
    border: none;
    color: white; /* Colore per il pulsante di chiusura */
}

/* Offcanvas Body */
.offcanvas-body {
    color: #fff; /* Colore del testo */
    font-size: 1rem; /* Dimensione del testo */
}

/* Stile per l'immagine della mappa */
.map-image {
    width: 100%; /* Larghezza dell'immagine */
    height: auto; /* Mantiene le proporzioni */
    max-height: 250px; /* Limite massimo dell'altezza */
    border-radius: 10px; /* Angoli arrotondati */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Ombra per profondità */
    transition: transform 0.3s; /* Transizione per l'effetto hover */
}

.map-image:hover {
    transform: scale(1.05); /* Ingrandisce l'immagine al passaggio del mouse */
}

/* Media Query per Mobile */
@media (max-width: 768px) {
    .header-nav {
        flex-direction: column; /* Cambia la direzione per schermi piccoli */
        align-items: center; /* Centra i link */
    }
}
</style>

