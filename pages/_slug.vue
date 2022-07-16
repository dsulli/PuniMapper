<template>
    <div>
        <div class="container mx-auto">
            <h1>{{ data.name }}</h1>
            <div class="mapContainer" ref="mapContainer">
                <img ref="mapImg" @load="setImgHeight" :src="require(`~/assets/img/${slug}.png`)" />
                <div ref="coords" class="coords">
                    <div 
                        v-for="(crd, idx) in data.coords.length" 
                        :key="idx"
                        :class="{selected: checkIfSelectedById(`${slug}-${idx + 1}`)}"
                        :style="calculatePosStyles(crd)"
                        :id="`${slug}-${idx + 1}`"
                        @click="toggleCoord"
                    ></div>
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
        }
    },
    async asyncData({ params, query }) {
        const slug = params.slug;
        const data = coords[slug];
        let newSelectedCoords = {};
        if(query.selectedCoords != "undefined") {
            let selectedCoordsArr = query.selectedCoords.split(",");
            for(var i = 1; i < data.coords.length + 1;  i++) {
                newSelectedCoords[i] = selectedCoordsArr.find(selectedCoord => selectedCoord == i.toString()) ? true : false;
            }
        }
        
      return { slug, data, paramCoords: newSelectedCoords }
    },
    mounted() {
        if(Object.keys(this.paramCoords).length !== 0) {
            this.selectedCoords =  this.paramCoords;
        } else {
            
            let newSelectedCoords = {};
            for(var i = 1; i < this.data.coords.length + 1; i++) {
                newSelectedCoords[i] = false;
            }
            console.log(newSelectedCoords)
            this.selectedCoords = newSelectedCoords;
        }
        
        
    },
    computed: {
        
    },
    watch: {
        // $route(to, from) {
        //     let selectedCoordsArr = to.query.selectedCoords.split(",");
        //     // check if 
        // }
    },
    methods: {
        checkIfSelectedById(id) {
            let idx = id.slice(id.indexOf("-") + 1, id.length);
            return this.selectedCoords[parseInt(idx)];
        },
        updateQuery() {
            let paramArr = Object.keys(this.selectedCoords).filter(key => this.selectedCoords[key]).join(",");
            this.$router.push({path: this.$route.path, query: { selectedCoords: paramArr }})
        },
        calculatePosStyles(coord) {
            var img = this.$refs.mapContainer;
            if(img && this.imgHeight > 100) {
                
                let convRate = this.imgHeight / this.data.maxCoords;
                let coords = [];
                coords[0] = Math.round(coord[0] * convRate ) / this.imgHeight * 100;
                coords[1] = Math.round(coord[1] * convRate ) / this.imgHeight * 100;
                return {
                    left: coords[0] + "%",
                    top: coords[1] + "%"
                }
            }
            
        },
        setImgHeight(){
            this.imgHeight = this.$refs.mapContainer.offsetHeight;
            let convRate = this.imgHeight / this.data.maxCoords;
            for(var i = 0; i < this.data.coords.length; i++) {
                

                let coords = this.data.coords[i];
                coords[0] = Math.round(coords[0] * convRate ) / this.imgHeight * 100;
                coords[1] = Math.round(coords[1] * convRate ) / this.imgHeight * 100;
                let newDiv = document.getElementById(`${this.slug}-${i + 1}`);
                
                newDiv.style.left = coords[0] + "%";
                newDiv.style.top = coords[1] + "%";

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
        @apply bg-green-700;
        border-radius: 100%;
        height: 18px;
        width: 18px;
        transform: translate(-18px, -18px);
        border: 1px solid white;
    }

    .mapContainer .coords div.selected {
        @apply bg-red-700;
    }

    .mapContainer .coords div.selected:hover {
        background-color: #999;
    }

    .mapContainer .coords div:hover {
        background-color: #FFF;
        cursor: pointer;
    }

</style>