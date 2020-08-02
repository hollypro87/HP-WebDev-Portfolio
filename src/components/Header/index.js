import React, { useState, useEffect, useRef } from "react";
import { Container, makeStyles, Typography, Link } from "@material-ui/core";
import SocialNetwork from "../SocialNetwork";
import { motion } from "framer-motion";
import NavBar from "../NavBar"

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        position: "relative",
        background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)"
    },
    toolbar: {
        paddingRight: 0,
        paddingLeft: 0,
        width: "100vw",
        display: "flex",
        justifyContent: "center"
    },
    logo: {
        height: theme.spacing(9),
        fill: "#000",
        "&:hover": {
            fill: "#bdbdbd",
            cursor: "pointer"
        }
    },
    description: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        "@media (max-width: 1500px)": {
            padding: theme.spacing(0, 17),
        },
        "@media (max-width: 1280px)": {
            padding: theme.spacing(0, 15),
        },
        "@media (max-width: 600px)": {
            padding: theme.spacing(0, 8)
        },
        "& .MuiLink-root": {
            color: "#000",
            position: "relative",
            textDecoration: "none",
            "&:hover": {
                color: "grey"
            },
            "&:after": {
                content: "''",
                height: "1px",
                borderRadius: "4px",
                position: "absolute",
                width: "100%",
                background: "grey",
                bottom: "-20px",
                left: 0,
                transform: "scale(1)",
                transition: "transform .3s",
            },
            "&:hover:after": {
                transform: "scale(0)",
            },
        },
        "& .MuiTypography-root": {
            fontFamily: "'Poiret One', cursive",
            fontSize: "3.7vw",
            fontWeight: 800,
            "@media (max-width: 600px)": {
                fontSize: "7vw"
            },
        }
    },
    navbar: props => ({
        width: "100%",
        zIndex: 100,
        position: props.isSticky ? "fixed" : "initial",
        top: props.isSticky ? 0 : "",
        background: "#fafafa",
    }),
    networks: {
        position: "absolute",
        right: 0,
        left: 0,
        display: "flex",
        justifyContent: "flex-end",
        padding: theme.spacing(14, 0, 0, 0),
        "@media (max-width: 1500px)": {
            padding: theme.spacing(12, 7, 0, 7)
        },
        "@media (max-width: 1280px)": {
            padding: theme.spacing(12, 20, 0, 20)
        },
        "@media (max-width: 1080px)": {
            padding: theme.spacing(12, 10, 0, 10)
        },
        "@media (max-width: 600px)": {
            padding: theme.spacing(12, 7, 0, 7)
        }
    },
    underline: {
        width: "100%",
        height: "1px",
        borderRadius: "4px",
        background: "black",
        position: "absolute",
        bottom: "-3px"
    }
}))


export default function Header({ ref }) {
    const [isSticky, setSticky] = useState(false);
    const classes = useStyles({ isSticky: isSticky });
    const menuRef = useRef(null)

    const description = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 40 }
    }

    const handleScroll = () => {
        if (menuRef.current) {
            setSticky(menuRef.current.getBoundingClientRect().top <= 0);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', () => handleScroll)
        }
    }, [])

    return (
        <div ref={ref} id="header" className={classes.root}>
            <Container maxWidth="lg" className={classes.networks}>
                <SocialNetwork />
            </Container>
            <Container maxWidth="lg" style={{ height: "100%", padding: 0 }}>
                <motion.div initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.7 }}
                    variants={description}
                    className={classes.description}>
                    <Typography >I'm Holly Prothe.</Typography>
                    <Typography >Full Stack Developer based in Kansas City.</Typography>
                </motion.div>
            </Container>
            <div ref={menuRef} style={{ position: "absolute", bottom: "70px", height: "64px" }}>
                <NavBar isSticky={isSticky} />
            </div>
        </div >
    );
}