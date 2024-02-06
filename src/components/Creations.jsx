"use client";
import { Card, CardContent, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const IsLogged = typeof window !== 'undefined' && Boolean(localStorage.getItem('token')); 

function Creations({ creations }) {
  const router = useRouter();
  if (!IsLogged){
    router.push("/join/login")
  }
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
