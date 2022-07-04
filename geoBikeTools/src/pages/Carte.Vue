<template>
    <NavBar></NavBar>
    <MapView></MapView>
</template>

<script>
    import NavBar from '../components/NavBar.vue';
    import MapView from '../components/MapView.vue';


    export default {
    name: "carte",
        components: {
        NavBar,
        MapView
    }
}
</script>

<style>

</style>