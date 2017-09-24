import {h, Component} from 'preact'


export default class Dallin extends Component {
	state ={
		name: 'Dallin'
	}

	componentDidMount(){
		console.log('didMount: ', this.state)
	}
	
	handleChange = e => this.setState({name: e.target.value})


	render(props, {name}, context) {
		console.log('props: ', props)
		console.log('state: ', name)
		console.log('context: ', context)
		return (
			<div className="dallin-container">
				<h1>My name is {name}</h1>
				<input onChange={this.handleChange} value={name}/>
			</div>
		)
	}
}