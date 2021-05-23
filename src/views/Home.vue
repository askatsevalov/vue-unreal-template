<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/images/logo.png" />
    <OrganizationsDemo msg="message" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OrganizationsDemo from "@/components/OrganizationsDemo/OrganizationsDemo.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    OrganizationsDemo,
  },
});
</script>
