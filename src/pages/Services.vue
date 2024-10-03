<script>
import axios from 'axios';

export default {
    data() {
        return {
            services: [],
            currentPage: 1,
            totalPages: 1
        }
    },
    methods: {
        getService(page = 1) {
            axios.get('http://127.0.0.1:8000/api/services', {
                params: {
                    page: page
                }
            })
                .then((response) => {
                    console.log(response.data);
                    this.services.push(...response.data);
                    this.currentPage = page;
                    console.log(response.data);
                })
                .catch((error) => {
                    this.$router.push({ name: "404" });
                    console.log(error);
                });
        }
    },
    created() {
        this.getService();
    }
}
</script>

<template>

    
<div class="container">
    <div class="row d-flex justify-content-center flex-wrap">
        <!-- Projects List -->
        <div class="card mb-4" v-for="service in services" :key="service.id" style="width: 22rem; height: auto;">
            <div class="card-body text-center">
                <h5 class="card-title">{{ service.name }}</h5>
                <p class="card-text">&euro; {{ service.price }}</p>
                <p class="card-text">{{ service.duration }} min</p>
                <p class="card-text">{{ service.description }}</p>
            </div>
        </div>
    </div>
</div>
</template>



<style lang="scss" scoped>
/* Container */
.container {
margin-top: 4rem;
padding-bottom: 2rem;
display: flex;
flex-direction: column; /* Aggiungi per garantire che i contenuti siano allineati verticalmente */
align-items: center; /* Centra orizzontalmente il contenuto */
}

/* Card Styles */
.card {
border: none;
border-radius: 15px;
overflow: hidden;
transition: all 0.3s ease-in-out;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Card Hover Effect */
.card:hover {
transform: translateY(-10px);
box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
}

/* Card Body */
.card-body {
padding: 1.5rem;
background-color: #f8f9fa;
}

/* Title */
.card-title {
font-size: 1.5rem;
font-weight: 600;
color: #333;
margin-bottom: 0.75rem;
}

/* Text */
.card-text {
font-size: 1rem;
color: #666;
}

.card-text a {
color: #007bff;
text-decoration: none;
font-weight: 500;
}

.card-text a:hover {
text-decoration: underline;
}
</style>
