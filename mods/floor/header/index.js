var React = require('react');

class Header extends React.Component {
	
  render() {
    var { links , name} = this.props;

    var linkNodes = links.map(function(link, index) {
      return (<li><a href={link.href}>{link.word}</a></li> );
    });

    return (<div className="header">        
	<h2>{name}</h2>        
	<ul className="links">                                      
		{linkNodes}                 
	</ul>
	</div>);
  }
}

module.exports = Header;

