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
        <button className="btn-success" type="submit">Add</button>
        <button className="btn-success ml-2" type="reset">Cancel</button>
      </div>
    </>
  );

}

class GradeForm extends React.Component {

  render() {
    return (

      <div className="col-4">
        <form action="#">
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
