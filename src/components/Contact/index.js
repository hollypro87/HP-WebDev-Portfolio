import React from "react";
import { makeStyles, Container, AppBar, Toolbar, Typography, Box, Divider, Link } from "@material-ui/core";
import Title from "../Title";

const useStyles = makeStyles(theme => ({
    root: {
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        paddingTop: theme.spacing(10),
        "@media (max-width: 1280px)": {
            padding: theme.spacing(10, 10, 0, 10),
        },
        "@media (max-width: 600px)": {
            padding: theme.spacing(10, 3, 0, 3),
        },
        "& .MuiDivider-root": {
            background: "#fff"
        },
        "& .MuiLink-root": {
            textDecoration: "none",
            color: "#fff"
        }
    },
    networks: {
        display: "flex",
        justifyContent: "flex-end",
        "@media (max-width: 600px)": {
            justifyContent: "flex-start"
        },
        "& .MuiLink-root": {
            textDecoration: "none",
            position: "relative",
            "&:after": {
                content: "''",
                height: "1px",
                borderRadius: "4px",
                position: "absolute",
                width: "100%",
                background: "white",
                bottom: -5,
                left: 0,
                transform: "scale(1)",
                transition: "transform .4s",
            },
            "&:hover:after": {
                transform: "scale(0)",
            },
        }
    },
    networksItem: {
        marginLeft: theme.spacing(4),
        "@media (max-width: 600px)": {
            marginLeft: theme.spacing(0),
            marginRight: theme.spacing(4)
        }
    },
    footer: {
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        color: "#fff",
        display: "flex",
        justifyContent: "center"
    }
}));

export default function Contact() {
    const classes = useStyles();

    return (
        <div id="contact">
            <AppBar position="static" className={classes.root}>
                <Container maxWidth="lg">
                    <Title>
                        <Typography>Keep in touch</Typography>
                    </Title>
                    <Box className={classes.contact}>
                        <Link href="mailto:hollyprothe1@gmail.com" target="_blank">
                            <Typography variant="h6">Email: hollyprothe1@gmail.com</Typography>
                        </Link>
                        <Box mt={5} className={classes.networks}>
                            <Link href="linkedin.com/in/holly-prothe-9648321a2" target="_blank" className={classes.networksItem}>
                                <Typography variant="h6">LinkedIn</Typography>
                            </Link>
                            <Link href="https://github.com/hollypro87" target="_blank" className={classes.networksItem}>
                                <Typography variant="h6">Github</Typography>
                            </Link>
                        </Box>
                    </Box>
                    <Box pt={20} pb={5} className={classes.footer} >
                        <Typography>© 2020 Holly Prothe</Typography>
                    </Box>
                </Container>
            </AppBar>
        </div >
    )
}