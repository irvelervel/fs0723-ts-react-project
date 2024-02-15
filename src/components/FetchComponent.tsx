import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Book from './Book'
import BookInterface from '../interfaces/Book'

const FetchComponent = () => {
  const [books, setBooks] = useState<BookInterface[]>([])
  // attenzione ad inizializzare un array semplicemente con un valore di []!
  // l'array riceverà automaticamente da TS il tipo "never[]"
  // è necessario creare l'interfaccia per l'oggetto/array che vi verrà restituito nel JSON della Response
  // in modo da poter assegnare alla variabile di stato il tipo corretto

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/food-books'
      )
      if (response.ok) {
        // andiamo avanti
        const arrayOfBooks = await response.json()
        console.log(arrayOfBooks)
        // salviamo l'array dei libri nello state
        setBooks(arrayOfBooks)
      } else {
        // lanciamoci nel catch
        throw new Error('errore nel recupero dei libri')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // simula un componentDidMount
    // qua facciamo partire la fetch dei libri
    fetchBooks()
  }, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <h2>Libri disponibili a database:</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {books.map((singleBook) => (
          <Book bookData={singleBook} key={singleBook.id} />
        ))}
      </Row>
    </Container>
  )
}

export default FetchComponent
