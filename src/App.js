import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import CurrencyCon from "./components/CurrencyCon";

const BASE_URL = "https://api.exchangeratesapi.io/latest";
function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  console.log(currencyOptions);
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col>
            <h1>Convert Currency</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <CurrencyCon
              currencyOptions={currencyOptions}
              selectedCurrency={fromCurrency}
              onChangeCurrency={(e) => setFromCurrencyOptions(e.target.value)}
            />
          </Col>
          <Col xs={12} md={6}>
            <CurrencyCon
              currencyOptions={currencyOptions}
              selectedCurrency={toCurrency}
              onChangeCurrency={(e) => setToCurrencyOptions(e.target.value)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
