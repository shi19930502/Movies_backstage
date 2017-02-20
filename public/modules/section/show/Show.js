import React from 'react';
import AddShow from './AddShow';
import ShowList from './ShowList';
import RemoveShow from './RemoveShow';
import {
	ajax
} from 'tools';
export default class Show extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showData: [],
			showIDs: [],
			deleteIds: []
		}
	}
	componentWillMount() {
		this.showShow();
	}
	getDeleteId(ids) {
		this.setState({
			deleteIds: ids
		})

	}
	showShow() {
		ajax({
			type: 'get',
			url: "/show/find",
			data: {
				submitType: 'findJoin',
				ref: "films"
			},
			success: function(data) {
				let showIDsAry = data.map(function(value) {
					return value.films._id;
				})
				let showAry = data.map(function(value) {

					delete value.films._id;
					value.films._id = value._id;
					return value.films;
				})
				this.setState({
					showData: showAry,
					showIDs: showIDsAry
				})
			}.bind(this)
		})
	}
	render() {
		return <div>
			<AddShow  ids={this.state.showIDs} showShow={this.showShow.bind(this)}></AddShow>
			&nbsp;
			<RemoveShow deleteIds={this.state.deleteIds} showShow = {this.showShow.bind(this)}></RemoveShow>
			<ShowList getDeleteId={this.getDeleteId.bind(this)} showData={this.state.showData}  showShow={this.showShow}></ShowList>
		</div>
	}
}