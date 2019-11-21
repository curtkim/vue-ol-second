<script>
import Tile from 'ol/layer/Tile'
export default {
  name: 'OlTileLayer',
  props: [
    'source',
  ],
  mounted: function(){
    /* eslint-disable */
    console.log('OlTileLayer mounted')
    var layer = new Tile({
      source: this.source
    })
    this.$parent.map.addLayer(layer)
  },
  beforeCreate: function(){
    /* eslint-disable */
    console.log('OlTileLayer beforeCreate')
  },
  render: function(){
    /* eslint-disable */
    console.log('OlTileLayer render')
  },
  methods: {
  }
}
</script>