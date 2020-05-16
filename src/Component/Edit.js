import React, {Component} from 'react';

class Edit extends Component {
    render() {
        const {title,DeleteItem,EditItem,complete,CompletedItem}=this.props;

        //marks with the line when it task is complete
        const mark = {
            textDecoration: 'line-through',
            color: 'green'
        }
        return (

            <li className='list-group-item list-group-item-primary text-capitalize d-flex justify-content-between my-2'>
                <h6 style={complete ? mark : null}>{title}</h6>
                <div className='todo-icon'>

                    {/*declaration of edit or update task from the list*/}
                    <span className='mx-2 text-dark' onClick={EditItem} style={{display:complete? "none":"inline-block"}}>
                     <i className="fa fa-pen" aria-hidden="true"/>
                    </span>

                    {/*declaration of mark completed task from the list*/}
                    <span className="mx-2 text-success" onClick={CompletedItem} disabled={complete ? true : false}>
                        <i className="fas fa-book" ></i>
                    </span>

                    {/*declaration of delete task from the list*/}
                    <span className='mx-2 text-danger' onClick={DeleteItem}>
                        <i className="fa fa-trash" aria-hidden="true"  />
                    </span>
                </div>
            </li>

        )
    }

}

export default Edit;