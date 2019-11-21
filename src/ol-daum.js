import TileImage from 'ol/source/TileImage'
import TileGrid from 'ol/tilegrid/TileGrid'

function is_high_resolution_screen() {
  return window.devicePixelRatio > 1;
}

class DaumImg extends TileImage {
  constructor(opt_options) {
    const options = opt_options || {};
    var resolutions = [];
    for(var i = 14; i >= 1; i--)
      resolutions.push(Math.pow(2, i-3))
    var maxExtent = [-30000-Math.pow(2,19)*2, -60000-Math.pow(2,19), -30000+Math.pow(2,19)*3, -60000+Math.pow(2, 19)*3]; // minx miny maxx maxy
    var tilePixelRatio = options.tilePixelRatio || is_high_resolution_screen() ? 2 : 1;

    super({
      attributions: options.attributions,
      cacheSize: options.cacheSize,
      crossOrigin: options.crossOrigin,
      opaque: options.opaque,
      //projection: projection,
      reprojectionErrorThreshold: options.reprojectionErrorThreshold,
      tileGrid: new TileGrid({
        extent: maxExtent,
        origin: [-30000, -60000],
        resolutions: resolutions
      }),
      tileLoadFunction: options.tileLoadFunction,
      tilePixelRatio: tilePixelRatio,
      tileUrlFunction: function(coordinate) {
        if (coordinate === null) return undefined;
        var z = 14-coordinate[0];
        var x = coordinate[1];
        var y = coordinate[2];
        var idx = x % 4;
        if(idx < 0 ) idx = idx+4;
        var map_type = tilePixelRatio >=2 ? 'map_2d_hd' : 'map_2d';
        var tileVersion = '1807hsm'
        var url = 'http://map' + idx +'.daumcdn.net/' + map_type + '/'+ tileVersion +'/L'+z+'/'+ y +'/'+x +'.png';
        return url;
      },
      url: options.url,
      urls: options.urls,
      wrapX: options.wrapX !== undefined ? options.wrapX : true,
      transition: options.transition
    });
  }
}

export default DaumImg