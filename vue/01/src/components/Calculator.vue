<template>
    <div class="d-inline-block">
        <div class="row">
            <calculator-button value="1" variant="warning" @click="input('1')"/>
            <calculator-button value="2" variant="warning" @click="input('2')"/>
            <calculator-button value="3" variant="warning" @click="input('3')"/>
            <calculator-button value="&lt;" variant="secondary" @click="left"/>
        </div>
        <div class="row">
            <calculator-button value="4" variant="warning" @click="input('4')"/>
            <calculator-button value="5" variant="warning" @click="input('5')"/>
            <calculator-button value="6" variant="warning" @click="input('6')"/>
            <calculator-button value="&gt;" variant="secondary" @click="right"/>
        </div>
        <div class="row">
            <calculator-button value="7" variant="warning" @click="input('7')"/>
            <calculator-button value="8" variant="warning" @click="input('8')"/>
            <calculator-button value="9" variant="warning" @click="input('9')"/>
            <calculator-button value="?" variant="secondary" @click="help"/>
        </div>
        <div class="row">
            <calculator-button value="" variant="link"/>
            <calculator-button value="0" variant="warning" @click="input('0')"/>
            <calculator-button value="" variant="link"/>
            <calculator-button value="=" variant="secondary" @click="calc"/>
        </div>
    </div>
</template>

<script>
  import CalculatorButton from '@/components/CalculatorButton.vue';

  export default {
    name: 'Calculator',
    components: {
      CalculatorButton,
    },
    props: [
        'left',
        'right',
        'help',
        'calc',
        'input'
    ],
  };
</script>

<style scoped lang="scss">
</style>
