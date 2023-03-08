import React from 'react';
import { Paper, Typography } from '@mui/material';

import styles from './ShoePic.module.css';

const ShoePic = ({ shoe }) => {
    return (
        <React.Fragment>
            <Paper>
                <img src={shoe.images[0]} alt={shoe.name} title={shoe.name} width="100%" />
                <div className={styles.card}>
                    <Typography variant="subtitle1">{shoe.name}</Typography> 
                    <Typography variant="h6">{shoe.price}</Typography> 
                    <Typography variant="subtitle2" color="textSecondary">{shoe.category}</Typography> 
                </div>
            </Paper>
        </React.Fragment>
    )
}

export default ShoePic;