import React, {useState} from 'react';

const AddUser = () => {

    const [users, setUsers] = useState({})
    // console.log(user)

    const handleSubmit = (event)=> {
        event.preventDefault()
        // console.log(user)
        // console.log(event.target)
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                const agree =  window.confirm('USER ADDED SUCCESSFULLY');
                if(agree){
                    event.target.reset()
                }
            }
        })
    } 

    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...users}
        newUser[field] = value;
        setUsers(newUser)
    }



    return (
        <div>
            <h2>USER:</h2>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleOnBlur} required type="text" name='name' placeholder='name' /><br></br>
                <input onBlur={handleOnBlur} required type='text' name='address' placeholder='address'></input><br></br>
                <input onBlur={handleOnBlur} required type='email' name='email' placeholder='email'></input><br></br>
                <button type='submit'>Click me</button>
            </form>
        </div>
    );
};

export default AddUser;