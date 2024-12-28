import { Link } from "react-router-dom";
import LecturerSidebar from "./LecturerSidebar";
import { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/api";

function AddCourses() {
    const [cats, setCats] = useState([]);
    const [courseData, setCourseData] = useState({
        category: '',
        title: '',
        description: '',
        f_img: '',
        techs: ''
    });
    
    // Get lecturer ID from localStorage
    const lecturerId = localStorage.getItem('lecturerId');

    useEffect(() => {
        try {
            axios.get(baseUrl + '/category')
                .then((res) => {
                    setCats(res.data);
                    if (res.data.length > 0) {
                        setCourseData(prev => ({ ...prev, category: res.data[0].id }));
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleChange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]: event.target.value
        });
    };

    const handleFileChange = (event) => {
        setCourseData({
            ...courseData,
            [event.target.name]: event.target.files[0]
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();

        // Validate if lecturer ID exists
        if (!lecturerId) {
            window.alert('Please login first');
            return;
        }

        const _formData = new FormData();
        _formData.append('category', courseData.category);
        _formData.append('lecturer', lecturerId); // Use the lecturer ID from localStorage
        _formData.append('title', courseData.title);
        _formData.append('description', courseData.description);
        _formData.append('featured_img', courseData.f_img, courseData.f_img.name);
        _formData.append('techs', courseData.techs);

        try {
            axios.post(baseUrl + '/course/', _formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then((res) => {
                window.alert('Course added successfully');
                window.location.href = '/lecturer-courses';
            })
            .catch(error => {
                console.error('Error adding course:', error);
                window.alert('Failed to add course');
            });
        } catch (error) {
            console.log(error);
            window.alert('Failed to add course');
        }
    };

    // Redirect if no lecturer ID
    useEffect(() => {
        if (!lecturerId) {
            window.location.href = '/lecturer-login';
        }
    }, [lecturerId]);

    return (
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <LecturerSidebar />
                </aside>
                <div className="col-9">
                    <div className="card">
                        <h5 className="card-header">Add Course</h5>
                        <div className="card-body">
                            <form onSubmit={formSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Category</label>
                                    <select name="category" onChange={handleChange} className="form-control">
                                        {cats.map((category, index) => (
                                            <option key={index} value={category.id}>{category.title}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" onChange={handleChange} name="title" id="title" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea onChange={handleChange} name="description" id="description" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="video" className="form-label">Featured Image</label>
                                    <input type="file" onChange={handleFileChange} name="f_img" id="video" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="techs" className="form-label">Technologies</label>
                                    <textarea onChange={handleChange} name="techs" id="techs" placeholder="Php,Python,JavaScript,HTML,CSS" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCourses;