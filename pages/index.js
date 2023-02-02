import React from 'react'
import Container from '../components/Container'
import Users from '../components/users'
import fetch from 'isomorphic-fetch'

const Index =(props)=>{
    // console.log(props);
    return (
        <Container>
            <h1>Next Users</h1>
            <Users users={props.users}/>
        </Container>
    )
}


Index.getInitialProps=async (ctx)=>{
    const res=await fetch('https://reqres.in/api/users')
    const resJSON= await res.json()
    return { users: resJSON.data}
}

export default Index