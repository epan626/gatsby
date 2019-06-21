import React from "react"
import injectSheet from "react-jss"

const Nav = props => {
  const { navItems, header, classes } = props
  let items = []

  for (let x = 0; x < navItems.length; x++) {
    items.push(
      <a href="#" key={navItems[x]}>
        {navItems[x]}
      </a>
    )
  }
  return (
    <nav className={classes.navBar}>
      {" "}
      <h1 className={classes.headerItem}>{header}</h1>{" "}
      <div className={classes.navItems}>{items}</div>{" "}
    </nav>
  )
}

const styles = {
  navBar: {
    display: "flex",
    justifyContent: "space-around",
    fontSize: "1.2rem",
  },
  navItems: {
    display: "flex",
    alignItems: "center",
    color: "white",
    "& a": {
      marginRight: "20px",
      fontFamily: "monospace",
      color: "white",
    },
  },
  headerItem: {
    display: "inline-block",
    fontSize: "3rem",
    fontFamily: "monospace",
    color: "white",
    fontWeight: "300",
  },
}

export default injectSheet(styles)(Nav)
