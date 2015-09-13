var React = require('react');
var Recommend = require('./recommend/index');
var ItemList = require('./itemList/index');
var Header = require('./header/index');
var Promo = require('./promo/index');

class Floor extends React.Component {

  render() {
    var {
      imgUrl, title, originPrice, price
    } = this.props;
    
    return (<div className="m-floor">
		    <Header name="生鲜水果" links ={[{href:'www.taobao.com',word:'苹果'}]}/>
		    <ItemList />
		    <Recommend bgColor="#8dd514" words={[{href:'www.taobao.com',word:'水果'},{href:'www.taobao.com',word:'水果'}]} banner={{href:'www.taobao.com',imgUrl:'//img.alicdn.com/imgextra/i1/1910146537/TB2Y.NWfXXXXXbjXpXXXXXXXXXX_!!1910146537.jpg'}}/>
		    <Promo promos={[{href:'//www.taobao.com',imgUrl:'//img.alicdn.com/imgextra/i1/1910146537/TB2Ob4vfXXXXXclXpXXXXXXXXXX_!!1910146537.jpg'},{href:'//www.taobao.com',imgUrl:'//img.alicdn.com/imgextra/i1/1910146537/TB2Ob4vfXXXXXclXpXXXXXXXXXX_!!1910146537.jpg'}]}/>
	</div>);
  }
}

module.exports = Floor;
