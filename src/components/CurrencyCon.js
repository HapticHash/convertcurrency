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
              <Form className="CurrencyCon__form">
                <Form.Group controlId="exampleForm.SelectCustom">
                  <Form.Control
                    as="select"
                    custom
                    value={selectedCurrency}
                    onChange={onChangeCurrency}
                  >
                    {currencyOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <InputGroup className="CurrencyCon__input">
                  <FormControl
                    type="number"
                    placeholder="Enter Amount"
                    aria-label="Enter Amount"
                    aria-describedby="basic-addon1"
                    value={amount}
                    onChange={onChangeAmount}
                  />
                </InputGroup>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CurrencyCon;
