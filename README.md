# The Pickle Rick Project

![](https://cdn.mos.cms.futurecdn.net/4v4rmrxbbRs2k8rw3zegpE-1200-80.jpg)

#### Thank you for checking out this project!

Basic features of the app:

- it is a single page application;
- on load, it fetches data from the Rick&Morty API;
- it stores only 20 characters;
- the homepage shows a grid of cards;
- each card has at least character name, character image, number of episodes it was featured in;
- each card has an "add/remove to favorite" toggle function;
- when you add an item to your favorites, it gets transferred at the top of the list;
- when you remove an item to your favorites, it goes back to the original place;
- through a searchbar you can filter only the queried input;

The app has also 2 out of 3 bonus features:
- saves favorites locally with localStorage;
- with a checkbox you can see just the favorites;

The app uses ChakraUI library.
I have used react-icons, rendering conditionally the "Add" or "Remove" heart icon accordingly to the item being a favorite or not.

The filter function is not case sensitive.

I have also added a "reset" button to quickly clear all the favorites (it also clears the localStorage).


The app does not use Context. All the features are developed with state variables and props.

The toggle function to flag an item as favorite does not create a duplicated array of character objects, it only saves the ids of the selected items.

I hope the comments in the code will be eloquent enough to figure out what's going on.

Despite its name, unfortunately this set of data does not feature the best of all characters: the Pickle Rick.


------------



### How to run the app

This project was created with Create React App. To run it locally, make sure you install the required packages executing 
`$ npm install` 

Then simply launch 
`$ npm start` 

The app will automatically open in your default browser.
