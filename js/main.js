var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue.js!',
    list: ['aaa', 'bbb', 'ccc'],
    buttonNums: [1, 2, 5, 10, 100],
    scroll: 0
  },
  mounted: function() {
    this.scroll = 100;
  },
  methods: {
    increment(num) {
      this.scroll += num;
      console.log(event.target);
    }
  }
});
