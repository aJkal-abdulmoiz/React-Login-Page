

import { useParams } from "react-router-dom";

const Home = () => {
  const { username } = useParams();
  return (
    <div>
      <h1>Welcome, {username}! </h1>
      <h2>Enjoy the View</h2>
      
    </div>
  );
};

export default Home;
