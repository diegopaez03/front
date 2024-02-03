"use client";
import { Card, CardContent, Typography } from "@mui/material";

function Creations({ creations }) {
  return (
    <div>
      {creations.map((creation) => (
        <Card
          key={creation.creationId}
          variant="outlined"
          style={{ marginBottom: "10px", backgroundColor: 'primary' }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {creation.creationId} {creation.creationName}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Creations;
