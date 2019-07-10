import React from "react"
import injectSheet from "react-jss"
import InstallationContent from "./installationContent"
import Nav from "./Nav"

export default () => (
  <div>
    <Nav
      header={"BA Fitness Installation"}
      navItems={["Delivery", "Installation", "Relocation", "Contact us"]}
    />
    <InstallationContent
      installationHeader={"Installation"}
      installationText={
        "Our trained team has years of experience installing fitness equipments. We work exclusively with the popular brands listed below. Excellent customer service and your satisfication is guaranteed."
      }
      installationQuote={"Request a Quote"}
    />{" "}
  </div>
)
