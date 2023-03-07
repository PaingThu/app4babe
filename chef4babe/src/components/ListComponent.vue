<script setup>
    import {onMounted, ref} from 'vue'
    import { site_info } from '/src/assets/js/common.js'
    import { crud, gotoPage, currentCurryInfo } from '/src/assets/js/http-common.js'

    const item_list = ref([])

    const {list_info} = defineProps(["list_info"])

    const clickItem = (item) => {
        console.log("Page ", list_info.page)
        list_info.page ? gotoPage(`/${list_info.sheet}/${item}`) :gotoPage(`/${item}`)
    }
    const clickDetail = (cInfo) => {
        currentCurryInfo.name = cInfo[1]
        currentCurryInfo.youtube = cInfo[2]
        currentCurryInfo.ingredients = cInfo[3]
        currentCurryInfo.preparing = cInfo[4]
        currentCurryInfo.process = cInfo[5]
        console.log(currentCurryInfo)
        gotoPage(`/${list_info.cat}/${list_info.sheet}/${cInfo[1]}`)

    }

    onMounted(async () => {
        const retData = await crud.read(list_info.sheet,list_info.page)
        item_list.value = list_info.sorting ? retData[list_info.sorting]() : retData
    })

</script>

<template>
    <div class="container category-list mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-6">
        <div 
            v-for="(item,index) in item_list" :key="index"
            class="each-category p-6 rounded shadow text-center"
        >
            
            <div v-if="list_info.page=='curry-list'">
               <div 
                    class="relative h-0 overflow-hidden max-w-full w-full mb-6" 
                    style="padding-bottom: 56.25%"
                >
                    <iframe
                        :src="`https://www.youtube.com/embed/${item[2]}`"
                        frameborder="0"
                        allowfullscreen
                        class="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
                <span class="block">{{item[1]}}</span>
                <small class="block hover:text-teal-500 cursor-pointer mt-3" @click="clickDetail(item_list[index])">အသေးစိတ်ကြည့်ရန်</small>
            </div>
            <div v-else @click="clickItem(item)" class="cursor-pointer">
                <img src="" class="mb-3" alt="">
                <span  class="hover:text-teal-500">{{item}}</span>
            </div>
            
            
        </div>
    </div>
</template>