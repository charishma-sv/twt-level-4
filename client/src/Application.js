import React, { useEffect } from 'react';
import appStore from './stores/AppStore';
import Home from './views/pages/Home';
import Feed from './views/pages/Feed';
import AppActions from './actions/AppActions';
import Login from './views/pages/Login';

function Application() {
  //why getAppState is not hoisted? - got error when useState staement placed before getAppState
  const getAppState = () => ({
    loggedIn: appStore.loggedIn,
    userProfile: appStore.userProfileData(),
  });
  const [appState, setAppState] = React.useState(getAppState());

  useEffect(() => {
    AppActions.initApp();
    appStore.addChangeListener(() => onAppChange);
    console.log('appstate', appState);
    return () => appStore.removeChangeListener(onAppChange);
  }, [appState]);

  function onAppChange() {
    console.log('inside on app change');
    setAppState(getAppState);
  }

  return (
    <div className="text-center">
      Application
      {!appState.loggedIn ? <Home /> : <Feed />}
    </div>
  );
}

export default Application;
