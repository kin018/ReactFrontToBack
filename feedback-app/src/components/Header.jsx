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
  //if nothing is explicitly passed in APP.js header then these default values will be passed
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

export default Header;
