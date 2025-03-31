<template>
    <app-header></app-header>
    <the-contacts></the-contacts>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
import TheContacts from '@/components/TheContacts.vue';

export default {
  name: 'contacts',
  components: {
    AppHeader,
    TheContacts
  }
}
</script>