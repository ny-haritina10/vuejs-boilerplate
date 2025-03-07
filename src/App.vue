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
        <!-- <Reservation></Reservation> -->
        <!-- <ReservationList></ReservationList> -->
      <!-- CONTENT -->
    </div>
  </Layout>
</template>

<script>
import Layout from './layouts/Layout.vue';
import Reservation from './examples/Reservation.vue';
import ReservationList from './examples/ReservationList.vue';

export default {
  name: 'App',
  components: {
    Layout,
    Reservation,
    ReservationList,
  }
}
</script>