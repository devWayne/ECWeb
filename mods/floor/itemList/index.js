var React = require('react');
var Item = require('../item/index');

class ItemList extends React.Component {
	
  /*propTypes: {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func,
    backdropType: PropTypes.string,
  }, */

  render() {
    
    return (<div className="goods"><div className="list" >
    	<Item imgUrl='//img.alicdn.com/bao/uploaded/i3/1910146537/TB2SQ_2eFXXXXbyXXXXXXXXXXXX_!!1910146537.jpg_160x160q90.jpg' title='I love you' originPrice='50' price='25'/>
    	<Item imgUrl='//img.alicdn.com/bao/uploaded/i3/1910146537/TB2SQ_2eFXXXXbyXXXXXXXXXXXX_!!1910146537.jpg_160x160q90.jpg' title='I love you' originPrice='50' price='25'/>	
    	<Item imgUrl='//img.alicdn.com/bao/uploaded/i3/1910146537/TB2SQ_2eFXXXXbyXXXXXXXXXXXX_!!1910146537.jpg_160x160q90.jpg' title='I love you' originPrice='50' price='25'/>	
    	<Item imgUrl='//img.alicdn.com/bao/uploaded/i3/1910146537/TB2SQ_2eFXXXXbyXXXXXXXXXXXX_!!1910146537.jpg_160x160q90.jpg' title='I love you' originPrice='50' price='25'/>	
    	<Item imgUrl='//img.alicdn.com/bao/uploaded/i3/1910146537/TB2SQ_2eFXXXXbyXXXXXXXXXXXX_!!1910146537.jpg_160x160q90.jpg' title='I love you' originPrice='50' price='25'/>
    	<Item imgUrl='//img.alicdn.com/bao/uploaded/i3/1910146537/TB2SQ_2eFXXXXbyXXXXXXXXXXXX_!!1910146537.jpg_160x160q90.jpg' title='I love you' originPrice='50' price='25'/>	
    	<Item imgUrl='//img.alicdn.com/bao/uploaded/i3/1910146537/TB2SQ_2eFXXXXbyXXXXXXXXXXXX_!!1910146537.jpg_160x160q90.jpg' title='I love you' originPrice='50' price='25'/>	
    	<Item imgUrl='//img.alicdn.com/bao/uploaded/i3/1910146537/TB2SQ_2eFXXXXbyXXXXXXXXXXXX_!!1910146537.jpg_160x160q90.jpg' title='I love you' originPrice='50' price='25'/>		
	</div></div>);
  }
}

module.exports = ItemList;

