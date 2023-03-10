# The Pickle Rick Project - 4Securitas

![](https://cdn.mos.cms.futurecdn.net/4v4rmrxbbRs2k8rw3zegpE-1200-80.jpg)

#### Thank you for reviewing this assignment!

The app has all the basic features:

- it is a single page application;
- on load, it fetches data from the given Rick&Morty API;
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

At this time, I have never used Typescript, that's why I am missing the last bonus feature.

I have used MUI icons, rendering conditionally the "Add" or "Remove" icon accordingly to the item being a favorite or not.

The filter function is not case sensitive.

I have also added a "reset" button to quickly clear all the favorites (it also clears the localStorage).


The app does not use Context. All the features are developed with state variables and props.

The useEffect hook serves the initial data fetch and the localStorage getItem and setItem.

The toggle function to flag an item as favorite does not create a duplicated array of character objects, it only saves the ids of the selected items.

The way the checkbox works is definitely not the most elegant, it toggles a boolean to render one of two lists: the one with all items or the one with just the favorites.
It does not follow the DRY principles. It was added in the end as a bonus without refactoring the app with other state var.
I hope the comments in the code will be eloquent enough to figure out what's going on.

Despite its name, unfortunately this set of data does not feature the best of all characters: the Pickle Rick.


------------



### How to run the app

This project was created with Create React App. To run it locally, make sure you install the required packages executing 
`$ npm install` 

Then simply launch 
`$ npm start` 

The app will automatically open in your default browser.
