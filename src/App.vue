<template>
  <Layout>
    <div class="container-fluid">
      <div class="row mb-4">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Dashboard</h4>
              <p class="card-text">Welcome to your admin dashboard. This is where you'll manage and monitor your application.</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CONTENT -->
        <!-- <UserRegistration></UserRegistration> -->
        <ProductList></ProductList>
      <!-- CONTENT -->
    </div>
  </Layout>
</template>

<script>
import UserRegistration from './pages/UserRegistration.vue';
import ProductList from './pages/ProductList.vue';
import Layout from './layouts/Layout.vue';

export default {
  name: 'App',
  components: {
    Layout,
    UserRegistration,
    ProductList,
  }
}
</script>