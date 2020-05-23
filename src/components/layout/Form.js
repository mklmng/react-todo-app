import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired
    }
    
    render() {
      return (
        <form className="task-entry" onSubmit={this.props.handleSubmit}>
          <div id="task-entry__wrapper">
            <label htmlFor="new-task">Task: </label>
            <input 
              type="text"
              id="new-task"
              onChange={this.props.handleChange}
              value={this.props.text}
            />
            <button className="cta">
              Add task
            </button>
          </div>
        </form>
      );
    }
  }

  export default Form;