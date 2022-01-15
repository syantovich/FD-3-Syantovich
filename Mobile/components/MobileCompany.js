import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import MobileClient from './MobileClient';
import AddEditClient from "./AddEditClient";
import {maxClientsID} from "../modules/maxClientsID";
import MobileFilter from "./MobileFilter";

import "./MobileCompany.css"

import {voteEvents} from "./events";

class MobileCompany extends React.PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    clients:PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    name: this.props.name,
    clients: this.props.clients,
      allClients:this.props.clients,
      workmode:"Show",
      edited:null,
      maxId:maxClientsID(this.props.clients),
  };
componentDidMount() {
    voteEvents.addListener("EsetName",this.setName);
    voteEvents.addListener("EfilterClientsMode",this.filterClientsMode);
    voteEvents.addListener("EsetMode",this.setMode);
    voteEvents.addListener("Edelete",this.deleteClient);
    voteEvents.addListener("Esave",this.saveEdit);
    voteEvents.addListener("Eadd",this.saveNewClient);
}
    componentWillUnmount = () => {
        voteEvents.removeListener("EsetName",this.setName);
        voteEvents.removeListener("EfilterClientsMode",this.filterClientsMode);
        voteEvents.removeListener("EsetMode",this.setMode);
        voteEvents.removeListener("Edelete",this.deleteClient);
        voteEvents.removeListener("Esave",this.saveEdit);
        voteEvents.removeListener("Eadd",this.saveNewClient);
    };
    saveNewClient=(id,im,fam,otch,balance)=>{
    let und=this.state.allClients.find(e=>e.id==id);
    if (und==undefined) {
        let allClients = [...this.state.allClients];
        let clients = [...this.state.clients]
            allClients.push({id, im, fam, otch, balance})
            clients.push({id, im, fam, otch, balance})
        this.setState({allClients: allClients,
                            clients:clients,
                            maxId:this.state.maxId+1,
                          edited:null,
                          workmode:"Show"})
    }
    }
    saveEdit=(id,im,fam,otch,balance)=>{
    let newClients=this.state.clients.find(e=>{
        return e.id==id;

    });
        if(newClients.im!=im||newClients.fam!=fam||newClients.otch!=otch||newClients.balance!=balance){
            this.setState({

                clients: this.state.clients.map((e) => {
                    if (e.id == id) {
                        return {id, im, fam, otch, balance}
                    } else {
                        return e;
                    }
                }),
                allClients:this.state.allClients.map((e) => {
                    if (e.id == id) {
                        return {id, im, fam, otch, balance}
                    } else {
                        return e;
                    }
                })
            });
        }

    }


    setMode=(wm,id)=>{
    this.setState({workmode:wm,
                        edited:id})
    }
    deleteClient=(id)=>{
    this.setState({workmode:"Show",
                        edited:null,
                        allClients:this.state.clients.filter(e=>{
                            return e.id!=id;
                        }),
        clients:this.state.clients.filter(e=>{
            return e.id!=id;
        }),})
    }
    filterClientsMode=(key)=>{
        this.setState({clients:this.state.allClients.filter((e)=>{
            switch (key){
                case "all":
                    return true
                break;
                case "active":
                    if(e.balance>=0)return true;
                    break;
                case "blocked":
                    if(e.balance<0)return true;
                    break;
            }
            }),
                            workmode:"Show",
                            edited:null});
    };
    setName = (name) => {
    this.setState({name:name});
  };

  
  setBalance = (clientId,newBalance) => {
    let changed=false;
    let newClients=[...this.state.clients]; // копия самого массива клиентов
    newClients.forEach( (c,i) => {
      if ( c.id==clientId && c.balance!=newBalance ) {
        let newClient={...c}; // копия хэша изменившегося клиента
        newClient.balance=newBalance;
        newClients[i]=newClient;
        changed=true;
      }
    } );
    if ( changed )
      this.setState({clients:newClients});
  };
  
  setBalance1 = () => {
    this.setBalance(105,230);
  };

  setBalance2 = () => {
    this.setBalance(105,250);
  };
  
  render() {

    console.log("MobileCompany render");
      let client=!!this.state.edited&&this.state.clients.filter((e)=>{
          return e.id==this.state.edited
      })[0];
    var clientsCode=this.state.clients.map( client => {
        return <MobileClient key={client.id} client={client} />;
      }
    );
    clientsCode.unshift(
        <thead key="header"><tr><th>Имя</th><th>Фамилия</th><th>Отчетсво</th><th>Баланс</th><th>Статус</th><th>Редактировать</th><th>Удалить</th></tr></thead>
   );
    return (
        <div>
      <div className='MobileCompany'>
        <input type="button" value="=МТС" onClick={()=>voteEvents.emit("EsetName","MTC")} />
        <input type="button" value="=Velcom" onClick={()=>voteEvents.emit("EsetName","Velcom")} />
          <MobileFilter></MobileFilter>
        <div className='MobileCompanyName'>Компания &laquo;{this.state.name}&raquo;</div>
        <div className='MobileCompanyClients'>
          <table>
          {clientsCode}
          </table>
        </div>
      </div>
            <AddEditClient workmode={this.state.workmode} edited={this.state.edited} maxId={this.state.maxId} client={client}/>
      </div>

    )
    ;

  }

}

export default MobileCompany;
