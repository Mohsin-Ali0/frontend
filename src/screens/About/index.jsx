import React from 'react'
import Layout from '../../components/Layout/layout'
import About from './About-us/about'
export default function index() {
    return (
        <React.Fragment>
            <Layout>
                <About />
            </Layout>
        </React.Fragment>
    )
}
