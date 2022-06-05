<script>

function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration*1000){ 
    }
}

export default {
  data() {
    return {
      newItem: ''
    }
  },
  methods: {
  nowMethod() {
    sleepFor(5)
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date +' '+ time;
    return dateTime
    },
  },
  computed: {
  nowComputed() {
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date +' '+ time;
    return dateTime
  }
}
}
</script>

<template>
  <p>Computed caching: {{nowComputed }}</p>
  <p>Method invoke: {{nowMethod() }}</p>
  <p>Computed caching: {{nowComputed }}</p>
  <p>Method invoke: {{nowMethod() }}</p>
  <p>Computed caching: {{nowComputed }}</p>
  <p>Method invoke: {{nowMethod() }}</p>
</template>