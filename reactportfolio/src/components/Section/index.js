import React from "react";
import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: `calc(100vh - ${theme.spacing(35)}px)`,
        padding: theme.spacing(20, 0, 15, 0),
        width: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"
    },
    container: {
        "@media (max-width: 1280px)": {
            padding: theme.spacing(0, 10),
        },
        "@media (max-width: 600px)": {
            padding: theme.spacing(0, 3),
        }
    }
}))


export default function Section({ id, children, className, ...props }) {
    const classes = useStyles();

    return (
        <div id={id} {...props} className={`${classes.root} ${className ? className : ""}`}>
            <Container maxWidth="lg" className={classes.container}>
                {children}
            </Container>
        </ div >
    );
}