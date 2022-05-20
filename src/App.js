import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { withRouter } from "react-router-dom";
import store from "./redux/configureStore";
import { connect } from "react-redux";
import { globalData, setData } from "./redux/actionCreators";
import { getData, getGlobal } from "./api/covidApi";
import Sidebar from "./Components/Sidebar/Sidebar";

class AppUI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);

    getData().then((result) => {
      // eslint-disable-next-line
      if (result && result.status == 200) {
        let data = [];
        data.push(result)
        if (result.data !== undefined)

          this.props.setData(data[0])
      }
    });

    getGlobal().then((result) => {
      // eslint-disable-next-line
      if (result && result.status == 200) {
        if (result.data !== undefined)

          this.props.globalData(result?.data)
      }
    });
  };

  render() {
    return (
      <>
        <Sidebar />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return state.data;
};
const mapDispatchToProps = (dispatch) => {
  return {
    setData: (data) => dispatch(setData(data)),
    globalData : (data) => dispatch(globalData(data))
  };
};

const AppUIWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AppUI));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    return (
      <Provider store={store}>
        <Router>
          <AppUIWrapper />
        </Router>
      </Provider>
    );
  };
}

export default App;