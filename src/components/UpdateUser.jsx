import React, {useState} from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
    
    const upUser = useLoaderData();
    const [users, setUsers] = useState(upUser)
    console.log(users)

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...users};
        newUser[field] = value;
        setUsers(newUser)
    }




    return (
        <div>
            <h2>Update Users Name: {upUser.name}</h2>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleOnBlur} defaultValue={upUser.name} type="text" name='name' placeholder='name' /><br></br>
                <input onBlur={handleOnBlur} defaultValue={upUser.address} type='text' name='address' placeholder='address'></input><br></br>
                <input onBlur={handleOnBlur} defaultValue={upUser.email} type='email' name='email' placeholder='email'></input><br></br>
                <button type='submit'>Click me</button>
            </form>
        </div>
    );
};

export default UpdateUser;