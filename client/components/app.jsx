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
      return null;
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

  render() {
    return (
      <div className='container'>
        <Header title="Student Grade Table" average={this.getAverageGrade(this.state.grades)} />
        <div className="row">
          <GradeTable grades={this.state.grades} />
          <GradeForm createGrade={this.createGrade} />
        </div>
      </div>
    );
  }
}

export default App;
