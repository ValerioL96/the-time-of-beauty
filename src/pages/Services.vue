<script>
import axios from 'axios';

export default {
    data() {
        return {
            services: [],
            currentPage: 1,
            totalPages: 1,
            isLoading: false 
        }
    },
    methods: {
        getService(page = 1) {
            this.isLoading = true; // Avvia caricamento
            axios.get('http://127.0.0.1:8000/api/services', {
                params: {
                    page: page
                }
            })
                .then((response) => {
                    this.services.push(...response.data);
                    this.currentPage = page;
                })
                .catch((error) => {
                    this.$router.push({ name: "404" });
                })
                .finally(() => {
                    this.isLoading = false; // Fine caricamento
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

    <!-- Spinner durante il caricamento -->
    <div v-if="isLoading" class="loading-spinner">
        <div class="spinner"></div>
    </div>
    
    <div v-else class="row d-flex justify-content-center flex-wrap">
        <!-- Cards servizi -->
        <div class="card mb-4 mx-2" v-for="service in services" :key="service.id" style="width: 22rem; height: auto;">
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

.container {
  padding: 8rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Loading Spinner */
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; 
}

.spinner {
  border: 6px solid rgba(0, 0, 0, 0.1);
  border-top-color: #019DB4; 
  border-bottom-color: #D99254; 
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Card */
.card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background: linear-gradient(145deg, #f8f9fa, #e0e4e8);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  max-width: 22rem;
  margin: 1rem;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  background: linear-gradient(145deg, #019DB4, #D99254);
}

.card-body {
  padding: 1.5rem;
  background-color: white;
  text-align: left;
}

/* Titolo */
.card-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.75rem;
  letter-spacing: 0.8px;
  text-transform: capitalize;
  background: linear-gradient(90deg, #019DB4, #D99254);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Testi */
.card-text {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.card-text:first-of-type {
  font-weight: bold;
  font-size: 1.2rem;
  color: #D99254;
}

.card-text:nth-of-type(2) {
  font-size: 1rem;
  color: #777;
}

.card-text:last-of-type {
  font-size: 0.9rem;
  color: #999;
  line-height: 1.4;
}

/* Media Query per schermi piccoli */
@media (max-width: 768px) {
  .card {
    width: 100%;
    margin-bottom: 1.5rem;
  }
}
</style>

