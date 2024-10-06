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
            interval: null,
            title: 'The TIME of Beauty',
            titleVisible: true
        };
    },
    mounted() {
        this.startSlideshow();
        this.animateTitle();
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
    methods: {
        startSlideshow() {
            // Cambia immagine ogni 3.5 secondi
            this.interval = setInterval(() => {
                this.nextImage();
            }, 3500); 
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        animateTitle() {
            // Titolo visibile per 5 secondi
            setTimeout(() => {
                this.titleVisible = false;
            }, 3500); 
        }
    }
};
</script>





<template>
    <div class="jumbotron">
        <!-- Immagini carosello -->
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

        <!-- Titolo -->
        <h1 
            class="jumbotron-title" 
            v-if="titleVisible"
        >
            {{ title }}
        </h1>
    </div>
</template>

<style lang="scss" scoped>

.jumbotron {
    text-align: center;
    padding: 0;
    margin: 0;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-color: #000; 
}

.carousel {
    position: relative;
    width: 100%;
    height: 100%;
}

// Immagini
.carousel-img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw; 
    height: 100vh;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
    transform: translate(-50%, -50%);
}

.carousel-img.active {
    opacity: 1;
}

// Titolo
.jumbotron-title {
    position: absolute; 
    top: 50%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    font-size: 4rem; 
    font-weight: bold;
    color: #fff;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7); 
    letter-spacing: 2px; 
    text-align: center; 
    opacity: 0;
    animation: fadeInOut 5s ease-in-out forwards; 
}

/* Animazione di comparsa e scomparsa del titolo */
@keyframes fadeInOut {
    0% {
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    90% {
        opacity: 1; /* Rimane visibile */
    }
    100% {
        opacity: 0; /* Sparisce gradualmente */
    }
}

/* Media Query per schermi più piccoli */
@media (max-width: 768px) {
    .jumbotron-title {
        font-size: 3rem;
    }
}

</style>
