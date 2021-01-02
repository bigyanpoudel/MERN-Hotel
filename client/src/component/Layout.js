import React from 'react'
import Headers from './Headers';
import {Container} from 'react-bootstrap'
import Footer from './Footer';
const Layout = ({children}) => {
    return (
        <>
        <Container fluid>
            <header>
                <Headers/>
            </header>
            <main>
                {children}
            </main>
            <footer className="my-5">
                <Footer/>
            </footer>

        </Container>
        </>
    )
}

export default Layout
