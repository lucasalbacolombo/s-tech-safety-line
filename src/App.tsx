import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Produtos } from './pages/Produtos';
import { Contato } from './pages/Contato';
import { SobreNos } from './pages/SobreNos';
import { ProtecaoVisual } from './pages/ProtecaoVisual';
import { ProtecaoAuditiva } from './pages/ProtecaoAuditiva';
import { ProtecaoMaos } from './pages/ProtecaoMaos';
import { ProtecaoRespiratoria } from './pages/ProtecaoRespiratoria';
import { ProtecaoImpermeaveis } from './pages/ProtecaoImpermeaveis';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/produtos' element={<Produtos />} />
      <Route path='/produtos/protecao-visual' element={<ProtecaoVisual />} />
      <Route
        path='/produtos/protecao-auditiva'
        element={<ProtecaoAuditiva />}
      />
      <Route path='/produtos/protecao-maos' element={<ProtecaoMaos />} />
      <Route
        path='/produtos/protecao-respiratoria'
        element={<ProtecaoRespiratoria />}
      />
      <Route path='/produtos/impermeaveis' element={<ProtecaoImpermeaveis />} />
      <Route path='/contato' element={<Contato />} />
      <Route path='/sobre-nos' element={<SobreNos />} />
    </Routes>
  );
}

export default App;
