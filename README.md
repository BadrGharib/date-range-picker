# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## What You're Getting
```bash

├──apis # app apis requesting implementations 
│   ├── exchangeRate.ts # exchange rate api requesting implemention using (https://api.exchangerate.host/)
|   ├── types.ts  # common types and interfaces related to apis
│       
├── components # app components
│    ├── FormElements # Shared Form Elements as button ,input ,...
│    │   ├── Button # button control
│    │
│    ├── UIElements # Shared UI Elements like DateRangePicker , Grid , Spinner ,...
│    │   ├── DateRangePicker # button control
│    │   ├── Grid # Spinner control
│    │   ├── Spinner # Toggel Button control
│    
├── pages # app pages we have only one page ExchangeRate page (home) with route "/"
│   ├── ExchangeRate # contain project assets like imgs
│
├── styles # This is the root of your app. Contains static HTML right now.
│   ├── common.scss # contain css varibales like colors and fonts
│   
├──utils  
│   ├── helpers.ts # contain helpers functions like get  named date range 
│        
│    .
├── App.tsx # App component contain routing implementations using react-router-dom 
├── Dependencies Graph.png # Dependencies Graph show all components dependencies
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
