import React from 'react';
import AddHot from './AddHot';
import HotList from './HotList';
import RemoveHot from './RemoveHot';
import {
	ajax
} from 'tools';
export default class Hot extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hotData: [],
			hotIds: [],
			deleteIds: []
		}
	}
	componentWillMount() {
		this.showHot();
	}
	getDeleteId(ids) {

		this.setState({
			deleteIds: ids
		})

	}
	showHot() {
		ajax({
			type: 'get',
			url: "/hot/find",
			data: {
				submitType: 'findJoin',
				ref: "films"
			},
			success: function(data) {
				let hotIdsAry = data.map(function(value) {
					return value.films._id;
				})
				let hotAry = data.map(function(value) {

					delete value.films._id;
					value.films._id = value._id;
					return value.films;
				})
				this.setState({
					hotData: hotAry,
					hotIds: hotIdsAry
				})
			}.bind(this)
		})
	}
	render() {
		return <div>
			<AddHot  ids={this.state.hotIds} showHot={this.showHot.bind(this)}></AddHot>
			&nbsp;
			<RemoveHot deleteIds={this.state.deleteIds} showHot = {this.showHot.bind(this)}></RemoveHot>
			<HotList getDeleteId={this.getDeleteId.bind(this)} hotData={this.state.hotData}  showHot={this.showHot}></HotList>
		</div>
	}
}