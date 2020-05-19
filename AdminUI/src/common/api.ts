import { environment } from 'src/environments/environment'

const apiURL = `${environment.server}/api`

export const allAPI = {
    /** Authen */
    authen_login: `${apiURL}/authen/login`,
    //register
    admin_manage_users_create_user: `${apiURL}/manage-users/create-user`,
    
}
