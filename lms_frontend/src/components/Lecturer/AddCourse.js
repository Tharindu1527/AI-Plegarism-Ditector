import { Link } from "react-router-dom";
import LecturerSidebar from "./LecturerSidebar";

function AddCourses() {
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
                                    <label for="title" className="form-label">Title</label>
                                    <input type="text" id="title" className="form-control"/> 
                                </div>
                                <div className="mb-3">
                                    <label for="title" className="form-label">Description</label>
                                    <input type="text" id="title" className="form-control"/> 
                                </div>
                                <div class="mb-3 row">
                                <label for="inputPassword" class="col-sm-2 col-form-label">Course Video</label>
                                 <div class="col-sm-10">
                                 <input type="file" class="form-control" id="inputPassword"/>
                                  </div></div>
                                <div className="mb-3">
                                    <label for="title" className="form-label">Technologies</label>
                                    <input type="text" id="title" className="form-control"/> 
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
