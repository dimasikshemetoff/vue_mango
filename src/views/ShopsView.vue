<template>
  <div class="shop">
    <app-header></app-header>
    <the-shops></the-shops>
  </div>
</template>
<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader'
import TheShops from '@/components/TheShops';

export default {
  name: 'home',
  components: {
    AppHeader,
    TheShops
  }
}
</script>