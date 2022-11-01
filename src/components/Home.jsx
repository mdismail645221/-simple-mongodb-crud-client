import React, { useState } from 'react';
import {Link, useLoaderData} from 'react-router-dom'

const Home = () => {

    const StoredUsers = useLoaderData();
    const [displayUser, SetDisplayUser] = useState(StoredUsers)
    // console.log(users)

    const handleDeleted = (user) => {
        // console.log(_id);
        const agree = window.confirm(`Are you sure. You want to delete ${user.name}`);
        console.log(agree)
        if(agree){
            // console.log(`deleted: ${user._id}`)
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data=> {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('user deleted is successfully')
                    const remainUsers = displayUser.filter(usr=> usr._id !== user._id);
                    console.log(remainUsers)
                    SetDisplayUser(remainUsers)
                }
            })
        }
    }


    return (
       <div>
            <h1>user:{displayUser.length}</h1>
            <div>
                {
                    displayUser.map(user=> <p key={user._id}>{user.name}
                    <Link to={`/updateUser/${user._id}`}><button>Update User</button></Link>
                    <button onClick={()=>handleDeleted(user)}>X</button>
                    </p>)
                }
            </div>
       </div>
    );
};

export default Home;