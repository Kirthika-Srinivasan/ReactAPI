import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wholeData: [],
      alpha_two_code: '',
      web_pages: '',
      name: '',
      country: '',
      domains: '',
      state_province: ''
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
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h1 className="display-4 text-center">Displaying Australian universities</h1>
            
          </div>
        </div>
      </div>
    );
  }
}
let domContainer =  document.getElementById('root');
ReactDOM.render(<MyComponent />, domContainer);


