"use client"
import { Box, Grid, Typography } from "@mui/material";
import UserAvatar from "@/components/UserAvatar";
import getUser from "@/utils/getUser";

const Profile = () => {
    
    return(
        <>
        <Box sx={{ textAlign: 'center', mt: 5 }}>
      <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
        <Grid item>
          <UserAvatar username={getUser()} size={10} />
        </Grid>
        <Grid item>
          <Typography variant="h3" component="div">
            {getUser()}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">Description</Typography>
          <Typography variant="body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio omnis placeat veniam aliquid sit quis deserunt voluptates at, magnam eveniet hic, ipsum sequi accusamus. Obcaecati perferendis tempora illo non corporis laborum atque voluptatibus fugit velit soluta quibusdam pariatur dolorum iste blanditiis eligendi quasi asperiores, doloribus tempore, ex suscipit omnis. Rerum eos perferendis architecto molestias itaque, saepe expedita maiores accusamus iusto tenetur consequuntur fuga illo, doloribus dignissimos cum. Alias illum magnam, dignissimos cupiditate ea ipsum deserunt maxime quisquam voluptatum recusandae eligendi dolor doloribus explicabo odit quibusdam reiciendis. Vitae consequuntur, eum ullam ipsa facere quos hic laborum officiis distinctio maxime similique aspernatur?
          </Typography>
        </Grid>
      </Grid>
    </Box>
        </>
    );
}
export default Profile;