<template>
  <div class="modal-backdrop">
    <div class="modal" role="dialog">
      <header class="modal-header">
        <slot name="header">
          Добавить магазин
          <button type="button" class="btn-close" @click="close">x</button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <form @submit.prevent="addStore">
            <input type="tel" placeholder="Номер этажа" v-model="floorNumber" required>
            <input type="text" placeholder="Название магазина" v-model="NameShop" required>
            <input type="text" placeholder="Категория магазина" v-model="CategoryShop" required>
            <input type="submit" value="Добавить">
          </form>
        </slot>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupAdd',
  data() {
    return {
      floorNumber: null,
      NameShop: '',
      CategoryShop: ''
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    addStore() {
      const newStore = {
        floor_number: this.floorNumber,
        title: this.NameShop,
        category: this.CategoryShop
      };
      // Отправляем новый магазин в Vuex
      this.$store.dispatch('shops/addStore', newStore);

      // Сброс полей формы
      this.floorNumber = null;
      this.NameShop = '';
      this.CategoryShop = '';

      // Закрываем модальное окно
      this.close();
    },
  },
};
</script>

<style lang="scss">
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    padding: 5px;
    display: flex;
    width: 30%;
    flex-direction: column;
    border-radius: 15px;
    @media (max-width: 700px)  {
        width: 80%;
    }
  }

  .modal-header,
  .modal-footer {
    align-items: center;
    padding: 5px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #E9592C;
    font-size: 18pt;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    width: 80%;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    font-weight: bold;
    color: #E9592C;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #E9592C;
    border: 1px solid #E9592C;
    border-radius: 2px;
  }
  form{
    display: flex;
    flex-direction: column;
    gap: 10px;
    input{
      width: 100%;
      height: 30px;
      border: 2px solid #E9592C;
      padding-left: 5px;
      box-sizing: border-box;
      background-color: #FFFFFF;
      color: #E9592C;
    }

  }
</style>