import React from "react";
import "./CurrencyCon.css";
import {
  Col,
  Container,
  Row,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";

function CurrencyCon(props) {
  const {
    currencyOptions,
    selectedCurrency,
    amount,
    onChangeCurrency,
    onChangeAmount,
  } = props;
  return (
    <div className="CurrencyCon">
      <Container fluid>
        <Row>
          <Col>
            <div className="group">
              <InputGroup className="p-2">
                <FormControl
                  type="number"
                  placeholder="Enter Amount"
                  aria-label="Enter Amount"
                  aria-describedby="basic-addon1"
                  value={amount}
                  onChange={onChangeAmount}
                />
              </InputGroup>
              <Form className="p-2">
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control
                    as="select"
                    custom
                    value={selectedCurrency}
                    onChange={onChangeCurrency}
                  >
                    <option disabled>Select Currency</option>
                    {currencyOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CurrencyCon;
