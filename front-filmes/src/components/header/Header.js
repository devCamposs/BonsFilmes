import { categorias, menu } from '../../data/menu-data';
import Title from './components/Title';


function Header() {
  return (
    <header className="App-header">
      <Title title="BonsFilmes"/>
      <nav className="dropDown">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a>
            <div className="sub-menu-1">

              {
                menu?.map((item) => (
                  <ul>
                    <li><a href={item.link}>{item.nome}</a></li>
                  </ul>
                ))
              }
            </div>
          </li>

          <li><a href="#">Categorias</a>
            <div className="sub-categorias-1">
              {
                categorias?.map((item) => (
                  <ul>
                    <li><a href={item.link}>{item.nome}</a></li>
                  </ul>
                ))
              }
            </div>
          </li>

          <li><a href="#">Contato</a></li>
          <li><a href="#">Loguin Cadastro</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
