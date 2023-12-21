// Defines header/nav-bar
const Header = ({navigationFunction}) => {
    return (
      <div className='header'>
        <div className='header-title'>
          <p>BRADLEY BUDACH</p>
          <div className='header-buttons'>
            <p onClick={() => {navigationFunction(Navigation.AboutMe)}}>About Me</p>
            <p onClick={() => {navigationFunction(Navigation.Projects)}}>Projects</p>
            <p onClick={() => {navigationFunction(Navigation.Contact)}}>Contact Me</p>
          </div>
        </div>
        <StarsHeader/>
      </div>
    )
  }