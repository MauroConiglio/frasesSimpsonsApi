import { Card } from "react-bootstrap";


const Frase = () => {
    return (
        <section>
            <img src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185" alt="Nelson Muntz" />
            <Card className="mt-3">
                 <Card.Body>
                    <Card.Title>Nelson Muntz</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                     </Card.Body>
                </Card>
        </section>
    );
};

export default Frase;