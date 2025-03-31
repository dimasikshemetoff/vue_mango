<template>
    <app-header></app-header>
    <the-arenda></the-arenda>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import TheArenda from '@/components/TheArenda.vue';

    export default{
        name: "arenda",
        components: {
            AppHeader,
            TheArenda
        }
    }
</script>