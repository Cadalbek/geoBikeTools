<template>
  <h2>MapViewer Template</h2>
  <div id="map" class="map"></div>
</template>

<script>
  import ol from 'openlayers';
  export default {
    name: "mapview",
    components: {},
    props: {},
    mounted() {
      var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM({
              url:'	https://{a-c}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
              crossOigin : null
            })
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([4.83, 45.76]),
          zoom: 12
        })
      });
    }
  }
</script>

<style>
  .map {
    height: 700px;
    width: 100%;
  }
</style>