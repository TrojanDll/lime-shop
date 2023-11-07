import "./header.css";
import logo from "./../../assets/img/logo_light.svg";
import phone from "./../../assets/img/icons/phone.svg";
import location from "./../../assets/img/icons/location.svg";
import clock from "./../../assets/img/icons/clock.svg";
import arrowDown from "./../../assets/img/icons/arrow-down.svg";
import Button from "../../ui/Button/Button";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <div className="header__top">
        <div>
          <div className="header__top__phone header__top__itemsvg">
            <img src={phone} alt="phone" />
            7756
          </div>

          <div className="header__top__phone header__top__itemsvg">
            <img src={location} alt="phone" />
            Зона доставки
            <img src={arrowDown} alt="down" />
          </div>

          <div className="header__top__phone header__top__itemsvg">
            <img src={clock} alt="phone" />
            17:00 - 17:45
            <img src={arrowDown} alt="down" />
          </div>
        </div>

        <div>
          <a href="#" className="header__top__item">
            Шеф-лайм
          </a>
          <a href="#" className="header__top__item">
            Вакансии
          </a>
          <a href="#" className="header__top__item">
            Вопрос-ответ
          </a>
          <a href="#" className="header__top__item">
            Бонусная программа
          </a>
        </div>
      </div>
      <div className="header__bottom">
        <Button image={clock}>vdosdvsdvsvdsihs</Button>
      </div>
    </header>
  );
};

export default Header;
