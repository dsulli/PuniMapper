<template>
  <div class="flex flex-col md:flex-row min-h-screen">
    <div class=" md:w-auto md:max-w-1/5 bg-stone-900 text-slate-100">
        <div class="p-12">
        <NuxtLink to="/" class="text-2xl font-bold "><span class="text-amber-100">PuniMapper</span></NuxtLink>
        <div class="mt-12 font-bold uppercase text-stone-400">Endwalker</div>
        <ul>
            <li><NuxtLink to="/Labyrinthos" class="text-rose-300 hover:text-rose-100" >Labyrinthos</NuxtLink></li>
            <li><NuxtLink to="/Garlemald" class="text-rose-300 hover:text-rose-100" >Garlemald</NuxtLink></li>
            <li><NuxtLink to="/UltimaThule" class="text-rose-300 hover:text-rose-100" >Ultima Thule</NuxtLink></li>
        </ul>
        <div class="mt-6 font-bold uppercase text-stone-400">Shadowbringers</div>
        <ul>
            <li><NuxtLink to="/AmhAraeng" class="text-rose-300 hover:text-rose-100" >Amh Araeng</NuxtLink></li>
            <li><NuxtLink to="/IlMheg" class="text-rose-300 hover:text-rose-100" >Il Mheg</NuxtLink></li>
        </ul>
        <div class="mt-6 font-bold uppercase text-stone-400">Stormblood</div>
        <ul>
            <li><NuxtLink to="/TheAzimSteppe" class="text-rose-300 hover:text-rose-100" >The Azim Steppe</NuxtLink><li>
            <li><NuxtLink to="/Yanxia" class="text-rose-300 hover:text-rose-100" >Yanxia</NuxtLink></li>
        </ul>
        <div class="mt-6 font-bold uppercase text-stone-400">Heavensward</div>
        <ul>
            <li><NuxtLink to="/CoerthasWesternHighlands" class="text-rose-300 hover:text-rose-100" >Coerthas Western Highlands</NuxtLink></li>
        </ul>
        <div class="mt-6 font-bold uppercase text-stone-400">A Realm Reborn</div>
        <ul>
            <li><NuxtLink to="/CentralThanalan" class="text-rose-300 hover:text-rose-100" >Central Thanalan</NuxtLink></li>
            <li><NuxtLink to="/LowerLaNoscea" class="text-rose-300 hover:text-rose-100" >Lower La Noscea</NuxtLink></li>
            <li><NuxtLink to="/UpperLaNoscea" class="text-rose-300 hover:text-rose-100" >Upper La Noscea</NuxtLink></li>
        </ul>
        </div>
    </div>
    <div class="md:min-w-4/5 w-full bg-stone-800 text-slate-100 py-12">
        <div class="container px-12 mx-auto">
            <Nuxt />
            <div class="mt-12 flex flex-col md:flex-row">
                <p class="md:pr-6">Made by <a href="https://floonxiv.carrd.co/" class="text-rose-300 hover:text-rose-100"  target="_blank">Floon Drif</a> </p>
                <span class="text-stone-600 hidden md:inline-block">&#11201;</span>
                <p class="md:px-6">Map Data from <a href="https://cablemonkey.us/huntmap2/" class="text-rose-300 hover:text-rose-100"  target="_blank">Cable Monkey</a> </p>
                <span class="text-stone-600 hidden md:inline-block">&#11201;</span>
                <p class="md:px-6">Map Images from <a href="https://xivapi.com/" class="text-rose-300 hover:text-rose-100"  target="_blank">xivapi</a> </p>
                <span class="text-stone-600 hidden md:inline-block">&#11201;</span>
                <p class="md:pl-6">Inspired by <a href="https://www.retahgaming.com/ffxiv/hunttraintool.php" class="text-rose-300 hover:text-rose-100" target="_blank">Retah's Train Tool</a></p>
            
            </div>
    <div class="text-stone-400"><p>(C) SQUARE ENIX CO., LTD. All Rights Reserved. FINAL FANTASY is a registered trademark of Square Enix Holdings Co., Ltd. All material used under license.</p></div>
        </div>
    </div>
  </div>
</template>

<style>

body {
  font-family: 'Inter', sans-serif;
}
</style>