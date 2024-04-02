//ParentComponent.js
import React from "react";

class ChildComponent extends React.Component{
    render(){
      return (
        <div>
          {this.props.name}
          {this.props.age}
          {this.props.parentComponent2()}
          {this.props.object.name}
        </div>
      );
    }
  }
  

const ParentComponent2 = () => <div>parentComponent2</div>
const obj = {name:'Елена'}

const Primer5 = () => {
  return (
    <div >
    <b className="className='count'">
    <ChildComponent 
					name={'abc'} 
					age={34} 
					parentComponent2={ParentComponent2} 
					object={obj}
				/>
    </b>
        
    </div>
  );
}

export {Primer5};