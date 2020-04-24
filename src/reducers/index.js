import { combineReducers } from 'redux'
import SubmitAddRoleService from './SubmitAddRoleService'
import addRoleForm from './addRoleForm'
import registrationForm from './registrationForm'

export default combineReducers({
  addRoleForm,
  SubmitAddRoleService,
  registrationForm
})