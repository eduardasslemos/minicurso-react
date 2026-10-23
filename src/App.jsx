import Item from './components/Item' 
import Cabecalho from './components/Cabecalho' 

const tarefas = [ 
    { id: 1, texto: 'Estudar React!' }, 
    { id: 2, texto: 'Fazer os exercícios <3' }, 
    { id: 3, texto: 'Revisar o código :O' }, 
] 

function App() { 
    return ( 
        <div className="app"> 
            <Cabecalho titulo="Minhas tarefas" subtitulo="Minicurso de React — IFSP Boituva" /> 

            {/* <ul className='lista'>
                <Item texto="Estudar React"></Item>
                <Item texto="Fazer os exercícios"></Item>
                <Item texto="Revisar o código"></Item>
            </ul> */}
            <ul className="lista"> 
                {tarefas.map((tarefa) => ( 
                    <Item key={tarefa.id} texto={tarefa.texto} /> 
                ))} 
            </ul> 
        </div> 
    ) 
} 

export default App