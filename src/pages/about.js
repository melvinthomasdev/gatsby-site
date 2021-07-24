import * as React from 'react'
// import { Link } from 'gatsby'
import Layout from '../componenets/layout'

const aboutPage = () => {
    return (
        // <main>
        //     <title>
        //         About Me
        //     </title>
        //     <h1> About Me</h1>
        //     <Link to="/">Back to home</Link>
        //     <p>Hi, I'm the proud creatoe of this website</p>
        // </main>
        <Layout pageTitle="About Me">
            <p>Hey  There! I am the creator of this site and I buit it using Gatsby</p>
        </Layout>

    )
}

export default aboutPage