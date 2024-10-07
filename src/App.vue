<script>

import AppFooter from './components/footer/AppFooter.vue';
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';


export default  {
    components:{
      AppHeader,
      AppMain,
      AppFooter
    },

    data(){
            return{

            }
        },

}

</script>

<template>
  <body>
    <header>
      <AppHeader></AppHeader>
    </header>

    <main>
      <router-view></router-view>
    </main>

    <footer>
      <AppFooter></AppFooter>
    </footer>
  </body>
</template>

<style lang="scss" scoped>

@use '../node_modules/bootstrap/scss/bootstrap.scss';
@use './styles/general.scss';

</style>
