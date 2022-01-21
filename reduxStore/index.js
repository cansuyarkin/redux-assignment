import { combineReducers , createStore } from "redux";
import counterReducer from "./counter";
import tasksReducer from "./tasks";
import postsReducer from "./posts";

//reducer bilgilerini birlestirdim
const rootReducer = combineReducers({
    counter: counterReducer,
    tasks: tasksReducer,
    posts: postsReducer,
});

//yeni store
const store = createStore(rootReducer);

export default store; 


