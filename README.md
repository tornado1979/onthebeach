This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


This is a react + redux front end app, displaying a card list that is managed by 
sort and filter components.


## Tech stack

- react
- redux
- sass

Packages used:

- "classnames"
- "eslint"
- "eslint-config-airbnb"
- "font-awesome"
- react-router-dom
- "@testing-library/dom"
- "@testing-library/react"


## Sort functionality

1. by default the data are sorted 'alphabetically' (a -> z)
2. by clicking on 'sort by price' the data are re-rendered in 'price' order (small to large)
3. by clicking on 'sort by star rating' the data are re-rendered in 'rating' order (small to large)

## Fiters functonality

Filters (departdate & departairport) work together with the sorting, so:

1. when a user clicks on a 'sort option' and then clicks on the 1st filter(departure date),
   then, he sees data based on the selected 'sort' and the selected 'filter(departure date)

2. when a user clicks on a 'sort option' and then clicks on the 2nd filter(depart airport),
   then, he sees data based on the selected 'sort' and the selected 'filter(depart airport)

3. when a user clicks on a 'sort option' and then clicks on the 1st filter(depart date) and the 2nd filter(depart airport), then, he sees data based on the selected 'sort' and the two selected 'filters'

4. when a user clicks 'reset filter' on either the 1st filter(depart date) or the 2nd filter(depart airport), then, he sees data based on the selected 'sort' and the remaining active 'filter'

5. when a user clicks 'reset filter' on the remaining active 'filter', then, he sees data based only on the selected 'sort', as there are no active 'fiters'.


## Folder structure

The structure of the project is this:
```
src/
  actions/  <!-- redux actions -->
  actionTypes/
  components/  <!-- functional components -->
    Block.js
    Button.js
    Card.js
    CardList.js
    Drawer.js
    Filters.js
    Header.js
    Image.js
    Label.js
    Rating.js
    Sort.js
    style.scss <!-- all component styles -->
  data/  <!-- dummy data for the store-->
    data.json
    options.json
    plural.json  <!-- for  adult/adults etc -->
  helpers/
    concatGuests.js
    history.js
    reg.js
  images/
  middlewares/
  pages/
    home/
      index.js
    style.scss
  reducers/
  styles/
    varables.scss <!-- general variables -->
  tests/
    snapshot/
    unit/
  index.js
  root.js
  store.js
  .eslintrc
  package.json
  package-lock.json
  README.md
```

## Screenshots

[A quick visual gif of the home page, here.](http://g.recordit.co/HszIsPYF8p.gif)

![final outcome](/readme_imgs/home-page.png)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
