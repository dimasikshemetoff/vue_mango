<template>
    <div class="modal-backdrop">
      <div class="modal" role="dialog">
        <header class="modal-header">
          <slot name="header">
            Добавить магазин
  
            <button
              type="button"
              class="btn-close"
              @click="close"
            >
              x
            </button>
          </slot>
        </header>
        <section class="modal-body">
          <slot name="body">
            <form action="" >
                <input type="number" placeholder="Номер этажа" v-model="floorNumber">
                <input type="text" placeholder="Название магазина" v-model="NameShop">
                <input type="text" placeholder="Категория магазина" v-model="CategoryShop">
                

                <input type="submit" value="Добавить">
            </form>
          </slot>
         </section>
         <footer class="modal-footer">
            <slot name="footer">
              I'm the default footer!
  
              <button
                type="button"
                class="btn-green"
                @click="close"
              >
                Close me!
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'modal',
    data(){
        return {
            floorNumber: null,
            NameShop: null,
            CategoryShop: null
        }
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
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
    display: flex;
    width: 80%;
    flex-direction: column;
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
</style>