import React from "react"
import injectSheet from "react-jss"
import Footer from "./footer"
import Forms from "./forms"
import Nav from "./Nav"
import Main from "./Main"

export default () => (
  <div>
    <div>
      <Nav
        header={"BA Fitness Installation"}
        navItems={["Delivery", "Installation", "Relocation", "Contact us"]}
      />
      <Main
        mainText={"FITNESS EQUIPMENT"}
        mainText2={"DELIVERY"}
        mainText3={"INSTALLATION"}
        mainText4={"RELOCATION"}
        mainImages={[]}
        mainQuote={"Request a Quote"}
      />
    </div>
  </div>
)
