import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavbarMinimal } from './components/Navbar/NavbarMinimal'
import { MantineContext, MantineProvider } from '@mantine/core'
import {AuthenticationForm} from './components/Login&Cadastro/Login&Cadastro'
import {AuthenticationFormEmpresa} from './components/Login&Cadastro/Login&CadastroEmpresa/Login&CadastroEmpresa'
import { Tabela } from "./components/Table/Table";

function App() {

  return (
    <MantineProvider defaultColorScheme="dark">
      {<BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarMinimal />} />
          <Route path="/login" element={<AuthenticationForm />} />
          <Route path="/login-empresa" element={<AuthenticationFormEmpresa />} />
          <Route path="/tabela" element={<Tabela />} />
          </Routes>
          </BrowserRouter>}
    </MantineProvider>
  )
}

export default App
