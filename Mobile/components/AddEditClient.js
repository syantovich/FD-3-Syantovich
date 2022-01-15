import React from 'react';
import PropTypes from 'prop-types';
import {voteEvents} from "./events";

import "./MobileClient.css"

class AddEditClient extends React.PureComponent {

    static propTypes = {
        clients:PropTypes.shape({
                id: PropTypes.number.isRequired,
                fam: PropTypes.string.isRequired,
                im: PropTypes.string.isRequired,
                otch: PropTypes.string.isRequired,
                balance: PropTypes.number.isRequired,
            }),
        workmode: PropTypes.string.isRequired,
        edited: PropTypes.number,
        maxId: PropTypes.number.isRequired,

    };
    constructor(props) {
        super(props);
        this.inId=React.createRef();
        this.inName=React.createRef();
        this.inFam=React.createRef();
        this.inOtch=React.createRef();
        this.inBalance=React.createRef();


    }

    state = {
        status:(this.props.client.balance<0)?"blocked":"active",
    };
    UNSAFE_componentWillReceiveProps=(nextProps)=> {
        this.setState({status:(nextProps.client.balance<0)?"blocked":"active",})
    }

    render() {
let id=this.props.client.id||this.props.maxId
        console.log("AddEdited id="+id+" render");
let ret;
if(this.props.workmode=="Show"){
    ret=<input type="button" value="Добавить клиента" id={"AddItem"} onClick={()=>{voteEvents.emit("EsetMode","Add",null)}}/>
}else{
    console.log(this.inId.current);
    console.log(this.inId);
    ret=<div key={this.props.edited||this.props.maxId}>
        id:<span ref={this.inId}>{this.props.edited||this.props.maxId}</span><br/>
        <label>Имя:<input type="text" defaultValue={(!!this.props.client)?this.props.client.im:""} ref={this.inName} id={'im'}/></label><br/>
        <label>Фамилия:<input type="text" defaultValue={(!!this.props.client)?this.props.client.fam:""} ref={this.inFam} id={"fam"}/></label><br/>
        <label>Отчество:<input type="text" defaultValue={(!!this.props.client)?this.props.client.otch:""} ref={this.inOtch} id={"otch"}/></label><br/>
        <label>Баланс:<input type="number" defaultValue={(!!this.props.client)?this.props.client.balance:0} ref={this.inBalance} id={"balance"}/></label><br/>
        {(this.props.workmode=="Edit")&&<input type="button" value="Save" id={"SaveEdit"} onClick={()=>voteEvents.emit("Esave",parseInt(this.inId.current.value),this.inName.current.value,this.inFam.current.value,this.inOtch.current.value,parseInt(this.inBalance.current.value))}/>}
        {(this.props.workmode=="Add")&&<input type="button" value="Add" id={"AddNew"} onClick={()=>voteEvents.emit("Eadd",parseInt(this.inId.current.value),this.inName.current.value,this.inFam.current.value,this.inOtch.current.value,parseInt(this.inBalance.current.value))}/>}
        <input type="button" value="Cancel" id={"Cancel"} onClick={()=>voteEvents.emit("EsetMode","Show",null)}/>
    </div>
}
        return ret;

    }

}

export default AddEditClient;
