<script setup>
    import {onMounted} from 'vue'
    import router from "/src/router"
    import { httpCommonFuncs, httpCommonReactiveVars } from '/src/assets/js/http-common.js'
    import Head from '/src/components/HeadComponent.vue'

    onMounted(async () => {
        if(Object.keys(httpCommonReactiveVars.current_curry_info).length == 0){
            var retData = await httpCommonFuncs.read(router.currentRoute.value.params.meat,"curry-detail")
            console.log("retdata ",retData)
            console.log("currentroute ",router.currentRoute.value.params.curry)
            retData = retData.filter(e => e[0]== router.currentRoute.value.params.curry)[0]
            httpCommonReactiveVars.current_curry_info.name = retData[1]
            httpCommonReactiveVars.current_curry_info.youtube = retData[2]
            httpCommonReactiveVars.current_curry_info.ingredients = retData[3].split('\n')
            httpCommonReactiveVars.current_curry_info.preparing = retData[4].split('\n')
            httpCommonReactiveVars.current_curry_info.process = retData[5].split('\n')
            console.log("HttpCommonReactiveVars ",httpCommonReactiveVars.current_curry_info)
        }
    })
</script>
<template>
    <div class="container mx-auto">
        <Head :headInfo="{back: `${$route.params.cat}/${$route.params.meat}`, title: httpCommonReactiveVars.current_curry_info.name}" />
        <div 
            class="grid lg:grid-cols-2 gap-12 lg:p-6">
            <div class="">
                <div 
                    class="relative h-0 overflow-hidden max-w-full w-full mb-6" 
                    style="padding-bottom: 56.25%"
                >
                    <iframe
                        :src="`https://www.youtube.com/embed/${httpCommonReactiveVars.current_curry_info.youtube}`"
                        frameborder="0"
                        allowfullscreen
                        class="absolute top-0 left-0 w-full h-full shadow"
                    ></iframe>
                </div>
                <div class="grid md:grid-cols-2 gap-6 px-6">
                    <div class="">
                        <h4 class="text-lg mb-6 bg-teal-500 p-3 text-white">လိုအပ်သည်များ</h4>
                        <ul class="list-disc list-inside">
                            <li class="leading-10" v-for="(item,index) in httpCommonReactiveVars.current_curry_info.ingredients" :key="index">
                                {{item}}
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <h4 class="text-lg mb-6 bg-teal-500 p-3 text-white">ကြိုတင်ပြင်ဆင်ရန်</h4>
                        <ul class="list-disc list-inside">
                            <li class="leading-10" v-for="(item,index) in httpCommonReactiveVars.current_curry_info.preparing" :key="index">
                                {{item}}
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div class="px-6 lg:px-0 pb-6">
                <h4 class="text-lg mb-6 bg-teal-500 p-3 text-white">ဒီလို ချက်ပါ</h4>
                <ul class="list-disc list-inside">
                    <li class="leading-10" v-for="(item,index) in httpCommonReactiveVars.current_curry_info.process" :key="index">
                        {{item}}
                    </li>
                </ul>
            </div>
            
        </div>
    </div>
</template>