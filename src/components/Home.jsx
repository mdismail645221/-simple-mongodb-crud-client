import React from 'react';
import {useLoaderData} from 'react-router-dom'

const Home = () => {

    const users = useLoaderData()

    const handleDeleted = (user) => {
        // console.log(_id);
        const agree = window.confirm(`Are you sure. You want to delete ${user.name}`);
        console.log(agree)
        if(agree){
            // console.log(`deleted: ${user._id}`)
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data=> console.log(data))
        }
    }

    return (
       <div>
            <h1>user:{users.length}</h1>
            <div>
                {
                    users.map(user=> <p key={user._id}>{user.name}{user.email} <button onClick={()=>handleDeleted(user)}>X</button></p>)
                }
            </div>
       </div>
    );
};

export default Home;