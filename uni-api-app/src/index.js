import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wholeData: []
    };
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // get all entities - GET
    fetch("http://universities.hipolabs.com/search?country=Australia", {
      "method": "GET"
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          wholeData: response
        })
      })
      .catch(err => {
        console.log(err);
      });
      console.log(this.state.wholeData);
      debugger;
  }
  create(e) {
    // add entity - POST
    e.preventDefault();
  }
  update(e) {
    // update entity - PUT
    e.preventDefault();
  }
  delete(e) {
    // delete entity - DELETE
    e.preventDefault();
  }
  handleChange(changeObject) {
    this.setState(changeObject)
  }
  render() {
    const tableContent = this.state.wholeData.forEach(item => {
      return(<tr>
        <td>{item.alpha_two_code}</td> 
        <td>{item.web_pages}</td>
        <td>{item.name}</td>
        <td>{item.country}</td>
        <td>{item.domains}</td>
      </tr>);
    })
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-4 text-center">Displaying Australian universities</h1>
            <table>
              <tr>
                <th>Code</th>
                <th>Web Page</th> 
                <th>Name</th>
                <th>Country</th>
                <th>Domains</th>
              </tr>
              {this.state.wholeData.map(d => (
                <tr>
                <td>{d.alpha_two_code}</td> 
                <td>{d.web_pages}</td>
                <td>{d.name}</td>
                <td>{d.country}</td>
                <td>{d.domains}</td>
              </tr>
              ))} 
            </table>
          </div>
        </div>
      </div>
    );
  }
}
let domContainer =  document.getElementById('root');
ReactDOM.render(<MyComponent />, domContainer);


