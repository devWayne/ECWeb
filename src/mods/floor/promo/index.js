
var React = require('react');

class Promo extends React.Component {
	
  render() {
    var { promos } = this.props;
    
    var promoNodes = promos.map(function(promo, index) {
      return (<a href={promo.href}><img src={promo.imgUrl} alt="" width="150" height="263" /><i class="product-mask"></i></a>);
    });

    return (<div className="promo">                        
		<img className="title" src="//img.alicdn.com/tps/i2/TB1m5CyGVXXXXXGXXXXwu0bFXXX.png" alt="" />  
		{promoNodes}
	</div>);
  }
}

module.exports = Promo;

