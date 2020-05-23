import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class TodoOverlay extends React.Component {
    static propTypes = {
        editMode: PropTypes.bool.isRequired,
        editText: PropTypes.string.isRequired,
        editChanges: PropTypes.func.isRequired,
        handleEditChanges: PropTypes.func.isRequired,
        handleEditUpdates: PropTypes.func.isRequired
    }
    
    render() {
        return (
            <Fragment>
            {this.props.editMode && 
                <div id="edit-overlay">
                    <input className="edit-overlay__input" type="text" value={this.props.editText} onChange={this.props.handleEditChanges} />
                    <button className="edit-overlay__cta" onClick={()=> this.props.handleEditUpdates()}>Accept Changes</button> 
                </div>
            }
            </Fragment>
        );
    }
  }

  export default TodoOverlay;