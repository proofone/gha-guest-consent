<template>
  <q-layout view="hHh Lpr lFr">
    <q-header class="bg-secondary">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title><q-btn flat no-caps size="lg" to="/">Guest Consent</q-btn>
           <q-badge color="orange" text-color="black">demo</q-badge>
        </q-toolbar-title>

        <div class="gt-sm q-mr-sm" style="font-size: small;">
          Quasar v{{ $q.version }}
        </div>
        <q-btn flat dense round aria-label="Settings"
          @click="toggleRightDrawer">
          <q-avatar><img src="~assets/images/transparent_weblogo_pushkar.png" size="5vh" alt="logo"/></q-avatar>
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label
          header
        >
          Quasar Links (to be removed in production...)
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-drawer v-model="rightDrawerOpen" side="right" bordered>
      <q-list>
        <q-item-label header>Settings</q-item-label>
        <q-item>
          <q-item-section>
            <q-item-label overline>Primary color</q-item-label>
            <q-item-label>
              <q-color no-header-tabs
                v-model="styleSettings.colors.primary"
                />
            </q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-my-xl q-py-md">
          <q-item-section>
            <q-item-label overline>Secondary color</q-item-label>
            <q-item-label>
              <q-color no-header-tabs
                v-model="styleSettings.colors.secondary"
                />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container class="q-px-sm">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import { getCssVar, setCssVar } from 'quasar';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';

defineOptions({
  name: 'MainLayout'
});

const linksList: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

const leftDrawerOpen = ref(false);
const rightDrawerOpen = ref(false);

const styleSettings = reactive({
  colors: {
    primary: getCssVar('primary'),
    secondary: getCssVar('secondary'),
  }
})
watch(styleSettings,
  (value, oldvalue) => {
    for (const [key, val] of Object.entries(value.colors)) {
      setCssVar(key, val)
    }
  }
)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
function toggleRightDrawer () {
  rightDrawerOpen.value = !rightDrawerOpen.value;
}

onMounted(()=> console.log("mounted, primary:" + styleSettings.colors.primary)
)
</script>
