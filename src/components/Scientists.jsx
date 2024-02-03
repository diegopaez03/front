"use client";
import { Card, CardContent, Typography } from "@mui/material";

function Scientists({ scientists }) {
  return (
    <div style={{ marginTop: "20px" }}>
      {scientists.map((scientist) => (
        <Card
          key={scientist.scientistId}
          variant="outlined"
          style={{ marginBottom: "10px" }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {scientist.scientistId} {scientist.username}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Scientists;
