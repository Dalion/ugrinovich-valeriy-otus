<template>
    <div class="d-inline-block">
        <div class="row">
            <calculator-button value="1" variant="warning" />
            <calculator-button value="2" variant="warning" />
            <calculator-button value="3" variant="warning" />
            <calculator-button value="&lt;" variant="secondary" />
        </div>
        <div class="row">
            <calculator-button value="4" variant="warning" />
            <calculator-button value="5" variant="warning" />
            <calculator-button value="6" variant="warning" />
            <calculator-button value="&gt;" variant="secondary" />
        </div>
        <div class="row">
            <calculator-button value="7" variant="warning" />
            <calculator-button value="8" variant="warning" />
            <calculator-button value="9" variant="warning" />
            <calculator-button value="?" variant="secondary" />
        </div>
        <div class="row">
            <calculator-button value="" variant="link" />
            <calculator-button value="0" variant="warning" />
            <calculator-button value="" variant="link" />
            <calculator-button value="=" variant="secondary" />
        </div>
    </div>
</template>

<script>
  import CalculatorButton from '@/components/CalculatorButton.vue';

  export default {
    name: 'Calculator',
    components: {
      CalculatorButton
    },
    props: {},
  };
</script>

<style scoped lang="scss">
</style>
