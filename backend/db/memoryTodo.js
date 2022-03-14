import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({ // todoSchema değişkenine yeni bir schema oluşturduk. 
    title: {
        type: String,   // type değişkenine string değer atadık.
        required: true // title değişkeni boş geçilemez. girilmesi zorunlu alanları true yapıyoruz.
    },
    completed: {
        type: Boolean,
        default: false 
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    image: {
        type: String
    }
});

/* 

resimleri database de string olarak göstermek için image değişkenini string olarak tanımladık.
bunuda cors paketiyle yaptık.

*/

const Todo = mongoose.model("todos", todoSchema); // Model oluşturduk .Todo değişkenine todoSchema ile oluşturduğumuz schema'yi atadık. 


export default Todo; // export ediyoruz.