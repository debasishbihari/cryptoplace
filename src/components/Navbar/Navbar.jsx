import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import { useContext } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  // Currency symbol lookup object
  const currencySymbols = {
    usd: "$",
    eur: "€",
    gbp: "£",
    jpy: "¥",
    cad: "C$",
    aud: "A$",
    chf: "CHF",
    sek: "kr",
    nok: "kr",
    rub: "₽",
    cny: "¥",
    inr: "₹",
    myr: "RM",
    krw: "₩",
    brl: "R$",
    ils: "₪",
    sgd: "S$",
    pln: "zł",
    hkd: "HK$",
  };

  const currencyHandler = (e) => {
    const selectedCurrency = e.target.value;
    const symbol = currencySymbols[selectedCurrency] || ""; // Default to empty if not found
    setCurrency({ name: selectedCurrency, symbol });
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
          <option value="jpy">JPY</option>
          <option value="cad">CAD</option>
          <option value="aud">AUD</option>
          <option value="chf">CHF</option>
          <option value="sek">SEK</option>
          <option value="nok">NOK</option>
          <option value="rub">RUB</option>
          <option value="cny">CNY</option>
          <option value="inr">INR</option>
          <option value="myr">MYR</option>
          <option value="krw">KRW</option>
          <option value="brl">BRL</option>
          <option value="ils">ILS</option>
          <option value="sgd">SGD</option>
          <option value="pln">PLN</option>
          <option value="hkd">HKD</option>
        </select>
        <button>
          Sign up <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
