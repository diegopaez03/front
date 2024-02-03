"use client"

import { Box, Button, Grid, Link, Typography } from "@mui/material"

function HomeMenu() {
  return (
    <>
    <Box sx={{textAlign: "center", mt: 5}}>
        <Grid container spacing={1} flexGrow={1}> 
        <Grid item xs={12}>
        <Typography variant="h2" fontWeight={500}>Welcome to my app 👋</Typography>
        <Typography variant="h4">Check our options! 🫡</Typography>
            </Grid> 
            <Grid item xs={12}>
                <Link href="/creation">
                <Button variant="contained">
                <Typography fontSize={"large"}> My Creations </Typography>
                </Button>
                </Link>
            </Grid>
            <Grid item xs={12}>
                <Link href="/creation/newcreation">
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