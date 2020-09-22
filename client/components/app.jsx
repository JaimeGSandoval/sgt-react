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

  render() {
    return (
      <div className='container'>
        <Header title="Student Grade Table" />
        <GradeTable grades={this.state.grades} />
      </div>
    );
  }
}

export default App;
