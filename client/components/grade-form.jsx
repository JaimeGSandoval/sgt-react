import React from 'react';

function InputFields(props) {

  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fas fa-user"></i></span>
        </div>
        <input type="text" className="form-control" onChange={props.onChange} placeholder="Name" name="name" aria-label="Name" />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fas fa-table"></i></span>
        </div>
        <input type="text" className="form-control" onChange={props.onChange} placeholder="Course" name="course" aria-label="Course" />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
        </div>
        <input type="text" className="form-control" onChange={props.onChange} placeholder="Grade" name="grade" aria-label="Grade" />
      </div>
      <div className="btn-box justify-content-end d-flex">
        <button className="btn-success pb-1" type="submit">Add</button>
        <button className="btn-success ml-2 pb-1" onClick={props.resetForm} type="reset">Cancel</button>
      </div>
    </>
  );

}

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  resetForm() {
    this.setState({
      name: '',
      grade: null,
      course: ''
    });
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
      grade: event.target.value,
      course: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const course = formData.get('course');
    let grade = formData.get('grade');
    grade = Number(grade);
    event.target.reset();
    this.props.createGrade(name, course, grade);
  }

  render() {
    return (
      <div className="col-4">
        <form action="/api/grades" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <InputFields resetForm={this.resetForm} onChange={this.handleChange} />
          </div>
        </form>
      </div >
    );
  }
}

export default GradeForm;
