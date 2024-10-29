import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const navigate = useNavigate();
  const handleSeeDetailsWithUseNavigate = () => navigate(`/post/${id}`);
  return (
    <div>
      <h3>{title}</h3>
      <Link to={`/post/${id}`}>
        <button>See Details</button>
      </Link>

      <button
        onClick={handleSeeDetailsWithUseNavigate}
        style={{ marginLeft: "20px" }}
      >
        See Details with useNavigate
      </button>
    </div>
  );
};

export default Post;
