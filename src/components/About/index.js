import React from "react";
import { makeStyles, Typography, Box, Container, Grid } from "@material-ui/core";
import portrait from "./assets/site_image_me.png";

import Title from "../Title";
import { motion, useTransform, useViewportScroll, useMotionValue } from "framer-motion"
import Section from "../Section";

const useStyles = makeStyles(theme => ({
    gridImages: {
        position: "relative",
        "@media (max-width: 600px)": {
            display: "none"
        }
    },
    description: {
        fontFamily: "'Lato', sans-serif",
        fontSize: theme.spacing(4)
    }
}))

export default function About() {
    const classes = useStyles();

    const { scrollYProgress } = useViewportScroll();
    const scale = useTransform(scrollYProgress, [0, 0.25, 0.6, 0.95, 1], [0.5, 1, 1.5, 1, 0.5]);

    return (
        <Section id="about" style={{ background: "#fafafa" }}>
            <Title>
                <Typography>Hello, I'm Holly</Typography>
            </Title>
            <Grid container>
                <Grid item md={6} >
                    <Typography paragraph className={classes.description}>
                        <Box lineHeight={2}>
                            I am a burgeoning full stack web developer after having gained my education from the KU Coding Bootcamp. I excel at front end development using HTML, CSS, and JavaScript. I enjoy learning new things and I’m always looking for a challenge. I aim to develop powerful products with fast user interface while getting an attractive UI/UX interfaces.
                                </Box>
                        <br />
                        <Box lineHeight={2}>
                            I developed an artistic sensitivity with my passion for photography since childhood. I originally studied English and Literature. I have a passion for beautiful words and imagery.
                                </Box>
                    </Typography>
                </Grid>
                <Grid item md={6} className={classes.gridImages}>
                    <motion.img
                        src={portrait}
                        alt="Portrait"
                        style={{
                            height: "480px",
                            position: "absolute",

                            left: "120px",
                            filter: "grayscale(100%)",
                            scale
                        }}
                    />

                </Grid>
            </Grid>
        </Section>
    )
}