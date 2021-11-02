<template>
<!-- 컴포넌트 생성시 카멜케이스(대문자) 문법에 따라 적용할것 -->
  <div class="discount">
    <h4>지금 결제하면 20% 할인</h4>
  </div>
</template>

<script>
export default {
    name: 'Discount',
    
}
</script>

<style>
  .discount{
    background: #eee;
    padding: 10px;
    margin:10px;
    border-radius: 5px;
  }
</style>