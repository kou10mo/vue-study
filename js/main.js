var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue.js!',
    list: ['aaa', 'bbb', 'ccc'],
    count: 0,
    scroll: 0
  },
  mounted: function() {
    this.scroll = 100;
  },
  methods: {
    increment() {
      this.count++;
      console.log(event.target);
    }
  }
});
