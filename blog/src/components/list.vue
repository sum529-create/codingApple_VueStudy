<template>
  <div>
    <div v-for="(item,i) in blogData" :key="i">
        <h5 @click="$router.push(`/detail/${i}`)" style="cursor:pointer">{{blogData[i].title}}</h5>
        <router-link :to="`/detail/${ i }`">
            <h5>{{blogData[i].title}}</h5>
        </router-link>
        <p>{{blogData[i].date}}</p>
    </div>
  </div>
</template>

<script>
export default {
    name:'List',
    props:{
        blogData:Array
    }
}
</script>

<style>

</style>