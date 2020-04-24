import { connect } from 'react-redux'
import RegistrationForm from './RegistrationForm'
import { REGISTRATION_FORM_ACTIONS } from '../actions'

const submitAddToRole = (formData) => ({
    type: REGISTRATION_FORM_ACTIONS.SUBMIT,
    formData
})

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (formData) => dispatch(submitAddToRole(formData)),
    }
}

export default connect(undefined, mapDispatchToProps)(RegistrationForm)