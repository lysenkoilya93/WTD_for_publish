import React from "react";
// import { StyledCounter, Value, ButtonCounter } from "./styled";

function Counter({ className, value, onChange, minValue }) {
  const isDisabledMinus = value === minValue;

  return (
    <span className={className}>
      <button
        disabled={isDisabledMinus}
        onClick={() => onChange && onChange(value - 1)}
      >
        -
      </button>
      <input
        value={value}
        size={3}
        onChange={(e) => {
          const value = Number(e.target.value);
          onChange(value < minValue ? minValue : value);
        }}
      />
      <button onClick={() => onChange && onChange(value + 1)}>
        +
      </button>
    </span>
  );
}

export default Counter;
