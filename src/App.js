import React from 'react';
import { Container } from 'semantic-ui-react';
import './index.css';

import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'weather',
    };
  }

  changePage(event, sChange) {
    event.preventDefault();

    this.setState(previousState => (
      {
        ...previousState,
        page: sChange,
      }
    ));
  }

  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Container text>
            <Main />
          </Container>
        </main>
        <footer>
          <Footer getSupport={(event, sChange) => this.changePage(event, sChange)} />
        </footer>
      </div>
    );
  }
}

export default App;
