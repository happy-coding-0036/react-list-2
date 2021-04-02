import React from "react"
import Overview from "./components/Overview"




class App extends React.Component {
  constructor(){
    super()
    this.state={
    item:"",
      list:[],
     // number: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    const {value } = event.target
    this.setState(
       { item: value }
      
  )
  }

handleClick(id) {

 this.setState({
   list: this.state.list.filter( item => item !==id)
 })
}


  handleSubmit(event) {
    event.preventDefault()

  

//this.setState((prev) => {
 // return {
 //   number: prev.number + 1,
 //   list: [...this.state.list].concat(this.state.item),
 //   item:"",
//  }
 
//   })


this.setState({
  list: [...this.state.list].concat(this.state.item),
  item:"",
})
      




  }

  render(){



    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input 
              type="text"
              value ={this.state.item}
              onChange ={this.handleChange}
            
            >
            
            </input>
            <button>submit</button>
          </form>
              <Overview item ={this.state.item} list = {this.state.list} handleClick={this.handleClick} key={this.state.item}/>
      </div>
     
    );
  }
}




export default App;