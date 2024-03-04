<script setup lang="ts">

import type {project} from "assets/typescript/types";

const projects:project[] = [
  {
    image: '/images/projects/form-built.png',
    link: 'https://form-built.netlify.app/',
    isSmall: false,
  },
  {
    image: '/images/projects/window-factory.png',
    link: undefined,
    isSmall: false,
  },
  {
    image: '/images/projects/senior-construction.png',
    link: 'https://senior-construction.netlify.app/',
    isSmall: false,
  },
  {
    image: '/images/projects/launchu.png',
    link: undefined,
    isSmall: false,
  },
  {
    image: '/images/projects/release-the-healers.png',
    link: 'https://release-the-healers.netlify.app/',
    isSmall: true,
  },
  {
    image: '/images/projects/hope-church.png',
    link: 'https://hope-church-bpb.netlify.app/',
    isSmall: true,
  },
]


import { onMounted, ref } from 'vue';

const container = ref()

onMounted(() => {
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.5,
      }
  );
  if (container.value) {
    observer.observe(container.value);
  }
});

</script>

<template>
  <section id="home-projects" class="home-projects">
    <div class="center-top-col">
      <div class="left-col">
        <h3 class="opacity-50 white-text">
          Design and Software are my passions
        </h3>
        <h1 class="white-text">
          Some of the best <span class="red-text">projects</span> I've done
        </h1>
      </div>
      <div class="project-container center-all">
        <div ref="container"/>
        <NuxtLink
            v-for="(content, index) in projects"
            :to="content.link"
            :key="index"
            :class="[
                content.isSmall ? 'small-project' : 'large-project',
                'pos-'+ index
                ]
            "
        >
          <NuxtImg :src="content.image" :alt="'project ' + index"/>
          <div></div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>