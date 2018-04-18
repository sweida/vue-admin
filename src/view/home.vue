<template>
  <section id="app">
    <headnav></headnav>
    <section class="content scroll">
      <leftnav></leftnav>
      <router-view />
    </section>
  </section>
</template>

<script>
import headnav from '@/view/headnav'
import leftnav from '@/view/leftnav'
export default {
  name: 'app',
  components: {
    headnav,
    leftnav
  }
}
</script>


<style lang="scss">
@import "../style/common.scss";
@import "../style/form.scss";
@import "../style/table.scss";
body, html{
  height: 100%;
}
#app{
  width:100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .content{
    display: flex;
    flex-direction: row;
    flex: 1;
    box-sizing: border-box;
    background: #E2E5EE;
    padding: 20px 40px;
  }
}
</style>
