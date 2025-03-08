<template>
  <Layout>
    <div class="container-fluid">
      <!-- Router View to display routed components -->
      <router-view></router-view>
    </div>
  </Layout>
</template>

<script>
import Layout from './layouts/Layout.vue';

export default {
  name: 'App',
  components: {
    Layout
  }
};
</script>