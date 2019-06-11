import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'
import Main from './components/Main'
import Card from './components/Card'
import pokemon from './pokemon.json'

class App extends React.Component {
  state = {
    pokemon: pokemon,
    message: "Click on any pokemon to start.",
    newGame: false,
    score: 0,
    highScore: 0,
  }

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array
  }

  //Game logic on click
  onClickCard = (id) => {
    let pokemon = this.state.pokemon
    //grab id to find which card is clicked
    let index = pokemon.findIndex(el => el.id === id)
    //if not clicked
    if(!this.state.pokemon[index].clicked){
      let message = this.state.message

      //change clicked to true
      pokemon[index].clicked = true

      //Shuffle
      this.shuffle(pokemon)

      // score + 1
      let score = this.state.score + 1
      message = ""

      // update highScore if score > highScore
      let highScore = this.state.highScore
      if (score > highScore){
        highScore = score
        console.log(score)
      } 

      // Check win
      let newGame = this.state.newGame
      if (score === 12) {
        newGame = true
        message = "You win!"
      }

      // Set state
      this.setState({
        pokemon: pokemon,
        score: score,
        highScore: highScore,
        newGame: newGame,
        message: message
      })
     //if clicked
     } else {
       // change all pokemon state to be clicked
      pokemon.forEach(el => {
        el.clicked = true
      })

      // update middle message
      // set NewGame to true
      // set state
      this.setState({
       pokemon: pokemon,
        message: "Oops. You lose.",
        newGame: true
      })
     }
          
  }

  //new game logic
  onClickNewGame = () => {
    //reset click to false for all pokemon
    let pokemon = this.state.pokemon
    
    pokemon.forEach(el => {
      el.clicked = false
    })
    
    //shuffle
    this.shuffle(pokemon)

    //set state
    this.setState({
      pokemon: pokemon,
      message: "Click on any pokemon to start.",
      newGame: false,
      score: 0,
    })  
  }

  render () {
    return(
      <div className="App">
      <Navbar 
        shuffle={this.shuffle} 
        pokemon={this.state.pokemon} 
        message={this.state.message} 
        score={this.state.score} 
        highScore={this.state.highScore}
        newGame={this.state.newGame}
        onClick = {this.onClickNewGame}
      />
        <Main>
          {this.state.pokemon.map(el => <Card
            key={el.id}
            id={el.id}
            image={el.image}
            name={el.name}
            click={el.click}
            onClick = {this.onClickCard}
          />)}
        </Main>
      <Footer />
    </div>
    )

  }
}

export default App;
