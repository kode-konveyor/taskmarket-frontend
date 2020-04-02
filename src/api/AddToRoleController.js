import { httpPut } from "./http/PutRequest"

const ADD_TO_ROLE_URI = '/member/addprojectrole'

export function AddToRoleController(projectName, roleName, userName) {
    let data = {
        projectName: projectName,
        roleName: roleName,
        userName: userName
    }
    
    return httpPut(ADD_TO_ROLE_URI, data)
}