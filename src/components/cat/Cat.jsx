import { Card } from "react-bootstrap"; 

const Cat = (props) => {
    return(
        <Card style={{width:'18rem'}}>
            <Card.Header>{props.name}</Card.Header>
            <Card.Body>
                <Card.Title>Kilme:{props.origin}</Card.Title>
                <Card.Text>
                    <img className="img-fluid" src={(props.image)?props.image.url:null} alt=""/>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cat;