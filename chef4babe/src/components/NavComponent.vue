<script setup>
    import { routerFuncs } from '/src/router.js'
    import { site_info } from '/src/assets/js/common.js'
</script>
<template>
    <nav class="flex sticky top-0 items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6 cursor-pointer" @click="routerFuncs.gotoPage()">
            <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            <span class="font-semibold text-xl tracking-tight">{{site_info.name}}</span>
        </div>
        <div class="flex w-auto">
            <div>
                <span 
                    class="block lg:inline-block lg:mt-0 text-teal-200 hover:text-white cursor-pointer"
                    @click="routerFuncs.gotoPage()"
                >
                    မူလစာမျက်နှာ
                </span>
            </div>
        </div>
    </nav>
</template>