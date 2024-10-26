import Navbar from "../components/layout/navbar"
import AlunosTable from "../components/tables/AlunosTable"
import AddButton from "../components/buttons/AddButton"
function Alunos(){
    return(
        <div>
            <Navbar/>
            <AddButton label='Aluno' url='/aluno/novo'/>
            <AlunosTable/>
        </div>
    )
}

export default Alunos