import React, {useState} from 'react';
import MyPage from '../Component/MyPage';
import style from './BeforeEmail.module.css';
import { Link } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';

function BeforeEmail() {
    return (
        <div className={style.BeforeEmail}>
            <MyPage/>
            <Content/>
        </div>
    );
}

function Content() {

    return (
        <div className={style.content}>
            <Modal.Body>
            <p className={style.school1}>학교 인증 필요</p>
            <p className={style.school2}>학교 인증이 완료되지 않았습니다.</p>
            <Link to={'/Email1'}>
                <p className={style.school3}>인증하러 가기</p>
            </Link>
            <p className={style.delete}>회원 탈퇴하기</p>
            </Modal.Body>
        </div>
    );
}

export default BeforeEmail;