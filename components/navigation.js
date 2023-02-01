import Link from 'next/link'

const Nav =()=>{
    return (
        <>
        <nav className='navbar sticky-top navbar-expand-lg bg-dark'>
            <div className='navbar-brand'>
                <Link href="/" className='btn btn-primary'>
                    NextJS Engine
                </Link>
            </div>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                    <Link href="/" className='btn btn-outline-primary'>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href="/about" className='btn btn-outline-primary'>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href="/services" className='btn btn-outline-primary'>
                        Services
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Nav