<template>
  <div id="app">
    <div class="container">
      <h1>Customer Date Picker</h1>
      <div class="flex p-25 justify-center">
        <DatePicker/>
      </div>
      <h1>Employee Calendar & Date Picker</h1>
      <div class="flex p-25">
        <Calendar/>
        <EmployeeDatePicker/>
      </div>
    </div>
  </div>
</template>

<script>
import Calendar from './components/Calendar';
import DatePicker from './components/DatePicker';
import EmployeeDatePicker from './components/EmployeeDatePicker';

export default {
  name: 'App',
  components: {
    Calendar,
    DatePicker,
    EmployeeDatePicker
  }
}
</script>

<style lang="scss">
body {
  background-color: #fafafa;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.flex {
  display: flex;
  justify-content: space-between;
}

.p-25 {
  padding-bottom: 25%;
}

.justify-center {
  justify-content: center;
}

h1 {
  text-align: center;
}
</style>
