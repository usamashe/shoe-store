import React from 'react';
import { Outlet } from 'react-router-dom';
import { Typography } from '@mui/material'

import styles from './Product.module.css'

const Product = ({ category }) => {
    return (
        <div className={styles.container}>
            <div className={styles.fieldset}>
                <div className={styles.legend}>
                    <Typography variant="h5">
                        {`${category[0].toUpperCase() + category.slice(1)}'s Collection`}
                    </Typography>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default Product;