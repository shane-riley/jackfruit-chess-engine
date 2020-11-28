# jackfruit-chess-engine

Nick and Shane's end of 2020 chess engine project (placeholder name)

## The motivation

Chess is a sequential game with perfect information, which branches into unique scenarios very quickly. As such, it is hard to play chess "like a book" and memorize scenarios. One must instead develop heuristics/strategies/tactics to play chess well. We will take a stab at writing a chess engine, since we want experience writing code that MUST be performant in order to work well. Additionally, we will build a frontend so a user can play against the engine.

## The software

The chess engine will consist of two main parts: the engine itself (written in C++) and a frontend to play against the engine(written in Javascript using a chess library or rebuilt in React).

### The engine

The engine will be built in C++ to maximize performance, such that the engine can play as well as possible. The engine will carry no state between moves, meaning that the entire board will be passed into the engine on each move. This constraint will likely make things simpler to start, though remembering certain outcome calculations between moves may be implemented for efficiency down the line. An XML settings file will be used to control the engine's level of rigor and other settings.

### The frontend

The frontend will likely be built using React to allow the user to play against the engine. It will be necessary to store the board state in a way that it can be rendered to the user and also sent to the engine for AI moves. Additionally, the frontend will need to only allow the player to make legal moves. Extra features could include a timer, multiplayer functionality, or engine-coached play.

## Work items

Things that will need accomplished to build the chess engine:

* Research
  * Existing chess engine algorithms (how do engines pass data and make decisions)
  * Calling subprocesses from a Javascript application
  * Using React in a desktop application (Electron?)
  * Store board information (downward data flow/redux?)
* Frontend
  * Render chess pieces from state
  * Allow the user to make moves
  * Allow only legal moves
  * Allow for multiplayer
  * Determine game ends in frontend
* Backend
  * Decide on decision algorithm
  * Build algorithm
  * Find way to test engine

## Timeline/Roles

Our goal is to have an MVP ready by our 21st birthdays in mid-January. It is fortunate that the frontend and backend should be able to be developed in parallel. Nick will be the primary architect for the engine itself, and Shane will write the frontend. Cross-contribution will be frequent, however.
