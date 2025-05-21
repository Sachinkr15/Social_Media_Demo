import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListdata } from "../Store/post-list-store";

const PostList = () => {
  const { postList } = useContext(PostListdata);
  console.log(postList);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};
export default PostList;
