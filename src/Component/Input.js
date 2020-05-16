import React, {Component} from 'react';

class Input extends Component {
    render() {
        const {item,SetChange,AddItem,edit}=this.props;
        return (
            <div class="container my-3 ">
                <h3 className='text-capitalize text-center'> Add Items</h3>

                {/*user input form*/}
                <form onSubmit={AddItem}>
                    <div className='input-group'>
                        <div className='input-group-prepend'>
                            <div className='input-group-text bg-primary text-white'>
                                <i className="fas fa-book"></i>
                            </div>
                        </div>

                        {/*user input*/}
                        <input type='text' className='form-control' placeholder='Add task'
                               value={item}
                               onChange={SetChange} required/>
                    </div>

                    {/*submit and edit button declaration*/}
                        <button type="submit"
                            className={
                                edit ? "btn btn-block btn-success mt-3":"btn btn-block btn-primary mt-3"}>
                                    {edit ? "Update Item" : "Add Item"}
                        </button>
                 </form>
            </div>

        );
    }
}

export default Input;