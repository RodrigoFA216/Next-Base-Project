import Head from 'next/head'
import Nav from './navigation'


const Container=(props)=>(
    <div>
        <Head>
            <title>
                Next.js Project
            </title>
            <link rel="stylesheet" href='https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cyborg/bootstrap.min.css'/>
        </Head>
        <Nav/>
        <div className='container p-4'>
            {props.children}
        </div>
    </div>
)

export default Container