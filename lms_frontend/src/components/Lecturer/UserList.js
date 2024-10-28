import { Link } from "react-router-dom";
import LecturerSidebar from "./LecturerSidebar";

function UserList() {
    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <LecturerSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">User List</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Entrolled Course</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><Link to="/">Person1</Link></td>
                                        <td><Link to="/">PHP</Link></td>
                                        <td>
                                            <button className="btn btn-danger btn-sm">Delete</button>
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

export default UserList;
