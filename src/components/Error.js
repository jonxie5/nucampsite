import { Col } from 'reactstrap'

const Error = ({ errMsg }) => {
    return (
        <Col>
            <h5>{errMsg}</h5>
        </Col>
    )
}
export default Error