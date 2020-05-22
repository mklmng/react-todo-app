import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class Todos extends React.Component {
    constructor(props){
        super(props);

    }

    static propTypes = {
        tasks: PropTypes.array.isRequired,
        editId: PropTypes.number.isRequired,
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
                    <ol className="task-list">
                    {this.props.editMode && 
                    <Fragment>
                        <div id="edit-overlay">
                        <input className="edit-overlay__input" type="text" value={this.props.editText} onChange={this.props.handleEditChanges} />
                        <button className="edit-overlay__cta" onClick={()=> this.props.handleEditUpdates()}>Accept Changes</button> 
                        </div>
                    </Fragment>
                    }

                    {this.props.tasks.map((task, index) => (
                        <li className="task-item" key={index}>
                            <div className="task-item__content">
                                <span className={"task-item__content__text " + (task.complete ? "task--completed" : "")}>{task.text}</span>
                            </div>
                            <div className="task-item__controls">
                                <span className="task-item__edit" onClick={() => {this.props.handleEdit(index, task.text)}}>Edit</span>
                                <span className="task-item__delete" onClick={() => {this.props.handleDelete(index)}}>Delete</span>
                                <span className="task-item__complete" onClick={() => {this.props.handleComplete(index)}}>Complete</span>
                            </div>
                        </li>
                        )
                        )
                    }
                    </ol>
                }
            </Fragment>
        );
    }
  }

  export default Todos;
