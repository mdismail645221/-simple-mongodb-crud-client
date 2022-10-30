import React, {useState} from 'react';

const AddUser = () => {

    const [user, setUser] = useState({})

    const handleSubmit = (event)=> {
        event.preventDefault()
        console.log(user)
        // console.log(event.target)
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                alert('USER ADDED SUCCESSFULLY');
                event.target.reset()
            }
        })
    } 

    const handleOnBlur = (event) => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser)
    }



    return (
        <div>
            <h2>USER:</h2>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleOnBlur} type="text" name='name' placeholder='name' /><br></br>
                <input onBlur={handleOnBlur} type='text' name='address' placeholder='address'></input><br></br>
                <input onBlur={handleOnBlur} type='email' name='email' placeholder='email'></input><br></br>
                <button type='submit'>Click me</button>
            </form>
        </div>
    );
};

export default AddUser;