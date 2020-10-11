# Mr. Roboger's Neighborhood

#### Independent Project for Epicodus, 10.07.2020

#### By **Marni Sucher**

## Description

This web application takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:
* Numbers that contain a 1: all digits are replaced with "Beep!"
* Numbers that contain a 2: all digits are replaced with "Boop!"
* Numbers that contain a 3: all digits are replaced with "Won't you be my neighbor?"
* Note that these exceptions are written from least to most important, which means that if one digit meets the 1st exception but another digit meets the 2nd exception, "Boop!" but NOT "Beep!" is outputted, and so on and so forth.

## Specs

The program returns a range of numbers from 0 to the user's inputted number
* Input: "4"
* Output: "0, 1, 2, 3, 4"
 
 If the range between 0 and the user's number includes a 1, the program outputs "Beep!" in place of the 1. 

 * Input: "1"
 * Output: "0, Beep"

 If the range between 0 and the user's number includes a 2, the program outputs "Boop!" in place of the 2. 

 * Input: "2"
 * Output: "0, Beep, Boop"

 If the range between 0 and the user's number includes a 3, the program outputs "Won't you be my neighbor?" in place of the 3.

 * Input: "4"
 * Output: "0, Beep, Boop, Won't you be my neighbor, 4"

 Following the heirarchy rule explained in the description though, if the user inputs a number that includes any of 1/2/3 together, the larger number will be evaluated for the replacement phrase.

 * Input: "12"
 * Output: "0,Beep,Boop,Won't you be my neighbor?,4,5,6,7,8,9,Beep,Beep,Boop"

 * Input: "13"
 * Output: "0,Beep,Boop,Won't you be my neighbor?,4,5,6,7,8,9,Beep,Beep,Boop,Won't you be my neighbor?"

 ## Setup/Installation

 * Clone repository: https://github.com/marnionrails/Code-Review-3
 * Open index.html
 * Input number of your choice to view output

 ## Technologies Used

 * HTML/CSS
 * JavaScript
 * Bootstrap
 * VS Code

 ## License

 This software is licensed under the MIT license.
 Copyright(c) 2020 Marni Sucher
