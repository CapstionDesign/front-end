import React, {useState, useEffect} from 'react';
import style from './School.module.css';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

function Content() {

    return (
        <div className={style.content}>
            <Box/>
        </div>
    );
}

function School(props) {
    return (
        <div className={style.container}>
            <Content/>
        </div>
    );
}

function Box(){

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);

    useEffect(() => {
        setShowModal(true);
    }, []);

    return (
        <div className={style.box}>
            <Modal.Dialog show={showModal} onHide={handleCloseModal}>
            <label className={style.label}>
                <a className={style.my}>학교 인증하기</a>
                <a className={style.xbtn}>
                    <Link className={style.x} to={'/MainPage1'}>X</Link>
                </a>
            </label>
            </Modal.Dialog>
        </div>
    )
}

export default School;