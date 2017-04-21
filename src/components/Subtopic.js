import React from 'react';

const SubTopic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default SubTopic;
