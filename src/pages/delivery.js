import React from "react"
import injectSheet from "react-jss"
import DeliveryContent from "./deliveryContent"
import Nav from "./Nav"

export default () => (
  <div>
    <Nav
      header={"BA Fitness Installation"}
      navItems={["Delivery", "Installation", "Relocation", "Contact us"]}
    />
    <DeliveryContent
      deliveryHeader={"Delivery"}
      deliveryText={
        "We delivery fitness equipments to homes and businesses throughout Southern California. Our Professional drivers are reliable and always on time. We are discrete and we honor your privacy."
      }
      deliveryQuote={"Request a Quote"}
    />{" "}
  </div>
)
