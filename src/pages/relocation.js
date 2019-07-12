import React from "react"
import injectSheet from "react-jss"
import RelocationContent from "../relocationContent"
import Nav from "../Nav"

export default () => (
  <div>
    <Nav
      header={"BA Fitness Installation"}
      navItems={["Delivery", "Installation", "Relocation", "Contact us"]}
    />
    <RelocationContent
      relocationHeader={"Relocation"}
      relocationText={
        "Our trained team is here to help. We will disassemble your fitness equipment, transport it securely to your desired location, and reassemble your product."
      }
      relocationQuote={"Request a Quote"}
    />{" "}
  </div>
)
