import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

class TodoResults extends React.Component {
    constructor(props){
        super(props);

    }

    static propTypes = {
        tasks: PropTypes.array.isRequired
    }
    
    render() {
        const pendingTasks = this.props.tasks.filter(task => !task.complete).length;
        const allTasks = this.props.tasks.length;

        return (
            <Fragment>
                {allTasks > 0 
                ? <div id="results"><h2>You have {pendingTasks > 1 ? `${pendingTasks} pending tasks` : `${pendingTasks} pending task`}.</h2></div>
                : <div id="results"><h2>You don't have any pending tasks.</h2></div>
                }  
            </Fragment>
        );
    }
  }

  export default TodoResults;
