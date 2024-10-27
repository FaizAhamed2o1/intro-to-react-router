import "./User.css";

const User = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <div className="user">
      <h2>{name}</h2>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
    </div>
  );
};

export default User;
