<script>
export default {
    data() {
        return {
            images: [
                '/src/assets/img/WhatsApp Image 2024-09-10 at 21.35.53 (3).jpeg',
                '/src/assets/img/WhatsApp Image 2024-09-10 at 21.35.54 (1).jpeg',
                '/src/assets/img/WhatsApp Image 2024-09-10 at 21.35.54 (3).jpeg',
                '/src/assets/img/WhatsApp Image 2024-09-10 at 21.35.54 (4).jpeg',
                '/src/assets/img/WhatsApp Image 2024-09-10 at 21.35.55 (1).jpeg',
                '/src/assets/img/WhatsApp Image 2024-09-10 at 21.35.55 (3).jpeg',
                '/src/assets/img/WhatsApp Image 2024-09-10 at 21.35.55 (4).jpeg'
            ],
            currentIndex: 0,
            interval: null
        };
    },
    mounted() {
        this.startSlideshow();
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
    methods: {
        startSlideshow() {
            this.interval = setInterval(() => {
                this.nextImage();
            }, 3500); // Cambia immagine ogni 3.5 secondi
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        prevImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        }
    }
};
</script>

<template>
    <div class="jumbotron">
        <div class="carousel">
            <img
                v-for="(image, index) in images"
                :key="index"
                :src="image"
                alt="Jumbotron Image"
                class="carousel-img"
                :class="{ active: index === currentIndex }"
            />
        </div>
        <h1 class="jumbotron-title">The TIME of Beauty</h1> <!-- Titolo -->
    </div>
</template>

<style lang="scss" scoped>
.jumbotron {
    text-align: center;
    padding: 0;
    margin: 0;
    height: 100vh;
    position: relative;
    overflow: hidden; // Nasconde eventuali overflow
    background-color: #000; // Sfondo nero per far risaltare le immagini
}

.carousel {
    position: relative;
    width: 100%;
    height: 100%;
}

.carousel-img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw; // Utilizza tutta la larghezza
    height: 100vh; // Utilizza tutta l'altezza
    object-fit: cover; // Rende le immagini adattabili
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
    transform: translate(-50%, -50%); // Centra l'immagine
}

.carousel-img.active {
    opacity: 1;
}

.jumbotron-title {
    position: absolute; // Posizione assoluta per centrarlo
    top: 50%; // Posiziona verticalmente al centro
    left: 50%; // Posiziona orizzontalmente al centro
    transform: translate(-50%, -50%); // Centra esattamente il testo
    font-size: 4rem; // Dimensione del font aumentata
    font-weight: bold; // Rende il testo più marcato
    color: #fff; // Colore bianco per il testo
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7); // Ombra più marcata per far risaltare il testo
    letter-spacing: 2px; // Spaziatura delle lettere
    text-align: center; // Allinea il testo al centro
}

/* Media Query per schermi più piccoli */
@media (max-width: 768px) {
    .jumbotron-title {
        font-size: 3rem; // Riduci la dimensione del font per schermi piccoli
    }
}
</style>

