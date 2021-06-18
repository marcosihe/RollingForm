import './App.css';
import Titulo from './components/Titulo';
import Subtitulo from './components/Subtitulo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Titulo/>
      <Subtitulo comision='1A' anio={2021}></Subtitulo>
    </div>
  );
}

export default App;
