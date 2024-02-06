import Creations from "@/components/Creations";
import PropTypes from "prop-types";

async function fetchCreations(username) {
  const res = await fetch(`http:/localhost:4000/creation/${username}`);
  const data = await res.json();
  return data;
}

async function UserCreationsPage({ params }) {
  const creations = await fetchCreations(params.username);
  return (
    <>
        <Creations creations={creations} />;
    </>
  );
}

UserCreationsPage.propTypes = {
    params: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
  };

export default UserCreationsPage;