import React, { useState } from 'react';
import { makeStyles, IconButton, Link, Typography, Paper } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LockIcon from '@material-ui/icons/Lock';
import { motion } from "framer-motion";

const useStyles = makeStyles(theme => ({
    paper: props => ({
        height: "300px",
        position: "relative",
        "&:hover": {
            cursor: props.locked ? "not-allowed" : "pointer"
        },
        "& .MuiTypography-root": {
            color: "#fff"
        },
        "& .MuiPaper-rounded": {
            borderRadius: 0
        }
    }),
    media: {
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "cover"
    },
    content: {
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        opacity: 0,
        transition: "all 300ms ease-out",
        "&:hover": {
            opacity: 0.85
        }
    },
    info: {
        padding: theme.spacing(2, 5),
        "& .MuiTypography-root": {
            fontFamily: "'Lato', sans-serif",
        }
    },
    title: {
        color: "#fff",
        textTransform: "uppercase",
        fontWeight: 600
    },
    description: {
        lineHeight: 1.8,
        color: "#fff",
    },
    icons: props => ({
        color: "#fff",
        "&:hover": {
            cursor: props.locked ? "not-allowed" : "pointer",
            color: "#bdbdbd"
        }
    })
}));

export default function MediaCard(props) {
    const classes = useStyles(props);
    const [hover, setHover] = useState(false)

    return (
        <div className={classes.paper} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} elevation={2} style={{ backgroundImage: `url(${props.image}`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Link href={props.heroku} color="inherit" underline="none" target="_blank" rel="noopener" className={classes.content} align="center">
                <motion.div animate={hover ? { y: 0 } : { y: 8 }} transition={{ duration: 0.2 }} className={classes.info}>
                    <Typography gutterBottom variant="h6" className={classes.title}>
                        {props.title}
                    </Typography>
                    <Typography variant="body1">{props.tools}</Typography>
                    <Typography variant="body1" component="p" className={classes.description}>
                        {props.text}
                    </Typography>
                    <Link href={props.github} target="_blank" rel="noopener">
                        <IconButton>{(props.locked ?
                            <LockIcon className={classes.icons} style={{ color: "white" }} fontSize="large" aria-label="github" /> :
                            <GitHubIcon className={classes.icons} fontSize="medium" aria-label="github" />)}
                        </IconButton>
                    </Link>
                </motion.div>
            </Link>
        </div>
    );
}