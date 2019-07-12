import React from "react"
import injectSheet from "react-jss"

const Nav = props => {
  const { navItems = [], header, classes } = props
  let items = []
  let navItem
  for (let x = 0; x < navItems.length; x++) {
    if (navItems[x] == "Contact us") {
      navItem = "contact"
    } else {
      navItem = navItems[x].toLowerCase()
    }

    items.push(
      <a href={navItem} key={navItems[x]}>
        {navItems[x]}
      </a>
    )
  }
  return (
    <nav className={classes.navBar}>
      {" "}
      <a href="https://tender-sinoussi-cbe15f.netlify.com/">
        <h1 className={classes.headerItem}>{header}</h1>
      </a>{" "}
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
