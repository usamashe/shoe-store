import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { ShoePic } from '../Index';
import styles from './ProductIndex.module.css'

const ProductsIndex = ({ shoesData, category }) => {
    return (
        <React.Fragment>
            <Grid container justify="center" spacing={3}>
                {Object.keys(shoesData[category]).map( id => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
                        <Link to={id} className={styles.link}>
                            <ShoePic shoe={shoesData[category][id]} />
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    )
}

export default ProductsIndex;