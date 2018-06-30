<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <!-- 导航 -->
        <div class="list-group mb-5">
          <router-link :to="{name:'history'}" tag='li'>
            <a class="list-group-item list-groupt-item-action">历史订单</a>
          </router-link>
          <router-link :to="{name:'contact'}" tag='li'>
            <a class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
          <router-link :to="{name:'orderingGuide'}" tag='li'>
            <a class="list-group-item list-group-item-action">点餐文档</a>
          </router-link>
          <router-link :to="{name:'delivery'}" tag='li'>
            <a class="list-group-item list-group-item-action">快递</a>
          </router-link>
        </div>
      </div>
      <div class="col-8">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
