# Pokemon-Click

This is a pokemon themed a memory game that is built with React.

## Application Design

1. The application renders 12 different pokemon images to the screen. Each image listens for click events.

2. The application keeps track of the user's score.
    * The user's score increments when clicking an image for the first time.
    * The user's score resets to 0 if they click the same image more than once.
    * High score is updated if current score is higher. High score only resets on refresh.

3. Every time an image is clicked, the images rendered to the page shuffles themselves in a random order.

4. The "New Game" function is available should the user makes an incorrect guess or they win the game by catching all pokemons.

### Demo
![Demo](https://github.com/Kinla/Pokemon-Click/blob/master/pokemonClick.gif)

## Technologies
  * HTML
  * CSS
  * MBD React
  * JavaScript
  * React.js
  
## License
MIT
