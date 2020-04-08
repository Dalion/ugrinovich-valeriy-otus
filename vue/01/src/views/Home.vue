<template>
    <div class="d-inline-block text-left">
        <h1>Привет!</h1>
        <div class="my-5">
            <h6>Добро пожаловать на {{day}} тренировочный день</h6>
            <h6 v-if="lastResult">Ваш последний результат - решено {{lastResult.done}} из {{lastResult.total}}</h6>
            <h6 v-if="avgAccuracy">Общая точность {{avgAccuracy}}%.</h6>
        </div>

        <ConfigPanel/>

        <div class="d-flex mt-5 justify-content-end">
            <router-link to="/game">
                <button class="btn btn-link px-4 rounded-0 shadow-sm text-dark">
                    Play!
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
  import ConfigPanel from '@/components/ConfigPanel.vue';

  export default {
    name: 'Home',
    computed: {
      day () {
        return this.$store.getters.getTrainingDay
      },
      lastResult () {
        return this.$store.getters.lastResult
      },
      avgAccuracy () {
        return this.$store.getters.avgAccuracy
      }
    },
    components: {
      ConfigPanel,
    },
  };
</script>

<style lang="scss">
    .home {
    }
</style>