import React from 'react'

export default function CloseButton({onClose}){
    return <input type="button" value="X" onClick={onClose} className='button close-button'/>
}