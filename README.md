# FE-Luncher2 
[![Netlify Status](https://api.netlify.com/api/v1/badges/6ff0dd25-254d-4119-bc30-d94163ffd380/deploy-status)](https://app.netlify.com/sites/luncher2/deploys)

https://luncher2.netlify.com/


# Build Info

- React App
- react-router
- react-router-dom
- axios
- redux
- react-redux
- redux thunk
- redux logger
- reactstrap
- bootstrap

# Build week flow

App.js Routes:

- / `<Home />`
- /profile `<Profile />`
- /school `<School />`
- /login `<Login />`

App.js - `localstorage.get(key) ? <Route path='/' /> : <Route path='/login'`

Login.js

- check local storage, if true send dispatch to get user info => if there go to `path='/'`
- if local storage false show login/register window
- register => dispatch register action
  - save key to local storage on response and go to `path='/'`
- login => dispatch login action
  - save key to local storage on response and go to `path='/'`

Home.js

- Navigation bar ther persists on every page when logged in
- Display list of schools
