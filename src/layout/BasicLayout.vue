<template>
  <a-layout class="basic-layout">
    <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <router-link to="/">
            <a-icon type="home" />
            <span>首页</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/a">
            <a-icon type="video-camera" />
            <span>A 页面</span>
          </router-link>
        </a-menu-item>
        <a-sub-menu key="3">
          <span slot="title"><a-icon type="user" />B 级页面</span>
          <a-menu-item key="3-1">
            <router-link to="/b/b1">
              <span>B1 页面</span>
            </router-link>
          </a-menu-item>
          <a-menu-item key="3-2">
            <router-link to="/b/b2">
              <span>B2 页面</span>
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false
    }
  }
}
</script>

<style lang="less">
.basic-layout {
  height: 100%;
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
