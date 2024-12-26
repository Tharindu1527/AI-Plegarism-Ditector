import { Link } from "react-router-dom";
import LecturerSidebar from "./LecturerSidebar";
import { useEffect,useState } from "react";
import axios from "axios";
const baseUrl="http://127.0.0.1:8000/api"

function AddCourses() {
    const [cats,setCats]=useState([]);

    useEffect(()=>{
        try{
            axios.get(baseUrl+ '/category') 
            .then((res)=>{
            if(res.data.bool===true){
                console.log(res.data);
            }
            }
         );

        }catch(error){
            console.log(error);
        }

    },[]);
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <LecturerSidebar/>
                </aside>
                <div className="col-9">
                    <div className="card">
                        <h5 className="card-header">Add Course</h5>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="title" className="form-label">Category</label>
                                    <select name="category" className="form-control"></select>. 
                                </div>
                                <div className="mb-3">
                                    <label for="title" className="form-label">Title</label>
                                    <input type="text" id="title" className="form-control"/> 
                                </div>
                                <div className="mb-3">
                                    <label for="title" className="form-label">Description</label>
                                    <input type="text" id="title" className="form-control"/> 
                                </div>
                                <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Featured-Image</label>
                                 <div class="col-sm-10">
                                 <input type="file" class="form-control" id="inputPassword"/>
                                  </div></div>
                                <div className="mb-3">
                                    <label for="title" className="form-label">Technologies</label>
                                    <input type="text" id="title" placeholder="Php,Python,js,HTML,CSS" className="form-control"/> 
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
export default AddCourses;
