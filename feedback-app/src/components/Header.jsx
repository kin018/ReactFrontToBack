function Header({ text, bgColor, textColor }) {
  const headerStyles = { backgroundColor: bgColor, color: textColor }; //this or in the style prop we would do this instead {{    const headerStyles ={ backgroundColor: 'blue', color: 'red' }}}
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
};

export default Header;
