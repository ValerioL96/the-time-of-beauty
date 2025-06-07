<script>
import HomeHours from './HomeHours.vue';

export default {
    components:{
            HomeHours,
 
    },
    data() {
       
        return {
            
            images: [
                '/assets/img/image_1.jpeg',
                '/assets/img/image_2.jpeg',
                '/assets/img/image_3.jpeg',
                '/assets/img/image_4.jpeg',
                '/assets/img/image_5.jpeg',
                '/assets/img/image_6.jpeg',
                '/assets/img/image_7.jpeg'
            ],
            currentIndex: 0,
            interval: null,
            // title: '/src/assets/logo/Barberia_logo.png',
            title: 'src/assets/img/IMG-20241212-WA0014.png',
            
            
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
        <img 
        v-if="titleVisible"
            :src="title" 
            alt= ''  
            class="jumbotron-title" 
            >
        </img>
    </div>

   <HomeHours></HomeHours>
</template>

<style lang="scss" >

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
    top: 55%;
    // top: 60%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    width: 30%; 
    // width: 50%; 
    max-width: 450px;
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
        width: 100%
    }

    
}

</style>
