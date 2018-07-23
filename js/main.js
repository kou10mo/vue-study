var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello, Vue.js!',
    list: ['aaa', 'bbb', 'ccc']
  },
  methods: {
    handleClick() {
      alert(event.target);
    }
  }
});
