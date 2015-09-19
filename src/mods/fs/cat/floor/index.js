var React = require('react');

class Floor extends React.Component {

  render() {
    var {name,link,itemList} = this.props;

    var itemNodes = itemList.map(function(item, index) {  
        return (<a href={item.link}>{item.name}</a>);
    });
    
    return (<li className="j_Li" data-area="" data-idx="0">
                <h3>
                    <s className="chaoshi-font">㒃</s>
                    <a href={link}>{name}</a>
		</h3>
                <p>
		{itemNodes};
		</p>
                <i className="chaoshi-font">㑾</i>
            </li>);
  }
}

module.exports = Floor;

