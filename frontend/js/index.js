import Vue from 'vue';

Vue.component('Books', require('./components/Books.vue'));

/* eslint-disable no-unused-vars */
const vm = new Vue({
  el: '#app',
});
