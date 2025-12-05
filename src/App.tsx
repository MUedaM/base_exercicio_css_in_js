import Header from './components/Cabecalho/index'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import GlobalStyle, { Container } from './global'
import colors from './color'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <ThemeProvider theme={colors}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
