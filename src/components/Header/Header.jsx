const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
import './Header.css'

import ReactImg from '../../assets/react-core-concepts.png';
function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
function Header(){
    const description =reactDescriptions[genRandomInt(2)]
    return(
      <header>
          <img src={ReactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
           {description}  React concepts you will need for almost any app you are
            going to build!
          </p>
        </header>
    )
  }
export default Header;