import { Component } from 'react'
import { Spinner } from 'react-bootstrap'

// dobbiamo scrivere un'interfaccia per le props di questo componente,
// visto che quest'interfaccia non verrà mai riutilizzata per altri scopi,
// ha senso definirla direttamente nel file del componente
interface ClassComponentProps {
  subTitle: string
  color?: string // la prop color, se non c'è nell'invocazione del componente, va bene lo stesso!
}

interface ClassComponentState {
  isLoading: boolean
}

// come fornisco al componente ClassComponent questa interfaccia per fargli capire
// che le sue props saranno fatte così?

class ClassComponent extends Component<
  ClassComponentProps,
  ClassComponentState
> {
  state: ClassComponentState = {
    isLoading: true,
  }

  render() {
    return (
      <div>
        <h2
          style={{ color: this.props.color || 'black' }}
          onClick={() => {
            this.setState({
              isLoading: false,
            })
          }}
        >
          Componente a classe!
        </h2>
        <h3>Valore della prop subTitle: {this.props.subTitle.toUpperCase()}</h3>
        <div className="text-center">
          {this.state.isLoading && (
            <Spinner variant="success" animation="border" />
          )}
        </div>
      </div>
    )
  }
}

export default ClassComponent
