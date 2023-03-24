import {Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const CampsiteDetail = ({campsite}) => {
    const { image, name, description } = campsite;

    return (
        <Col className='m-1' md='5'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default CampsiteDetail;