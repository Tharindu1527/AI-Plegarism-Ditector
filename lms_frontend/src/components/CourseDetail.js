import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CourseDetail() {
    let { course_id } = useParams(); // Get course_id from URL parameters

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo512.png" className="img-thumbnail" alt="Course" />
                </div>
                <div className="col-8">
                    <h3>Course Title (ID: {course_id})</h3> {/* Display course_id here */}
                    <p>
                        Using a combination of grid and utility classes, cards can be made horizontal in a 
                        mobile-friendly and responsive way. In the example below, we remove the grid gutters
                        with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. 
                        Further adjustments may be needed depending on your card content.
                    </p>
                    <p className="fw-bold">Course By: <Link to="/lecturer-detail/1">Lecturer 1</Link></p>
                    <p className="fw-bold">Semester: <a href="https://example.com">5</a></p> {/* Fixed URL */}
                    <p className="fw-bold">Total Enrolled: 456 Students</p>
                    <p className="fw-bold">Rating: 4/5</p>
                </div>
            </div>

            {/* Course videos */}
            <div className="card mt-4"> 
                <h3 className="card-header">Course Videos</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Introduction
                        <span className="float-end">
                            <span className="me-5">1 Hour 30 Minutes</span>
                            <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal1">
                                <i className="bi-youtube"></i>
                            </button>
                        </span>

                        {/* Video Modal */}
                        <div className="modal fade" id="videoModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Video 1</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="ratio ratio-16x9">
                                            <iframe 
                                                src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" 
                                                title="YouTube video" 
                                                allowFullScreen 
                                            ></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Video Modal */}
                    </li>

                    {/* Repeat for additional videos */}
                    {[...Array(4)].map((_, index) => (
                        <li className="list-group-item" key={index}>
                            Introduction
                            <span className="float-end">
                                <span className="me-5">1 Hour 30 Minutes</span>
                                <button className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target={`#videoModal${index + 2}`}>
                                    <i className="bi-youtube"></i>
                                </button>
                            </span>

                            {/* Video Modal */}
                            <div className="modal fade" id={`videoModal${index + 2}`} tabIndex="-1" aria-labelledby={`exampleModalLabel${index + 2}`} aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id={`exampleModalLabel${index + 2}`}>Video {index + 2}</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="ratio ratio-16x9">
                                                <iframe 
                                                    src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" 
                                                    title={`YouTube video ${index + 2}`} 
                                                    allowFullScreen 
                                                ></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Video Modal */}
                        </li>
                    ))}
                </ul>
            </div>

            <h3 className="pb-1 mb-4">Related Courses</h3>
            <div className="row mb-4">
                {/* First Course */}
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/1">
                            <img src="/logo512.png" className="card-img-top" alt="Course thumbnail" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/1">Course Title 1</Link>
                            </h5>
                        </div>
                    </div>
                </div>

                {/* Second Course */}
                <div className="col-md-3">
                    <div className="card">
                        <Link to="/detail/2">
                            <img src="/logo512.png" className="card-img-top" alt="Course thumbnail" />
                        </Link>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link to="/detail/2">Course Title 2</Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CourseDetail;
