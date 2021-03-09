import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Search from './components/Search';
import Container from './components/Container';
import Col from './components/Col';
import API from './utils/API';
import '../src/App.css';

class App extends React.Component {
  state = { employees: [], search: '' };

  componentDidMount() {
    API.search()
      .then((res) => {
        this.setState({
          employees: res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            city: e.location.city,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
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

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
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
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Phone</th>
                  </tr>
                </thead>

                {[...this.state.employees].map((result) => (
                  <EmployeeCard
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