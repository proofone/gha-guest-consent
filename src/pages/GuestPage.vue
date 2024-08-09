<template>
  <q-page class="row flex-center">
    <div v-if="props.gdLoading" class="col">
      <q-spinner-dots size="lg" color="primary" />
    </div>
    <div v-else-if="props.guestData" class="col-grow col-md-8">
      <h5>{{ title.toUpperCase() }}</h5>
      <div class="q-my-sm">
        <q-toggle size="lg" v-model="props.guestAllows" label="GUEST ALLOWS TO BE CONTACTED VIA EMAIL" />
      </div>
      <GuestDetails :data="props.guestData" />
    </div>
    <div v-else-if="props.gdError" class="text-negative">{{ props.gdError }}</div>
  </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { Meta, GuestData } from '../components/models';
import GuestDetails from '../components/GuestDetails.vue'
import { fetchGuestData } from 'src/utils/utils';

interface Props {
  title?: string;
  meta: Meta;
  active: boolean;
  guestAllows?: boolean
  guestData?: GuestData
};

defineOptions({
  name: 'IndexPage'
});

const meta = ref<Meta>({
  totalCount: 1200
});

const props = reactive({
  guestData: null,
  gdError: null,
  gdLoading: false,
  guestAllows: false,
});

const route = useRoute()
const guestId = route.params.riid
let error = ref("null")
let guestdata = null

onMounted(async () => {
  props.gdLoading = true
  fetchGuestData(guestId, process.env.NODE_ENV === 'development')
    .then(({data, success, error}) => {
      props.gdError = error
      props.guestData = data
      props.gdLoading = false
      props.guestAllows = data.EMAIL_PERMISSION_STATUS_ === 'I'
      console.log(`Succ: ${success} Err: ${error}`)
    })
})

const title = computed(() => props.guestAllows ? "Guest Consent" : "Guest does not consent")


</script>
