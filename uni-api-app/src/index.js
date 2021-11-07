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
  }
  create(e) {
    // add entity - POST
    e.preventDefault();
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
  }
  update(e) {
    // update entity
    e.preventDefault();
    let newArray = this.state.wholeData;
    let lastIndex = this.state.wholeData.length;
    var index = lastIndex - 1;
    if (index > -1) {
      newArray.splice(lastIndex, 0, newArray[0]);
    }
    console.log(newArray);
    this.setState({ wholeData: newArray });
  }
  delete(e) {
    // delete entity
    e.preventDefault();
    let newArray = this.state.wholeData;
    let lastIndex = this.state.wholeData.length;
    var index = lastIndex - 1;
    if (index > -1) {
      newArray.splice(index, 1);
    }
    console.log(newArray);
    this.setState({ wholeData: newArray });
  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-4 text-center">Displaying Australian universities</h1>
            <button class="button" onClick={(e) => this.create(e)}>Load</button>
            <button class="button" onClick={(e) => this.delete(e)}>Delete</button>
            <button class="button" onClick={(e) => this.update(e)}>Add</button>
            {this.state.wholeData && <div>
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
            </div>}

          </div>
        </div>
      </div>
    );
  }
}
let domContainer = document.getElementById('root');
ReactDOM.render(<MyComponent />, domContainer);


