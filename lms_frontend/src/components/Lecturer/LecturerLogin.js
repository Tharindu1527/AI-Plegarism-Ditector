//import { Link } from "react-router-dom";

function LecturerLogin(){
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
                                <input type="email" className="form-control"/>
                         </div>
                         <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                         </div>
                         <div className="mb-3 form-check">
                               <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                               <label className="form-check-label" for="exampleCheck1">Remember  me </label>
                         </div>
                               <button type="submit" class="btn btn-primary">Login</button>
                             </form>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    )
 
 }
 export default LecturerLogin;
 
 
 
 