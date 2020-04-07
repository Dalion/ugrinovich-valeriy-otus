<template>
    <div class="home">
        <ConfigPanel/>
    </div>
</template>

<script>
  import ConfigPanel from '@/components/ConfigPanel.vue';

  export default {
    name: 'Home',
    components: {
      ConfigPanel,
    },
  };
</script>
