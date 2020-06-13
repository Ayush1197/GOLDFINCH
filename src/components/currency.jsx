import React from "react";

class CurrencyConvertor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyMap: [
        {
          currency: "XCD",
          name: "East Caribbean dollar",
          symbol: "$",
        },
        {
          currency: "EUR",
          name: "European euro",
          symbol: "€",
        },
        {
          currency: "GEL",
          name: "Georgian lari",
          symbol: "₾",
        },
        {
          currency: "XCD",
          name: "East Caribbean dollar",
          symbol: "$",
        },
        {
          currency: "HTG",
          name: "Haitian gourde",
          symbol: "G",
        },
        {
          currency: "INR",
          name: "Indian rupee",
          symbol: "₹",
        },
        {
          currency: "ILS",
          name: "Israeli new sheqel",
          symbol: "₪",
        },
        {
          currency: "KZT",
          name: "Kazakhstani tenge",
          symbol: "лв",
        },
        {
          currency: "KWD",
          name: "Kuwaiti dinar",
          symbol: "د.ك",
        },
        {
          currency: "LSL",
          name: "Lesotho loti",
          symbol: "L",
        },
        {
          currency: "INR",
          name: "Indian rupee",
          symbol: "₹",
        },
        {
          currency: "USD",
          name: "U.S. Dollar",
          symbol: "$",
        },
      ],
      baseValue: "",
      convertValue: "",
      baseNumber: "",
      gettingData: false,
      converter: 0,
      converted: false,
    };
  }

  componentDidMount() {
    let init = this.state.currencyMap[0].currency;
    this.setState({ baseValue: init, convertValue: init });
  }

  updateCurrencyType = (e) => {
    this.setState({ [e.target.name]: e.target.value, converted: false });
  };

  updateNumber = (e) => {
    this.setState({ baseNumber: e.target.value, converted: false });
  };

  convertCurrency = () => {
    this.setState({ gettingData: true });
    const url =
      " https://free.currconv.com/api/v7/convert?q=" +
      this.state.baseValue +
      "_" +
      this.state.convertValue +
      "&compact=ultra&apiKey=dd8e835c3d0a875afe5e";
    console.log(url);
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.setState({
          convertor: data[this.state.baseValue + "_" + this.state.convertValue],
          converted: true,
          gettingData: false,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render = () => {
    return (
      <div style={{ margin: "20px auto", textAlign: "center" }}>
        <div>
          <div>Choose the base Currency</div>
          <select name="baseValue" onChange={this.updateCurrencyType}>
            {this.state.currencyMap.map((item, index) => (
              <option key={index} value={item.currency}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <div>Choose the Convert to Currency</div>
          <select name="convertValue" onChange={this.updateCurrencyType}>
            {this.state.currencyMap.map((item, index) => (
              <option key={index} value={item.currency}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <input
          type="number"
          onChange={this.updateNumber}
          value={this.state.baseNumber}
        />
        {this.state.gettingData ? (
          <span>Getting your Convertor Data...</span>
        ) : (
          <button onClick={this.convertCurrency}>Convert</button>
        )}
        {this.state.converted ? (
          <div>
            {this.state.baseNumber}*{this.state.convertor} ={" "}
            {this.state.baseNumber * this.state.convertor}
          </div>
        ) : null}
      </div>
    );
  };
}

export default CurrencyConvertor;