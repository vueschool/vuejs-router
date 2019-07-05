<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/brazil">Brazil</router-link>
      <router-link to="/panama">Panama</router-link>
      <router-link to="/hawaii">Hawaii</router-link>
      <router-link to="/jamaica">Jamaica</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
