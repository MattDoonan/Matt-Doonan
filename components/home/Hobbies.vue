<script setup lang="ts">

import WorkingOut from "~/components/home/hobby-content/WorkingOut.vue";
import MoneyMarkets from "~/components/home/hobby-content/MoneyMarkets.vue";
import FilmBuff from "~/components/home/hobby-content/FilmBuff.vue";
</script>

<template>
  <section class="hobbies">
    <div class="col">
      <div class="container">
        <h1 class="black-text text-title">
          Some generic <span class="red-text">hobbies</span> of mine
        </h1>
        <WorkingOut/>
      </div>
      <MoneyMarkets/>
      <div class="container">
        <FilmBuff/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>