import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <img src="/ease.svg" alt="logo" />
      <ul>
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
