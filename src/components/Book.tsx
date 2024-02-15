import { Col, Card } from 'react-bootstrap'
import BookInterface from '../interfaces/Book'

// props -> { bookData }

interface BookProps {
  bookData: BookInterface
}

const Book = ({ bookData }: BookProps) => {
  return (
    <Col xs={12} md={4} className="text-center">
      <Card>
        <Card.Img variant="top" src={bookData.imageUrl} />
        <Card.Body>
          <Card.Title>{bookData.title}</Card.Title>
          <Card.Text>{bookData.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Book
