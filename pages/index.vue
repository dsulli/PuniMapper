<template>
  <div>
    <h1 class="mb-12 text-3xl text-orange-200">Personal S Rank Mapping</h1>
    <div class="mt-12">
      <img :src="require(`~/assets/img/underconstruction.gif`)" />
      <p>pardon the dust!! under construction -floon</p>
    </div>
    <h2 class="mt-12 text-orange-300 text-2xl mb-2">How to Use</h2>
    <ul class="md:w-3/5 inline-block">
      <li>Click on any dot on the map to mark a location where a B or A rank has been found.</li>
      <li>The dots can be toggled.</li>
      <li>When you have finished mapping, or have made progress and want to pass it on to someone else, click the "Copy Map URL" button. This URL will always show the spots you have marked.</li>
      <li>Save your progress to your browser's local storage by clicking the "Save" button. This lets you tab between zones without losing your work.</li>
    </ul>
    <h2 class="mt-12 text-orange-300 text-2xl mb-2">Known Issues</h2>
    <ul>
      <li>Not mobile compatible yet</li>
      <li>Spawn point accuracy slightly off</li>
      <li>Using back button clears query string</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
<style scoped>
ul {
  @apply relative;
}
li {
  @apply ml-6 text-lg mb-2;
}
li::before {
  content: "\2666";
  @apply text-stone-600 text-lg absolute;
  left: 0;
}
</style>