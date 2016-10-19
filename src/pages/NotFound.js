import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

export default class NotFound extends PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Not found" />
        Could not be found
      </div>
    );
  }
}
