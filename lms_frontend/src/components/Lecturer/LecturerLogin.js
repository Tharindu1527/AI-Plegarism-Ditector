//import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from 'axios';

const baseUrl="http://127.0.0.1:8000/api"

function LecturerLogin(){
    const [lecturerLoginData,setlecturerLoginData]=useState({
        email:'',
        password:'',
    });
    const handleChange =(event)=>{
       setlecturerLoginData ({
            ...lecturerLoginData,
            [event.target.name] : event.target.value
       })
    }

    const submitForm = async (event) => {
        event.preventDefault();
        const lecturerFormData = new FormData();
        lecturerFormData.append('email', lecturerLoginData.email);
        lecturerFormData.append('password', lecturerLoginData.password);

        try {
            const response = await axios.post(baseUrl + '/lecturer-login', lecturerFormData);
            if (response.data.bool === true) {
                localStorage.setItem('lecturerLoginStatus', 'true');
                localStorage.setItem('lecturerId', response.data.lecturer_id);
                window.location.href = '/lecturer-dashboard';
            } else {
                alert('Invalid credentials!');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Something went wrong!');
        }
    };
    
    const lecturerLoginStatus = localStorage.getItem('lecturerLoginStatus')
     if(lecturerLoginStatus === 'true'){
        window.location.href= '/lecturer-dashboard';
     }

    useEffect(()=>{
        document.title='Lecturer Login'
        localStorage.removeItem('lecturerLoginStatus');
        localStorage.removeItem('lecturerId');
    },[]);
    return(
     <div className="container mt-4">
         <div className="row">
             <div className="col-6 offset-3">
                 <div className="card">
                     <h5 className="card-header">Lecturer Login</h5>
                     <div className="card-body">
                     <form>
                         <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" value={lecturerLoginData.email} name="email" onChange={handleChange} className="form-control"/>
                         </div>
                         <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" value={lecturerLoginData.password} name="password" onChange={handleChange} className="form-control" id="exampleInputPassword1"/>
                         </div>
                         <div className="mb-3 form-check">
                               <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                               <label className="form-check-label" for="exampleCheck1">Remember  me </label>
                         </div>
                               <button type="submit" onClick={submitForm} class="btn btn-primary">Login</button>
                             </form>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    )
 
 }
 export default LecturerLogin;
 
 
 
 