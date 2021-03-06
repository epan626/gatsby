import React from "react"
import injectSheet from "react-jss"
import backgroundPic from "../relocationBG2.png"

const RelocationContent = props => {
  const { relocationHeader, relocationText, relocationQuote, classes } = props

  return (
    <div className={classes.relocationContainer}>
      <div className={classes.relocationText}>
        <h2>{relocationHeader}</h2>
        <p> {relocationText}</p>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.relocationQuote}> {relocationQuote} </button>
      </div>
    </div>
  )
}
const styles = {
  "@global": {
    body: {
      backgroundImage: `url(${backgroundPic})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
    html: {
      height: "100%",
    },
    p: {
      color: "white",
    },
    h2: {
      color: "white",
    },
  },
  "@font-face": {
    fontFamily: "Dosis",
    src: "url('https://fonts.googleapis.com/css?family=Dosis&display=swap')",
  },
  relocationContainer: {
    gridTemplateAreas: `
      "content"
      "quote"
    `,
  },
  relocationText: {
    gridArea: "content",
    "& p": {
      fontSize: "25px",
      gridArea: "text",
      fontFamily: "Dosis , sans-serif",
    },
    "& h2": {
      gridArea: "header",
      fontSize: "50px",
      margin: "0",
      fontFamily: "Dosis , sans-serif",
    },
    gridArea: "text",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "125px auto auto",
    marginLeft: "50px",
    display: "grid",

    gridTemplateAreas: `
      ". ."
      "header ."
      "text ."
    `,
  },
  buttonContainer: {
    gridArea: "quote",
    marginLeft: "50px",
    marginTop: "50px",
  },
  relocationQuote: {
    padding: "15px 30px",
    color: "#fff",
    borderColor: "#1e88e5",
    textShadow: "0 1px 0 rgba(0,0,0,.2)",
    fontSize: "1.5rem",
    borderRadius: "2px",
    background: "linear-gradient(to bottom, #64b5f6 0%, #42a5f5 100%)",
  },
}
export default injectSheet(styles)(RelocationContent)
