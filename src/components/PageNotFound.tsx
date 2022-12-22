import Typography from "@mui/material/Typography";
import React from "react";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export const PageNotFound = () => {
    return (
        <Typography variant="h2">
            Page not found... Error 404 ! <SentimentVeryDissatisfiedIcon />
        </Typography>
    )
}