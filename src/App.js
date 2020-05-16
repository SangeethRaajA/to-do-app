import React, {Component} from 'react';
import Input from './Component/Input';
import List from "./Component/List";
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.css"
import {v4 as uuid} from "uuid";

{/*Student_Id:it18152074
student_name:Sangeeth Raj A
batch: 9.1 weekend*/}

class App extends Component {

    //set state
    state={
        items:[],
        id:uuid(),
        item:'',
        edit:false,
        complete:false
    };

    SetChange = e =>{
         this.setState({
            item: e.target.value
        });
    };

    //input method
    AddItem= (e)=> {
        e.preventDefault();

        const newItem={
            id:this.state.id,
            title:this.state.item
        };
        console.log(newItem);

        const updatedItems= [newItem,...this.state.items];

        this.setState({
            items:updatedItems,
            item:'',
            id:uuid(),
            edit:false,
            complete:false
        });
    };

    //delete item method
    DeleteItem =(id)=>{
        const filterItems=this.state.items.filter(item => item.id !==id);
        this.setState({
            items:filterItems
        });
    };

    //clear the whole list method
    clearList = ()=>{
        this.setState({
            items:[]
        })
    };

    //edit item method
    EditItem = id =>{
        const filterItems=this.state.items.filter(item => item.id !==id);

        const selectItem = this.state.items.find(item => item.id ===id)

        console.log(selectItem);

        this.setState({
            items:filterItems,
            item:selectItem.title,
            edit:true,
            id:id
        });
    };

    //completed list method
    CompletedItem = (id) => {
        const checked=this.state.items.find(item => item.id ==id);
        checked.complete = true;

        const CheckedItem = this.state.items.filter(item => item.id !== id);

        this.setState({
            items: [...CheckedItem, checked]
        });
    };

    render() {

        return (

            <div className=" text-center">
                <div className='container text-center'><br></br>
                <h1 className='text-capitalize'> TODO APP </h1>
                </div>

                <div class="row justify-content-md-center">
                    <div className = "col-6 col-md-4 mt-2 ">
                        <div className = "container-fluid" >

                            {/*user input*/}
                            <Input
                                item={this.state.item}
                                SetChange={this.SetChange}
                                AddItem={this.AddItem}
                                edit={this.state.edit}
                            />
                        </div>
                        <div className = "container-fluid" >

                            {/*display output*/}
                            <List
                                items={this.state.items}
                                DeleteItem={this.DeleteItem}
                                clearList={this.clearList}
                                EditItem={this.EditItem}
                                CompletedItem={this.CompletedItem}
                            />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default App;




