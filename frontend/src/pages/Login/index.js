import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'

// Components
import { FiLogIn } from 'react-icons/fi';

// Assets
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

//Services
import api from '../../services/api';

import './styles.css';

const Login = () => {
    const [id, setId] = useState("");

    const history = useHistory();

    const handleLogin = async (event) => {
        event.preventDefault();

        try{
            const response = await api.post('/sessions', {
                id
            });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch(err) {
            console.error("Erro ao efetuar login");
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />
                
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>

                    <input placeholder="Sua ID" value={id} onChange={(e) => setId(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="backlink" to="/register">
                        <FiLogIn size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    )
}

export default Login;