<template>
  <div>
    <ol-map :view='mapView' v-on:view-change='updateMapView'>
      <ol-tile-layer :source='daumImgSource'/>
      <ol-vector-layer :features='features' :layer-style='vectorStyle'/>
    </ol-map>
  </div>
</template>

<script>
/* eslint-disable */
import OlMap from '../components/OlMap.vue'
import OlTileLayer from '../components/OlTileLayer.vue'
import OlVectorLayer from '../components/OlVectorLayer.vue'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Style from 'ol/style/Style'
import Stroke from 'ol/style/Stroke'
import Fill from 'ol/style/Fill'
import GeoJSON from 'ol/format/GeoJSON'
import DaumImg from '../ol-daum'
/*
let style = [
  new Style({
    stroke: new Stroke({
      color: 'blue',
      width: 3
    }),
    fill: new Fill({
      color: 'rgba(0, 0, 255, 0.3)'
    })
  })
]
*/
let customStyleFunction = function(feature, resolution) {
  return [
    new Style({
      stroke: new Stroke({
        color: 'blue',
        width: 3
      }),
      fill: new Fill({
        color: 'rgba(0, 0, ' + feature.get('value') + ', 1)'
      })
    })
  ];
}
let geojsonObject = {
  'type': 'FeatureCollection',
  'features': [{
    'type': 'Feature',
    'geometry': {
      'type': 'Polygon',
      'coordinates': [
        [[0, 0], [200000, 0],[100000, 100000],[0, 0]]
      ]
    },
    'properties': {
      "value": 10
    }
  }]
};
let samples = new GeoJSON().readFeatures(geojsonObject)

export default {
  components: {
    OlMap, OlTileLayer, OlVectorLayer
  },
  mounted(){
  },
  data(){
    return {
      mapView: {
        level: 13,
        center: [195063,242898]
      },
      daumImgSource: new DaumImg(),
      //vectorSource: new VectorSource({features}),
      features: samples,
      vectorStyle: customStyleFunction,
    }
  },
  methods: {
    updateMapView: function(view){
      this.mapView = view
    },
  },
  beforeDestroy(){
    console.log('beforeDestroy')
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate')
  }
}
</script>

<style scoped>
</style>