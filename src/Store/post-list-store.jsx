import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if (action.type === "ADD_POST") {
    newPostList = [ action.payload , ...currPostList];
  }
  return newPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId , postbody, posttitle, tags, reactions) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Math.random().toString(),
        title: posttitle,
        body: postbody,
        tags: tags,
        userId: userId,
        reactions: reactions,
      },
    });

  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Post 1",
    body: "This is the first post",
    tags: ["tag1", "tag2"],
    userId:  "user-12",
    reactions: 10,
  },
  {
    id: "2",
    title: "Post 2",
    body: "This is the second post",
    tags: ["tag3", "tag4"],
    userId : "user-13",
    reactions: 20,
  },
];

export default PostListProvider;
