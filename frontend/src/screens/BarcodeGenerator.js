import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Barcode from "react-hooks-barcode";

const BarcodeGenerator = ({ location, history, barcode }) => {
    const config = {
        background: "#f5f5f5",
        marginTop: "20px",
        marginBottom: "20px",
        width: 1,
        height: 40,
        fontSize: 12,
    };

    // const [value, setValue] = useState(barcode);
    // const [message, setMessage] = useState(null);

    // useEffect(
    //     () => {
    //         if (!value) {
    //             setMessage("Please enter a value");
    //         } else setMessage(null);
    //     },
    //     [value]
    // );

    return (
        <div className="scanner">
            {/* <h6>Generate Barcode</h6> */}
            {/* <TextField
                label="Enter value or name here"
                value={value}
                onChange={e => setValue(e.target.value)}
                margin="normal"
            /> */}
            <br />
            <br />
            <Barcode value={barcode} {...config} />
            {/* {message && <p>{message}</p>} */}
        </div>
    );
}

export default BarcodeGenerator;

/* other available options
{
    width: 2,
    height: 100,
    format: "CODE128",
    displayValue: true,
    fontOptions: "",
    font: "monospace",
    textAlign: "center",
    textPosition: "bottom",
    textMargin: 2,
    fontSize: 20,
    background: "#ffffff",
    lineColor: "#000000",
    margin: 10,
    marginTop: undefined,
    marginBottom: undefined,
    marginLeft: undefined,
    marginRight: undefined
  }
  */