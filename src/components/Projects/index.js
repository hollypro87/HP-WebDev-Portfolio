import React from "react";
import { Typography, makeStyles, Grid, Paper, Button } from "@material-ui/core/";
import Card from "../Card";
import directory from "../Projects/assets/directory.png";
import blog from "../Projects/assets/blog.png";
import burger from "../Projects/assets/burger.png";
import fitness from "../Projects/assets/fitness.png";
import notes from "../Projects/assets/Note-taker.png";
import quarantinis from "../Projects/assets/project1.png";
import quiz from "../Projects/assets/quiz.png";
import weather from "../Projects/assets/weather.png";
import Title from "../Title";
import Section from "../Section";

const useStyles = makeStyles(theme => ({
    paper: {
        textAlign: "center",
        "& .MuiPaper-rounded": {
            borderRadius: 0
        },
    }
}));


function arrayEquals(array1, array2) {
    return array1.length === array2.length && array1.every(value => array2.includes(value))
}

export default function Projects() {
    const classes = useStyles()

    const all = ['projects', 'team']
    const [categoriesToShow, setCategoriesToShow] = React.useState(all)

    return (
        <Section id="projects" style={{ background: "#f5f5f5" }}>
            <Title>
                <Typography>Projects</Typography>
            </Title>
            <div mb={10} style={{ paddingBottom: "20px" }} >
                <Button onClick={() => setCategoriesToShow(all)} disabled={arrayEquals(categoriesToShow, all)}>Show all</Button>
                <Button onClick={() => setCategoriesToShow(["projects"])} disabled={arrayEquals(categoriesToShow, ["projects"])}>Projects</Button>
                <Button onClick={() => setCategoriesToShow(["team"])} disabled={arrayEquals(categoriesToShow, ["team"])}>Team projects</Button>
            </div>
            <div className={classes.grid}>
                <Grid container spacing={3}>
                    {(categoriesToShow.includes("projects") ?
                        <Grid item md={4} sm={6} xs={12}>
                            <Paper className={classes.paper}>
                                <Card
                                    image={directory}
                                    title="Employee Directory"
                                    alt="Employee Directory"
                                    tools="React.js & Bootstrap"
                                    github="https://github.com/hollypro87/React-Employee-Directory"
                                    heroku="https://ancient-spire-90786.herokuapp.com"
                                    locked={false}
                                />
                            </Paper>
                        </Grid>
                        : null)}
                    {(categoriesToShow.includes("projects") ?
                        <Grid item md={4} sm={6} xs={12}>
                            <Paper className={classes.paper}>
                                <Card
                                    image={fitness}
                                    title="Fitness Tracker"
                                    alt="Fitness Tracker"
                                    text="Exercise tracking website"
                                    github="https://github.com/hollypro87/Fitness-Tracker"
                                    heroku="https://peaceful-hamlet-54839.herokuapp.com/?id=5f14d326eb61120017b462ef"
                                    locked={false}
                                />
                            </Paper>
                        </Grid>
                        : null)}
                    {(categoriesToShow.includes("team") ?
                        <Grid item md={4} sm={6} xs={12}>
                            <Paper className={classes.paper}>
                                <Card

                                    image={blog}
                                    title="Book of Me"
                                    alt="Book of Me"
                                    text="Memory Diary website."
                                    github="https://github.com/hollypro87/Write-It-Out"
                                    heroku="https://aqueous-thicket-52311.herokuapp.com"
                                    locked={false}
                                />
                            </Paper>
                        </Grid>
                        : null)}
                    {(categoriesToShow.includes("projects") ?
                        <Grid item md={4} sm={6} xs={12}>
                            <Paper className={classes.paper}>
                                <Card
                                    image={burger}
                                    title="Eat the Burger"
                                    alt="Eat the Burger"
                                    text="Enter a burger and eat it!"
                                    github="https://github.com/hollypro87/Eat-The-Burger"
                                    heroku="https://stark-tor-80070.herokuapp.com"
                                    locked={false}
                                />
                            </Paper>
                        </Grid>
                        : null)}
                    {(categoriesToShow.includes("projects") ?
                        <Grid item md={4} sm={6} xs={12}>
                            <Paper className={classes.paper}>
                                <Card
                                    image={notes}
                                    title="Note Taker"
                                    alt="Note Taker"
                                    text="A simple apps for keeping quick notes."
                                    github="https://github.com/hollypro87/Note-Taker"
                                    heroku="https://frozen-fortress-75677.herokuapp.com"
                                    locked={false}
                                />
                            </Paper>
                        </Grid>
                        : null)}
                    {(categoriesToShow.includes("projects") ?
                        <Grid item md={4} sm={6} xs={12}>
                            <Paper className={classes.paper}>
                                <Card
                                    image={weather}
                                    title="Daily Weather"
                                    alt="Daily Weather"
                                    text="Daily weather and weekly weather website."
                                    github="https://github.com/hollypro87/weather-app"
                                    heroku="https://hollypro87.github.io/weather-app/"
                                    locked={false}
                                />
                            </Paper>
                        </Grid>
                        : null)}
                    {(categoriesToShow.includes("team") ?
                        <Grid item md={4} sm={6} xs={12}>
                            <Paper className={classes.paper}>
                                <Card
                                    image={quarantinis}
                                    title="Bites and Quarantinis"
                                    alt="Bites and Quarantinis"
                                    text="Food and drink recipe website."
                                    github="https://github.com/hollypro87/Project_1"
                                    heroku="https://hollypro87.github.io/Project_1/"
                                    locked={false}
                                />
                            </Paper>
                        </Grid>
                        : null)}
                    {(categoriesToShow.includes("projects") ?
                        <Grid item md={4} sm={6} xs={12}>
                            <Paper className={classes.paper}>
                                <Card
                                    image={quiz}
                                    title="Developer Quiz Game"
                                    alt="Developer Quiz Game"
                                    text="A timed quiz game to test your development knowledge."
                                    github="https://github.com/hollypro87/Quiz"
                                    heroku="https://hollypro87.github.io/Quiz/"
                                    locked={false}
                                />
                            </Paper>
                        </Grid>
                        : null)}
                </Grid>
            </div>
        </Section>
    )
}