import { combineReducers } from "redux";

import posts from "./posts";
import currentPost from "./currentPost";

export default combineReducers({
  posts,
  currentPost,
});
