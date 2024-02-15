import { useEffect, useState } from 'react'
import { Button, Spinner, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

interface FunctionalComponentProps {
  subTitle: string
  color?: string
}

interface MovieObject {
  title: string
  year: string
}

const FunctionalComponent = ({ subTitle, color }: FunctionalComponentProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [movieObject, setMovieObject] = useState<null | MovieObject>(null) // dovrei dirgli che il tipo di movieObject
  // non è null, ma dovrebbe essere null | {title: string, year: string}

  useEffect(() => {
    console.log('componentDidMount!')
  }, [])

  return (
    <div>
      <h2 style={{ color: color }} onClick={() => setIsLoading(false)}>
        Componente a funzione!
      </h2>
      <h3>Il valore di subtitle è: {subTitle.toUpperCase()}</h3>
      {isLoading && (
        <div className="text-center">
          <Spinner variant="success" animation="border" />
        </div>
      )}
      <Button
        onClick={() =>
          setMovieObject({
            title: 'Batman',
            year: '2002',
          })
        }
      >
        SETTA MOVIEOBJECT
      </Button>
      {movieObject && <Alert variant="success">{movieObject.title}</Alert>}
      {/* questo elemento diventa visibile quando movieObject !== null */}
      <Link to="/class">
        <h4>VAI ALLE CLASSI</h4>
      </Link>
    </div>
  )
}

export default FunctionalComponent
