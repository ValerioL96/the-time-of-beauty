<script>
import axios from 'axios';

export default {
    data() {
        return {
            customer_name: '',
            customer_phone: '',
            customer_email: '',
            appointment_time: '',
            selected_service: '',
            services: [],
            showToast: false,
            dropdownVisible: false, // Track dropdown visibility
            isMobile: false, // Check for mobile
        };
    },
    mounted() {
        this.fetchServices();
        this.checkIfMobile(); // Check if the device is mobile
        window.addEventListener('resize', this.checkIfMobile); // Check on resize
        document.addEventListener('click', this.handleOutsideClick);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleOutsideClick);
        window.removeEventListener('resize', this.checkIfMobile); // Clean up
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
        },
        openBookingToast() {
            this.showToast = true;
        },
        async fetchServices() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/services');
                this.services = response.data;
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        },
        async submitBooking() {
            const appointmentData = {
                customer_name: this.customer_name,
                customer_phone: this.customer_phone,
                customer_email: this.customer_email,
                appointment_time: this.appointment_time,
                service_id: this.selected_service,
                status: 'pending',
            };

            try {
                await axios.post('http://127.0.0.1:8000/api/appointments', appointmentData);
                alert('Prenotazione effettuata con successo!');
                this.resetForm();
                this.showToast = false;
            } catch (error) {
                console.error('Error submitting appointment:', error);
                alert('Errore nell\'invio della prenotazione.');
            }
        },
        resetForm() {
            this.customer_name = '';
            this.customer_phone = '';
            this.customer_email = '';
            this.appointment_time = '';
            this.selected_service = '';
        },
        handleOutsideClick(event) {
            const toastElement = this.$refs.bookingToast;
            if (this.showToast && toastElement && !toastElement.$el.contains(event.target)) {
                this.showToast = false;
            }
            
            if (this.dropdownVisible && !event.target.closest('.dropdown')) {
                this.dropdownVisible = false;
            }
        },
        toggleDropdown() {
            this.dropdownVisible = !this.dropdownVisible; 
        },
        closeDropdown() {
            this.dropdownVisible = false;  // Chiusura del dropdown
        },
        handleOutsideClick(event) {
            const toastElement = this.$refs.bookingToast;
            if (this.showToast && toastElement && !toastElement.$el.contains(event.target)) {
                this.showToast = false;
            }
            
            if (this.dropdownVisible && !event.target.closest('.dropdown')) {
                this.dropdownVisible = false;
            }
    },
    checkIfMobile() {
            this.isMobile = window.innerWidth <= 768; 
        },
    }    
};
</script>


<template>
    <div class="header">

        <!-- Logo con Nome -->
        <div class="logo-container">
            <img src="../../assets/logo/Barberia_logo.png" alt="logo" class="logo">
            <span class="brand-name">The TIME of Beauty</span>
        </div>

        <div class="header-nav">
            <router-link :to="{ name: 'home' }" class="links">Home</router-link>
            <router-link :to="{ name: 'about' }" class="links">Chi siamo</router-link>
            <router-link :to="{ name: 'services' }" class="links">Servizi</router-link>
            <a href="#" @click="openOffcanvas" class="links">Contatti</a>
            <a href="#" @click="openBookingToast" class="links">Prenota</a>
        </div>

        <!-- Dropdown per mobile -->
        <div class="dropdown" v-if="isMobile">
            <button class="dropdown-toggle" @click="toggleDropdown"><i class="fa-solid fa-bars"></i></button>
            <div v-if="dropdownVisible" class="dropdown-menu">
                <router-link :to="{ name: 'home' }" class="dropdown-item" @click="closeDropdown">Home</router-link>
                <router-link :to="{ name: 'about' }" class="dropdown-item" @click="closeDropdown">Chi siamo</router-link>
                <router-link :to="{ name: 'services' }" class="dropdown-item" @click="closeDropdown">Servizi</router-link>
                <a href="#" @click="openOffcanvas" class="dropdown-item">Contatti</a>
                <div @click="closeDropdown">
                    <a href="#" @click="openBookingToast" class="dropdown-item">Prenota</a>
                </div>
                
            </div>
        </div>
    </div>
    
        <!-- Offcanvas per i contatti -->
        <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="true" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Informazioni di Contatto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">X</button>
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
            <a href="tel:+393926314575"><strong>Chiama</strong></a>
            &nbsp; | &nbsp;
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
    
        <!-- Toast per la prenotazione -->
    <b-toast 
        id="booking-toast" 
        title="Prenotazione" 
        variant="info" 
        no-auto-hide 
        ref="bookingToast" 
        v-if="showToast" 
        class="booking-toast"
        >
        <!-- Pulsante di chiusura -->
        <button @click="showToast = false" class="close-button">X</button>

        <form @submit.prevent="submitBooking" class="booking-form">
            <div class="mb-3">
            <label for="customer_name" class="form-label">Nome:</label>
            <input type="text" class="form-control" v-model="customer_name" required />
            </div>
            <div class="mb-3">
            <label for="customer_phone" class="form-label">Telefono:</label>
            <input type="tel" class="form-control" v-model="customer_phone" required />
            </div>
            <div class="mb-3">
            <label for="customer_email" class="form-label">Email (opzionale):</label>
            <input type="email" class="form-control" v-model="customer_email" />
            </div>
            <div class="mb-3">
            <label for="appointment_time" class="form-label">Data e Ora:</label>
            <input type="datetime-local" class="form-control" v-model="appointment_time" required />
            </div>
            <div class="mb-3">
            <label for="service" class="form-label">Servizio:</label>
            <select class="form-select" v-model="selected_service" required>
                <option value="" disabled>Seleziona un servizio</option>
                <option v-for="service in services" :key="service.id" :value="service.id">
                {{ service.name }}
                </option>
            </select>
            </div>
            <button type="submit" class="btn btn-success">Invia Prenotazione</button>
        </form>
    </b-toast>
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

.logo-container {
    display: flex;
    align-items: center;
    margin-right: 40px;
}

.logo {
    height: 60px; // Altezza del logo
    width: auto;
}

.brand-name {
    font-size: 24px; // Dimensione del testo per il nome
    font-weight: bold;
    margin-left: 10px; // Spazio tra il logo e il testo
    color: #ffffff; // Colore del testo
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

/* Dropdown styles */
.dropdown {
    position: relative;
    margin-top: 1rem;
}

.dropdown-toggle {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
}

.dropdown-menu {
    position: absolute;
    right: 0;
    background: linear-gradient(145deg, #019DB4, #D99254); 
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 2;
    display: flex;
    flex-direction: column;
}

.dropdown-item {
    padding: 10px;
    color: white;
    text-align: center;
    text-decoration: none;
}

.dropdown-item:hover {
    background: #138085;
    color: white;
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

/* Pulsante di chiusura del Offcanvas */
.btn-close {
    display: none;
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
    transition: color 0.3s; 
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

/* Toast Prenotazione */
.booking-toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: linear-gradient(145deg, #019DB4, #D99254); 
    color: white;
    padding: 15px;
    border-radius: 5px;
    z-index: 9999;
}

/* Pulsante di chiusura del toast */
.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
    transition: color 0.3s;
}

.close-button:hover {
    color: #138085; 
}


/* Modulo di prenotazione */
.booking-form {
    background: linear-gradient(145deg, #019DB4, #D99254); 
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

/* Media Query per Mobile */
@media (max-width: 768px) {
    .header-nav {
        display: none;
    }

    .logo-container {
    margin-right: 10px;
}
    
    .brand-name {
    font-size: 18px; 
}

/* Pulsante di chiusura del Offcanvas */
.btn-close {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    font-weight: bold;
    transition: color 0.3s; 
}
.btn-close:hover {
    color: #138085; 
}
}

</style>


