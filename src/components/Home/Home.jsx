import React from "react";
import { Typography,Grid,Paper } from "@mui/material";
import { Link } from "react-router-dom";
import styles from './Home.module.css';
import { ShoePic } from "../Index";

const Home = ({ shoesData }) => {
  const ids = {
      men: Object.keys(shoesData["men"]),
  }

const randNum = Math.floor((Math.random()*10000000))%24;
return (
    <div className={styles.container}>
        <Typography variant="h5">Welcome to the جوتی  گھر</Typography>

        <Grid container justify="center" spacing={1} className={styles.section}>
            <Grid item xs={6}>
                <Paper><img src={shoesData["men"][ids["men"][0]].images[0]} width="100%" alt="" /></Paper>
            </Grid>
            <Grid item xs={6}>
                <Grid container justify="center" spacing={1} direction="row">
                    <Grid item xs={6}>
                        <Paper><img src={shoesData["men"][ids["men"][1]].images[0]} width="100%" alt=""/></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper><img src={shoesData["men"][ids["men"][2]].images[0]} width="100%" alt="" /></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper><img src={shoesData["men"][ids["men"][3]].images[0]} width="100%" alt="" /></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper><img src={shoesData["men"][ids["men"][4]].images[0]} width="100%" alt="" /></Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


        <Link to="/men" className={styles.link}>
                <div className={styles.fieldset}>
                    <div className={styles.legend}>
                        <Typography variant="h5">مردانہ Collection</Typography>
                    </div>
                </div>
                <Grid container justify="center" spacing={3} className={styles.section}>
                    {[0,1,2,3].map( i => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
                            <ShoePic shoe={shoesData["men"][ids["men"][(randNum+i)%24]]} />
                        </Grid>
                    ))}
                </Grid>
            </Link>
            </div>
    )
}

export default Home;