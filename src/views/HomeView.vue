<template>
    <div class="home-view">
      <header>
        <h1>Connect Four</h1>
        <p>Benvenuto nel gioco Connect Four!</p>
      </header>
      <main>
        <section class="instructions">
          <h2>Come si Gioca</h2>
          <p>Il gioco Connect Four è un classico gioco da tavolo in cui due giocatori si sfidano a mettere in fila quattro dei loro pezzi in orizzontale, verticale o diagonale.</p>
          <ul>
            <li>Giocatore 1: Colore Rosso</li>
            <li>Giocatore 2: Colore Giallo</li>
          </ul>
        </section>
        <section class="start-game">
          <button @click="startGame">Inizia una Nuova Partita</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Connect Four. Tutti i diritti riservati.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeView',
    methods: {
      startGame() {
        // Genera un ID casuale per la partita
        const idGame = Math.floor(Math.random() * 10000); // Puoi personalizzare l'ID
        this.$router.push(`/game/${idGame}`);
      }
    }
  }
  </script>
  
  <style scoped>
  .home-view {
    text-align: center;
    padding: 2rem;
  }
  
  header {
    margin-bottom: 2rem;
  }
  
  .instructions {
    margin-bottom: 2rem;
  }
  
  .start-game button {
    font-size: 1.2rem;
    padding: 1rem 2rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .start-game button:hover {
    background-color: #0056b3;
  }
  
  footer {
    margin-top: 2rem;
    font-size: 0.8rem;
  }
  </style>
  