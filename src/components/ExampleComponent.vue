<template>
  <q-spinner-dots v-if="props.gdLoading" size="lg" color="primary" class="items-center q-my-lg"/>
  <div v-else-if="props.guestData" class="col-grow col-md-8">
    <h5>{{ title.toUpperCase() }}</h5>
    <div class="q-my-sm">
      <q-toggle size="lg" v-model="props.guestAllows" label="GUEST ALLOWS TO BE CONTACTED VIA EMAIL" />
    </div>
    <GuestDetails :data="props.guestData"/>
  </div>
  <div v-else-if="props.gdError" class="text-negative">{{ props.gdError }}</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Meta, GuestData } from './models';
import { useRoute } from 'vue-router';
import GuestDetails from './GuestDetails.vue'
import { fetchGuestData } from 'src/utils/utils';

interface Props {
  title?: string;
  meta: Meta;
  active: boolean;
  guestAllows?: boolean
  guestData?: GuestData
};

const props = ref({
  guestData: null,
  gdError: null,
  gdLoading: false,
  guestAllows: false,
});

const route = useRoute()
const guestId = route.params.riid
const loading = ref(false)
let error = ref("null")
let guestdata = null

onMounted(async () => {
  props.value.gdLoading = true
  fetchGuestData(guestId, process.env.NODE_ENV === 'development')
    .then(({data, success, error}) => {
      props.value.gdError = error
      props.value.guestData = data
      props.value.gdLoading = false
      console.log(`Succ: ${success} Err: ${error}`)
    })
})

const title = computed(() => props.value.guestAllows ? "Guest Consent" : "Guest does not consent")


//const guestAllowsChange = (event) => {props.guestAllows = e.target.value}
const clickCount = ref(0);
function increment() {
  clickCount.value += 1;
  return clickCount.value;
}

//const todoCount = computed(() => props.todos.length);
</script>
