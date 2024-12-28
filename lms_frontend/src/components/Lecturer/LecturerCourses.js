import { Link } from "react-router-dom";
import LecturerSidebar from "./LecturerSidebar";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

function LecturerCourses() {
    const [courseData, setCourseData] = useState([]);
    const lecturerId = localStorage.getItem('lecturerId');

    const fetchCourses = () => {
        if (!lecturerId) {
            window.location.href = '/lecturer-login';
            return;
        }

        axios.get(`${baseUrl}/lecturer-courses/${lecturerId}`)
            .then((res) => {
                setCourseData(res.data);
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
                window.alert('Error fetching courses');
            });
    };

    useEffect(() => {
        fetchCourses();
    }, [lecturerId]);

    const handleDeleteCourse = (courseId) => {
        if (window.confirm('Are you sure you want to delete this course?')) {
            axios.delete(`${baseUrl}/course/${courseId}`)
                .then((res) => {
                    window.alert('Course deleted successfully');
                    fetchCourses(); // Refresh the list
                })
                .catch(error => {
                    console.error('Error deleting course:', error);
                    window.alert('Error deleting course');
                });
        }
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <LecturerSidebar />
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">My Courses</h5>
                        <div className="card-body">
                            <Link to="/add-course" className="btn btn-primary mb-3">
                                Add New Course
                            </Link>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Total Enrolled</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {courseData.length > 0 ? (
                                        courseData.map((course, index) => (
                                            <tr key={index}>
                                                <td>{course.title}</td>
                                                <td><Link to={`/enrolled-students/${course.id}`}>{course.total_enrolled || 0}</Link></td>
                                                <td>
                                                    <button 
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => handleDeleteCourse(course.id)}
                                                    >
                                                        Delete
                                                    </button>
                                                    <Link 
                                                        className="btn btn-success btn-sm ms-2" 
                                                        to={`/add-chapters/${course.id}`}
                                                    >
                                                        Add Chapters
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="text-center">No courses found</td>
                                        </tr>
                                    )}
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