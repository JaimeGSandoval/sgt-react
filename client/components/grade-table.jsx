import React from 'react';

function Grade(props) {
  return (
    <tr>
      <td>props.name</td>
      <td>props.course</td>
      <td>props.grade</td>
    </tr>
  );
}

function GradeTable(props) {
  let noGradesText = 'noGradesText d-none';
  if (!props.grades) {
    noGradesText = 'noGradesText';
    return;
  }

  return (
    <div className="row" >
      <div className="col-12">
        <table className="table">
          <thead className="bg-secondary">
            <tr>
              <th scope="col-6" className="py-3">Student Name</th>
              <th scope="col-3" className="py-3">Course</th>
              <th scope="col-3" className="py-3">Grade</th>
            </tr>
          </thead>
          <tbody>
            {
              props.grades.map(grade => {
                return <Grade key={grade.id} name={grade.name} course={grade.course} />;
              })

            }
            {/* {
              props.todos.map(todo => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    toggleCompleted={props.toggleCompleted} />
                );
              })
            } */}
            {/* <Grade grade={props.grades} /> */}
          </tbody>
        </table>
        <p className={noGradesText}>No Grades Recorded</p>
      </div>
    </div>
  );

}

// class GradeTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { grades: [] };
//   }

//   render() {
//     let noGradesText = 'noGradesText d-none';
//     if (!this.state.grades) {
//       noGradesText = 'noGradesText';
//     }

//     return (
//       <div className="row" >
//         <div className="col-12">
//           <table className="table">
//             <thead className="bg-secondary">
//               <tr>
//                 <th scope="col-6" className="py-3">Student Name</th>
//                 <th scope="col-3" className="py-3">Course</th>
//                 <th scope="col-3" className="py-3">Grade</th>
//               </tr>
//             </thead>
//             <tbody>

//             </tbody>
//           </table>
//           <p className={noGradesText}>No Grades Recorded</p>
//         </div>
//       </div>
//     );
//   }
// }

export default GradeTable;
