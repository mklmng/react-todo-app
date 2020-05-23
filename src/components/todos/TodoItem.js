import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends React.Component {
    static propTypes = {
        tasks: PropTypes.array.isRequired,
        handleEdit: PropTypes.func.isRequired,
        handleDelete: PropTypes.func.isRequired,
        handleComplete: PropTypes.func.isRequired
    }    
    
    render() {
        return (
            <Fragment>
                {this.props.tasks.map((task, index) => (
                    <li className="task-list__item" key={index}>
                        <div className="task-list__item__content">
                            <span className={"task-list__item__content__text " + (task.complete ? "task--completed" : "")}>{task.text}</span>
                        </div>
                        <div className="task-list__item__controls">
                            {!task.complete &&
                                <Fragment>
                                    <span className="task-list__item__complete" onClick={() => {this.props.handleComplete(index)}}>Complete</span>
                                    <span className="task-list__item__edit" onClick={() => {this.props.handleEdit(index, task.text)}}>[Edit]</span>
                                </Fragment>
                            }
                            <span className="task-list__item__delete" onClick={() => {this.props.handleDelete(index)}}>Delete</span>
                        </div>
                    </li>
                    )
                    )
                }
            </Fragment>
        );
    }
  }

  export default TodoItem;