import axios from "axios"
export const addTask = (data) => {

    console.log('action')
    return{
        type:"ADD_TASK",
        payload: data
    }
}

export const removeTask = (index) => {
    console.log('action')
    return{
        type:"REMOVE_TASK",
        payload: index
    }
}

export const updateTask = (...data) => {
    return{
        type:"UPDATE_TASK",
        payload: data
    }
}

export const fetchData = () => {
    console.log("Sahib")
    return async function (dispatch){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
        console.log(response.data)
        return dispatch({
           type:"FETCH_DATA",payload:response.data
        })
    }
    console.log('tank')
}

