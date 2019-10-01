import React, { Component } from 'react';
import Popup from './components/popup';
import './App.css';

class App extends Component {

  state = {
    t: [{id:9},{id:10},{id:11},{id:12},{id:1},{id:2},{id:3},{id:4},{id:5}],
    dates: [
      {id:1, name:"", phone:"", color:"primary", time:9, text:"9:00 - 10:00", day:"Monday"},
      {id:2, name:"", phone:"", color:"primary", time:10, text:"10:00-11:00", day:"Monday"},
      {id:3, name:"", phone:"", color:"primary", time:11, text:"11:00-12:00", day:"Monday"},
      {id:4, name:"", phone:"", color:"primary", time:12, text:" 12:00-1:00 ", day:"Monday"},
      {id:5, name:"", phone:"", color:"primary", time:1, text:" 1:00 - 2:00 ", day:"Monday"},
      {id:6, name:"", phone:"", color:"primary", time:2, text:" 2:00 - 3:00 ", day:"Monday"},
      {id:7, name:"", phone:"", color:"primary", time:3, text:" 3:00 - 4:00 ", day:"Monday"},
      {id:8, name:"", phone:"", color:"primary", time:4, text:" 4:00 - 5:00 ", day:"Monday"},

      {id:9, name:"", phone:"", color:"primary", time:9, text:"9:00-10:00 ", day:"Tuesday"},
      {id:10, name:"", phone:"", color:"primary", time:10, text:"10:00-11:00", day:"Tuesday"},
      {id:11, name:"", phone:"", color:"primary", time:11, text:"11:00-12:00", day:"Tuesday"},
      {id:12, name:"", phone:"", color:"primary", time:12, text:"12:00-1:00 ", day:"Tuesday"},
      {id:13, name:"", phone:"", color:"primary", time:1, text:" 1:00-2:00 ", day:"Tuesday"},
      {id:14, name:"", phone:"", color:"primary", time:2, text:" 2:00-3:00 ", day:"Tuesday"},
      {id:15, name:"", phone:"", color:"primary", time:3, text:" 3:00-4:00 ", day:"Tuesday"},
      {id:16, name:"", phone:"", color:"primary", time:4, text:" 4:00-5:00 ", day:"Tuesday"},

      {id:17, name:"", phone:"", color:"primary", time:9, text:"9:00-10:00 ", day:"Wednesday"},
      {id:18, name:"", phone:"", color:"primary", time:10, text:"10:00-11:00", day:"Wednesday"},
      {id:19, name:"", phone:"", color:"primary", time:11, text:"11:00-12:00", day:"Wednesday"},
      {id:20, name:"", phone:"", color:"primary", time:12, text:"12:00-1:00 ", day:"Wednesday"},
      {id:21, name:"", phone:"", color:"primary", time:1, text:" 1:00 - 2:00 ", day:"Wednesday"},
      {id:22, name:"", phone:"", color:"primary", time:2, text:" 2:00 - 3:00 ", day:"Wednesday"},
      {id:23, name:"", phone:"", color:"primary", time:3, text:" 3:00 - 4:00 ", day:"Wednesday"},
      {id:24, name:"", phone:"", color:"primary", time:4, text:" 4:00 - 5:00 ", day:"Wednesday"},

      {id:25, name:"", phone:"", color:"primary", time:9, text:"9:00-10:00 ", day:"Thursday"},
      {id:26, name:"", phone:"", color:"primary", time:10, text:"10:00-11:00", day:"Thursday"},
      {id:27, name:"", phone:"", color:"primary", time:11, text:"11:00-12:00", day:"Thursday"},
      {id:28, name:"", phone:"", color:"primary", time:12, text:"12:00-1:00 ", day:"Thursday"},
      {id:29, name:"", phone:"", color:"primary", time:1, text:" 1:00 - 2:00 ", day:"Thursday"},
      {id:30, name:"", phone:"", color:"primary", time:2, text:" 2:00 - 3:00 ", day:"Thursday"},
      {id:31, name:"", phone:"", color:"primary", time:3, text:" 3:00 - 4:00 ", day:"Thursday"},
      {id:32, name:"", phone:"", color:"primary", time:4, text:" 4:00 - 5:00 ", day:"Thursday"},

      {id:33, name:"", phone:"", color:"primary", time:9, text:"9:00-10:00 ", day:"Friday"},
      {id:34, name:"", phone:"", color:"primary", time:10, text:"10:00-11:00", day:"Friday"},
      {id:35, name:"", phone:"", color:"primary", time:11, text:"11:00-12:00", day:"Friday"},
      {id:36, name:"", phone:"", color:"primary", time:12, text:"12:00-1:00 ", day:"Friday"},
      {id:37, name:"", phone:"", color:"primary", time:1, text:" 1:00 - 2:00" , day:"Friday"},
      {id:38, name:"", phone:"", color:"primary", time:2, text:" 2:00 - 3:00" , day:"Friday"},
      {id:39, name:"", phone:"", color:"primary", time:3, text:" 3:00 - 4:00" , day:"Friday"},
      {id:40, name:"", phone:"", color:"primary", time:4, text:" 4:00 - 5:00" , day:"Friday"},
    ]
  };

  constructor() {
    super();
    console.log('App - constructor');
  }

  componentDidMount() {
    console.log('App - mounted');
  }


   handleSave = item => {
    console.log(this.state);
    const dates = [...this.state.dates];
    const index = item.id;
    dates[index-1].phone = item.phone;
    dates[index-1].name = item.name;


    this.state.dates.map(c => {c.color = "primary";});
    this.state.dates.filter(c => c.phone !== "" || c.name !== "").map(i => (i.color = "danger"));
    this.setState({dates});
  }

  render() {
    console.log('App - rendered');

    return (
      <React.Fragment>
            <h2>
              <pre>
                 Monday      Tuesday      Wednesday   Thursday    Friday
              </pre>
            </h2>
            <div>
                  {this.state.dates.filter(c=>c.time===9).map(pop => (
                    <Popup 
                      id={pop.id} name = {pop.name} phone = {pop.phone} color = {pop.color} time = {pop.time} text = {pop.text}
                      day = {pop.day} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} pop={pop} handleSave={this.handleSave}>
                    </Popup> 
                    ))} 
                    {console.log(this.state.dates)}
            </div> <p></p>
            <div>
                  {this.state.dates.filter(c=>c.time===10).map(pop => (
                    <Popup 
                      id={pop.id} name = {pop.name} phone = {pop.phone} color = {pop.color} time = {pop.time} text = {pop.text}
                      day = {pop.day} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} pop={pop} handleSave={this.handleSave}>
                    </Popup> 
                    ))} 
            </div> <p></p>
            <div>
                  {this.state.dates.filter(c=>c.time===11).map(pop => (
                    <Popup 
                      id={pop.id} name = {pop.name} phone = {pop.phone} color = {pop.color} time = {pop.time} text = {pop.text}
                      day = {pop.day} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} pop={pop} handleSave={this.handleSave}>
                    </Popup> 
                    ))} 
            </div> <p></p>
            <div>
                  {this.state.dates.filter(c=>c.time===12).map(pop => (
                    <Popup 
                      id={pop.id} name = {pop.name} phone = {pop.phone} color = {pop.color} time = {pop.time} text = {pop.text}
                      day = {pop.day} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} pop={pop} handleSave={this.handleSave}>
                    </Popup> 
                    ))} 
            </div> <p></p>
            <div>
                  {this.state.dates.filter(c=>c.time===1).map(pop => (
                    <Popup 
                      id={pop.id} name = {pop.name} phone = {pop.phone} color = {pop.color} time = {pop.time} text = {pop.text}
                      day = {pop.day} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} pop={pop} handleSave={this.handleSave}>
                    </Popup> 
                    ))} 
            </div> <p></p>
            <div>
                  {this.state.dates.filter(c=>c.time===2).map(pop => (
                    <Popup 
                      id={pop.id} name = {pop.name} phone = {pop.phone} color = {pop.color} time = {pop.time} text = {pop.text}
                      day = {pop.day} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} pop={pop} handleSave={this.handleSave}>
                    </Popup> 
                    ))} 
            </div> <p></p>
            <div>
                  {this.state.dates.filter(c=>c.time===3).map(pop => (
                    <Popup 
                      id={pop.id} name = {pop.name} phone = {pop.phone} color = {pop.color} time = {pop.time} text = {pop.text}
                      day = {pop.day} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} pop={pop} handleSave={this.handleSave}>
                    </Popup> 
                    ))} 
            </div> <p></p>
            <div>
                  {this.state.dates.filter(c=>c.time===4).map(pop => (
                    <Popup 
                      id={pop.id} name = {pop.name} phone = {pop.phone} color = {pop.color} time = {pop.time} text = {pop.text}
                      day = {pop.day} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} pop={pop} handleSave={this.handleSave}>
                    </Popup> 
                    ))} 
            </div> <p></p>

        </React.Fragment>
      );
  }
}

export default App;