import React from 'react';
import {voteEvents} from "./events";

import "./MobileClient.css"

class MobileClient extends React.PureComponent {
    render() {
        console.log("MobileFilter render");

        return (
            <div>
                <input type="button" value="Все" id={"all"} onClick={()=>{voteEvents.emit("EfilterClientsMode","all")}}/>
                <input type="button" value="Активные" id={"active"} onClick={()=>{voteEvents.emit("EfilterClientsMode","active")}}/>
                <input type="button" value="Заблокированные" id={"blocked"} onClick={()=>{voteEvents.emit("EfilterClientsMode","blocked")}}/>
            </div>
        )
    }

}

export default MobileClient;

