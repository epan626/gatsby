import React from "react"
import injectSheet from "react-jss"
import ContactContent from "./contactContent"
import Nav from "./Nav"
import ContactForms from "./contactForm"

export default () => (
  <div>
    <Nav
      header={"BA Fitness Installation"}
      navItems={["Delivery", "Installation", "Relocation", "Contact us"]}
    />
    <ContactContent
      contactText={"Byron Arriaza"}
      contactText1={"Email: installation@BAFitnessInstallation.com"}
      contactText2={"Phone: (213) 888-9999"}
      contactText3={"Area: Southern Calfornia"}
    />{" "}
  </div>
)
