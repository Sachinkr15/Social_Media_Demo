import { useContext, useRef } from "react";
import { PostList as PostListdata } from "../Store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostListdata);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postbodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const posttitle = postTitleElement.current.value;
    const postbody = postbodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postbodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId , postbody, posttitle, tags, reactions);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User ID
        </label>
        <input
          type="text"
          className="form-control"
          ref={userIdElement}
          id="userId"
          placeholder="Your User Id here:"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="Enter Post Title here:"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <input
          type="text"
          rows="4"
          ref={postbodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about here:"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <textarea
          type="text"
          rows="4"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="Tell us more about here:"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          rows="4"
          ref={tagsElement}
          className="form-control"
          id="title"
          placeholder="Please enter tags using space:"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
