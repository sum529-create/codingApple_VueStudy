<template>
    <div class="txt_area">
        <a @click="send"><img :src="item.image" class="roomImg-size"></a>
        <!-- $emit('작명', 데이터) -->
        <h4><a @click="send">{{item.title}}</a></h4>
        <p :style="fs">{{item.price}}만원</p>
        <button @click="addNum(i)">허위매물신고</button><br/>
        <span>{{num[i]}}</span>
    </div>
</template>

<script>
export default {
    name:'Card',
    data(){
        return{
            fs: 'color:red',
        }
    },
    props:{
        num:Array,
        item:Array,
    },
    methods:{
        send(){
            this.$emit('openModal', this.item.id)
        }
    }
}
</script>

<style scoped>
  .roomImg-size{
      width:50%;
      margin-top: 40px;
  }
</style>