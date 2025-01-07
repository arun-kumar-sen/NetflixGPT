# Netflix GPT

- Create react app
- Configured tailwind css

- Header
- Routing
- Login Form/ Sign Up Form
- Form Validation
- useRef Hook
- firebase setup
- deploying app to production
- create sign up/create account user account in firebase
- Implement sign in using firebase
- created redux store with userSlice
- implemented sign out
- updated profile from firebase, redirected app
- BugFix : Sign up display name & profile picture update
- Protected Route
- hygiene practise i.e unsubscribe to the onAuthStateChange callback
- add harcoded values to constant file
- Register for TMDB API & create a new app and get access token
- Get data from TMDB now playing list API
- created custom hooks for nowPlayingMovies
- updated store with movies data
- planning for main Container and sec container
- custom hook for trailer video
- update store with trailer video data
- embedded the youtube video
- make it autoplay and mute
- tailwind classes
- Built Secondary container
- Build Movie card
- TMDB image CDN
- created a custom hook for populat , top rating movies
- GPT search feature
- GPT search page
- GPT search Bar
- Added multi-language feature in search page

# Features

- Login SignUp
  - Sign In/Up form
  - redirect to browse page after loggged in i.e authentication
- Browse page (LOGGED IN i.e after authentication)
  - Header
  - Main movie
    - Trailer Background video playing
    - Title & Desc & Play button
    - Movie suggestions
    - MovieLists \* N
    - Horizonatl scroll
- Netflix GPT
  - Search Bar
  - Movie Suggestions

Notes: to make an image overlap use absolute

# Steps for deplyment

- install firebase CLI - npm install -g firebase-tools
- firebase login
- firebase init , then select hoisting
- deply command - firebase deply

https://netflixgpt-275b7.web.app

# Steps for redux

- npm i -D @reduxjs/toolit
- npm i react-redux
- appStore.js (utils)
- inside appStore => configureStore()
- configureStore({
  reducer:{}
  })
- create userSlice.js in utils
- create Slice
- createSlice({
  name:"",
  initialState:null,
  reducers:{
  reducerFunction:(state,action)
  }=>{}
  })
- Now provide store in app
