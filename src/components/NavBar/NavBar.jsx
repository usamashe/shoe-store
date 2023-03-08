import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import styles from './NavBar.module.css';



function NavBar () {
    return(
        <div className={styles.container}>
        <div className={styles.logo}>
            <Typography variant="h4">جوتی گھر
</Typography>
        </div>
        <nav className={styles.navLinks}>
            <Link to="/" className={styles.link}>
                <Typography variant="subtitle1">Home</Typography>
            </Link>
            <Link to="/men" className={styles.link}>
                    <Typography variant="subtitle1">مردانہ</Typography>
                </Link>
          
            </nav>
            </div>
    );
}

export default NavBar;