<script>
import axios from 'axios';

export default {
    data() {
        return {
            services: [],
            currentPage: 1,
            totalPages: 1,
            isLoading: false,
            isBooking: false, // Flag per mostrare il modulo di prenotazione
            selectedService: null, // Servizio selezionato per la prenotazione
            formData: {
                name: '',
                email: '',
                phone: '',
                service_id: null,
                date: '',
                time: ''
            }
        }
    },
    methods: {
        getService(page = 1) {
            this.isLoading = true;
            axios.get('http://127.0.0.1:8000/api/services', {
                params: { page: page }
            })
                .then((response) => {
                    this.services.push(...response.data);
                    this.currentPage = page;
                })
                .catch((error) => {
                    this.$router.push({ name: "404" });
                })
                .finally(() => {
                    this.isLoading = false;
                });
        },
        openBooking(service) {
            this.selectedService = service;
            this.isBooking = true;
            this.formData.service_id = service.id; // Impostiamo l'id del servizio nella form
        },
        closeBooking() {
            this.isBooking = false;
            this.selectedService = null;
        },
        bookService() {
            axios.post('http://127.0.0.1:8000/api/appointments', this.formData)
                .then((response) => {
                    alert('Prenotazione effettuata con successo!');
                    this.closeBooking(); // Chiudi il modulo di prenotazione
                })
                .catch((error) => {
                    alert('Errore durante la prenotazione. Riprova.');
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
        <div class="card mb-4 mx-2" v-for="service in services" :key="service.id" style="width: 22rem; height: auto;" @click="openBooking(service)">
            <div class="card-body text-center">
                <h5 class="card-title">{{ service.name }}</h5>
                <p class="card-text">&euro; {{ service.price }}</p>
                <p class="card-text">{{ service.duration }} min</p>
                <p class="card-text">{{ service.description }}</p>
            </div>
        </div>
    </div>

    <!-- Modulo di prenotazione -->
    <div v-if="isBooking" class="booking-modal">
        <div class="modal-content">
            <span class="close" @click="closeBooking">&times;</span>
            <h2>Prenotazione per: {{ selectedService.name }}</h2>
            <form @submit.prevent="bookService" class="booking-form">
                <div class="form-group pb-2">
                    <label for="name" class="form-label">Nome:</label>
                    <input type="text" id="name" v-model="formData.name" class="form-control" required>
                </div>
                <div class="form-group pb-2">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" id="email" v-model="formData.email" class="form-control" required>
                </div>
                <div class="form-group pb-2">
                    <label for="phone" class="form-label">Telefono:</label>
                    <input type="text" id="phone" v-model="formData.phone" class="form-control" required>
                </div>
                <div class="form-group pb-2">
                    <label for="date" class="form-label">Data:</label>
                    <input type="date" id="date" v-model="formData.date" class="form-control" required>
                </div>
                <div class="form-group  pb-5">
                    <label for="time" class="form-label">Orario:</label>
                    <input type="time" id="time" v-model="formData.time" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-success">Prenota</button>
            </form>
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

/* Modulo di prenotazione */
.booking-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.modal-content {
  background: linear-gradient(145deg, #019DB4, #D99254); 
    color: white;
    border-radius: 15px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    padding: 2rem;
    width: 400px;
    text-align: center;
    position: relative;
    max-width: 90%;
}

.close {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 30px;
    cursor: pointer;
}

.booking-form {
    padding: 20px; 
    border-radius: 5px;
}

.booking-form .form-label {
    color: white; 
}

.booking-form .form-control,
.booking-form .form-select {
    background-color: rgba(255, 255, 255, 0.8); 
    color: black; 
}

.booking-form .btn-success {
    background-color: #138085; 
    border: none; 
}

.booking-form .btn-success:hover {
    background-color: #0f706f; 
}
</style>


