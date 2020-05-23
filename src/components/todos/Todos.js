import React, { Fragment } from 'react';
import TodoList from './TodoList';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    static propTypes = {
        tasks: PropTypes.array.isRequired,
        editMode: PropTypes.bool.isRequired,
        editText: PropTypes.string.isRequired,
        handleEdit: PropTypes.func.isRequired,
        handleEditChanges: PropTypes.func.isRequired,
        handleEditUpdates: PropTypes.func.isRequired,
        handleDelete: PropTypes.func.isRequired,
        handleComplete: PropTypes.func.isRequired
    }
    
    render() {
        const allTasks = this.props.tasks.length;

        return (
            <Fragment>
                {allTasks > 0 &&
                    <TodoList {...this.props} />   
                }
            </Fragment>
        );
    }
  }

  export default Todos;
