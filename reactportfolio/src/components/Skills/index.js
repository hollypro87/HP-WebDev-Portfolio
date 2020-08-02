import React from "react";
import { makeStyles, Container, Typography, Paper, Grid, Link } from "@material-ui/core/";
import html from "./assets/html.png";
import css from "./assets/css.png";
import bootstrap from "./assets/bootstrap.png";
import material from "./assets/material.svg";
import javascript from "./assets/js.png";
import react from "./assets/react.png";
import jquery from "./assets/jquery.png";
import node from "./assets/node.png";
import mysql from "./assets/mysql.png";
import mongo from "./assets/mongodb.png";
import Title from "../Title";
import Section from "../Section";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTypography-root": {
            fontFamily: "'Poiret One', cursive",
            fontWeight: 800
        },
        "& .MuiGrid-item": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: theme.spacing(10)
        },
        "& .MuiGrid-root": {
            display: "flex",
            justifyContent: "center",
        }
    },
    logos: {
        height: 60,
        filter: "grayscale(90%)",
        "&:hover": {
            filter: "grayscale(10%)"
        }
    },
    title: {
        fontWeight: "bold"
    },
}));

export default function Skills() {
    const classes = useStyles();

    return (
        <Section id="skills" style={{ background: "#f2f2f2" }} className={classes.root}>
            <Title>
                <Typography>Technologies</Typography>
            </Title>
            <Paper elevation={1} className={classes.paper} >
                <Grid container>
                    <Grid item xs={3}>
                        <Link href="https://www.w3.org/Style/CSS/Overview.en.html" target="-blank">
                            <img src={html} alt="HTML" className={classes.logos} />
                        </Link>
                        <Typography className={classes.title}>HTML</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href="https://www.w3.org/Style/CSS/Overview.en.html" target="-blank">
                            <img src={css} alt="CSS" className={classes.logos} />
                        </Link>
                        <Typography className={classes.title}>CSS</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href="https://www.javascript.com" target="-blank">
                            <img src={javascript} alt="Javascript" className={classes.logos} />
                        </Link>
                        <Typography className={classes.title}>JavaScript</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href="https://reactjs.org" target="-blank">
                            <img src={react} alt="React.js" className={classes.logos} />
                        </Link>
                        <Typography className={classes.title}>React.js</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href="https://material-ui.com" target="-blank">
                            <img src={material} alt="Material UI" className={classes.logos} />
                        </Link>
                        <Typography className={classes.title}>Material UI</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href="https://getbootstrap.com" target="-blank">
                            <img src={bootstrap} alt="Bootstrap" className={classes.logos} />
                        </Link>
                        <Typography className={classes.title}>Boostrap</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href="https://jquery.com" target="-blank">
                            <img src={jquery} alt="JQuery" className={classes.logos} />
                        </Link>
                        <Typography className={classes.title}>JQuery</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href="https://nodejs.org/en/" target="-blank">
                            <img src={node} alt="Node" className={classes.logos} />
                        </Link>
                        <Typography className={classes.title}>Node</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href="https://www.mysql.com/" target="-blank">
                            <img src={mysql} alt="MySql" className={classes.logos} />
                        </Link>
                        <Typography className={classes.title}>MySql</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Link href="https://www.mongodb.com" target="-blank">
                            <img src={mongo} alt="Mongo DB" className={classes.logos} />
                        </Link>
                        <Typography className={classes.title}>Mongo DB</Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Section>
    )
}