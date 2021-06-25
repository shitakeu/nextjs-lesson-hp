import HeaderLink from '../molecules/headerLink';

export default function Header() {
    return (
        <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <HeaderLink path="/" title="Home"/>
              <HeaderLink path="/blog-page" title="Blog"/>
              <HeaderLink path="/contact-page" title="Coontact"/>
            </div>
          </div>
        </nav>
      </header>
    )
  }
