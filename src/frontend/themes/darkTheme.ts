import { createMuiTheme } from '@material-ui/core'
import red from '@material-ui/core/colors/red'

export default createMuiTheme({
  palette: {
    background: {
      paper: '#212121',
      default: '#212121'
    },
    type: 'dark',
    primary: { main: '#0a3d62' },
    secondary: { main: '#079992' },
    error: red
  }
})
