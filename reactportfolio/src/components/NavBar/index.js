import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimateSharedLayout } from "framer-motion";
import { Toolbar } from "@material-ui/core";
import "../style.css"

const useStyles = makeStyles(theme => ({
    toolbar: {
        paddingRight: 0,
        paddingLeft: 0,
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        "& .active": {
            color: "grey",
        }
    },
    navbar: props => ({
        width: "100%",
        zIndex: 100,
        position: props.isSticky ? "fixed" : "initial",
        top: props.isSticky ? 0 : "",
        background: "#fafafa",
    }),
    underline: {
        width: "100%",
        height: "1px",
        borderRadius: "4px",
        background: "grey",
        position: "absolute",
        bottom: "-21px"
    },
    menuItem: {
        fontSize: "1.2vw",
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        position: "relative",
        cursor: "pointer",
        textTransform: "uppercase",
        fontFamily: "'Lato', sans-serif",
        fontWeight: 500,
        "&:hover": {
            color: "grey",
        },
        "@media (max-width: 1280px)": {
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            fontSize: theme.spacing(3)
        },
        "@media (max-width: 350px)": {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            fontSize: theme.spacing(2)
        }
    }
}))
export default function NavBar({ isSticky }) {
    const classes = useStyles({ isSticky: isSticky });
    const [selected, setSelected] = useState(0);

    const navbar = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 200 }
    }

    const menu = [
        {
            menuItem: "HP",
            to: "header"
        },
        {
            menuItem: "Projects",
            to: "projects"
        },
        {
            menuItem: "About",
            to: "about"
        },
        {
            menuItem: "Skills",
            to: "skills"
        },
        {
            menuItem: "Contact",
            to: "contact"
        }
    ];

    return (
        <div className={classes.navbar}>
            <motion.div
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.7 }}
                variants={navbar}
                center={"x"}
                background={"#fff"}
            >
                <Toolbar className={classes.toolbar}>
                    <AnimateSharedLayout>
                        <ol style={{ transform: "translateZ(0)" }}>
                            {menu.map(({ menuItem, to }, i) => (
                                <Link to={to}
                                    activeClass="active"
                                    onSetActive={() => setSelected(i)}
                                    smooth={true}
                                    spy={true}
                                    duration={600}
                                >
                                    <motion.li
                                        animate
                                        key={i}
                                        className={`${classes.menuItem} ${i === selected && "selected"}`}
                                        onClick={() => setSelected(i)}
                                    >
                                        {i === selected && (
                                            <motion.div
                                                layoutId="underline"
                                                className={classes.underline}
                                            />
                                        )}
                                        {menuItem}
                                    </motion.li>
                                </Link>
                            ))}
                        </ol>
                    </AnimateSharedLayout>
                </Toolbar>
            </motion.div>
        </div>
    )
}