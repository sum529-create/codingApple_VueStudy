<template>
  <div>
      <h5>{{blogData.title}}</h5>
      <p>{{blogData.date}}</p>
  </div>
</template>

<script>
export default {
    name:'list',
    props:{
        blogData:Array
    }
}
</script>

<style>

</style>