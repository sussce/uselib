import {Editor, EditorState} from 'draft-js'
import React from 'react'
import 'draft-js/dist/Draft.css'

const style={
	root: {
    padding: 2,
		border: '1px solid black',
		width: '200px',
		minHeight: 80
	}
}
class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			editorState: EditorState.createEmpty()
		}
		this.onChange = (state)=>this.setState({editorState: state})
		this.ref=null
	}
	
	render() {
		return (
			<div style={style.root}>
				<Editor
					editorState={this.state.editorState}
					onChange={this.onChange}
					ref={(node)=>this.ref=node}
					placeholder='place text..'
				/>
			</div>
		)
	}
}

export default App;
