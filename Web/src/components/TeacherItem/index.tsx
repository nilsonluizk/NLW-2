import React from 'react';

// import { Link } from 'react-router-dom';

import whatsIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
}

interface TeacherItemProps {
    teacher: Teacher;
}


const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id,
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>
                        {teacher.name}
                    </strong>
                    <span>
                        {teacher.subject}
                    </span>
                </div>
            </header>

            <p>{teacher.bio}<br /><br />
            </p>
            <footer>
                <p>
                    Preço/Hora
                <strong>{teacher.cost}</strong>
                </p>
                <a target="_blank"
                    onClick={createNewConnection}
                    href={`https://api.whatsapp.com/send?phone=55${teacher.whatsapp}&text=Quero%20entrar%20em%20contato`}>
                    <img src={whatsIcon}
                    alt="Entrar em contato via WhatsApp" />
                Entrar em contato
                </a>
            </footer>
        </article>
    )
}

export default TeacherItem;