"use client";
import getUser from "@/utils/getUser";
import { Box, Button, Grid, Link, Typography } from "@mui/material"

function HomeMenu() {
  const user = getUser();
  return (
    <>
    <Box sx={{textAlign: "center", mt: 5}}>
        <Grid container spacing={1} flexGrow={1}> 
        <Grid item xs={12}>
        <Typography variant="h2" fontWeight={500}>Welcome to my app 👋</Typography>
        <Typography variant="h5">
          This is an app made for Scientists to share and keep their creations easily and safely.
          </Typography>
        <Typography variant="h3">Check our options! 🫡</Typography>
            </Grid> 
            <Grid item xs={12}>
                <Link href={"/creations/all/" + user}>
                <Button variant="contained">
                <Typography fontSize={"large"}> My Creations </Typography>
                </Button>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Link href="/creations/newcreation">
                <Button variant="contained">
                <Typography fontSize={"large"}> New Creation </Typography>
                </Button>
                </Link>
            </Grid>
        </Grid>
    </Box>
    </>
  )
}

export default HomeMenu