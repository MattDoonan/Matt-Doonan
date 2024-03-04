<script setup lang="ts">

const topPicks = "Apocalypse Now \n" +
    "Green Mile\n" +
    "Interstellar \n" +
    "Star Wars (Empire)\n" +
    "The Shawshank Redemption\n"

</script>

<template>
  <article class="film-buff">
    <div class="row">
      <div class="col">
        <NuxtImg src="/images/hobbies/apoc.png"/>
        <NuxtImg src="/images/hobbies/green-mile.png"/>
      </div>
      <div class="col">
        <h3 class="black-text">
          Film Buff
        </h3>
        <p class="black-text opacity-70">
          I'm a big fan of movies. I enjoy watching them in my free time and  with friends. I just don’t like the scary ones.
        </p>
        <NuxtImg src="/images/hobbies/star-wars.png"/>
        <h4 class="black-text">
          My <span class="red-text">Top</span> Picks
        </h4>
        <label class="black-text opacity-70">
          {{topPicks}}
        </label>
      </div>
    </div>
  </article>
</template>

<style scoped>

</style>