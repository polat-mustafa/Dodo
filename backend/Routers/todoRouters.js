import express from 'express';
import mongoose from 'mongoose';

import memoryTodo from '../db/memoryTodo.js';

const router = express.Router();

// All get requests

// get metodu ile url'yi alıyoruz. req istek, res cevap olarak veriyoruz. / ile 5000 numaralı portun hangi url sinde olduğunu belirtiyoruz. server localhost:5000/todos açıldıgında memoryTodo.js içerisindeki todos verilerini alır. 
router.get('/', async (req, res) => {
    try {
        const todos = await memoryTodo.find(); // todos değişkenine memoryTodo.js içerisindeki verilerini alır. find metonuda parametre yazılmazsa tüm verileri alır.
        res.status(200).send(todos); // todos verilerini gönderiyoruz. 200 istek başarılı olduğu için 200 status kodu döndürülür. 
        
    } catch (error) {
        res.status(404).send({ message: error.message });
    
        }
    });


// Single get request

router.get('/:id', async (req, res) => {
    try {
        
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) { // req.params.id değişkeni ile url'deki id değerini karşılaştırıyoruz. bu bir mongo db id si değilse hata döndürüyoruz.
            res.status(404).send({ message: 'Invalid ID' });
        }

        const todo = await memoryTodo.findById(req.params.id); // memoryData da findbyId ile girilen id ye göre veriyi alıyoruz. bunuda todo değişkenine atıyoruz ve status 200 de yani bi sıkıntı olmadan çalıştıgında, todo değişkenini send ile yanıtını istiyoruz.
        res.status(200).send(todo);

    } catch (error) {
        
        res.status(404).send({ message: error.message });
    }
});

// Create new todo

router.post('/', async (req, res) => {
    try {
        const todo = await memoryTodo.create(req.body); // memoryTodo nun bodysine post isteği atıyoruz.
        res.status(201).send(todo);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// Update todo

router.put('/:id', async (req, res) => {
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(404).send({ message: 'Invalid ID' });
        }

        const { title, completed, image, description, dueDate } = req.body; // req.body ile gelen verileri title ve completed değişkenine atıyoruz.

        const todo = await memoryTodo.findByIdAndUpdate(req.params.id, { title, completed, image, description, dueDate}, { new: true }); // memoryTodo nun içeriisnde id ve body ile güncelleme yapıyoruz. new true oldugunda yeni veriyi döndürüyor. Eski veriyi döndürmek için new: false yazıyoruz.
        res.status(200).send(todo);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// Delete todo

router.delete('/:id', async (req, res) => {
    try {
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(404).send({ message: 'Invalid ID' });
        }

        const todo = await memoryTodo.findByIdAndDelete(req.params.id); // memoryTodo nun içeriisnde idyi siler.
        res.status(200).send(todo);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

export default router;