import React from "react";
import SwitchCSSTransitionGroup from "switch-css-transition-group";
import { withRouter } from "react-router";

// components
import Index from "../../pages/index/index";
import NoMatch from "../../components/noMatch";
import RouteDefaultContainer from "../../containers/RouteDefaultContainer";

const App = props => {
  const { location, configuration } = props;
  return (
    <div className="App">
      <SwitchCSSTransitionGroup
        location={location}
        transitionName="fade"
        transitionEnterTimeout={600}
        transitionLeaveTimeout={600}
      >
        <RouteDefaultContainer configuration={configuration} path="/" component={Index} />
        <RouteDefaultContainer component={NoMatch} />
      </SwitchCSSTransitionGroup>
    </div>
  );
};

export default withRouter(App);
