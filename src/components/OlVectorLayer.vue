<script>
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
export default {
  name: 'OlVectorLayer',
  props: [
    'layerSource',
    'features',
    'layerStyle',
  ],
  mounted: function(){
    /* eslint-disable */
    console.log('OlVectorLayer mounted')
    let source = this.features ? new VectorSource({features: this.features}) : this.layerSource
    let layer = new VectorLayer({
        title: 'vector',
        source: source,
        style: this.layerStyle,
        opacity: 0.3,
      })
    this.$parent.map.addLayer(layer)
    this.layer = layer
    this.source = source
  },
  beforeCreate: function(){
    /* eslint-disable */
    console.log('OlVectorLayer beforeCreate')
  },
  render: function(){
    /* eslint-disable */
    console.log('OlVectorLayer render')
  },
  methods: {
  },
  watch: {
    features(){
      this.source.clear()
      this.source.addFeatures(this.features)
    }
  }
}
</script>