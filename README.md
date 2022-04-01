# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Viraj Gulati

Time spent: 12 hours spent in total

Link to project: https://polished-balanced-dresser.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- Changed Start Button and Stop button to look more appealing and match game's color.

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:


![](https://user-images.githubusercontent.com/85462622/161165909-04dd2eb5-e956-4227-85b2-6dea3fceca64.gif)


![](https://user-images.githubusercontent.com/85462622/161169530-5e85f68e-660b-4957-8fe1-99903c51e33c.gif)

![](https://user-images.githubusercontent.com/85462622/161182911-3ec58f9c-3d8e-4714-b405-11426f630194.mov)

![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://www.w3schools.com/cssref/css_colors.asp

https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Advanced_techniques

https://gist.github.com/marcgg/94e97def0e8694f906443ed5262e9cbb

https://codepen.io/awkay/pen/ExzGea

https://www.freecodecamp.org/news/a-definitive-guide-to-conditional-logic-in-javascript-23fa234d2ca3/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

The main issue I encountered was regarding the Countdown feature. This was my first time using setInterval and clearInterval. While trying to add the countdown, I used places such as w3 schools to fully understand how to use these functions. I initially had the clearInterval function after the set interval, not realizing that formatiting it that way would not allow me to properly run the program. The code I had under the playClueSequence was correct but just out of place. After researching what the issue was I came across a sample timer from user Tony Kay on codepen.io that allowed me to see how the timer was properly supposed to run. 

The second issue, which was more minor, but still used much of my time was attempting to custom write the logic for the guess(btn) function. I wanted to see how to properly write the logic for a project such as this one. It was quite simple to learn as using if statements was similar to many of the other languages such as python and java I had worked on previously. Much of my time "learning" was put into how to apply the logic I had learned into the perspective of the memory game. After researching on places such as freecodecamp, I was easily able to debug the code, which I then compared to the logic give



n in the tutorial. 

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

The main question or thing I would like to learn was deeping my understanding in C++, I have experience with HTML and Javascript but I want to learn how to make a website such as the game look more "professional" and how to add stylistic elements to the website that may be more likely to draw users in, or keep users more tempted to continue using the website. I have realized that from the average user's perspetive, functionality is almost as important as the "aesthetic" or "visual" of the website. I have decided to research more about how to improve the stylistic elements of my websites. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project I would definetly spend more time adding the user's record or hightst score and make the game one that works based on their highest score as opposeed to playing to some winning score. This is because many people play memory games to see how far they can get as opposed to playing to a definitive end. I would work on making an endless socre, in which the goal for the user is to beat their own highest score. I believe this would help users continue to use the website as setting a winning score would only make them want to play it once or twice till they win. 



## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/ac5a77ca20a04a709500e95c2702079c?sharedAppSource=personal_library)


## License

    Copyright Viraj Gulati

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
