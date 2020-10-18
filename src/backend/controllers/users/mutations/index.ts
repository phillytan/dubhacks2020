import current_user from '../queries/current_user'
import user from '../queries/user'
import companies from '../queries/companies'
import users from '../queries/users'

import create_user from './create_user'
import login_user from './login_user'
import add_to_favorite from './add_to_favorite'

export default {
  create_user,
  login_user,
  add_to_favorite
}
