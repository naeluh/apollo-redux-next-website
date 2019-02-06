import Link from 'next/link'
import { withRouter } from 'next/router'

class Header extends React.Component {

  state = { isActive: true }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    const { pathname } = this.props;
    return (
      <header>
        <div className={this.state.isActive ? 'hide-overlay' : ''}>
          <nav>
            <ul>
              <li onClick={this.toggleNav} className="list one" aria-label={this.state.isActive ? 'closed' : 'open'}></li>
            </ul>
          </nav>
          <div className="overlay" aria-label={this.state.isActive ? 'closed' : 'open'}>
            <div className="overlay-content">
              <button id="close" onClick={this.toggleNav}><span>close</span></button>
              <ul id="weblist">
                <li className="bk">
                  <Link prefetch href='/'><a className={pathname === '/' ? 'is-active' : ''}>127.0.0.1</a></Link>
                </li>
                <li className="bk">
                  <Link prefetch href='/work'><a className={pathname === '/work' ? 'is-active' : ''}>Work</a></Link>
                </li>
                <li className="bk">
                  <Link prefetch href='/contact'><a className={pathname === '/contact' ? 'is-active' : ''}>Contact</a></Link>
                </li>
                <li className="bk">
                  <Link prefetch href='/about'><a className={pathname === '/about' ? 'is-active' : ''}>About</a></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <style jsx>{`
        header {
          position: fixed;
          right: 100px;
          z-index: 9999;
          top: 0;
        }
        a {
  
        }
        .is-active {
          text-decoration: underline;
        }
      `}</style>
      </header>
    )
  }
}

/* 
const Header = ({ router: { pathname } }) => (

  <header>
    <div className={this ? 'hide-overlay' : ''}>
      <nav>
        <ul>
          <li onClick={toggleNav} className="list one">
            <button onClick={toggleNav} id="menu_butoon" aria-label="closed" ></button>
          </li>
        </ul>
      </nav>
      <div className="overlay">
        <div className="overlay-content">
          <div id="close"><span>close</span></div>
          <ul id="weblist">
            <li className="bk">
              <Link prefetch href='/'><a className={pathname === '/' ? 'is-active' : ''}>127.0.0.1</a></Link>
            </li>
            <li className="bk">
              <Link prefetch href='/work'><a className={pathname === '/work' ? 'is-active' : ''}>Work</a></Link>
            </li>
            <li className="bk">
              <Link prefetch href='/contact'><a className={pathname === '/contact' ? 'is-active' : ''}>Contact</a></Link>
            </li>
            <li className="bk">
              <Link prefetch href='/about'><a className={pathname === '/about' ? 'is-active' : ''}>About</a></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <style jsx>{`
      header {
        position: fixed;
        right: 100px;
        z-index: 9999;
        top: 0;
      }
      a {

      }
      .is-active {
        text-decoration: underline;
      }
    `}</style>
  </header>
) */

export default withRouter(Header)
