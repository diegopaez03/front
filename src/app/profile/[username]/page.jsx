import PropTypes from "prop-types";
import { Box } from "@mui/material";

export async function getScientist(id) {
  const res = await fetch(`http://localhost:4000/scientist/${id}`);
  const data = await res.json();
  return data.username;
}


async function profilePage({ params }) {
  const scientist = await getScientist(params.id)

  return (
    <Box>
      {JSON.stringify(getScientist(scientist))}
    </Box>
  );
}

profilePage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default profilePage;