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
  <div class="privacy-container">
    <h1 class="privacy-title">Privacy e Cookie Policy</h1>
    <p class="privacy-text">
      Benvenuto su <strong>The Time Of Beauty</strong>. La tua privacy è importante per noi e ci impegniamo a proteggerla.
      Questa pagina descrive come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.
    </p>

    <h2 class="privacy-subtitle">Raccolta e Utilizzo dei Dati Personali</h2>
    <ul class="privacy-list">
      <li>Nome e cognome</li>
      <li>Indirizzo email</li>
      <li>Numero di telefono</li>
      <li>Indirizzo IP</li>
    </ul>
    <p class="privacy-text">Questi dati vengono utilizzati per migliorare i nostri servizi, fornire assistenza e comunicare con te.</p>

    <h2 class="privacy-subtitle">Cookie</h2>
    <p class="privacy-text">
      Il nostro sito utilizza i cookie per migliorare l'esperienza dell'utente. I cookie sono piccoli file di testo salvati sul tuo dispositivo.
    </p>
    
    <h3 class="privacy-subtitle">Tipologie di Cookie Utilizzati</h3>
    <ul class="privacy-list">
      <li><strong>Cookie Tecnici:</strong> Necessari per il funzionamento del sito.</li>
      <li><strong>Cookie Analitici:</strong> Utilizzati per raccogliere dati statistici.</li>
      <li><strong>Cookie di Terze Parti:</strong> Utilizzati da servizi esterni come Google Analytics.</li>
    </ul>

    <h2 class="privacy-subtitle">Protezione dei Dati</h2>
    <p class="privacy-text">
      Adottiamo misure di sicurezza adeguate per proteggere i tuoi dati personali da accessi non autorizzati, alterazioni o distruzioni.
    </p>

    <h2 class="privacy-subtitle">Diritti degli Utenti</h2>
    <p class="privacy-text">
      Hai il diritto di:
    </p>
    <ul class="privacy-list">
      <li>Accedere ai tuoi dati personali</li>
      <li>Chiedere la rettifica o la cancellazione</li>
      <li>Opporsi al trattamento</li>
    </ul>

    <h2 class="privacy-subtitle">Contatti</h2>
    <p class="privacy-text">Se hai domande sulla nostra Privacy e Cookie Policy, contattaci a:</p>
    <p class="privacy-text"><strong>Email:</strong> <a href="mailto:thetimeofbeautyalessandro@gmail.com"><strong>thetimeofbeautyalessandro@gmail.com</strong></a></p>
    <p class="privacy-text"><strong>Indirizzo:</strong> <strong>The Time Of Beauty, Via Madonnella, Acerra</strong></p>
  </div>
</template>

<style lang="scss" scoped>
.privacy-container {
  padding: 8rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  color: white;
  text-align: center;
}

.privacy-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.privacy-subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  text-transform: uppercase;
}

.privacy-text {
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.privacy-list {
  text-align: left;
  margin: 1rem auto;
  padding-left: 20px;
}

.privacy-list li {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}
</style>

