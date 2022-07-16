<template>
    <div>
        <h1 class="mb-12 text-3xl text-orange-200">{{ data.name }}</h1>
        <div class="flex flex-col md:flex-row">
            <div class="mapContainer" ref="mapContainer">
                <img ref="mapImg" @load="imgLoaded" :src="require(`~/assets/img/${slug}.png`)" />
                <div ref="coords" class="coords">
                    <div 
                        v-for="(crd, idx) in data.coords.length" 
                        :key="idx"
                        :class="{selected: checkIfSelectedById(`${slug}-${idx + 1}`)}"
                        
                        :id="`${slug}-${idx + 1}`"
                        @click="toggleCoord"
                    ></div>
                </div>
            </div>
            <div class="pl-12">
                <div> 
                    <button 
                        class="text-center w-64 font-medium border-2 border-rose-300 text-rose-300 hover:bg-rose-300 hover:text-slate-800 rounded-lg text-xl px-8 py-2"
                        @click="copyUrl"
                    >
                        Copy Map URL
                    </button>
                </div>
                <div class="mt-4"> 
                    <button 
                        class="text-center w-64 font-medium border-2 border-rose-300 text-rose-300 hover:bg-rose-300 hover:text-slate-800 rounded-lg text-xl px-8 py-2"
                        @click="saveCoords"
                    >
                        Save
                    </button>
                </div>
                <div class="mt-4"> 
                    <button 
                        class="text-center w-64 font-medium border-2 border-rose-300 text-rose-300 hover:bg-rose-300 hover:text-slate-800 rounded-lg text-xl px-8 py-2"
                        @click="clearCoords"
                    >
                        Clear
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import coords from '../static/coordinates.json'
  export default {
    data() {
        return {
            selectedCoords: {},
            spawnPoint: null,
            imgHeight: 0,
            paramCoords: {},
            imgIsLoaded: false
        }
    },
    async asyncData({ params }) {
        const slug = params.slug;
        const data = coords[slug];
        
      return { slug, data }
    },
    beforeMount() {
        let newSelectedCoords = {};
        if(typeof this.$route.query.spawnPoint !== "undefined") {
            for(var i = 1; i < this.data.coords.length + 1; i++) {
                if(i.toString() == this.$route.query.spawnPoint) {
                    newSelectedCoords[i] = false;
                } else {
                    newSelectedCoords[i] = true;
                }
                
            }
        } else if(typeof this.$route.query.selectedCoords !== "undefined") {
            let selectedCoordsArr = this.$route.query.selectedCoords.split(",");
            for(var i = 1; i < this.data.coords.length + 1;  i++) {
                newSelectedCoords[i] = selectedCoordsArr.find(selectedCoord => selectedCoord == i.toString()) ? true : false;
            }
        }
        this.paramCoords = newSelectedCoords;
    },
    mounted() {
        let lsObj = window.localStorage.getItem(`${this.slug}-coords`);
        if(typeof this.paramCoords !== "undefined" && Object.keys(this.paramCoords).length !== 0) {
            this.selectedCoords =  this.paramCoords;
        } else if (lsObj !== null) {
            this.selectedCoords = JSON.parse(lsObj);
            
        } else {
            
            let newSelectedCoords = {};
            for(var i = 1; i < this.data.coords.length + 1; i++) {
                newSelectedCoords[i] = false;
            }
            this.selectedCoords = newSelectedCoords;
        }
        this.updateQuery();
        this.checkForSpawnPoint();
        
    },
    computed: {
        isFullyMapped() {
            let unselectedList = Object.values(this.paramCoords).filter((crd) => crd === false);
            return unselectedList.length === 1 ? true : false;
        },
    },
    methods: {
        checkForSpawnPoint() {
            if(this.isFullyMapped) {
                let foundPoint = Object.keys(this.paramCoords).find((crd) => this.paramCoords[crd] === false);
                this.spawnPoint = foundPoint;
            }
            
           
        },
        checkIfSelectedById(id) {
            let idx = id.slice(id.indexOf("-") + 1, id.length);
            return this.selectedCoords[parseInt(idx)];
        },
        updateQuery() {
            if(typeof this.selectedCoords !== "undefined") {
                 let paramArr = Object.keys(this.selectedCoords).filter(key => this.selectedCoords[key]).join(",");
                this.$router.push({path: this.$route.path, query: { selectedCoords: paramArr }})
            }
           
        },
        imgLoaded() {
            this.imgIsLoaded = true;
            this.setImgHeight();
            
        },
        setImgHeight(){
            this.imgHeight = this.$refs.mapImg.offsetHeight - 20;
            let convRate = this.imgHeight / this.data.maxCoords;
            for(var i = 0; i < this.data.coords.length; i++) {
                let newCoords = [];

                let coords = this.data.coords[i];
                newCoords[0] = Math.round(coords[0] * convRate ) / this.imgHeight * 100;
                newCoords[1] = Math.round(coords[1] * convRate ) / this.imgHeight * 100;
                let newDiv = document.getElementById(`${this.slug}-${i + 1}`);
                
                newDiv.style.left = newCoords[0] + "%";
                newDiv.style.top = newCoords[1] + "%";

            }
        },
        toggleCoord(e) {
            let id = e.target.id;
            let idx = id.slice(id.indexOf("-") + 1, id.length);

            if(this.selectedCoords[parseInt(idx)]) {
                this.selectedCoords[parseInt(idx)] = false;
                
            } else {
                this.selectedCoords[parseInt(idx)] = true;
            }
            this.updateQuery();
            this.checkForSpawnPoint();
        },
        copyUrl() {
            navigator.clipboard.writeText(window.location.href);
        },
        saveCoords() {
            localStorage.setItem(`${this.slug}-coords`, JSON.stringify(this.selectedCoords));
        },
        clearCoords() {
            let newSelectedCoords = {};
            for(var i = 1; i < this.data.coords.length + 1; i++) {
                newSelectedCoords[i] = false;
            }
            this.selectedCoords = newSelectedCoords;
            this.updateQuery();
        }
    }
  }
</script>

<style>
    .mapContainer {
        position: relative;
        display: inline-block;
    }

    .mapContainer img {
        max-width: 100%;
    }

    .mapContainer .coords div {
        position: absolute;
        z-index: 2;
        @apply bg-teal-700;
        border-radius: 100%;
        height: 18px;
        width: 18px;
        transform: translate(-18px, -18px);
        border: 1px solid white;
    }

    .mapContainer .coords div.selected {
        @apply bg-rose-800;
    }

    .mapContainer .coords div.selected:hover {
        background-color: #999;
    }

    .mapContainer .coords div:hover {
        background-color: #FFF;
        cursor: pointer;
    }

</style>