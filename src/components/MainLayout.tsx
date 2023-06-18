import React from 'react'
import Header from './Header'
import Footer from './Footer'

type Props = {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout