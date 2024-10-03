<template>
    <div>
        <!-- Offcanvas -->
        <div 
            class="offcanvas offcanvas-end" 
            data-bs-scroll="true" 
            data-bs-backdrop="true" 
            tabindex="-1" 
            id="offcanvasScrolling" 
            aria-labelledby="offcanvasScrollingLabel"
        >
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasScrollingLabel">Informazioni di Contatto</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <p>Puoi contattarci tramite email all'indirizzo: <strong>info@example.com</strong></p>
                <p>Oppure chiamaci al numero: <strong>(123) 456-7890</strong></p>
                <p>Visita il nostro sito per ulteriori informazioni.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
    openOffcanvas(event) {
        // Previene il comportamento predefinito del link
        event.preventDefault();

        // Assicurati che l'elemento esista prima di inizializzare l'offcanvas
        const offcanvasElement = document.getElementById('offcanvasScrolling');
        if (offcanvasElement) {
            const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
            offcanvas.show();
        } else {
            console.error('Offcanvas element not found');
        }
    }
}
};
</script>
