<template>
    <div class="timer">
        <span>{{minutes}}:{{seconds}}</span>
    </div>
</template>

<script>

  export default {
    name: 'Timer',
    props: ['timer'],
    data () {
      return {
        timerLocal: this.timer
      }
    },
    computed: {
      minutes() {
        return Math.floor(this.timerLocal/60);
      },
      seconds() {
        return this.timerLocal%60 < 10 ? ('0' + this.timerLocal%60) : this.timerLocal%60
      }
    },
    watch: {
      timerLocal: {
        handler(value) {
          if (value > 0) {
            setTimeout(() => {
              this.timerLocal--;
            }, 1000);
          }
        },
        immediate: true
      }
    }
  };
</script>

<style scoped lang="scss">
    .timer {
        padding: .375rem .75rem .375rem 2rem;
        border: 1px solid black;
        border-right: 18px solid blue;
        background-color: #e9ecef;

        span {
            margin: 0;
            font-size: 1rem;
            line-height: 1.5;
        }
    }
</style>