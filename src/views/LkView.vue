<template>
    <app-header></app-header>
    <the-lk></the-lk>

</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader'
import TheLk from "@/components/TheLk"


export default {
  name: 'lk',
  components: {
    AppHeader,
    TheLk
  }
}
</script>

<style lang="scss" scoped>
  main{
    position: relative;
    height: 80vh;
  }
</style>