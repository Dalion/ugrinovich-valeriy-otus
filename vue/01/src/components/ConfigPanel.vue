<template>
    <div class="config-panel">
        <h4>Настройки</h4>
        <div class="form-group my-3">
            <div class="d-flex justify-content-between">
                <h5 class="mb-0">1</h5>
                <h5 class="mb-0">15</h5>
            </div>
            <input type="range" class="form-control-range" id="durationControlRange"
                   min="1" max="15" :value="settings.duration/60" v-on:change="this.setDuration">
            <label for="durationControlRange" class="mt-3">Длительность {{settings.duration/60}} минут</label>
        </div>
        <div class="form-group my-3">
            <div class="d-flex justify-content-between">
                <h5 class="mb-0">1</h5>
                <h5 class="mb-0">10</h5>
            </div>
            <input type="range" class="form-control-range" id="difficultControlRange"
                   min="1" max="10" :value="settings.difficult" v-on:change="this.setDifficult">
            <label for="difficultControlRange" class="mt-3">Сложность {{settings.difficult}}</label>
        </div>
        <div class="form-check my-2">
            <input class="form-check-input" type="checkbox" :checked="settings.operations.addition" id="additionCheck">
            <label class="form-check-label ml-3" for="additionCheck">
                Сложение
            </label>
        </div>
        <div class="form-check my-2">
            <input class="form-check-input" type="checkbox"
                   :checked="settings.operations.subtraction" v-on:change="this.toggleSubtraction" id="subtractionCheck">
            <label class="form-check-label ml-3" for="subtractionCheck">
                Вычитание
            </label>
        </div>
        <div class="form-check my-2">
            <input class="form-check-input" type="checkbox"
                   :checked="settings.operations.division" v-on:change="this.toggleDivision" id="divisionCheck">
            <label class="form-check-label ml-3" for="divisionCheck">
                Деление
            </label>
        </div>
        <div class="form-check my-2">
            <input class="form-check-input" type="checkbox"
                   :checked="settings.operations.multiplication" v-on:change="this.toggleMultiplication" id="multiplicationCheck">
            <label class="form-check-label ml-3" for="multiplicationCheck">
                Умножение
            </label>
        </div>
        <div class="form-check my-2">
            <input class="form-check-input" type="checkbox"
                   :checked="settings.operations.exponentiation" v-on:change="this.toggleExponentiation" id="exponentiationCheck">
            <label class="form-check-label ml-3" for="exponentiationCheck">
                Возведение в степень
            </label>
        </div>
    </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  import {
    SET_DIFFICULT,
    SET_DURATION,
    TOGGLE_ADDITION,
    TOGGLE_DIVISION, TOGGLE_EXPONENTIATION, TOGGLE_MULTIPLICATION,
    TOGGLE_SUBTRACTION,
  } from '../store/mutation-types';

  export default {
    name: 'ConfigPanel',
    computed: {
      settings() {
        return this.$store.state.settings;
      },
    },
    methods: {
      ...mapMutations({
        setDuration: SET_DURATION,
        setDifficult: SET_DIFFICULT,
        toggleAddition: TOGGLE_ADDITION,
        toggleSubtraction: TOGGLE_SUBTRACTION,
        toggleDivision: TOGGLE_DIVISION,
        toggleMultiplication: TOGGLE_MULTIPLICATION,
        toggleExponentiation: TOGGLE_EXPONENTIATION,
      })
    }
  };
</script>

<style scoped lang="scss">
    input[type=checkbox] {
        transform: scale(1.4);
    }
</style>
