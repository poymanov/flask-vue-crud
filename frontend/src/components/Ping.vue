<template>
  <div class="container">
    <alert :message="message"></alert>
  </div>
</template>

<script>
import axios from 'axios';
import Alert from './Alert';

export default {
  name: 'Ping',
  data() {
    return {
      message: '',
    };
  },
  components: {
    alert: Alert,
  },
  methods: {
    getMessage() {
      const path = 'http://localhost:8081/ping';
      axios.get(path)
        .then((res) => {
          this.message = res.data;
        });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>
