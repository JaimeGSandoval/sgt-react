import React from 'react';
import Header from './header';
import GradeTable from './grade-table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
    this.getAllGrades = this.getAllGrades.bind(this);
    this.getAverageGrade = this.getAverageGrade.bind(this);
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
    for (let i = 0; i < grades.length; i++) {
      average += grades[i].grade;
    }
    averageTotal = Math.ceil(average / grades.length);
    return averageTotal;
  }

  render() {
    return (
      <div className='container'>
        <Header title="Student Grade Table" average={this.getAverageGrade(this.state.grades)} />
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
