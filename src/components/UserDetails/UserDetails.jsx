import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { name, website } = userDetails;
  return (
    <div>
      <h3>User name: {name}</h3>
      <p>Website: {website}</p>
    </div>
  );
};

export default UserDetails;
