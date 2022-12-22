import React from "react"
import { useNavigate, useParams } from "react-router-dom"

const CourseEditor = ({
}) => {
    const {moduleId, courseId, lessonId} = useParams();
    const navigate = useNavigate()
    return (
    <div className="container">
        <h1 className="mt-2">
            <i className="fa-solid fa-xmark" onClick={() => navigate(-1)}></i>
            Web Dev Selected Course</h1>
        <div className="row">
            <div className="col-4">
                <ul className="list-group">
                    <li className="list-group-item">
                    </li>
                </ul>
            </div>

            <div className="col-8">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Unselected</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled">Disabled</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active">
                                <div className="form-inline">
                                        <input type="text" placeholder="Edit Lesson 4"
                                        className="form-control form-control-sm mr-3"/>
                                        <i className="fa-solid fa-close"></i>
                                        
                                </div>

                        </a>

                    </li>

                </ul>

            </div>

        </div>
    </div>
    )}

export default CourseEditor