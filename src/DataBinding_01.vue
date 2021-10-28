<template>
  <div>
    <img src="@assets/logo.png" alt="">
    <h4>xx 원룸</h4>
    <p :style="fs">{{price}}만원</p>
  </div>
  
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      /* HTML속성도 데이터 바인딩 가능함 */
      price: 50,
      fs: 'color:red',
    }
  }
}
</script>

<style>

</style>
