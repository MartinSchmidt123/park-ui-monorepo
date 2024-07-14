import {Button} from '../ui/button'
import * as Card from '../ui/card'

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