import React, {Component} from 'react';
import Edit from "./Edit";

class List extends Component {
    render() {

        const {items,DeleteItem,clearList,EditItem,CompletedItem}=this.props;
        return (
            <ul className='list-group my-3'>
                <h3 className='text-capitalize text-center'>List Items</h3>
                {
                    items.map(item=> {
                        {/*display output for the list*/}
                        return (

                            <Edit key={item.id}
                                      title={item.title}
                                      DeleteItem={()=>DeleteItem(item.id)}
                                      EditItem={()=>EditItem(item.id)}
                                      CompletedItem={()=>CompletedItem(item.id)}
                                      complete = {item.complete}
                            />
                        );
                    })
                }

                {/*declaration of clear list*/}
                <button type="button" className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList }>clear list</button>
            </ul>
        );
    }
}

export default List;