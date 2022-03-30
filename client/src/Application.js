import React, { useEffect } from 'react';
import appStore from './stores/AppStore';
import Home from './views/pages/Home';
import Feed from './views/pages/Feed';
import AppActions from './actions/AppActions';
import Login from './views/pages/Login';

function Application() {
  const [appState, setAppState] = React.useState(getAppState());
  function getAppState() {
    return {
      loggedInStatus: appStore.getStatus(),
    };
  }
  useEffect(() => {
    AppActions.initApp();
    appStore.addChangeListener('APP_CHANGE_EVENT', onAppChange);
    console.log('appstate', appState);
    return () => appStore.removeChangeListener('APP_CHANGE_EVENT', onAppChange);
  }, []);

  function onAppChange() {
    console.log('inside on app change');
    setAppState(getAppState);
  }

  return (
    <div className="text-center">
      Application
      {!appState.loggedInStatus ? <Login /> : <Feed />}
    </div>
  );
}

export default Application;
