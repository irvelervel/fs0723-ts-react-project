import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

interface Reservation {
  name: string
  phone: string
  numberOfPeople: string
  dateTime: string
  smoking: boolean
  specialRequests: string
}

const FormComponent = () => {
  const initialReservation: Reservation = {
    name: '',
    phone: '',
    numberOfPeople: '1',
    dateTime: '',
    smoking: false,
    specialRequests: '',
  }

  const [reservation, setReservation] =
    useState<Reservation>(initialReservation)

  const handleChange = (key: string, value: string | boolean) => {
    setReservation({
      ...reservation,
      [key]: value,
    })
  }

  // quando scollegate una funzione dal suo event listener (come in questo caso, dove all'onSubmit
  // del Form abbiamo collegato la funzione esterna handleSubmit) sarà probabilmente necessario
  // tipizzare l'evento scaturito dall'event listener. In questo caso, per il submit di un form
  // l'evento giusto è React.FormEvent
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // facciamo giusto un console.log()
    console.log(reservation)
    setReservation(initialReservation) // svuotato il form
  }

  return (
    <div>
      <h2>FORM IN TYPESCRIPT</h2>
      <Form className="text-start" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={reservation.name}
            onChange={(e) => {
              handleChange('name', e.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone"
            value={reservation.phone}
            onChange={(e) => {
              handleChange('phone', e.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Quanti siete</Form.Label>
          <Form.Control
            type="number" // poi in JS diventa una stringa
            placeholder="Enter people"
            value={reservation.numberOfPeople}
            // onChange={(e) => {
            //   handleChange('numberOfPeople', e.target.value)
            // }}
            onChange={(e) => {
              setReservation({
                ...reservation,
                numberOfPeople: e.target.value,
              })
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Data/Ora</Form.Label>
          <Form.Control
            type="datetime-local"
            value={reservation.dateTime}
            onChange={(e) => {
              handleChange('dateTime', e.target.value)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="smoking"
            checked={reservation.smoking}
            onChange={(e) => {
              handleChange('smoking', e.target.checked)
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Richieste speciali</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={reservation.specialRequests}
            onChange={(e) => {
              handleChange('specialRequests', e.target.value)
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  )
}

export default FormComponent
