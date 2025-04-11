<template>
    <div class="loading" v-show="loading" style="color: black">
        <img src="../assets/icons/img/mango1.gif">
        <h3>Загрузка............</h3>
    </div>
</template>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            required: true, // Обязательный пропс
        },
    }
};
</script>


<style lang="scss">
.loading{
        height: 50vh;
        justify-content: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        img{

            width: 20%;

            @media (max-width: 400px) {
                width: 150px;
            }
            
        }
    }
</style>