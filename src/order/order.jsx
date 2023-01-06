import React, { useState } from "react";
import { Label, Input, ButtonOrder } from "./styled";

function Order() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const onChange = (evt, setChange) => setChange(evt.target.value);
  const isButtonEnable = name && phone && address;

  return (
    <form>
      <Label>
        Имя:{" "}
        <Input
          name="name"
          value={name}
          onChange={(e) => onChange(e, setName)}
        />
      </Label>
      <Label>
        Телефон:{" "}
        <Input
          name="phone"
          value={phone}
          onChange={(e) => onChange(e, setPhone)}
          type="tel"
        />
      </Label>
      <Label>
        Адрес доставки:{" "}
        <Input
          name="adress"
          value={address}
          onChange={(e) => onChange(e, setAddress)}
        />
      </Label>
      <ButtonOrder
        disabled={!isButtonEnable}
        onClick={(evt) => {
          evt.preventDefault();
          console.log(
            `${name}, спасибо за заказ. Мы доставим его как можно скорее по адресу: ${address}`
          );
        }}
      >
        Оформить
      </ButtonOrder>
    </form>
  );
}

export default Order;
