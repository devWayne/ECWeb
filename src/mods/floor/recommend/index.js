var React = require('react');

class Recommend extends React.Component {

  render() {
    var {
      words, banner, bgColor
    } = this.props;
    
    var divStyle = {
      backgroundColor: bgColor
    };

    var keywordNodes = words.map(function(keyword, index) {
      return (<a className="outer " href={keyword.href} ><span className="inner"><b className="text">{keyword.word}</b></span></a>);
    });
    return (<div className="recommend" style={divStyle}>            
	<div className="words">                                                             
		{keywordNodes}       
       	</div>                        
		<a className="banner" href={banner.href}><img src={banner.imgUrl} alt="" width="240" height="296" /></a>                    
	</div>);
  }
}

module.exports = Recommend;
