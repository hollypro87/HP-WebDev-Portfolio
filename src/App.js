import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Helmet } from "react-helmet";
import FaviconSvg from "./assets/img/logo-nobg.png";
import FaviconPng from "./assets/img/logo-nobg.png";
import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  spacing: 5,
})
const useStyles = makeStyles(theme => ({
  body: {
    boxSizing: "border-box",
  }
}))

export default function App() {
  const classes = useStyles()

  return (
    <div>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href={FaviconSvg} />
        <link rel="icon" type="image/png" href={FaviconPng} />
        <title>Holly Prothe</title>
        <meta name="author" content="Holly Prothe" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Holly Prothe, full stack developer based in Kansas City" />
        <body className={classes.body} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Header />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </ThemeProvider>
    </div>
  )
}
