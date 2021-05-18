<template>
  <component :is="layout">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </component>
</template>

<script lang="ts">
import Default from "@/layouts/Default.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  components: { Default },
  computed: {
    layout() {
      return this.$route.meta.layout || "Default";
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-leave-active {
  transition-duration: 0s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
