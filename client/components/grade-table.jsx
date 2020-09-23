import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.course}</td>
      <td>{props.grade}</td>
      <td><button className="btn-danger">{props.buttonTitle}</button></td>
    </tr>
  );
}

function GradeTable(props) {
  let noGradesText = '';
  if (props.grades.length === 0) {
    noGradesText = 'noGradesText';
  } else {
    noGradesText = 'd-none';
  }

  return (
    <div className="col-8">
      <table className="table table-striped">
        <thead className="bg-secondary">
          <tr>
            <th scope="col-6" className="py-3">Student Name</th>
            <th scope="col-3" className="py-3">Course</th>
            <th scope="col-3" className="py-3">Grade</th>
            <th scope="col-3" className="py-3">Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            props.grades.map(grade => {
              return <Grade key={grade.id} name={grade.name} course={grade.course} grade={grade.grade} buttonTitle="DELETE" />;
            })

          }
        </tbody>
      </table>
      <p className={noGradesText}>No Grades Recorded</p>
    </div>
  );

}

export default GradeTable;
