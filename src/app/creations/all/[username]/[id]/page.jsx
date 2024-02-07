import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Creation from "@/components/Creation";

export async function getCreationDetails( username, id) {
  const res = await fetch(`http://localhost:4000/creation/${username}/${id}`);
  const data = await res.json();
  return data;
}


async function CreationIdPage({ params }) {
  const {username, id} = params
  const creation = await getCreationDetails( params.username, params.id)

  return (
    <Box>
      <Creation creation={creation} />
    </Box>
  );
}

CreationIdPage.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CreationIdPage;
