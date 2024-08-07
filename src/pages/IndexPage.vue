<template>
  <q-page class="row justify-center">
    <div class="col-md-8">
      <h5>Home</h5>
      <div class="q-mb-md">Try these examples:</div>
      <q-list bordered separator>
        <q-item to="/guests/3306938825"><q-item-section>Example 1</q-item-section></q-item>
        <q-item to="/guests/3306938845"><q-item-section>Example 2</q-item-section></q-item>
        <q-item to="/guests/4103024185"><q-item-section>Example 3</q-item-section></q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Meta } from 'components/models';

defineOptions({
  name: 'IndexPage'
});

const meta = ref<Meta>({
  totalCount: 1200
});
</script>
