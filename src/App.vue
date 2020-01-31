<template>
  <div id="app">
    <div class="wl-error" v-if="error">{{ error }}</div>
    <p class="wl-loading" v-if="loading && !error">Loading data</p>
    <Table :data="data" v-if="data && !loading && !error" />
    <LoadDataButton @wl-click="loadData" :disabled="loading" />
  </div>
</template>

<script>
import LoadDataButton from './components/LoadDataButton.vue';
import Table from './components/Table.vue';

import { getAllData } from './services/getAllData';

export default {
  name: 'app',
  components: {
    LoadDataButton,
    Table,
  },
  data() {
    return {
      data: null,
      error: '',
      loading: false,
    }
  },
  methods: {
    async loadData() {
      this.error = false;
      this.loading = true;
      this.$forceUpdate();

      try {
        // Retrieve, but don't use data. The API fails because of the limited FREE plan
        // And I didn't have to time to dissect it, yet.
        const data = await getAllData(); // eslint-disable-line
        this.data = {
          locations: [
            {
              name: 'Amsterdam',
              temperature: 12,
              weatherType: 'Partly Cloudy',
              flightPrice: '186,50',
            },
            {
              name: 'Madrid',
              temperature: 21,
              weatherType: 'Sunny',
              flightPrice: '74,00',
            },
            {
              name: 'Budapest',
              temperature: 16,
              weatherType: 'Rain',
              flightPrice: '156,79',
            },
          ]
        };
      }
      catch(e) {
        this.error = e;
      }
      finally {
        this.loading = false;
        this.$forceUpdate();
      }
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
