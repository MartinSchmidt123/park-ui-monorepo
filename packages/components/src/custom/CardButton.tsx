import {Button, Card} from '../ui'

export const CardButton = () => {

    return (
        <Card.Root>
            <Card.Header>
                <Card.Title>Card Title</Card.Title>
            </Card.Header>
            <Card.Body>
                <Button>Hallo Welt</Button>
            </Card.Body>
        </Card.Root>
    )
}