<template>
  <q-page class="row justify-center">
    <example-component
      active
      :meta="meta"
      q-r
    ></example-component>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Meta } from 'components/models';
import ExampleComponent from 'components/ExampleComponent.vue';

defineOptions({
  name: 'IndexPage'
});

const meta = ref<Meta>({
  totalCount: 1200
});
</script>
