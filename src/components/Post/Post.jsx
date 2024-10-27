import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  return (
    <div>
      <h3>{title}</h3>
      <Link to={`/post/${id}`}>
        <button>See Details</button>
      </Link>
    </div>
  );
};

export default Post;
