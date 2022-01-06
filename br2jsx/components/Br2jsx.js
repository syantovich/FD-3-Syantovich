import React from 'react';
import PropTypes from 'prop-types';

class Br2jsx extends React.Component {

  static propTypes = {
    string: PropTypes.string.isRequired,
  };
  
  render() {
    
    let arr=this.props.string.split(/\<\s*[b][r]\s*\/?\>/);
    let newArr=[];
for(let i=0;i<arr.length-1;i++){
  let br=<br key={i}/>;
  newArr.push(arr[i],br);
}
newArr.push(arr[arr.length-1]);
        return newArr;
  }

}

export default Br2jsx;
