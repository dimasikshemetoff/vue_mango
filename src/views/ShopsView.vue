<template>
  <div class="shop">
    <app-header></app-header>
    <the-shops></the-shops>
    <app-footer></app-footer>
  </div>
</template>
<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import TheShops from '@/components/TheShops';

export default {
  name: 'home',
  components: {
    AppHeader,
    TheShops,
    AppFooter
  }
}
</script>