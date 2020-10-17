import Cookies from 'js-cookie'

const removeAccessToken = (): void => {
  Cookies.remove('accessToken')
  window.location.replace('/auth/login')
}

export default removeAccessToken
