import React, { useState } from 'react'
import { useEffect } from 'react';

import { FormControl, Button } from 'react-bootstrap'
import { getTodos } from '../axios';

const Search = () => {

    // search state i inputa yazdıgım veriyi tutuyor
    const [search, setSearch] = useState('');
    // database'den gelen verileri tutuyor. axiosda tanımladıgımız getTodos fonksiyonu ile verileri alıyoruz ve state'e atıyoruz.
    const [searchTodo, setSearchTodo] = useState([]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    // search butonuna basıldıgında inputa yazdıgımız veriyi todo title da arar ve eşleşince alert yazısı çıkarır.
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);

        searchTodo.map(todo => {
            if (todo.title.toLowerCase().includes(search.toLowerCase())) {
                alert(`${todo.title} is on the list`);
            }
        })

    }
    // sayfa ilk yüklendiğinde database den verileri searchTodoya atmak için kullandık böylece karşılaştırma yaparken kullanacagız.
    // Context api ile tek seferde yazdıgımız useEffect fonksiyonu yeterdi ama burada kullanmadık.
    useEffect(
        () => {
            getTodos().then(res => {
                setSearchTodo(res.data)
                console.log(res.data)
            })
        }, [])


    return (
        <>
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={handleChange}
            />
            <Button className='btn btn-secondary my-2 my-sm-0' variant="primary" onClick={handleSubmit} >Search</Button>
        </>
    )
}

export default Search