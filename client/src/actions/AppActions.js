import AppConstants from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

const AppActions = {
  initApp: function () {
    AppActions.app_initialized(false);
  },

  logged_in: function (payload) {
    AppDispatcher.dispatch({
      actionType: AppConstants.LOGGED_IN,
      payload: true,
    });
  },

  app_initialized: function (payload) {
    AppDispatcher.dispatch({
      actionType: AppConstants.APP_INITIALIZED,
      payload: false,
    });
  },
};

export default AppActions;
