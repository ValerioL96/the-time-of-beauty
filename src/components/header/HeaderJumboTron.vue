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
        }, 4000); // Cambia immagine ogni 5 secondi
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
    background-color: #000; // Sfondo nero per far risaltare le immagini
}

.carousel {
    position: relative;
    width: 100%;
    height: 100%;
}

.carousel-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    opacity: 0;
    transition: opacity 1.5s ease-in-out;
}

.carousel-img.active {
    opacity: 1;
}

</style>
