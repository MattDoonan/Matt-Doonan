<script setup lang="ts">

</script>

<template>
  <footer>
    <NuxtLink to="https://www.linkedin.com/in/matthew-doonan-b569a1278/">
      <NuxtImg src="/images/svg/linkedin-low-op.svg"/>
    </NuxtLink>
    <button @click="download">
      <NuxtImg src="/images/svg/download-low-op.svg"/>
    </button>
  </footer>
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