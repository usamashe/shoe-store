import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Paper, Typography, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import styles from './ProductDetails.module.css'
import { PageNotFound } from '../Index';

const ProductDetails = ({ shoesData, category }) => {
    const [ selectedImage, setSelectedImage ] = useState(0);
    const { productId } = useParams();
    const shoe = shoesData[category][productId];
    if (!shoe) {
        return <PageNotFound />
    }

    return (
        <React.Fragment>
            <Grid container justify="flex-start"><Grid item xs={12} md={8} lg={6}>
                <Paper>
                    <img src={shoe.images[selectedImage]} alt={shoe.name} title={shoe.name} width="100%" />

                    <Grid container justify="flex-start" spacing={1} className={styles.imagesList}>
                        {shoe.images.map( (image, i) => (
                            <Grid item xs={2} key={i}>
                                <img 
                                    src={image} 
                                    alt={shoe.name} 
                                    title={shoe.name} 
                                    width="100%" 
                                    onClick={() => setSelectedImage(i)}
                                />
                            </Grid>
                        ))}
                    </Grid>

                    <div className={styles.card}>
                        <Typography variant="subtitle1">{shoe.name}</Typography> 
                        <Typography variant="h6">{shoe.price}</Typography> 
                        <Typography variant="subtitle2" color="textSecondary">{shoe.category}</Typography> 
                        <Grid container justify="center" spacing={3}>
                            <Grid item xs={6}>
                                <Button variant="contained" color="primary" style={{width: "100%"}}>
                                    <AddShoppingCartIcon />
                                    Add to Cart
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" color="primary" style={{width: "100%"}}>
                                    <FavoriteBorderIcon />
                                    Add to Wishlist
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                </Paper>
            </Grid></Grid>
        </React.Fragment>
    )
}

export default ProductDetails;