import { Link } from "react-router-dom";
import LecturerSidebar from "./LecturerSidebar";

function LecturerCourses() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <LecturerSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Lecturer Courses</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Created By</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Php Development</td>
                                        <td><Link to="/">Person1</Link></td>
                                        <td>
                                            <button className="btn btn-danger btn-sm">Delete</button>
                                            <Link  class="btn btn-success btn-sm active ms-2" to="/add-chapters/2">Add Chapters</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default LecturerCourses;
