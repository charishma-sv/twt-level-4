import AppConstants from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

const AppActions = {
  initApp: function () {
    AppActions.app_initialized({ status: 'not connected' });
  },

  logged_in: function (payload) {
    AppDispatcher.dispatch({
      actionType: AppConstants.LOGGED_IN,
      payload: { status: 'connected' },
    });
  },

  app_initialized: function (payload) {
    AppDispatcher.dispatch({
      actionType: AppConstants.APP_INITIALIZED,
      payload: payload,
    });
  },
};
// export function logged_in(payload) {
//   AppDispatcher.dispatch({
//     actionType: UserConstants.LOGGED_IN,
//     payload: payload,
//   });
// }

// export function app_initialized(payload) {
//   AppDispatcher.dispatch({
//     actionType: UserConstants.APP_INITIALIZED,
//     payload: payload,
//   });
// }

export default AppActions;
