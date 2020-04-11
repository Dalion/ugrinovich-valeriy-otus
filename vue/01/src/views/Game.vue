<template>
    <div class="d-inline-block" v-cloak>
        <div class="d-flex justify-content-between">
            <router-link to="/">
                <button class="btn btn-link px-4 rounded-0 shadow-sm text-dark">
                    Отмена
                </button>
            </router-link>
            <span>{{timer}}</span>
        </div>
        <Calculator/>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import Calculator from '@/components/Calculator.vue';

  export default {
    name: 'Game',
    components: {
      Calculator,
    },
    computed: {
      ...mapGetters({
        timer: 'getDuration'
      })
    }
  };
</script>