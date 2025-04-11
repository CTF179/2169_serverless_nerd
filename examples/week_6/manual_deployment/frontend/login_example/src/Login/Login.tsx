import { useState } from 'react'

function Login() {
    let [login, setLogin] = useState({});
    let [message, setMessage] = useState("");
    const usernameHandler = (event: any) => {
        setLogin({...login, username: event.target.value});
    }

    const passwordHandler = (event: any) => {
        setLogin({...login, password: event.target.value});
    }

    const submitHandler = async () => {
        try {
            let response = await fetch("http://3.87.48.40:3000/users/login", {
                method: "POST",
                body: JSON.stringify(login),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            let data = await response.json();
            setMessage(data.message);
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <>
        <h1>login</h1>
        <h3>{message}</h3>

        <div>
            <input onChange={usernameHandler} type="text" placeholder='username'></input>
            <br></br>
            <input onChange={passwordHandler} type="password" placeholder='password'></input>
            <br></br>
            <button onClick={submitHandler}>Submit</button>
        </div>
    
    </>
  )
}

export default Login