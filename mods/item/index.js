var React = require('react');

class Item extends React.Component {
	
  /*propTypes: {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func,
    backdropType: PropTypes.string,
  }, */

  render() {
    var { imgUrl, title, originPrice, price } = this.props;

    return (<a><div className="wrap">
		<img src={imgUrl} alt="" width="160" height="160" />                                                
		<h3></h3>                        
		<p className="title">{title}</p>                        
		<p className="o-price"><i className="yen">¥</i>{originPrice}</p>                        
		<p className="price"><i className="yen">¥</i><span className="j_CurPrice">{price}</span></p>                        
		<button className="j_AddCart ui-cart chaoshi-font" data-itemid="521406293860" data-pic={imgUrl}>㑶</button>                        
		<i className="product-mask"></i>
	</div></a>);
  }
}

module.exports = Item;
