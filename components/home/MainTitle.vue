<script setup lang="ts">

</script>

<template>
  <section class="title">
    <div class="center-bottom-row">
      <h1 class="white-text">
        Welcome
      </h1>
      <h1 class="white-text">
        I'm Matt
      </h1>
    </div>
    <div class="space-between-col">
      <div class="center-top-col">
        <label class="red-text">
          Software Engineering
        </label>
        <label class="white-text opacity-70">
          graduate From the
        </label>
        <label class="white-text opacity-70">
          University of Canterbury
        </label>
      </div>
      <button @click="scroll">
        <NuxtImg src="/images/svg/arrows.svg" alt="arrows"/>
      </button>
    </div>
  </section>
</template>

<script lang="ts">

export default {
  methods: {
    scroll() {
      const targetElement = document.getElementById("home-projects");
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          targetElement.focus();
          targetElement.click();
        }, 500)
      }
    }
  }
}

</script>