import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, DeleteTodo, removeTodo } from "../redux/actions/index";

const Todo = () => {
	const [info, setInfo] = useState("");

	const list = useSelector((state) => state.todoReducer.list);
	const dispatch = useDispatch();

	return (
		<>
			<div className="container">
				<h3 className="text">Todo Redux</h3>
				<div className="todolist">
					<input
						type="text"
						placeholder="Enter Todo"
						className="field"
						value={info}
						onChange={(e) => setInfo(e.target.value)}
					/>
					<button className="button" onClick={() => dispatch(addTodo(info), setInfo(""))}>
						<i className="fa-solid  fa-plus fa-lg"></i>
					</button>
				</div>
				<div className="outputbox">
					{list.map((element) => (
						<div className="display" key={element.id}>
							<h3 className="list">
								{element.data}
								<i className="fa-solid align fa-trash fa-xs" onClick={() => dispatch(deleteTodo(element.id))}></i>
							</h3>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Todo;
