# Quiz Time!
 
 ## Welcome to my second Portfolio Project!
  For my 2nd project i choose a quizgame. This was a fun way to incorperate my love for philosopy aswell as coding. The user gets to answer 5 random questions out of a 20 question pool. Theres a mainpage where you click the start button to come to the quiz page. All the quotes are more or less famous all from the ancient greeks right up until the 20's century.
  
<br>
<img src="" width="50%">
<hr>

## Technologies Used

 For this project we were allowed to use these three programming languages: 

 - [HTML](https://sv.wikipedia.org/wiki/HTML5)
 - [CSS](https://en.wikipedia.org/wiki/CSS)
 - [Javascript](https://en.wikipedia.org/wiki/JavaScript)
<hr>

## Design

### Colour Scheme
* My mentor from [CI](https://codeinstitute.net) gave me the idea for the random gradient linear effect behind the quotes. The background is blueish/grayish and yellow "rose pedal"-template.

### Typography
* For this pages the fonts are Lato and Playfair Display. Playfair Display for the quotes and Lato for everything els. I choose Lato because of the modern/stylish way it looks and Playfair Display for the quotes because of the more classic look.

### Wireframes
* Wireframeswise i wanted to with something simple and pragmatic, to focus on the quiz-part itself.
<br>
<img src="assets/images/wireframe_main.png" width="25%"><img src="assets/images/wireframe_quiz.png" width="25%">

<hr>

## Features

* ### Background 
    * The background is "rose pedals" from svgbackgrounds.com. 
    <br>
    <img src="assets/images/background.png" width="40%">

* ### Favicon
    * Displayed on the tab. 
    * Choose the thinking emoji to emphasize the philosophy and "deep thinking" vibe.
    <br>
    <img src="assets/images/favicon_quiz.png" width="20%">

* ### Start button
    * Takes the user to the quiz page
    <br>
    <img src="assets/images/start quiz btn.png" width="20%">
    
* ### The Quote
    * Random gradient linear background that changes with the quote
    * A total for 20 diffrent quotes.<br>
    <img src="assets/images/quotecontainer.png" width="40%">
    
* ### The Choices
    * 4 diffrent alternatives
    * Right answer gives a green background, wrong answer gives a red background.
    * All the choices have one or more Quotes included in the 20 quotepool.<br>
    <img src="assets/images/choices.png" width="30%">
    
 * ### Scoring systen
    * Keeps score. The user gets 1 correct answer for a right answer and a incorrect score for a wrong answer.
    <br>
    <img src="assets/images/correct.png" width="20%">
    <img src="assets/images/incorrect.png" width="20%">

* ### Modal
    * After 5 quotes a modal pops up. 
    * The user is told to either refresh the page to play again or close the tab.
    <br>
    <img src="assets/images/modal.png" width="40%">

<hr>


## Testing

* Tested on ... diffrent browsers:  
* Checked responsiveness (using dev tools) on Desktops, Laptops, Tablets and Mobile. 

### Validator Testing

* #### HTML
    * No errors or warnings returned when passing through the official W3C validator.

* #### CSS 
    * Two errors returned when testing code through the official (Jigsaw) validator: "Unknown pseudo-element or pseudo-class :modal" on line 166 and 177. Since the pseudo-element is needed for showing the backdrop correct, no corrections were made.

* #### Javascript
    * There were 34 warnings when testing code through the JSHint validator. 35 of them where "const/let/arrowfunction is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)." and 1 warning was 
    198	[number] is better written in dot notation. No corrections were made.

* #### Lighthouse Score
    * Checked both main page and contact page using lighthouse (main page left, quiz page right)
<br>
<img src="assets/images/lh_mainpage.png" width="40%">
<img src="assets/images/lh_quizpage.png" width="40%">   
<hr>

### Bugs

#### No major bugs encountered

<hr>

### Deployment
* The website was deployed to GitHub pages. The steps to deploy are as follows:
    * In the GitHub repository, navigate to the 'Settings' tab.
    * From the source section drop-down menu, select the 'Master Branch'.
    * Once the master branch has been selected, the page provided the link to the completed website. 
    * The live website can be found [here](link)
<hr>

## Credits

### Content
* [The Love Maths Project](https://github.com/codingbyfreddish/love-maths) from [CI](https://codeinstitute.net) in regards of both design/layout ideas as well as code. The scoring system is code from there.
* All the course material from [CI's 'Full Stack Developer'](https://codeinstitute.net/se/full-stack-software-development-diploma/) curriculum leading up to this project.
* Some code, ideas and general javascript knowledge (such f.e arrowfunctions) from [Code Geeks quiz tutorial](https://www.youtube.com/watch?v=Opje9VBrNfg&t=3208s&ab_channel=CodeGeek), [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified), [CodingNepal](https://www.youtube.com/@CodingNepal) and [Codepen](https://codepen.io/)
* [Stack Overflow](https://stackoverflow.com/) for various things along the project.
* Background is from [svgbackgrounds.com/](https://www.svgbackgrounds.com/)
* [Google Fonts](https://googlefonts.com) is used for the text fonts. 
* [Favicon](https://favicon.io/) is used for the tab icon.
* The quotes are from [https://www.the-philosophy.com/](https://www.the-philosophy.com/top-20-philosophical-quotes)

## Acknowledgments
* **My Mentor Ronan McClelland came up with some great ideas to really elevate the project.**

