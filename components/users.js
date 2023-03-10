import Link from 'next/link'

const Users = (props) => {
    console.log(props);
    return ( 
        <ul className='list-group'>
            {
                props.users.map(user=>(
                    <li className='list-group-item list-group-item-action' key={user.id}>
                        <h5 className='card-title'>{user.first_name}</h5>
                        <h6>{user.last_name}</h6>
                        <p>Email: {user.email}</p>
                    </li>
                ))
            }
        </ul>
     )
}
 
export default Users;