<script>
import axios from 'axios';

export default {
    data() {
        return {
           services : [
  {
    id: 1,
    name: 'Capelli',
    description: 'Servizio di taglio capelli base per un look fresco e rinnovato. Perfetto per chi desidera mantenere uno stile semplice e curato.',
    duration: 30,
    calendlyUrl:'https://meet.brevo.com/thetimeofbeauty/capelli'
  },
  {
    id: 2,
    name: 'Capelli + Shampoo',
    description: 'Taglio capelli con lavaggio e shampoo inclusi. Questo servizio offre una pulizia profonda e un massaggio rilassante del cuoio capelluto, per un’esperienza rinvigorente.',
    duration: 35,
    calendlyUrl:'https://meet.brevo.com/thetimeofbeauty/capelli-shampoo'
  },
  {
    id: 3,
    name: 'Capelli + Shampoo + Barba',
    description: 'Un pacchetto completo che include taglio di capelli, lavaggio e shampoo, e cura della barba. Perfetto per chi desidera apparire impeccabile dalla testa ai piedi.',
    duration: 45,
    calendlyUrl:'https://meet.brevo.com/thetimeofbeauty/capelli-shampoo-barba'
  },
  {
    id: 4,
    name: 'Capelli Bimbo',
    description: 'Taglio di capelli per bambini, realizzato in un ambiente amichevole e divertente. Assicuriamo un’esperienza piacevole per i più piccoli, senza stress.',
    duration: 30,
    calendlyUrl:'https://meet.brevo.com/thetimeofbeauty1/capelli-bimbo'
  },
  {
    id: 5,
    name: 'Modellatura Barba',
    description: 'Servizio di modellatura e rifinitura della barba per un look elegante e curato. Utilizziamo tecniche specializzate per enfatizzare la tua forma del viso.',
    duration: 15,
    calendlyUrl:'https://meet.brevo.com/thetimeofbeauty1/modellatura-barba'
  },
  {
    id: 6,
    name: 'Tintura Barba',
    description: 'Trattamento di tintura per la barba, ideale per coprire i capelli grigi o semplicemente per cambiare look. Utilizziamo prodotti di alta qualità per un risultato naturale e duraturo.',
    
    duration: 10,
    calendlyUrl:'https://meet.brevo.com/thetimeofbeauty1/tintura-barba'
  },
  {
    id: 7,
    name: 'Trattamento lisciante',
    description: 'Servizio di trattamento dei capelli per ottenere un look liscio e setoso. Perfetto per chi desidera domare i capelli crespi e avere un aspetto ordinato.',
    
    duration: 45,
    calendlyUrl:'https://meet.brevo.com/thetimeofbeauty/stiratura'
  },
  {
    id: 8,
    name: 'Permanente',
    description: 'Trattamento permanente per i capelli che dona volume e onde morbide. Ideale per chi desidera un cambiamento duraturo e uno stile unico.',
    
    duration: 30,
    calendlyUrl:'https://meet.brevo.com/thetimeofbeauty/permanente'
  },
  {
    id: 9,
    name: 'Lozione Curativa',
    description: 'Applicazione di lozione curativa per i capelli, progettata per nutrire e riparare i capelli danneggiati. Perfetta per migliorare la salute e l’aspetto dei tuoi capelli.',
    
    duration: 5,
    calendlyUrl:'https://meet.brevo.com/thetimeofbeauty1/lozione-curativa'
  },
],

            // services: [],
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
                <!-- <p class="card-text">&euro; {{ service.price }}</p> -->
                <p class="card-text">{{ service.duration }} min</p>
                <p class="card-text">{{ service.description }}</p>
            </div>
        </div>
    </div>

    <!-- Modulo di prenotazione -->
    <div v-if="isBooking" class="booking-modal">
        <div class="modal-content">
            <span class="close" @click="closeBooking">&times;</span>
            <!-- <h2>Prenotazione per: {{ selectedService.name }}</h2> -->
            <!-- <form @submit.prevent="bookService" class="booking-form">
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
            </form> -->
             <!-- Calendly Widget -->
    <div class="calendly-embed">
        <iframe
            :src=   "selectedService.calendlyUrl"
            width="100%"
            height="450px"
            frameborder="0"
            scrolling="no"
        ></iframe>
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

.calendly-embed {
    margin-top: 20px;
    height: 500px;
    overflow: hidden;
}

.calendly-embed> iframe{
  border-radius: 2%;
}


</style>


