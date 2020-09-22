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
    this.calculateGradeAverage = this.calculateGradeAverage.bind(this);
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

  calculateGradeAverage(grades) {
    var average = null;
    var averageTotal = null;
    for (var i = 0; i < this.state.grades.length; i++) {
      average += this.state.grades[i].grade;
    }

    averageTotal = Math.ceil(average / this.state.grades.length);
    return averageTotal;

  }

  render() {
    return (
      <div className='container'>
        <Header title="Student Grade Table" average={this.calculateGradeAverage()} />
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
