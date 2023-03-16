import { Component } from "react";



export class ToDo extends Component {
    state = {
        userInput: "",
        toDoList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addTask(input) {
        if (input === '') {
            alert("Please enter a task!")
        }

        else {
            let taskArray = this.state.toDoList;
            taskArray.push(input) 
            this.setState({toDoList: taskArray, userInput: ""})
        }
    }

    crossedTask(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }

    deleteTask() {
        let taskArray = this.state.toDoList;
        taskArray = [];
        this.setState({toDoList: taskArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>

                    <div>
                        <input type="text"
                        placeholder="Write one good task..."
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                        <button className="btn add" onClick={() => this.addTask(this.state.userInput)}>Add</button>
                    </div>


                    <ul className="container grey">
                        {this.state.toDoList.map((item, index) => (
                            <li onClick={this.crossedTask} key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="container">
                        <button className="btn delete" onClick={() => this.deleteTask()}>Empty the list</button>
                    </div>

                </form>
            </div>
        )


    }
}