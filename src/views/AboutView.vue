<template>
    <div id="app">
      <header>
        <h1>Connect Four</h1>
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/game/1234">Esempio Gioco</router-link> <!-- Per testare la vista del gioco -->
        </nav>
      </header>
      <router-view />
      <footer>
        <p>&copy; 2024 Connect Four. Tutti i diritti riservati.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  
  <style>
  /* Stili globali */
  #app {
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  
  header {
    background-color: #282c34;
    padding: 1rem;
    color: white;
  }
  
  nav {
    margin-bottom: 1rem;
  }
  
  nav a {
    margin: 0 1rem;
    color: white;
    text-decoration: none;
  }
  
  nav a.router-link-active {
    font-weight: bold;
  }
  
  footer {
    margin-top: 2rem;
    font-size: 0.8rem;
  }
  </style>
  