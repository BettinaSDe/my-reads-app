
# MyReads FRONT END WEB DEVEOPER PROJECT Susanne Bettina

This is a Udacity FRONT END WEB DEVEOPER student project. The goal was to convert a static example of the CSS and HTML markup that may be used into a dynamic Create-React-App (CRA).
This is my development code for project 7 (*MyReads: A Book Lending App*) from Udacity's  [Front-End Nanodegree] program. It has not yet been built nor deployed with node.js.  
Find starter code and more information [HERE
](https://github.com/udacity/reactnd-project-myreads-starter)


---
To start this Create-React-App (CRA): Download or clone this repository. Open this App with "node.js", enter "cd my-reads-app-master". 
A screenshot is in this repo's "resources" folder. 
Once node.js serves this CRA folder, enter "npm install" for installing all project dependencies. Then start the development server with "npm start". You will need node's "RegExp" package for the Search page. Open the localhost:3000 to view the App in development mode on the local server. 

---

## Project Specification Criteria

#### Application Setup
- The application was created with create-react-app and requires only `npm install` and `npm start` to get it installed and launched.
- An updated README that describes the project and has instructions for installing and launching the project is included.


#### Main Page
- The main page shows 3 shelves for books, and each book is shown on the correct shelf.
- The main page shows a control that allows users to move books between shelves. The control should be tied to each book instance. The functionality of moving a book to a different shelf works correctly.
- When the browser is refreshed, the same information is displayed on the page.

#### Search Page
- The search page has a search input field. 
- The search page behaves correctly:
    * As the user types into the search field, books that match the query are displayed on the page.
    * Search results are not shown when all of the text is deleted out of the search input box.
    * Invalid queries are handled and prior search results are not shown.
    * The search works correctly when a book does not have a thumbnail or an author. (To test this, try searching for "poetry" and "biography").
    * The user is able to search for multiple words, such as “artificial intelligence”.
- Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf. 
- When an item is categorized on the search page and the user navigates to the main page, it appears on that shelf in the main page.


#### Routing
- The main page contains a link to the search page. When the link is clicked, the search page is displayed and the URL in the browser’s address bar is /search.
- The search page contains a link to the main page. When the link is clicked, the main page is displayed and the URL in the browser’s address bar is /.


#### Code Functionality
- Component state is passed down from parent components to child components. The state variable is not modified directly - setState() function is used correctly. 
- All JSX code is formatted properly and functional.


---




## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).









# MyReads Project



This is the starter template for the final assessment project for Udacity's React Fundamentals course. The goal of this template is to save you time by providing a static example of the CSS and HTML markup that may be used, but without any of the React code that is needed to complete the project. If you choose to start with this template, your job will be to add interactivity to the app by refactoring the static code in this template.

Of course, you are free to start this project from scratch if you wish! Just be sure to use [Create React App](https://github.com/facebookincubator/create-react-app) to bootstrap the project.

## TL;DR

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
