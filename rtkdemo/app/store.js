const configureStore = require('@reduxjs/toolkit').configureStore
const { getDefaultMiddleware } = require('@reduxjs/toolkit');
const cakeReducer = require('../features/cake/cakeSlice');
const iceCreamReducer = require('../features/icecream/iceCreamSlice')
const userReduder = require('../features/userfromapi/userSlice')
// importing the logger
const reduxLogger = require('redux-logger');
 const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame: iceCreamReducer,
    users: userReduder
  },
  // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

module.exports = store; 