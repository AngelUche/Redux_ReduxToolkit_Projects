const store = require('./app/store');
const { cakeActions } = require('./features/cake/cakeSlice');
const { fetchUser } = require('./features/userfromapi/userSlice');
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions

console.log('initial state', store.getState());

const unsuscribe = store.subscribe(() => {
  console.log('updatated state', store.getState());
})

// store.dispatching the action
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(2))

// store.dispatch(iceCreamActions.boughtIcecream())/
// store.dispatch(iceCreamActions.SoldIceCream(3))

store.dispatch(fetchUser())