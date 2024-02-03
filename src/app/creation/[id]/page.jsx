import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Creation from "@/components/Creation";

export async function getCreation(id) {
  const res = await fetch(`http://localhost:4000/creation/${id}`);
  const data = await res.json();
  return data;
}


async function CreationIdPage({ params }) {
  const creation = await getCreation(params.id)

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
