import store from "./reduxStore"
import {increment , decrement} from "./reduxStore/counter";
import { addPost , removePost, updatePost , addComment, removeComment , removeUserComments , addUpVote ,addDownVote} from "./reduxStore/posts";
import {addTask, removeTask} from "./reduxStore/tasks";


store.subscribe(() => console.log(store.getState())) //degisiklik oldugunda gosteriyor

store.dispatch(increment());
store.dispatch(increment()); //bunu yaptı
store.dispatch(increment(10)); 
store.dispatch(decrement(5));

store.dispatch(addTask(1, "Cagla"));
store.dispatch(addTask(2, "Gamze"));
store.dispatch(removeTask(1));

store.dispatch(addPost(1, "deneme post bilgisi"))

store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));
store.dispatch(addUpVote(1));

store.dispatch(addDownVote(1));

store.dispatch(addPost(2, "deneme2 post bilgisi"));

//store.dispatch(removePost(1));

//store.dispatch(addComment(1, 1, 1, "blabla"));

//store.dispatch(addComment(2, 1, 1, "bla"));

//store.dispatch(removeComment(1));

//store.dispatch(removeUserComments(1));

// console.log(store.getState().posts[0].comments);
// console.log(store.getState().posts[1].comments);



// console.log(store.getState().posts[0].votes);

//store.dispatch(updatePost(1, "deneme1 yeni"))











