<script setup lang="ts">

import { onMounted, ref } from 'vue';

const item = ref()

onMounted(() => {
  const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.5,
      }
  );
  if (item.value) {
    observer.observe(item.value);
  }
});

</script>

<template>
  <section class="interested">
    <div class="background"></div>
    <div class="container">
      <div class="left-col">
        <h3 class="white-text">
          Lets Connect
        </h3>
        <label>
          or have a look at my <span class="red-text">Socials</span> and <span class="red-text">CV</span>
        </label>
        <h4 class="white-text rev1">
          Email
        </h4>
        <NuxtLink to="mailto:matt.j.doonan@gmail.com">
          <p class="red-text rev2">
            matt.j.doonan@gmail.com
          </p>
        </NuxtLink>
        <h4 ref="item" class="white-text rev3">
          Phone
        </h4>
        <NuxtLink to="tel:021 045 8830">
          <p class="red-text rev4">
            021 045 8830
          </p>
        </NuxtLink>
        <div class="left-row ref5">
          <NuxtLink to="https://www.linkedin.com/in/matthew-doonan-b569a1278/">
            <NuxtImg src="/images/svg/linkedin.svg"/>
          </NuxtLink>
          <button @click="download" class="left-row">
            <NuxtImg src="/images/svg/download.svg"/>
            <span class="white-text opacity-50">
              Download CV
            </span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  methods: {
    download() {
      const fileUrl = '/cv/MattDoonanCV.pdf';
      const anchor = document.createElement('a');
      anchor.href = fileUrl;
      anchor.download = 'MattDoonanCV.pdf';
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    }
  }
}

</script>