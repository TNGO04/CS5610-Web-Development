import React from 'react'
import {Link} from 'react-router-dom'

/**
 * CourseRow represents a row component in CourseTable.
 */
class CourseRow extends React.Component {


    constructor(props) {
        super(props)

        this.state = {
            editing: false,
            currentTitle: this.props.course.title
        }

    }

    /**
     * Save title and update course information.
     */
    saveTitle = () => {
        this.setState( {editing: false})
        const newCourse = {
            ...this.props.course,
            title: this.state.currentTitle
        }
        this.props.updateCourse(newCourse)
    }

    /**
     * Render component.
     * @returns component content
     */
    render() {     

        return (
            // display of course title varies based on whether currently in editing mode or not
            <div className="row border p-2">
                <div className="col-4">

                    {
                        !this.state.editing && 
                        <Link to={`/courses/table/edit/${this.props.course._id}`}>
                            <i className="fa-solid fa-file"></i> {this.state.currentTitle}
                        </Link>
                    }

                    {
                        this.state.editing && 
                        <input
                            onChange={(event) => this.setState({currentTitle: event.target.value})}
                            value={this.state.currentTitle}
                            className="form-control"
                        />
                    }
                </div>
                <div className="col-2 d-none d-md-block d-lg-block">
                    {this.props.course.owner}
                </div>
                <div className="col-2 d-none d-md-block d-lg-block">
                    {this.props.course.lastModified}
                </div>

                <div className="col-2 d-none d-md-block d-lg-block">
                    <Link to={`/courses/table/edit/${this.props.course._id}/quizzes/`}>
                        Quizzes
                    </Link>
                </div>

                {/* display of buttons varies depending on editing mode*/}
                <div className="col-2">
                    {!this.state.editing && <i onClick={() => this.setState({editing: true})} 
                        className="fa-solid fa-pen-to-square"></i>}

                    {this.state.editing && <i onClick={() => {
                        this.props.deleteCourse(this.props.course)
                        }} 
                        className="fa-solid fa-trash"></i>}
                    {this.state.editing && <i onClick={this.saveTitle} 
                        className="fa-solid fa-check"></i>}
                </div>
            </div>
        )
    }
}

export default CourseRow