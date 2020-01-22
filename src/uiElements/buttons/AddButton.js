import React, { useState } from 'react'
import ModalBox from '../containers/ModalBox'
import PropTypes from 'prop-types'

export default function AddButton({Form}) {
    const [modalVisibility, setModalVisibility] = useState('hidden')

    const closeModal = () => setModalVisibility('hidden')
    const openModal = () => setModalVisibility('visible')
    const form = <Form onSubmit={closeModal}/>
    return (
        <div className="add-button">
            <input type="button" value="+" onClick={openModal}/>
            <ModalBox visibility={modalVisibility} onClose={closeModal}>{form}</ModalBox>
        </div>)
}

AddButton.propTypes = {
    Form: PropTypes.elementType
}