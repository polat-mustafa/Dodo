import React, { useState, useEffect } from 'react'

import { Spinner, Col, Row} from 'react-bootstrap'
import { getTodos } from '../axios';
import TodoItems from '../components/TodoItems';


const TodoPage = () => {

    const [showTodo, setShowTodo] = useState([]);

    // useEffect ile sayfa ilk yüklendiğinde database den verileri sayfaya yüklmek için kullandık.
    // getTodos işlemi axios klasöründe tanımlanmış, /todos a yapılan bir get isteğidir.
    // then ile asenkron fonksiyon olan getTodos dan gelen sonuc sonrasında showTodo değişkenine atama işlemi yapılmıştır.
    useEffect(() => {

        getTodos().then(res => {
            setShowTodo(res.data)
            console.log(res.data)
        })
    }, [])


    // showTodo değişkeni içerisinde veriler varsa, TodoItems componenti ile verileri göstermek için kullanılmıştır.
    // Eğer veriler yoksa, Spinner componenti ile loading göstermek için kullanılmıştır.
    // Spinner componenti react-bootstrap kütüphanesinden gelmektedir.
    // key mongoDB nin oluşturdugu _id değerini göstermektedir.
    // TodoItems componentine todo propsu gönderdik.

    return (
        <Row>
            {
                !showTodo.length ? <Spinner animation="border" variant="primary" /> : showTodo.map(todo => {
                    return (
                        <Col
                            sm={12}
                            md={6}
                            lg={4}
                            xl={3}
                            key={todo._id}
                        >
                            <TodoItems todo={todo} />

                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default TodoPage