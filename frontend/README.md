<h1>Frontend </h1>
<hr/>
<br/>
<p>Frontend de kurulan paketler;</p>
<li>react-file-base64: Masaüstünden dosya seçmemize yardımcı olur</li>
<li>moment: Card da gösterilen oluşturulma tarihini düzgün bir formatta göstermemize yardımcı olur</li>
<li>react-bootstrap: UI kütüphanesi</li>
<li>react-router-dom: Fonksiyon içerisinde yönlendirme yapmamızı sağlar</li>
<br/>
<hr/>

<h2>Axios</h2>

<br/>


```
import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

export const createTodos = async (todo) => {
    const response = await API.post('/todos', todo);
    return response.data;
}

export const getTodos = async () => API.get('/todos');

export const deleteTodo = async (id) => API.delete(`/todos/${id}`);

export const updateTodo = async (id, todo) => API.put(`/todos/${id}`, todo);
```

DOM içerisinde yani kullanıcının yapacağı işlemlerde backend ile iletişim kurmaya yaran fonksiyonlar tanımlanmıstır.

<h2>App.js</h2>

<br/>


```
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
    <Container>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="todos" element={<TodoPage />} />
        <Route path="update/:id" element={<UpdatePage />} />
      </Routes>
    </Container>
    </div>
  );
}
```

<br/>

App.js içerisinde Sayfaları tanımladık ve Route ile yönlendirmeler yapdık. Ve bunlara karşılık gelecek componentsleri tanımladık.

İlk sayfamız HomePage componentini göstermektedir. Bu HomePage e Todo componentini tanımladık burada Anasayfada form işlemlerini göstermek istedik.

<h2>HomePage</h2>

<br/>


```
const HomePage = () => {
    return (
        <div>
            <Container>
                <Todo />
            </Container>
        </div>
    )
}
```

<br/>

Todo içerisinde her aksiyonda axios da tanımladıgımız işlemleri onClick ile gönderdik.

<h2>TodoPage</h2>

<br/>

```
const TodoPage = () => {

    const [showTodo, setShowTodo] = useState([]);

    useEffect(() => {

        getTodos().then(res => {
            setShowTodo(res.data)
            console.log(res.data)
        })
    }, [])

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
```

<br/>

useEffect bize bir bağımlılık ile yapılacak işlemleri tanımlar. useEffect hook una [] boş bir dependency array verirsek sayfa her yüklendiğinde bir kere çalışacak işlemi tanımlar. Eğer bağımlılık dizisine bir değişken tanımlarsak ona bağlı olarak her değişimini izler ve değeri değiştiğinde çalışır.

Bu yüzden /todos sayfası her render oldugunda showTodo state ine getTodos ile database imizden gelen veriler atılır.

<br/>

```
const [showTodo, setShowTodo] = useState([]);
```

<br/>

useState hook u, bir başlangıç değeri atamımıza olanak sağlayan ve ikinci parametresinde yazılan değişken yardımıyla da onun değerini güncelleyen bir fonksiyondur. Yukarıdaki state in başlangıç parametresi olarak bir boş array tanımladık. Bununla beraber primitiv değerleri de kullanabiliriz.

Yukarıdaki TodoPage içerisinde TodoItems componentine props gönderdik. todo={todo} ile todo değişkenini props olarak gönderdik.

showTodo yu mapledik ve showTodo içerisindeki her bir objeyi todo parametresiyle dinamik olarak sayfada listelemek için TodoItems componentine gönderdik.

Spinner componenti yükleniyor göstermek için kullanılır. Sayfa yüklenirken gösterilen animasyonu tanımlar.

<br/>


```
import { useParams, useNavigate }

    const { id } = useParams();
    //console.log(id)

    const navigate = useNavigate();
```

useParams sayfanın urlsini alır. useNavigate ise fonskiyon içeriinde yönlendirmeye yarar.
