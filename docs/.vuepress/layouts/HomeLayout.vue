<template>
  <div class="home-layout">
    <nav class="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/guide/">Guide</a></li>
        <li><a href="/about/">About</a></li>
      </ul>
    </nav>
    <main class="content">
      <h1>Hello</h1>
    </main>
  </div>
</template>

<style scoped>
.home-layout {
  text-align: center;
  margin: 20px;
}

.navbar {
  background-color: #333;
  padding: 10px;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
}

.navbar ul li {
  display: inline;
  margin-right: 20px;
}

.navbar ul li a {
  color: white;
  text-decoration: none;
}

.content {
  margin-top: 40px;
}
</style>
