import axios from 'axios';


const API = axios.create({baseURL: 'http://localhost:5000'});

/* 

eğer API değişkenini yazmasaydık 
export const createTodos = async () => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', todo);
    return response.data;
}

yazardık. İşlemi daha okunabilir yaptık.
*/


// backende post isteği gönderdik. backende localhost:5000/todos url'ine post isteği gönderdik.
// /todos route'unu ve todo değişkenini yazdık.
export const createTodos = async (todo) => {
    const response = await API.post('/todos', todo);
    return response.data;
}

// backende get isteği gönderdik. backende localhost:5000/todos url'ine get isteği gönderdik.
export const getTodos = async () => API.get('/todos');

// backende delete isteği gönderdik. backende localhost:5000/todos/:id url'ine delete isteği gönderdik.
export const deleteTodo = async (id) => API.delete(`/todos/${id}`);


// backende put isteği gönderdik. backende localhost:5000/todos/:id url'ine put isteği gönderdik.
export const updateTodo = async (id, todo) => API.put(`/todos/${id}`, todo);