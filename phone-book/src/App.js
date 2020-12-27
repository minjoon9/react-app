import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';


class App extends Component {
  id = 2
  state = {
    information : [
      {
        id : 0,
        name : '민준',
        phone : '010-0000-0000'
      },
      {
        id : 1,
        name : '경준',
        phone : '010-0000-0001'
      }
    ],
    keyword: ''
  }
  hadleChange = (e) =>{
    this.setState({
      keyword: e.target.value,
    });
  }
  handleCreate = (data) =>{
    const {information} = this.state;
    this.setState({
      information: information.concat({id: this.id++, ...data})
    })
  }
  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }
  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data}
          : info
      )
    })
  }
  render() {
    const{information, keyword} = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <p>
          <input
            placeholder="검색"
            onChange={this.hadleChange}
            value={keyword}
          />
        </p>
        <hr></hr>
        <PhoneInfoList data = {filteredList} onRemove={this.handleRemove} onUpdate={this.handleUpdate}/>
      </div>
    );
  }
}

export default App;