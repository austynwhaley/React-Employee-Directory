import React from 'react';
import EmployeeInfo from './components/EmployeeInfo';
import Table from './components/Table';
import Container from './components/Container';
import Col from './components/Col';
import SortBtn from './components/SortBtn';
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

  sortedEmployee(sortname) {

    if (sortname === "firstname") {

    } else if ( sortname === "lastName") {

    } else {

    }

  
  }


  render() {
    return (
      
      <Container>
        <div className="container">
          <div className="row">
            <Col size="md-6">
              <h1>Employee Directory</h1>
            </Col>
          </div>

          <div className="row">
            <Col size="lg-12">
              <SortBtn/>
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