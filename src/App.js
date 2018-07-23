import React from 'react';
import { Container } from 'semantic-ui-react';
import './index.css';

import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import SupportForm from './components/support-form';

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
    const { page: sPage } = this.state;

    return (
      <div>
        <header>
          <Header />
        </header>
        <main>
          <Container text>
            {sPage === 'weather' && (
              <Main />
            )}
            {sPage === 'support' && (
              <SupportForm
                changeThePage={(event, sType) => this.changePage(event, sType)}
              />
            )}
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
