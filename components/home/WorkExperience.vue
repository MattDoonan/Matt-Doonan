<script setup lang="ts">

import type {work} from "assets/typescript/types";

const workEx:work[] = [
  {
    image: '/images/workXp/logo1.png',
    title: 'Front end web developer',
    date: 'Nov 2023 - Current',
    link: 'https://fromhere.nz/',
  },
  {
    image: '/images/workXp/logo2.png',
    title: 'Bartender',
    date: 'Nov 2022 - Feb 2023',
    link: 'https://16tun.co.nz/'
  },
  {
    image: '/images/workXp/logo3.png',
    title: 'Checkout Operator',
    date: 'Nov 2019 - Feb 2021',
    link: 'https://www.countdown.co.nz/',
  },
]

</script>

<template>
  <section class="work-xp">
    <div class="container left-col">
      <h1 class="white-text">
        Some Past <span class="red-text">Work</span>
      </h1>
      <div class="left-row">
        <article v-for="(work, index) in workEx" :key="index">
          <label class="white-text opacity-50">
            {{work.date}}
          </label>
          <NuxtLink :to="work.link">
            <NuxtImg :src="work.image" :alt="work.title + ' img'"/>
          </NuxtLink>
          <p class="white-text">
            {{work.title}}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>