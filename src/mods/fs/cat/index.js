
var React = require('react');
var CatFloor = require('./floor/index');

class Cat extends React.Component {
  

  componentDidMount(){
	var floorList = this.props.floorList;
  	var catNodes,cellNodes;

  }

  getFloorList(floorList){
   	return floorList.map(function(floor,index){
		return <CatFloor itemList={floor.itemList} name={floor.name} />
	});
  }

  render() {
    var self= this;
    var {floorList} = this.props;
     <div className="cat-bd">
        <ul>
	{self.getFloorList(floorList)}
 	</ul>
    </div>
</div>);
  }
}
module.exports = Cat;
