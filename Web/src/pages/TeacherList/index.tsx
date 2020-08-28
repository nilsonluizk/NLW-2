import React, { useState, FormEvent } from 'react';
// import { Link } from 'react-router-dom';

// import logoImg from '../../assets/images/logo.svg';
// import backIcon from '../../assets/images/icons/back.svg';
// import whatsIcon from '../../assets/images/icons/whatsapp.svg';
import PageHeader from '../../components/PageHeader';
import TeacherItem, {Teacher} from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';




function TeacherList() {

    const [teachers, setTeacher] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params:{
                subject,
                week_day,
                time
            }
        })

        setTeacher(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form action="" id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Game Dev', label: 'Game Dev' },
                            { value: '.Net Core', label: '.Net Core' },
                            { value: 'ASP NET MVC', label: 'ASP NET MVC' },
                            { value: 'React JS', label: 'React JS' },
                            { value: 'Angular JS', label: 'Angular JS' },
                            { value: 'Vue JS', label: 'Vue JS' },
                            { value: 'Unity', label: 'Unity' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />
                    <button type="submit">
                        buscar
                </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) =>{
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    )
}
export default TeacherList;