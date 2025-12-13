import Cabecalho from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import GlobalStyle, { Container } from './global'
import colors from './color'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
