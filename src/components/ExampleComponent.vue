<template>
  <div class="col-grow col-md-8">
    <h5>{{ title.toUpperCase() }}</h5> {{ guestId }}
    <div class="q-my-sm"><q-toggle size="lg" v-model="gaVal" label="GUEST ALLOWS TO BE CONTACTED VIA EMAIL" /></div>
    <div class="row">
      <div class="col-md-6">
        <div class="row">

          <div class="col-3">LAST NAME:</div>
          <div class="col-3">{{ guestData?.LAST_NAME }}</div>
          <div class="col-3">EMAIL ADDRESS:</div>
          <div class="col-3">{{ guestData?.EMAIL_ADDRESS_ }}</div>
          <div class="col-3">FIRST NAME:</div>
          <div class="col-3">{{ guestData?.FIRST_NAME }}</div>
          <div class="col-3">EMAIL STATUS:</div>
          <div class="col-3">{{ guestData?.EMAIL_DELIVERABILITY_STATUS_ }}</div>
        </div>

      </div>
      <div class="col-md-6">

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Meta, GuestData } from './models';
import { useRoute } from 'vue-router';

interface Props {
  title?: string;
  meta: Meta;
  active: boolean;
  guestAllows?: boolean
  guestData?: GuestData
};

const props = ref({
  guestData: {},
  guestAllows: () => false,
});

const route = useRoute()
const guestId = route.params.riid
let gaVal = ref(false)
const title = computed(() => gaVal.value ? "Guest Consent" : "Guest does not consent")

//const guestAllowsChange = (event) => {props.guestAllows = e.target.value}
const clickCount = ref(0);
function increment() {
  clickCount.value += 1;
  return clickCount.value;
}

//const todoCount = computed(() => props.todos.length);
</script>
