import { Card, CardContent, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

async function fetchScientists() {
  const res = await fetch("http://localhost:4000/scientist");
  const data = await res.json();
  return data;
}

async function HomePage() {
  const scientists = await fetchScientists();

  return (
    <div>
      {scientists.map((scientist) => (
        <Card key={scientist.scientistId} variant="outlined" style={{ marginBottom: '10px' }}>
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

export default HomePage;
