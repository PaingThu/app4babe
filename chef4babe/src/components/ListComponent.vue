<script setup>
    import {onMounted, ref} from 'vue'
    import { routerFuncs } from '/src/router.js'
    import { site_info } from '/src/assets/js/common.js'
    import { httpCommonFuncs, httpCommonReactiveVars} from '/src/assets/js/http-common.js'
    import { reactiveVars } from '/src/assets/js/variables.js'

    const item_list = ref([])

    const {list_info} = defineProps(["list_info"])

    const clickItem = (item,title) => {
        console.log("Page ", list_info.page)
        reactiveVars.page_title = title
        list_info.page ? routerFuncs.gotoPage(`/${list_info.sheet}/${item}`) :routerFuncs.gotoPage(`/${item}`)
    }
    const clickDetail = (cInfo) => {
        httpCommonReactiveVars.current_curry_info.name = cInfo[1]
        httpCommonReactiveVars.current_curry_info.youtube = cInfo[2]
        httpCommonReactiveVars.current_curry_info.ingredients = cInfo[3].split('\n')
        httpCommonReactiveVars.current_curry_info.preparing = cInfo[4].split('\n')
        httpCommonReactiveVars.current_curry_info.process = cInfo[5].split('\n')
        console.log(httpCommonReactiveVars.current_curry_info)
        routerFuncs.gotoPage(`/${list_info.cat}/${list_info.sheet}/${cInfo[0]}`)

    }

    onMounted(async () => {
        const retData = await httpCommonFuncs.read(list_info.sheet)
        item_list.value = list_info.sorting ? retData[list_info.sorting]() : retData
    })

</script>

<template>
    <div class="container category-list mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6">
        <div 
            v-for="(item,index) in item_list" :key="index"
            class="each-category p-6 rounded text-center"
        >
            
            <div v-if="list_info.page=='curry-list'">
               <div 
                    class="py-3"
                >
                    <img :src="`https://img.youtube.com/vi/${item[2]}/hqdefault.jpg`" alt="">
                </div>
                <span class="block">{{item[1]}}</span>
                <small class="block hover:text-teal-500 cursor-pointer mt-3" @click="clickDetail(item_list[index])">အသေးစိတ်ကြည့်ရန်</small>
            </div>
            <div v-else @click="clickItem(item[0],item[1])" class="cursor-pointer">
                <img :src="`/img/${item[2]}.svg`" class="mb-3 p-3 shadow rounded-full" alt="">
                <span  class="hover:text-teal-500" >{{item[1]}}</span>
            </div>
            
            
        </div>
    </div>
</template>