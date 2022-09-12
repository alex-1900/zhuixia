import * as React from "react"
import { Seo } from '../components/head/seo'
import {Header} from "../components/header";
import Basic from "../components/layouts/basic";

const IndexPage = () => {
  return (
    <Basic>
      <Header />
      <main>
        hello
      </main>
    </Basic>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Home Page</title>
    <Seo></Seo>
  </>
)
