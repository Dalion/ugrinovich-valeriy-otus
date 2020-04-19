<template>
    <div class="d-inline-block">
        <div class="d-flex justify-content-between">
            <router-link to="/">
                <button class="btn btn-link px-4 rounded-0 shadow-sm text-dark">
                    Отмена
                </button>
            </router-link>
            <Timer :timer="timer" :onTimerEnd="onTimerEnd"/>
        </div>
        <div class="d-flex mt-5 operands">
            <span class="ml-auto">{{this.expression.firstOperand}}</span>
            <h4 class="mx-2 text-muted">{{this.expression.firstOperator}}</h4>
            <span :class="position === 'left' ? 'active' : ''">
                {{secondOperand}}
            </span>
            <h4 class="mx-2 text-muted">{{this.expression.secondOperator}}</h4>
            <span :class="position === 'right' ? 'active mr-auto' : 'mr-auto'">
                {{thirdOperand}}
            </span>
        </div>
        <div class="d-flex justify-content-around my-3">
            <h3 class="text-muted">= {{this.expression.total}}?</h3>
        </div>
        <Calculator
                :calc="calc"
                :help="help"
                :left="left"
                :right="right"
                :input="input"
        />
        <b-alert
                :show="correctAnswer !== null"
                :variant="correctAnswer ? 'success' : 'danger'"
        >
            {{correctAnswer ? 'Верный ответ!' : 'Неправильный ответ!'}}
        </b-alert>
        <b-alert :show="showHelp" variant="info">
            Я бы хотел Вам чем-то помочь
            <hr/>
            Но лучше вернитесь в школу
        </b-alert>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import Calculator from '@/components/Calculator.vue';
  import Timer from '@/components/Timer.vue';
  import {ADD_STAT, GENERATE_EXPRESSION} from '../store/mutation-types';

  export default {
    name: 'Game',
    components: {
      Calculator,
      Timer,
    },
    data() {
      return {
        secondOperand: '',
        thirdOperand: '',
        correctAnswer: null,
        showHelp: false,
        position: 'left',
        fails: 0,
        success: 0
      };
    },
    methods: {
      calc() {
        const localTotal = eval(`
            ${this.expression.firstOperand}
            ${this.expression.firstOperator}
            ${this.secondOperand ? this.secondOperand : 0}
            ${this.expression.secondOperator}
            ${this.thirdOperand ? this.thirdOperand : 0}
        `);

        if (localTotal === this.expression.total) {
          this.correctAnswer = true;
          this.secondOperand = '';
          this.thirdOperand = '';
          this.success += 1;
          this.$store.commit(GENERATE_EXPRESSION);
        } else {
          this.fails +=1;
          this.correctAnswer = false;
        }
        setTimeout(() => this.correctAnswer = null, 2000);
      },
      help() {
        this.showHelp = true;
        setTimeout(() => this.showHelp = false, 4000);
      },
      left() {
        this.position = 'left';
      },
      right() {
        this.position = 'right';
      },
      input(value) {
        if (this.position === 'left') {
          this.secondOperand += value;
        } else {
          this.thirdOperand += value;
        }
      },
      onkeydown(e) {
        if (e.key === 'Backspace') {
          if (this.position === 'left') {
            this.secondOperand = this.secondOperand ? this.secondOperand.slice(0, -1) : this.secondOperand;
          } else {
            this.thirdOperand = this.thirdOperand ? this.thirdOperand.slice(0, -1) : this.thirdOperand;
          }
        }
      },
      onTimerEnd() {
        const now = new Date();
        this.$store.commit(ADD_STAT, {
          day: `${now.getFullYear()}-${now.getDate()}-${now.getMonth()}`,
          done: this.success,
          total: this.success + this.fails,
          accuracy: (this.success / (this.success + this.fails)) * 100
        });
        this.$router.push('/');
      }
    },
    computed: {
      ...mapGetters({
        timer: 'getDuration',
        expression: 'getExpressionElements',
      }),
    },
    created() {
      this.$store.commit(GENERATE_EXPRESSION);
      document.addEventListener('keydown', this.onkeydown);
    },
    destroyed() {
      document.removeEventListener('keydown', this.onkeydown)
    }
  };
</script>

<style scoped lang="scss">
    .operands {
        max-width: 460px;

        span {
            min-width: 10%;
            font-size: 1.25rem;
            font-weight: bold;
            text-align: center;
            border: none;

            &:not(:first-of-type) {
                border-bottom: 1px solid gray;
            }

            &.active {
                border-bottom: 3px solid blue;
            }
        }
    }
</style>