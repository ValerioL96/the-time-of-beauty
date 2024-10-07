<script>
export default {
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
    },
};
</script>

<template>
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-nav">
            <router-link :to="{ name: 'home' }" class="footer-link">Home</router-link>
            <router-link :to="{ name: 'about' }" class="footer-link">Chi siamo</router-link>
            <router-link :to="{ name: 'services' }" class="footer-link">Servizi</router-link>
            <a href="#" @click="openOffcanvas" class="footer-link">Contatti</a>
            </div>
            <div class="social-media">
            <a href="https://www.instagram.com/barberia_the_timeofbeauty/" target="_blank" class="social-icon">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@the_time_of_beauty?lang=en" target="_blank" class="social-icon">
                <i class="fab fa-tiktok"></i>
            </a>
            </div>
            <div class="footer-bottom">
            <p>&copy; 2024 The Time Of Beauty. Tutti i diritti riservati.</p>
            </div>
        </div>
    </footer>
</template>


<style lang="scss" scoped>
.footer {
    background-color: rgba(0, 0, 0, 0.5); 
    color: white;
    padding: 20px;
    position: relative; 
    text-align: center; 
    bottom: 0;
    width: 100%;
}

.footer-content {
    max-width: 1200px; 
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    }

.footer-nav {
  margin-bottom: 15px; 
}

.footer-link {
    color: white;
    text-decoration: none;
    font-size: 16px;
    margin: 0 15px;
    padding: 10px; 
    transition: color 0.3s, background-color 0.3s; 
}

.footer-link:hover {
    color: #138085; 
    background-color: rgba(255, 255, 255, 0.2); 
    border-radius: 5px; 
}

.social-media {
    margin: 10px 0; 
}

.social-icon {
    color: white;
    font-size: 24px;
    margin: 0 15px; 
    transition: color 0.3s; 
}

.social-icon:hover {
    color: #138085; 
}

.footer-bottom {
    margin-top: 15px;
    font-size: 14px;
}
</style>