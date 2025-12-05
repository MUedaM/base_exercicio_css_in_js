import { Card, CardTitulo, CardLink } from './Vaga.module'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas = (props: Props) => (
  <Card>
    <CardTitulo>{props.titulo}</CardTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <CardLink href="#">Ver detalhes e candidatar-se</CardLink>
  </Card>
)

export default vagas
