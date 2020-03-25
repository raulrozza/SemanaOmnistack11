import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Components
import { FiArrowLeft } from 'react-icons/fi';

// Assets
import logoImg from '../../assets/logo.svg';

// Services
import api from '../../services/api';

import './styles.css';

export default function NewIncident() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");

    const ong_id = localStorage.getItem('ongId');

    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await api.post('/incidents', {
                title,
                description,
                value
            }, {
                headers: {
                    Authorization: ong_id
                }
            });

            history.push('/profile');
        } catch(err){
            console.error("Erro ao cadastrar caso");
        }
    }

    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="backlink" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleSubmit}>
                    <input placeholder="Título do caso" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <input placeholder="Valor de reais" value={value} onChange={(e) => setValue(e.target.value)} />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
