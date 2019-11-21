<template>
  <div>    
    <ol-map :view='mapView' v-on:view-change='updateMapView'>
      <ol-tile-layer :source='daumImgSource'></ol-tile-layer>
    </ol-map>
  </div>
</template>

<script>
import OlMap from '../components/OlMap.vue'
import OlTileLayer from '../components/OlTileLayer.vue'
import DaumImg from '../ol-daum'
export default {
  components: {
    OlMap, OlTileLayer
  },
  data(){
    return {
      mapView: {
        level: 5,
        center: [195063,442898]
      },
      daumImgSource: new DaumImg(),
    }
  },
  methods: {
    updateMapView: function(view){
      this.mapView = view
    }
  }
}
</script>

<style scoped>
</style>