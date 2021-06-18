import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titulo from './components/Titulo';
import Subtitulo from './components/Subtitulo';
import FormTarea from './components/FormTarea';

function App() {
  return (
    <div>
      <Titulo/>
      <Subtitulo comision='1A' anio={2021}></Subtitulo>
      <FormTarea></FormTarea>
    </div>
  );
}

export default App;
