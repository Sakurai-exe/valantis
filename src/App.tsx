import React from 'react'
import { Layout } from './components/Layout/Layout'
import { Header } from './components/header/Header'
import md5 from "md5";

const generateXAuth = () => {
    const password = 'Valantis';
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const xAuth = String(md5(`${password}_${timestamp}`));
    return xAuth;
}

export const App: React.FC = () => {
    fetch('http://api.valantis.store:40000/', {
        method: 'POST',
        headers: {
            'X-Auth': generateXAuth(),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            action: 'get_ids',
            params: { "offset": 1, "limit": 3 },
        }),
        mode: 'cors',
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            console.log('Данные:', data)
        })
        .catch((error) => {
            console.error('Произошла ошибка:', error)
        })
    return (
        <div>
            <Header />
            <Layout>sdfsdfsdfsdfsdfsdfsd</Layout>
        </div>
    )
}
