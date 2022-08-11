import * as React from "react"

import image1 from "../images/1.png";
import image2 from "../images/2.png";

import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/modules/carousel"
import Features from "../components/modules/features"
import Modal from "../components/modules/modal"
import ImageText  from "../components/modules/image-text"

const HistoryPage = () => {
  return (
    <Layout>
      <Seo title="History" />
      <Modal url="https://www.google.com" />
      <Carousel />
      <Features />
      <ImageText 
        header="First featurette heading." 
        subhead="It’ll blow your mind." 
        copy="Some great placeholder content for the first featurette here. Imagine some exciting prose here."
        btnStyle="btn btn-primary"
        btnName="See more"
        dataToggle="modal"
        dataTarget="#externalModal"
        image={image2}
        imgPos="order-md-2"
      />
      <ImageText 
        header="Oh yeah, it’s that good." 
        subhead="See for yourself." 
        copy="Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place."
        btnStyle="btn btn-primary"
        btnName="Learn more"
        dataToggle="modal"
        dataTarget="#internalModal"
        image={image1}
        imgPos="order-md-1"
      />
    </Layout>
  )
}

export default HistoryPage