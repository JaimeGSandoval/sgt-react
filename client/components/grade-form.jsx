import React from 'react';

function InputFields(props) {

  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fas fa-user"></i></span>
        </div>
        <input type="text" className="form-control" placeholder="Name" name="name" aria-label="Name" />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fas fa-table"></i></span>
        </div>
        <input type="text" className="form-control" placeholder="Course" name="course" aria-label="Course" />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text"><i className="fas fa-graduation-cap"></i></span>
        </div>
        <input type="text" className="form-control" placeholder="Grade" name="grade" aria-label="Grade" />
      </div>
    </>
  );

}

function InputButtons(props) {

  return (
    <>
      <div className="btn-box justify-content-end d-flex">
        <button className="btn-success pb-1" type="submit">Add</button>
        <button className="btn-success ml-2 pb-1" type="reset">Cancel</button>
      </div>
    </>
  );

}

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const course = formData.get('course');
    const grade = formData.get('grade');
    this.createGrade(name, course, grade);
    event.target.reset();
  }

  render() {
    return (

      <div className="col-4">
        <form action="POST">
          <div className="form-group">
            <InputFields />
            <InputButtons />
          </div>
        </form>
      </div >
    );
  }
}

export default GradeForm;
