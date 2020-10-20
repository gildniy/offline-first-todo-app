import React from 'react';
import {withFirebase} from "../contexts";
import {usePersistedState} from "../hooks/usePersistedState";

const TodosPage = ({firebase}: any) => {
    const [todos, setTodos] = usePersistedState('todos', [])
    const todoCollection = firebase.firestore.collection('todos')

    const createTodo = async (todo: any) => {
        await todoCollection.add(todo)
    }
    const listTodo = async () => {
        const data = await todoCollection.get().docs.map((doc: any) => {
            return {id: doc.id, ...doc.data()}
        })
        await setTodos(data)
    }
    const deleteTodo = async (id: string) => {
        await todoCollection.doc(id).delete()
    }
    return <>
        <ul>
            <li>
                {/*    */}
            </li>
        </ul>
    </>
};

export default withFirebase(TodosPage)