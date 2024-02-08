"use client";
import getUser from "@/utils/getUser";
import loginRedirect from "@/utils/redirect";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Link,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

function Creations({ creations }) {
  loginRedirect();

  const router = useRouter();

  const handleGoToCreation = (creation) => {
    setTimeout(() => {
      router.push(`/creations/all/${getUser()}/${creation.creationId}`);
    }, 100);
  };

  // Ordenar las creaciones de forma decreciente
  const sortedCreations = creations.sort((a, b) => b.creationId - a.creationId);

  return (
    <div>
      {sortedCreations.map((creation) => (
        <Card
          key={creation.creationId}
          variant="outlined"
          sx={{ display: "flex" }}
          style={{ marginBottom: "10px", backgroundColor: "primary" }}
        >
          <Button onClick={() => {
            handleGoToCreation(creation);
          }}>
            <CardContent key={creation.creationId} sx={{ display: "flex" }}>
              <Avatar
                sx={{
                  bgcolor: "primary.main",
                  height: 75,
                  width: 75,
                  fontSize: 75 / 2,
                  marginRight: "16px",
                }}
              >
                {creation.creationId}
              </Avatar>
              <Box textAlign={"start"}>
                <Typography variant="h4" component="div" mb={1}>
                  {creation.creationName}
                </Typography>
                <Typography variant="subtitle1" fontStyle="inherit">
                  {creation.creationDescription}
                </Typography>
              </Box>
            </CardContent>
          </Button>
        </Card>
      ))}
    </div>
  );
}

export default Creations;
