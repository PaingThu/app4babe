<script setup>
    import CategoryList from '/src/pages/CategoryList.vue'
    import MeatList from '/src/pages/MeatList.vue'
    import CurryList from '/src/pages/CurryList.vue'
    import CurryDetail from '/src/pages/CurryDetail.vue'
</script>

<template>
    <div>
        <CategoryList v-if="$route.name=='home'"/>
        <MeatList v-if="$route.name=='meat-list'"/>
        <CurryList v-if="$route.name=='curry-list'"/>
        <CurryDetail v-if="$route.name=='curry-detail'"/>
    </div>
</template>
