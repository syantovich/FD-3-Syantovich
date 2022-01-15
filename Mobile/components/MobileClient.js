import React from 'react';
import PropTypes from 'prop-types';
import {voteEvents} from "./events";



class MobileClient extends React.PureComponent {

  static propTypes = {
    client:PropTypes.shape({
      id: PropTypes.number.isRequired,
      FIO:PropTypes.shape({
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
      }),
      balance: PropTypes.number.isRequired,
    })

  };

  state = {
    status:(this.props.client.balance<0)?"blocked":"active",
  };
  UNSAFE_componentWillReceiveProps=(nextProps)=> {
this.setState({status:(nextProps.client.balance<0)?"blocked":"active",})
}

  render() {

    console.log("MobileClient id="+this.props.client.id+" render");
    
    return (
        <tbody>
      <tr className='MobileClient'>

        <td className='MobileClientFIO'>{this.props.client.im}</td>
        <td className='MobileClientFIO'>{this.props.client.fam}</td>
        <td className='MobileClientFIO'>{this.props.client.otch}</td>
        <td className='MobileClientFIO'>{this.props.client.balance}</td>
        <td className={'MobileClientFIO '+this.state.status}>{this.state.status}</td>
        <td className='MobileClientFIO'><input type="button" value="Edit" onClick={()=>{voteEvents.emit("EsetMode","Edit",this.props.client.id)}}/></td>
        <td className='MobileClientFIO'><input type="button" value="Delete" onClick={()=>{voteEvents.emit("Edelete",this.props.client.id)}}/></td>
      </tr>
        </tbody>
    );

  }

}

export default MobileClient;
