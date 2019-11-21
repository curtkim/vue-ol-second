<template>
  <div class="map" tabindex="0">
    <slot/>
  </div>
</template>

<script>
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import Zoom from 'ol/control/Zoom'
export default {
  name: 'BasicMap',
  props: [
    'view',
    'interaction',
  ],
  created: function(){
    this.map = new Map({
      //target: this.$el,
      view: new View({
        center: this.view.center,
        zoom: 14 - this.view.level,
        maxZoom: 14,
        maxResolution: 2048, // 14level(zoom=0)에서 1px은 2048m와 같다
      }),
      controls: [
        new Zoom()
      ]
    })
    /* eslint-disable */
    console.log('olmap created')
  },
  mounted: function(){
    /* eslint-disable */
    console.log('olmap mounted')
    this.map.setTarget(this.$el)
    if( this.interaction) {
      console.log(this.interaction)
      this.map.addInteraction(this.interaction)
    }
    let _self = this
    this.map.getView().on('change', function(e){
      //console.log('changed', e.target.getCenter(), 14 - e.target.getZoom())
      _self.viewChange({
        center: e.target.getCenter(),
        level: 14 - e.target.getZoom()
      })
    })
  },
  methods: {
    viewChange: function(view){
      this.$emit('view-change', view)
    }
  }
}
</script>

<style scoped>
</style>