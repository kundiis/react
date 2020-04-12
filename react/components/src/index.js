import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {

	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail author="KM" timeAgo="at 5PM" comment="Nice blog post!" image = {faker.image.avatar()} />
			</ApprovalCard>
		</div>
		);
};

ReactDOM.render(<App/>, document.querySelector('#root'));