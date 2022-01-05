import React from 'react';
import PropTypes from 'prop-types';

class Br2jsx extends React.Component {

  static propTypes = {
    string: PropTypes.string.isRequired,
  };
  
  render() {
    
    let arr=this.props.string.split(/\<\s*[b][r]\s*\/?\>/);
    let br=<br/>;
for(let i=0;i<arr.length;i++){
  arr.splice(i,0,br);
  i++;
}
        return arr;
  }

}

export default Br2jsx;
