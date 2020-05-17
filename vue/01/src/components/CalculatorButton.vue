<template>
    <div class="col-3 p-4" v-on:click="() => $emit('click')">
        <button
                v-if="value"
                type="button"
                :class="`btn btn-${variant} btn-lg rounded-circle shadow`"
        >
            {{value}}
        </button>
    </div>
</template>

<script>
  export default {
    name: 'CalculatorButton',
    props: {
      value: String,
      variant: String,
    },
  };
</script>

<style scoped lang="scss">
    .btn {
        width: 48px;
        height: 48px;
    }
</style>
