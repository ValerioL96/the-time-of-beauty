<script >

export default  {
    components:{
    },

    data(){
            return{
    
            }
        },

}

</script>

<template>
    <div class="container">
        <div class="text-center mb-4">
            <h1 class="display-4 font-weight-bold"><Strong>The TIME of Beauty</Strong></h1>
            <h3>Benvenuti nel nostro salone di barbiere, dove la tradizione incontra l'innovazione!</h3>
            <p class="lead">
                Presso il nostro salone, ogni cliente è al centro della nostra attenzione. Offriamo una vasta gamma di servizi, dai tagli classici alle acconciature moderne, per soddisfare ogni esigenza. I nostri barbieri esperti utilizzano tecniche all'avanguardia e prodotti di alta qualità per garantire risultati impeccabili.
            </p>
            <hr>
            <p class="lead">
                L’atmosfera accogliente e rilassante è il luogo ideale per prenderti una pausa dalla routine quotidiana. Mentre ti prendi cura del tuo look, potrai gustare un buon caffè e lasciarti coccolare dal nostro personale cordiale e professionale.
            </p>
            <hr>
            <p class="lead">
                Che tu stia cercando un look fresco per un evento speciale o semplicemente un ritocco, siamo qui per offrirti un’esperienza unica e personalizzata.
            </p>
            <h3>Ti aspettiamo per farti vivere un momento di benessere e stile!</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{ 
    color: #FFFFFF;
    padding: 6rem;
}

hr{
    border: none; 
    height: 3px; 
    background-color: #888888; 
    margin: 30px 0; 
    border-radius: 5px; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
}

/* Media Query per mobile */
@media (max-width: 768px) {
    .container {
        padding: 8rem 2rem;
    }

    h1.display-4 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 1.2rem; 
    }

    p.lead {
        font-size: 1rem;
        line-height: 1.4; 
    }

    hr {
        margin: 20px 0;
        height: 2px;
    }
}

</style>