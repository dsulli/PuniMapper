<template>
  <div class="flex flex-col md:flex-row min-h-screen">
    <div class=" md:w-auto md:max-w-1/5 bg-stone-900 text-slate-100">
        <div class="p-12">
        <NuxtLink to="/" class="text-2xl font-bold "><span class="text-amber-100">PuniMapper</span></NuxtLink>
        <div class="mt-12 font-bold uppercase text-stone-400">Endwalker</div>
        <ul>
            <li>Labyrinthos</li>
            <li>Garlemald</li>
            <li>Ultima Thule</li>
        </ul>
        <div class="mt-6 font-bold uppercase text-stone-400">Shadowbringers</div>
        <ul>
            <li>Amh Araeng</li>
            <li><NuxtLink to="/IlMheg" class="text-rose-300 hover:text-rose-100" >Il Mheg</NuxtLink></li>
        </ul>
        <div class="mt-6 font-bold uppercase text-stone-400">Stormblood</div>
        <ul>
            <li>The Azim Steppe<li>
            <li>Yanxia</li>
        </ul>
        <div class="mt-6 font-bold uppercase text-stone-400">Heavensward</div>
        <ul>
            <li>Coerthas Western Highlands</li>
        </ul>
        <div class="mt-6 font-bold uppercase text-stone-400">A Realm Reborn</div>
        <ul>
            <li>Central Thanalan</li>
            <li>Lower La Noscea</li>
            <li>Upper La Noscea</li>
        </ul>
        </div>
    </div>
    <div class="md:min-w-4/5 w-full bg-stone-800 text-slate-100 py-12">
        <div class="container px-12 mx-auto">
            <Nuxt />
        </div>
    </div>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}
</style>