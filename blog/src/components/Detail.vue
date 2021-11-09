<template>
<!-- 현재 URL 정보는 $route에 담겨있음 -->
  <div>
    <h4>{{blogData[$route.params.id].title}}</h4>
    <p>{{blogData[$route.params.id].content}}</p>
    <p>{{blogData[$route.params.id].date}}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'Detail',
    props:{
        blogData:Array,
    }
}
</script>

<style>

</style>