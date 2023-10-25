import { Col, Container } from "react-grid-system";
import Banner from "./banner/Banner";
import Bloco from "./bloco/Bloco";
import CardCliente from "./vantagens/cards/CardsCliente";
import CardFreela from "./vantagens/cards/CardsFreela";
import Chip from "../../componentes/Chip/Chip";
import { cardsClientes, cardsFreelas, habilidades } from "./Dados/Dados";


const PaginaInicial = () => {
  return (
    <>
      <Banner />
      <Container>
        <Bloco cards={cardsClientes} titulo="Vantagens para contratantes">
          {cardsClientes.map(card => <CardCliente
            key={card.texto}
            icone={card.icone}
            texto={card.texto} />)}
        </Bloco>
        <Bloco cards={cardsFreelas} titulo="Vantagens para freelas">
          {cardsFreelas.map(card => <CardFreela
            key={card.texto}
            icone={card.icone}
            texto={card.texto} />)}
        </Bloco>
        <Bloco cards={cardsFreelas} titulo="Quais habilidades você encontra por aqui?">
          <Col sm={12}>
            {habilidades.map(habilidade =>
              <Chip key={habilidade}>{habilidade}</Chip>)}
          </Col>
        </Bloco>
      </Container>
    </>
  );
}

export default PaginaInicial;