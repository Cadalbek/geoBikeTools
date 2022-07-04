<template>
  <h2>MapView</h2>
  <div id="map" class="map"></div>
</template>

<script>
import ol from 'openlayers';
export default {
    name: "mapview"
}
var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 2
        })
      });
</script>

<style>
.map {
        height: 800px;
        width: 100%;
      }
</style>