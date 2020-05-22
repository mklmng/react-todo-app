import React, { Fragment } from 'react';
import TodoOverlay from './TodoOverlay';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
    constructor(props){
        super(props);
    }

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
        return (
            <ol className="task-list">
                <TodoOverlay {...this.props} />
                <TodoItem {...this.props} />
            </ol>
        );
    }
  }

  export default TodoList;