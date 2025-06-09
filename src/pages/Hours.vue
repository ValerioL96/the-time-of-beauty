<script>
export default {
    data() {
        return{
        };
    },
   
    methods: {
    }
};
</script>





<template>

    <!-- Orari -->
     <div class="container">
        <div class="titolo-orario">
            <hr>
        <h1>Orari</h1>
        <hr>
        </div>
       
        <div class="orari">
        <ul>
            <li><span>Lunedì:</span> Chiuso</li>
            <li><span>Martedì:</span>  09:00 - 13:00 / 16:00 - 20:00 </li>
            <li><span>Mercoledì:</span>  09:00 - 13:00 / 16:00 - 20:00 </li>
            <li><span>Giovedì:</span>  09:00 - 13:00 / 16:00 - 20:00 </li>
            <li><span>Venerdì:</span>  09:00 - 13:00 / 16:00 - 20:00 </li>
            <li><span>Sabato:</span> 09:00 - 20:00</li>
            <li><span>Domenica:</span> Chiuso</li>
        </ul>
    </div>
     </div>
    
</template>

<style lang="scss" >
.container{
    padding-top: 4rem;
}
.titolo-orario{
    display: flex;
    justify-content: center;
    align-items: center;
}

.orari {
    text-align: center;
   margin-bottom: 5rem;
    padding: 20px;
    background: linear-gradient(135deg, rgba(19, 128, 133, 0.8), rgba(0, 0, 0, 0.8));
    color: white;
    border-radius: 15px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(10px);
}

.container h1 {
   
    margin: 3rem 2rem 2rem;
    font-weight: bold;
    border-bottom: white solid ;
    border-top: white solid ;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: white;
}

.orari ul {
    list-style: none;
    padding: 0;
}

.orari li {
    font-size: 18px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white; 
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    transition: background 0.3s;
}

.orari li:last-child {
    border-bottom: none;
}

.orari li:hover {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
}

.orari li span {
    font-weight: bold;
    color:  #ffcc00;
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
    

    .orari {
        max-width: 100%;
        margin: 0 1rem 2rem 3rem;
        padding-top: 2rem;
        padding-bottom: 2rem;

        h1{
            font-size: 20px;
        }

        li{
            font-size: 15px; 
        }
        
    }
}

</style>
