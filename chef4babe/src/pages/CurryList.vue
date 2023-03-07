<script setup>
    import router from "/src/router"
    import Head from '/src/components/HeadComponent.vue'
    import List from '/src/components/ListComponent.vue'
</script>
<template>
    <div class="container mx-auto">
        <Head :headInfo="{back: `${$route.params.cat}`, title: $route.params.meat}" />
        <List :list_info="{page: 'curry-list', cat:$route.params.cat, sheet: $route.params.meat, sorting:'sort'}" />
    </div>
</template>