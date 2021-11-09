<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>    
    <!-- <router-view v-for="(item,i) in blogData" :key="i" :blogData="blogData[i]"></router-view> -->
    <router-view :blogData="blogData"></router-view>
    <router-link to="/list">리스트페이지 이동</router-link>
    <!-- <List v-for="(item,i) in blogData" :key="i" :blogData="blogData[i]" /> -->
  </div>
</template>

<script>
// import List from '@/components/List';

export default {
  name: 'App',
  data(){
    return{
      blogData : [
        { 
          title : '첫 째 프로젝트 : 허위매물 전문 부동산 앱',
          content : 'Vue를 이용하면 비누같이 매끈한 앱을 만들 수 있습니다',
          date : 'September 24, 2021',
          number : 0
        },{ 
          title : '둘 째 프로젝트 : 오마카세 배달 앱',
          content : '음식이 아니라 셰프를 직접 배달해드립니다',
          date : 'October 20, 2020',
          number : 1
        },{ 
          title : '셋 째 프로젝트 : 파이터 앱',
          content : '거리를 설정하면 가장 가까운 파이터를 소개해드려요! 서로 싸워보세요',
          date : 'April 24, 2019',
          number : 2
        }
      ]
    }
  },
  // components:{
  //   List
  // }
}
</script>

<style>

</style>
