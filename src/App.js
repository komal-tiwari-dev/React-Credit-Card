import "./App.css";
import Form from "../src/Component/Form";
import CreditCard from "../src/Component/CreditCard";
import { useState } from "react";

const initialInfo = {
  cardHolder: "",
  cardNumber: "",
  expMonth: "",
  expYear: "",
  cvc: "",
};

function App() {
  const [info, setInfo] = useState(initialInfo);

  const handleChange = (e) =>
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <div className="App">
      <CreditCard info={info} />
      <Form info={info} setInfo={setInfo} handleChange={handleChange} />
    </div>
  );
}

export default App;
