<script setup>
    import { gotoPage } from '/src/assets/js/http-common.js'
    const { headInfo } = defineProps(["headInfo"])
</script>
<template>
    <div class="px-6">
        <span 
            class="inline-flex rounded-full mt-3 bg-teal-500 text-white cursor-pointer hover:bg-teal-600 p-2"
            @click="gotoPage(`/${headInfo.back}`)"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            <small class="pr-3">ရှေ့သို့</small> 
        </span>
        <h1 class="text-2xl text-center my-6 lg:mt-0" >{{headInfo.title}}</h1>
    </div>
</template>