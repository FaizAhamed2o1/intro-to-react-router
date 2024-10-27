import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  const { id, userId, title, body } = postDetails;
  return (
    <div>
      <h2>Title: {title}</h2>
      <h3>Post no: {id}</h3>
      <p>Post details: {body}</p>
      <p>
        <small>Owner: user{userId}</small>
      </p>
    </div>
  );
};

export default PostDetails;
