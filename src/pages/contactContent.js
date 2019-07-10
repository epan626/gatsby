import React from "react"
import injectSheet from "react-jss"
import backgroundPic from "../contactUsBG.jpg"

const ContactContent = props => {
  const {
    contactHeader,
    contactText,
    contactText1,
    contactText2,
    contactText3,
    contactQuote,
    classes,
  } = props

  return (
    <div className={classes.contactContainer}>
      <div className={classes.contactText}>
        <h2>{contactHeader}</h2>
        <p className={classes.contactInnerText}> {contactText}</p>
        <p className={classes.contactInnerText1}> {contactText1}</p>
        <p className={classes.contactInnerText2}> {contactText2}</p>
        <p className={classes.contactInnerText3}> {contactText3}</p>
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
  contactContainer: {
    display: "grid",
    gridTemplateAreas: `
      "content"
    `,
    justifyContent: "center",
  },
  contactText: {
    gridArea: "content",
    "& p": {
      fontSize: "25px",
      fontFamily: "Dosis , sans-serif",
    },
    "& h2": {
      gridArea: "contactHeader",
      fontSize: "50px",
      margin: "0",
      fontFamily: "Dosis , sans-serif",
    },
    gridTemplateRows: "125px auto auto",
    marginLeft: "25px",
    display: "grid",

    gridTemplateAreas: `
      ". . ."
      ". contactHeader ."
      ". contactText ."
      ". contactText1 ."
      ". contactText2 ."
      ". contactText3 ."
    `,
  },
  contactInnerText: {
    gridArea: "contactText",
  },
  contactInnerText1: {
    gridArea: "contactText1",
  },
  contactInnerText2: {
    gridArea: "contactText2",
  },
  contactInnerText3: {
    gridArea: "contactText3",
  },
  buttonContainer: {
    gridArea: "quote",
    marginLeft: "25px",
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
  },
  // contactQuote: {
  //   padding: "15px 30px",
  //   color: "#fff",
  //   borderColor: "#1e88e5",
  //   textShadow: "0 1px 0 rgba(0,0,0,.2)",
  //   fontSize: "1.5rem",
  //   borderRadius: "2px",
  //   background: "linear-gradient(to bottom, #64b5f6 0%, #42a5f5 100%)",
  // },
}
export default injectSheet(styles)(ContactContent)
