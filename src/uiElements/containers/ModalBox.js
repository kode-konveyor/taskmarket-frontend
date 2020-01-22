import React from 'react'
import CloseButton from '../buttons/CloseButton'

export default function ModalBox({children, visibility, onClose}) {

    return <div className={[visibility, 'modal-box'].join(' ')}>{children}<CloseButton onClose={onClose}/></div>
}