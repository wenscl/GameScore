import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import games from './reducers/games';
import rootReducer from './rootReducer';

// store.subscribe(async()=> await AsyncStorage.setItem("store", JSON.stringify(store.getState())))

// const reducers = combineReducers({
//   count,
// });

// const store = createStore(reducers, {}, applyMiddleware(thunk));

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
