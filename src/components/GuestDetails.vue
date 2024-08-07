<template>
  <div class="row">
    <div class="col-md-6">
      <div class="row">				
        <div class="col-5">LAST NAME:</div>
        <div class="col-7">{{ data?.LAST_NAME }}</div>
        <div class="col-5">FIRST NAME:</div>
        <div class="col-7">{{ data?.FIRST_NAME }}</div>
        <div class="col-5">EMAIL ADDRESS:</div>
        <div class="col-7 text-primary">{{ data?.EMAIL_ADDRESS_ }}</div>
        <div class="col-5">EMAIL STATUS:</div>
        <div class="col-7">{{ data?.EMAIL_DELIVERABILITY_STATUS_ }}</div>
      </div>
      
    </div>
    <div class="col-md-6">
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { GuestData } from './models';

const props = defineProps<{data: GuestData|{}}>()
</script>

<style scoped>

</style>
