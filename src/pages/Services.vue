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

    
<div class="container pt-5">
    <div class="row d-flex justify-content-center flex-wrap">
        <!-- Projects List -->
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
/* Container */
.container {
  margin-top: 4rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Card Styles */
.card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  background: linear-gradient(145deg, #f8f9fa, #e0e4e8); /* Sfumatura morbida di sfondo */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* Ombra leggera */
  max-width: 22rem;
  margin: 1rem; /* Aggiungi margine tra le card */
}

/* Card Hover Effect */
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2); /* Ombra più pronunciata su hover */
  background: linear-gradient(145deg, #019DB4, #D99254); /* Sfumatura animata su hover */
}

/* Card Body */
.card-body {
  padding: 1.5rem;
  background-color: white;
  text-align: left;
}

/* Title */
.card-title {
  font-size: 1.5rem;
  font-weight: 700; /* Titolo più visibile */
  color: #333;
  margin-bottom: 0.75rem;
  letter-spacing: 0.8px;
  text-transform: capitalize;
  background: linear-gradient(90deg, #019DB4, #D99254); /* Sfumatura nel testo */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Effetto testo con sfumatura */
}

/* Text */
.card-text {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
  line-height: 1.5;
}

/* Price */
.card-text:first-of-type {
  font-weight: bold;
  font-size: 1.2rem;
  color: #D99254; /* Colore evidenziato per il prezzo */
}

/* Duration */
.card-text:nth-of-type(2) {
  font-size: 1rem;
  color: #777;
}

/* Description */
.card-text:last-of-type {
  font-size: 0.9rem;
  color: #999;
  line-height: 1.4;
}

/* Button */
.card-body .btn {
  background: linear-gradient(90deg, #019DB4, #D99254); /* Sfumatura sul pulsante */
  color: white;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  border-radius: 50px; /* Pulsanti arrotondati per un look moderno */
  text-transform: uppercase;
  transition: background 0.3s ease-in-out;
}

.card-body .btn:hover {
  background: linear-gradient(90deg, #D99254, #CAC6BA); /* Sfumatura più calda su hover */
}

/* Media Query per Mobile */
@media (max-width: 768px) {
  .card {
    width: 100%;
    margin-bottom: 1.5rem;
  }
}


</style>
