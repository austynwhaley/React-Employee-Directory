import React from 'react';
import EmployeeInfo from './components/EmployeeInfo';
import Search from './components/Search';
import Table from './components/Table';
import Container from './components/Container';
import Col from './components/Col';
import API from './utils/API';
import '../src/App.css';


class App extends React.Component {
  state = { 

    employees: [], 
    search: '' 

  };

  componentDidMount() {
    API.search()
      .then((res) => {
        this.setState({
          employees: res.data.results.map((event, i) => ({

            firstName: event.name.first,

            lastName: event.name.last,

            city: event.location.city,

            picture: event.picture.large,

            email: event.email,

            phone: event.phone,

            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));
  }

  searchEmployee = (filter) => {
    const employeeList = this.state.employees.filter((employee) => {
      
      let values = Object.values(employee).join('').toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });
    
    this.setState({ employees: employeeList });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.searchEmployee(this.state.search);
  };

  render() {
    return (
      
      <Container>
        <div className="container">
          <div className="row">
            <Col size="md-6">
              <h1>Employee Directory</h1>
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Col>
          </div>

          <div className="row">
            <Col size="md-12">
              <table className="table">

                <Table/>
                
                {[...this.state.employees].map((result) => (
                  <EmployeeInfo
                    picture={result.picture}
                    firstName={result.firstName}
                    lastName={result.lastName}
                    city={result.city}
                    email={result.email}
                    phone={result.phone} 
                    key={result.key}
                  />
                ))}
              </table>
            </Col>
          </div>
        </div>
      </Container>
    );
  }
}

export default App;