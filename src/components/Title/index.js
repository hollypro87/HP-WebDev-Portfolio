import React, { cloneElement } from "react";
import { makeStyles, Divider } from "@material-ui/core/";
import { motion } from "framer-motion"

const useStyles = makeStyles(theme => ({
    title: {
        fontSize: theme.spacing(6),
        fontFamily: "'Poiret One', cursive",
        fontWeight: 800,
        textTransform: "uppercase",
        "@media (max-width: 600px)": {
            fontSize: theme.spacing(4),
        }
    },
    divider: {
        marginBottom: theme.spacing(8),
        "@media (max-width: 600px)": {
            marginBottom: theme.spacing(4),
        }
    }
}));


export default function Title(props) {
    const classes = useStyles()
    const title = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -40 }
    }

    return (
        <motion.div mb={10} >
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                variants={title}
            >
                {cloneElement(props.children, {
                    className: classes.title
                })}
            </motion.div>
            <Divider className={classes.divider} />
        </motion.div>
    )
}