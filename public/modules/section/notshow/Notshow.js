import React from 'react';
import AddNotShow from './AddNotShow';
import NotShowList from './NotShowList';
import RemoveNotShow from './RemoveNotShow';
import {
	ajax
} from 'tools';
export default class NotShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notShowData: [],
			notShowIds: [],
			deleteIds: []
		}
	}
	componentWillMount() {
		this.showNotShow();
	}
	getDeleteId(ids) {

		this.setState({
			deleteIds: ids
		})

	}
	showNotShow() {
		ajax({
			type: 'get',
			url: "/notshow/find",
			data: {
				submitType: 'findJoin',
				ref: "films"
			},
			success: function(data) {
				console.log(data);
				let notShowIdsAry = data.map(function(value) {
					return value.films._id;
				})
				console.log(notShowIdsAry);
				let notShowAry = data.map(function(value) {

					delete value.films._id;
					value.films._id = value._id;
					return value.films;
				})

				this.setState({
					notShowData: notShowAry,
					notShowIds: notShowIdsAry
				})
			}.bind(this)
		})
	}
	render() {
		return <div>
			<AddNotShow  ids={this.state.notShowIds} showNotShow={this.showNotShow.bind(this)}></AddNotShow>
			&nbsp;
			<RemoveNotShow deleteIds={this.state.deleteIds} showNotShow = {this.showNotShow.bind(this)}></RemoveNotShow>
			<NotShowList getDeleteId={this.getDeleteId.bind(this)} notShowData={this.state.notShowData}  showNotShow={this.showNotShow}></NotShowList>
		</div>
	}
}