<template>
    <div class="game">
      <Calculator />
    </div>
</template>

<script>
  import Calculator from '@/components/Calculator.vue';

  export default {
    name: 'Game',
    components: {
      Calculator,
    },
  };
</script>