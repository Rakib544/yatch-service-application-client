import { Typography } from '@material-ui/core';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div>
            <Typography variant="h3" color="secondary" align="center">
                404
            </Typography>
            <Typography variant="h5" color="secondary" align="center">
                Opps..Page Not Found
            </Typography>
        </div>
    );
};

export default NotFoundPage;