import * as React from 'react'
import { Link } from 'gatsby'

const indexPage = () => {
  return (
    <main>
      <title>Homepage</title>
      <h1>Welcom to my Gatsby Site</h1>
      <Link to="/about">About</Link>
      <p>I;m making this by following the Gatsby tutorial</p>
    </main>
  )
}

export default indexPage