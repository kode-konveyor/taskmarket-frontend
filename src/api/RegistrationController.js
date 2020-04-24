import { httpPost } from "./http/PostRequest"

const REGISTRATION_URI = '/member/register'

export function RegistrationController(marketUser) {
    console.log(JSON.stringify(marketUser))
    return httpPost(REGISTRATION_URI, marketUser)
}