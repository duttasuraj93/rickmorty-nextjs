import React from "react"

function Layout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <header>this is header</header>
            {children}
            <footer>this is footer</footer>
        </div>
    )
}

export default Layout