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