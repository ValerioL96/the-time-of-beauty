<script>

export default {
    components: {
    },
    methods: {
        openOffcanvas(event) {
            event.preventDefault();

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
            <!-- Email -->
            <p>
                <i class="fas fa-envelope"></i>
                <a href="mailto:thetimeofbeautyalessandro@gmail.com"><strong>thetimeofbeautyalessandro@gmail.com</strong></a>
            </p>

            <!-- Numero di Telefono -->
            <p>
                <i class="fas fa-phone"></i>
                <!-- Chiamata -->
                <a href="tel:+393926314575"><strong>Chiama</strong></a>
                &nbsp; | &nbsp;
                <!-- WhatsApp -->
                <a href="https://wa.me/393926314575" target="_blank"><strong>WhatsApp</strong></a>
            </p>

            <!-- Instagram -->
            <p>
                <i class="fab fa-instagram"></i>
                <a href="https://www.instagram.com/barberia_the_timeofbeauty/" target="_blank"><strong>barberia_the_timeofbeauty</strong></a>
            </p>

            <!-- TikTok -->
            <p>
                <i class="fab fa-tiktok"></i>
                <a href="https://www.tiktok.com/@the_time_of_beauty?lang=en" target="_blank"><strong>The_time_of_beauty</strong></a>
            </p>

            <!-- Indirizzo -->
            <p>
                <i class="fas fa-map-marker-alt"></i>
                <strong>The Time Of Beauty, Via Madonnella, Acerra</strong>
                <br><br>
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
    background-color: rgba(0, 0, 0, 0.5); 
    color: white; 
    padding: 20px;
}

.header-nav {
    display: flex;
    justify-content: space-around;
    width: 50%; 
}

.links {
    color: white;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    padding: 10px;
}

.links:hover {
    color: #138085; 
}

.jumbotron {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

/* Offcanvas */
.offcanvas {
    background: linear-gradient(145deg, #019DB4, #D99254); 
    color: #fff; 
}

.offcanvas-header {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2); 
}

.btn-close {
    background: transparent;
    border: none;
    color: white; 
}
.offcanvas-body {
    color: #fff; 
    font-size: 1rem; 
}

/* Icone */
.offcanvas-body i {
    margin-right: 10px;
    font-size: 1.2rem; 
    color: #138085; 
}

.offcanvas-body a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
}

.offcanvas-body a:hover {
    color: #138085;
}

/* Immagine della mappa */
.map-image {
    width: 100%; 
    height: auto;
    max-height: 250px; 
    border-radius: 10px; 
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); 
    transition: transform 0.3s; 
}

.map-image:hover {
    transform: scale(1.05); 
}

/* Media Query per Mobile */
@media (max-width: 768px) {
    .header-nav {
        flex-direction: column; 
        align-items: center; 
    }
}

</style>

