var FilterArea = React.createClass({
    displayName: "FilterArea",
    getInitialState: function () {
        return {
            isChecked: this.props.defChecked,
            sortSpisok:this.props.spisok ,
            filter:"",
        };
    },
    changeCheckBox: function () {
        this.setState((currState, props) => {
            return {
                isChecked: !currState.isChecked,
                sortSpisok: (!currState.isChecked) ?    this.sortWord(this.state.filter,currState.sortSpisok.slice(0).sort()) : this.sortWord(this.state.filter,this.props.spisok),
            };
        });
    },
    sortWord:function(word,arr){
        let newArr=arr.filter(v=>{
            if(word==""){return true};
            let x=v.slice(0,word.length);
            return word==x;
        });
        return newArr;
    },
    filterWords:function(EO){
        let word=EO.target.value;
        let newArr=this.sortWord(word,this.props.spisok);
        if(this.state.isChecked){newArr.sort();}
        this.setState({filter:word,
                        sortSpisok:newArr,});
                        console.log(this.setState());

        console.log(this.state.filter);
    },
    render: function () {
        let checkbox = React.DOM.input({
            type: "checkbox",
            checked: this.state.isChecked,
            onClick: this.changeCheckBox,
        }, null);
        let inputText = React.DOM.input({
            type: "text",
            onChange:this.filterWords,
        }, null);
        let submit = React.DOM.input({
            type: "submit",
        }, null);
        let opt = this.state.sortSpisok.map((v, i) => {
            return React.DOM.option({
                key: v,
                value: i
            }, v);
        });
        let select = React.DOM.select({
            size: 5
        }, opt);
        return React.DOM.div(null,
            checkbox,
            inputText,
            submit,
            select)

    },
});