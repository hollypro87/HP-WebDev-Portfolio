import React from "react";
import { makeStyles, IconButton, Link } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import { motion } from "framer-motion";

const useStyles = makeStyles(theme => ({
    iconButton: {
        padding: theme.spacing(1)
    },
    icons: {
        fill: "#000",
    },
}));


export default function SocialNetwork(props) {
    const classes = useStyles(props);
    const socialNetwork = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }
    return (
        <motion.div className={props.className}
            variants={socialNetwork}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7, duration: 1 }}
        >
            <Link href="https://github.com/hollypro87" target="_blank" >
                <IconButton className={classes.iconButton}>
                    <GitHubIcon className={classes.icons} style={{ fontSize: "29px" }} aria-label="github" />
                </IconButton>
            </Link>
            <Link href="linkedin.com/in/holly-prothe-9648321a2" target="_blank">
                <IconButton className={classes.iconButton}>
                    <LinkedInIcon className={classes.icons} style={{ fontSize: "35px" }} aria-label="linkedin" />
                </IconButton>
            </Link>
            <Link href="mailto:hollyprothe1@gmail.com" target="_blank">
                <IconButton className={classes.iconButton}>
                    <EmailIcon className={classes.icons} style={{ fontSize: "36px" }} aria-label="email" />
                </IconButton>
            </Link>
        </motion.div>
    );
};