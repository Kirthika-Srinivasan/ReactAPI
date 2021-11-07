import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wholeData: [],
      count : 0,
      domainState: [],
      webPagesState: []
    }
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }
  componentDidMount() {
  }
  create(e) {
    e.preventDefault();
    this.setState({ count:0 });
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
    this.setState({ count:0 });
    let newArray = this.state.wholeData;
    let lastIndex = this.state.wholeData.length;
    var index = lastIndex - 1;
    if (index > -1) {
      newArray.splice(lastIndex, 0, newArray[0]);
    }
    this.setState({ wholeData: newArray});
  }
  delete(e) {
    // delete entity
    e.preventDefault();
    this.setState({ count:0 });
    let newArray = this.state.wholeData;
    let lastIndex = this.state.wholeData.length;
    var index = lastIndex - 1;
    if (index > -1) {
      newArray.splice(index, 1);
    }
    this.setState({ wholeData: newArray});
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-4 text-center">Displaying Australian universities</h1>
            <button className="button" onClick={(e) => this.create(e)}>Load</button>
            <button className="button" onClick={(e) => this.delete(e)}>Delete</button>
            <button className="button" onClick={(e) => this.update(e)}>Add</button>
            {this.state.wholeData && <div>
              <table>
                <thead>
                  <tr>
                    <th>Index</th>
                    <th>Code</th>
                    <th>Web Page</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Domains</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.wholeData.map(row => (
                    <tr>
                      <td>{this.state.count++}</td>
                      <td>{row.alpha_two_code}</td>
                      <td>{row.web_pages.length>1 ?row.web_pages.map(web_page => (<li>{web_page}</li>)) :row.web_pages}</td>
                      <td>{row.name}</td>
                      <td>{row.country}</td>
                      <td>{row.domains.length>1 ?row.domains.map(domain => (<li>{domain}</li>)) :row.domains}</td>
                    </tr>
                  ))}
                </tbody>
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


