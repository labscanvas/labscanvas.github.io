import * as React from "react"
import "../static/style.css"
import { Banner, About, Project } from "../components"

const IndexPage = () => {
  return (
    <main>
      <Banner/>
      <About/>
      <Project/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Canvas Labs | Home Page</title>
