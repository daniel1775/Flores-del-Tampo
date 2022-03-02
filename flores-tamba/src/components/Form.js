import React, { useState } from "react";
import '../App.css';

const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() === "") return;

        addTodo({ title: inputValue, completed: false });
        setInputValue("");
    };
    
    return (
       <>
       <div className="container1">
       <div className="container-task">
        <h2 className="task">TAREAS A REALIZAR</h2>
        </div>

        <div className="button-add">
        <button type="submit" className="add"><i className="white plus icon"></i>AGREGAR</button>
        </div>
        </div>
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                        <input className="bar"
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Enter something to do..."
                        />
                    </div>
                    
                    <div className="column one wide">
                        <button type="submit" className="ui button circular icon green"><i className="white plus icon"></i></button>
                    </div>
                </div>
            </div>
        </form>
        </>
    );
};

export default Form;