import React, { Component } from 'react';
import Helmet from 'react-helmet';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Helmet
          htmlAttributes={{"lang": "en", "amp": undefined}} // amp takes no value
          titleTemplate="Blackwall - %s"
          title="Home"
          meta={[
              {"name": "title", "content": "Blackwall"},
              {"name": "description", "content": "Discover great events nearby"},
              {"property": "og:type", "content": "website"}
          ]}
          script={[
            {"type": "application/ld+json", innerHTML: `{ "@context": "http://schema.org" }`}
          ]}
        />
        {children}
      </div>
    );
  }
}

export default App;
