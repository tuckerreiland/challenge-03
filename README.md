# challenge-03

## Description:

I built a series of functions to collect parameters from the users and return error messages when no parameters are selected.  Based upon the inputs, I built methods to generate the characters using the string.fromCharCode and spread syntax to append the array as opposed to writing out all of the characters and numbers by hand (I couldn't figure out how to pull the special characters by their UTF number so I just typed them all out by hand).  I then created an array of available characters based on the user input and used a random number generator to pull random characters from the array of available characters that looped for as many times as the user input for the password length.  Those values were returned into an array and assigned to a new string variable using the .join method to produce a string of random character that displays on the page as the password.

## What I learned

This project was slightly difficult to conceptualize until I just drew a diagram.  The graphic representation of the logic works far better than the pseudo code for me.  Once I had drawn a chart for the logical flow, I was pretty much able to bang it all out without much trouble.  I had to look up some syntax and reviewed a couple methods for returning alphabets/numbers before I eventually decided on the method described above and figure out how to get the generated password to display as a string as opposed to an array of values using the .join method.

