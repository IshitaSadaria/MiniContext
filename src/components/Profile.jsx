import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)

    if ( !user ) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile


//Notes
/* 
- The Profile component uses the useContext hook to access the user context.
- The Profile component renders a message indicating that the user is not logged in if the user context is not set.
- The Profile component renders a message indicating that the user is logged in if the user context is set.
- The Profile component is exported as the default export.
*/