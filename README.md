# GB Movies - A React-Redux-Bootstrap Web Application
An web application application for searching good and bad movies. This responsive web app will list the movies from the TMDb database. 

## Features

* ### Search :

    * #### Home
        * User can enter the title of the movies in the input search box at the top header portion
        * Search API will be triggered asynchronously to the TMDb database
        * Search results will be shown in the web page below to text search box
        * Web page will not show the movies with out movie titles
        * Search feature is implemented with _debounce_ feature so that it trigger network calls after 500 ms delay
        * Web page will display default posters if actual posters are not available
        * If no matching title values found, it will show an error message

    * #### Watch List Search
        * Search here apply only to display the user added watchlist items
        * If no matching title values found, it will show an error message
        * Browser localstorage api is used to create the persistent watch list data

    * #### Favourite Search
        * Search here apply only to display the user added favourite items
        * If no matching title values found, it will show an error message
        * Browser localstorage api is used to create the persistent favourite list data

* ### Watch List :
    * User can add watch items from home listing page
    * Added watch list items are displayed under watch list tab 
    * Searching the added watch list items can be done from here
    * User can delete the added watch list item from this menu. 

* ### Favourites :
    * User can add favourites items from home listing page
    * Added favourites list items are displayed under favourites tab 
    * Searching the added favourites items can be done from here
    * User can delete the added favourites list item from this menu. 

## Frameworks and dependencies

This project developed in react(16.11.0) and react-redux (7.1.1) framework. Used axios(0.19.0),redux-thunk,react-bootstrap dependencies for async API calls and responsive web layouts. jest-enzyme (7.1.2) for unit testing. 

## Build process

This project is created using the react framework so building the application is same like any other react applications.

## Limitations and Concerns

* There is no pagination implemented, since the web app main feature is search, user can get all the desired results from first 20 search results

* Browser localstoarge api is using heavily in the application to store the persistent watch list and favourite data. In ideal case we will be creating database entries based on the user profiles, so this can be corrected if we move into database approach in the production. 

* There is a space for more test coverage,featrure addition and the code refractoring. 

* React hooks!!! not tried yet, love to change it.





