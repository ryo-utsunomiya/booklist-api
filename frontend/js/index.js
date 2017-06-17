import Vue from 'vue';

// Vue.component('example', require('./components/Example.vue'));

Vue.component('example', {
  template: '<p>Example component</p>',
});

/* eslint-disable no-unused-vars */
const app = new Vue({
  el: '#app',
});
