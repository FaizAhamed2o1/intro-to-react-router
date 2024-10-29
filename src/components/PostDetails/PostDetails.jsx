import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const postDetails = useLoaderData();
  const { id, userId, title, body } = postDetails;
  const { postId } = useParams();
  console.log(postId);

  const navigate = useNavigate();

  const handleGoToPosts = () => navigate(-1);
  return (
    <div>
      <h2>Title: {title}</h2>
      <h3>Post no: {id}</h3>
      <p>Post details: {body}</p>
      <p>
        <small>Owner: user{userId}</small>
      </p>
      <button onClick={handleGoToPosts}>Go back</button>
    </div>
  );
};

export default PostDetails;
