import Barcode from "react-hooks-barcode";

const config = {
    background: "#f5f5f5",
    marginTop: "20px",
    marginBottom: "20px",
    fontOptions: "italic",
    width: 2
};
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
<Barcode value="https://reactjs.org/" {...config} />;