import React from "react"
import injectSheet from "react-jss"
import backgroundPic from "../laSkylines4.jpg"
const Main = props => {
  const {
    mainText,
    mainText2,
    mainText3,
    mainText4,
    mainImages,
    mainQuote,
    classes,
  } = props

  let imageContainer = mainImages.map(x => {
    return <a className={classes.mainImages}> {x} </a>
  })

  return (
    <div className={classes.mainContainer}>
      {" "}
      <div className={classes.mainTextContainer}>
        <h2 className={classes.mainTexts}>{mainText}</h2>
        <h2 className={classes.mainTexts2}>{mainText2}</h2>
        <h2 className={classes.mainTexts3}>{mainText3}</h2>
        <h2 className={classes.mainTexts4}>{mainText4}</h2>
      </div>
      <div className={classes.imageContainer}>
        <div className={classes.delivery}>
          <img src={require("../delivery2.png")} />
        </div>{" "}
        <div className={classes.installation}>
          <img src={require("../installation2.png")} />
        </div>{" "}
        <div className={classes.relocation}>
          <img src={require("../location4.png")} />
        </div>
      </div>{" "}
      <div className={classes.buttonContainer}>
        <button className={classes.mainQuote}> {mainQuote} </button>
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
  },
  "@font-face": {
    fontFamily: "Dosis",
    src: "url('https://fonts.googleapis.com/css?family=Dosis&display=swap')",
  },
  mainContainer: {
    display: "grid",
    gridTemplateAreas: `
      "mainText mainText mainText"
      "mainImages mainImages mainImages"
      ". . ."
      ". mainQuote ."
      `,
    gridTemplateRows: "auto auto 100px auto",
  },
  mainTextContainer: {
    display: "grid",
    gridArea: "mainText",
    gridTemplateRows: "auto 50px auto",
    gridTemplateColumns: "repeat(3,1fr)",
    gridTemplateAreas: `
      "fitness fitness fitness"
      ". . ."
      "deliverText installText relocateText"
      `,
  },
  mainTexts: {
    gridArea: "fitness",
    fontSize: "4rem",
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Dosis , sans-serif",
    color: "white",
    fontWeight: "300",
  },
  mainTexts2: {
    fontFamily: "Dosis , sans-serif",
    fontSize: "3rem",
    textAlign: "center",
    gridArea: "deliverText",
    color: "white",
    fontWeight: "300",
  },
  mainTexts3: {
    fontFamily: "Dosis , sans-serif",
    fontSize: "3rem",
    textAlign: "center",
    gridArea: "installText",
    color: "white",
    fontWeight: "300",
  },
  mainTexts4: {
    fontFamily: "Dosis , sans-serif",
    fontSize: "3rem",
    textAlign: "center",
    gridArea: "relocateText",
    color: "white",
    fontWeight: "300",
  },
  imageContainer: {
    gridArea: "mainImages",
    textAlign: "center",
    justifyContent: "initial",
    display: "grid",
    gridTemplateAreas: `
      "delivery installation relocation"
      `,
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  mainImages: {
    border: "1px solid black",
    margin: "25px",
    padding: "50px",
    gridArea: "mainImages",
  },
  delivery: {
    gridArea: "delivery",
    "& img": {
      width: "150px",
      marginTop: "-20px",
    },
  },
  installation: {
    gridArea: "installation",
    "& img": {
      width: "100px",
    },
  },
  relocation: {
    gridArea: "relocation",
    "& img": {
      width: "80px",
    },
  },
  buttonContainer: {
    gridArea: "mainQuote",
    display: "flex",
    justifyContent: "center",
  },
  mainQuote: {
    padding: "15px 30px",
    color: "#fff",
    borderColor: "#1e88e5",
    textShadow: "0 1px 0 rgba(0,0,0,.2)",
    fontSize: "1.5rem",
    borderRadius: "2px",
    background: "linear-gradient(to bottom, #64b5f6 0%, #42a5f5 100%)",
  },
}
export default injectSheet(styles)(Main)
