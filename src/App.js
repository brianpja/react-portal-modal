import React, { Component } from 'react';
import logo from './logo.svg';
import Modal from './Modal';
import Portal from './Portal'
import './App.css';

class App extends Component {
  state = {
    showModal: false,
    showPortal: false,
    showSidebar: true
  }
  render() {
    console.log("app state: ", this.state)
    const { showModal, showSidebar, showPortal } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          <button
            className="toggle-sidebar btn"
            onClick={() => this.setState({ showSidebar: !showSidebar})}
          >
            Toggle Sidebar
          </button>
        </div>

        <div className={showSidebar ? "sidebar" : "sidebar hide"}>
          <button
            className="btn show-modal"
            onClick={() =>
                this.setState((prevState) => ({
                  showModal: !prevState.showModal
                }))
            }
          >
            Show Modal
          </button>

          <button
            className="btn show-portal"
            onClick={() =>
              this.setState({
                showPortal: !showPortal
              })
            }
          >
            Show Portal
          </button>

          <Modal
            header="My Modal"
            open={showModal}
            onClose={() =>
              this.setState({
                showModal: false
              })
            }
          >
            <h1>Some Content</h1>
          </Modal>

          <Portal
            open={showPortal}
            header="My Portal Modal"
            onClose={() =>
              this.setState({
                showPortal: false
              })
            }
          >
            <h1>Some Portal Content</h1>
          </Portal>
        </div>
      </div>
    );
  }
}

export default App;
