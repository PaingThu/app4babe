<script setup>
    
    import router from "/src/router"
    import {onMounted} from 'vue'
    import { crud, currentCurryInfo, gotoPage } from '/src/assets/js/http-common.js'
    import Head from '/src/components/HeadComponent.vue'

    onMounted(async () => {
        if(Object.keys(currentCurryInfo).length == 0){
            var retData = await crud.read(router.currentRoute.value.params.meat,"curry-detail")
            console.log("retdata ",retData)
            retData = retData.filter(e => e[1]== router.currentRoute.value.params.curry)[0]
            currentCurryInfo.name = retData[1]
            currentCurryInfo.youtube = retData[2]
            currentCurryInfo.ingredients = retData[3]
            currentCurryInfo.preparing = retData[4]
            currentCurryInfo.process = retData[5]
            
        }
    })
</script>
<template>
    <div class="container mx-auto">
        <Head :headInfo="{back: `${$route.params.cat}/${$route.params.meat}`, title: currentCurryInfo.name}" />
        <div 
            v-if="Object.keys(currentCurryInfo).length > 0" 
            class="grid lg:grid-cols-2 gap-12 lg:p-6">
            <div class="">
                <div 
                    class="relative h-0 overflow-hidden max-w-full w-full mb-6" 
                    style="padding-bottom: 56.25%"
                >
                    <iframe
                        :src="`https://www.youtube.com/embed/${currentCurryInfo.youtube}`"
                        frameborder="0"
                        allowfullscreen
                        class="absolute top-0 left-0 w-full h-full shadow"
                    ></iframe>
                </div>
                <div class="grid md:grid-cols-2 gap-6 px-6">
                    <div class="">
                        <h4 class="text-lg mb-6 bg-teal-500 p-3 text-white">လိုအပ်သည်များ</h4>
                        <ul class="list-disc list-inside">
                            <li class="leading-10" v-for="(item,index) in currentCurryInfo.ingredients.split('\n')" :key="index">
                                {{item}}
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <h4 class="text-lg mb-6 bg-teal-500 p-3 text-white">ကြိုတင်ပြင်ဆင်ရန်</h4>
                        <ul class="list-disc list-inside">
                            <li class="leading-10" v-for="(item,index) in currentCurryInfo.preparing.split('\n')" :key="index">
                                {{item}}
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div class="px-6 lg:px-0 pb-6">
                <h4 class="text-lg mb-6 bg-teal-500 p-3 text-white">ဒီလို ချက်ပါ</h4>
                <ul class="list-disc list-inside">
                    <li class="leading-10" v-for="(item,index) in currentCurryInfo.process.split('\n')" :key="index">
                        {{item}}
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
</template>