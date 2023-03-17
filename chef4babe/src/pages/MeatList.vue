<script setup>
    import {onMounted} from "vue"
    import router from "/src/router"
    import Head from '/src/components/HeadComponent.vue'
    import List from '/src/components/ListComponent.vue'
    import { httpCommonFuncs } from '/src/assets/js/http-common.js'
    import { reactiveVars } from '/src/assets/js/variables.js'

    onMounted(async() => {
        const sheet = "category_list"
        const retData = await httpCommonFuncs.read(sheet)
        reactiveVars.page_title = retData.filter(e=>e[0] == router.currentRoute.value.params.cat)[0][1]
    })
</script>
<template>
    <div class="container mx-auto">
        
        <Head :headInfo="{back: '', title: reactiveVars.page_title}" />
        <List :list_info="{page: 'meat-list', sheet: $route.params.cat, sorting:'sort'}" />
    </div>
</template>