<template>
    <div class="mx-auto">
        <router-link to="/">Отмена</router-link>
        <Calculator/>
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