import React from 'react';
import Header from './header';
import GradeTable from './grade-table';
import GradeForm from './grade-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAllGrades = this.getAllGrades.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(response => response.json())
      .then(responseData => {
        this.setState({ grades: responseData });
      })
      .catch(error => console.error('Fetch error', error));
  }

  getAverageGrade(grades) {
    let average = null;
    let averageTotal = null;
    if (grades.length === 0) {
      averageTotal = 'N/A';
      return averageTotal;
    } else {
      for (let i = 0; i < grades.length; i++) {
        average += grades[i].grade;
      }
    }
    averageTotal = Math.ceil(average / grades.length);
    return averageTotal;
  }

  createGrade(name, course, grade) {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, course, grade })
    };

    fetch('/api/grades', req)
      .then(res => res.json())
      .then(data => {
        this.setState(state => {
          state.grades.concat(data);
        });
        this.getAllGrades();
      })
      .catch(error => console.error('Post error', error));
  }

  deleteGrade(id) {

    const req = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch(`/api/grades/${id}`, req)
      .then(res => res.json())
      .then(data => {
        const newGrades = this.state.grades.slice();
        for (let i = 0; i < newGrades.length; i++) {
          if (newGrades[i].id === data.id) {
            newGrades.splice(i);
          }
        }
        this.setState({ grades: newGrades });
        this.getAllGrades();
      })
      .catch(error => console.error('Post error', error));
  }

  render() {
    return (
      <div className='container col-9'>
        <Header title="Student Grade Table" average={this.getAverageGrade(this.state.grades)} />
        <div className="row">
          <GradeTable grades={this.state.grades} deleteGrade={this.deleteGrade} />
          <GradeForm createGrade={this.createGrade} />
        </div>
      </div>
    );
  }
}

export default App;
