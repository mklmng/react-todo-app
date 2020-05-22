import React from 'react';
import PropTypes from 'prop-types';


class Form extends React.Component {
    constructor(props){
        super(props);
    }

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired
    }
    
    render() {
      return (
        <form onSubmit={this.props.handleSubmit}>
          <label htmlFor="new-task">Task: </label>
          <input 
            type="text"
            id="new-task"
            onChange={this.props.handleChange}
            value={this.props.text}
          />
          <button>
            Add task
          </button>
        </form>
      );
    }
  }

  export default Form;