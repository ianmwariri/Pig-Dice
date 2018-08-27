# APPLICATION NAME: Pig Dice


## DESCRIPTION

This Application presents to the User a Landing page where the user can either choose to select "Start Game" or "About Game". Depending on his/her choice, a corresponding form pops up. If you click on "Start Page", an input form is expected of the user to fill, then proceed to click "Play". If the user clicks "About Game", he/she is given details about the Game.

The Game Rules are as follows:

Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

- If the player rolls a 1, they score nothing and it becomes the next player's turn.
- If the player rolls any other number, it is added to their turn total and the player's turn continues.
- If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.

The first player to score 100 or more points wins.

- For example, the first player, Anne, begins a turn with a roll of 5. Anne could hold and score 5 points, but chooses to roll again. Anne rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Anne rolls a 1, and must end her turn without scoring. The next player, Bob, rolls the sequence 4-5-3-5-5, after which he chooses to hold, and adds his turn total of 22 points to his score.



## SETUP / INSTALLATION REQUIREMNTS

- An Up-To-Date Browser, Preferably Google Chrome.

- Internet connection

- Git 

## SYSTEM GUIDLINES
` git clone https://github.com/smokeyice/Pig-Dice.git `

` cd`

` atom . OR code . `

## KNOWN BUGS
The system  is not configured to Pop an Alert Message if the user does not Attempt to Fill in the Form. 
However, that is subject to Review in due time. 


## BEHAVIOUR DRIVEN DEVELOPMENT
- When the User clicks "Roll", a random number is outputted representing the dice value 

  Input Example:"Roll"

  Output Example: 6

- When the User clicks "Hold", the cummulative dice score is saved to the total score and the other player is prompted to Roll.

  Input Example: "Hold"

  Output Example: totalScore1 += cummulativeScoreValue1

- If Dice lands on 1, the cummulative score returns to zero and the next player is prompted to play.

  Input Example: 1

  Output Example: cummulativeScoreValue1=0

## TECHNOLOGIES USED
- HTML 

- CSS 

- Javascript 

- jQuery

- Bootstrap

## LIVE DEMO

To view the LIVE SITE, Click Here: https://smokeyice.github.io/QuizBoard/

## SUPPORT AND CONTACT DETAILS

- In case of any queries, feel free to reach me at: mwangi.ian3@gmail.com


## COPYRIGHT & LICENCE

- <2018> Ian Mwangi.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.