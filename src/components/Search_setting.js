import { Form, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom"
import Search_font from './Search_font'
export default function Search_setting() {
    let navigate = useNavigate();
    return (
        <div>
            <Form className="d-flex m-3">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="ms-3 me-3 "
                    aria-label="Search"

                    onClick={() => { navigate('') }}
                />
                <Button variant="light"><Search_font /></Button>
            </Form >
            </div>
    )
}
