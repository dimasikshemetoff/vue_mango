<template>
  <div class="home">
    <app-header></app-header>
    <the-main></the-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import TheMain from '@/components/TheMain.vue'

export default {
  name: 'home',
  components: {
    AppHeader,
    TheMain,
    AppFooter
  }
}
</script>
