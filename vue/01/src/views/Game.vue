<template>
    <div class="d-inline-block">
        <div class="d-flex justify-content-between">
            <router-link to="/">
                <button class="btn btn-link px-4 rounded-0 shadow-sm text-dark">
                    Отмена
                </button>
            </router-link>
            <Timer :timer="timer"/>
        </div>
        <Calculator/>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Calculator from '@/components/Calculator.vue';
  import Timer from '@/components/Timer.vue';

  export default {
    name: 'Game',
    components: {
      Calculator,
      Timer,
    },
    computed: {
      ...mapGetters({
        timer: 'getDuration',
      }),
    },
  };
</script>