<script setup>
    import router from "/src/router"
    import Head from '/src/components/HeadComponent.vue'
    import List from '/src/components/ListComponent.vue'
</script>
<template>
    <div class="container mx-auto">
        
        <Head :headInfo="{back: '', title: $route.params.cat}" />
        <List :list_info="{page: 'meat-list', sheet: $route.params.cat, sorting:'sort'}" />
    </div>
</template>