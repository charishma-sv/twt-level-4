import { EventEmitter } from 'events';
import AppConstants from '../constants/AppConstants';
import AppDispatcher from '../dispatcher/AppDispatcher';

const APP_CHANGE_EVENT = 'APP_CHANGE_EVENT';
class AppStore extends EventEmitter {
  constructor() {
    super();
    this.appAuthData = {};
    this.appProfileData = {};
  }

  setAppAuthData(data) {
    this.appAuthData = data;
    this.emitChange();
  }

  setAppProfileData(data) {
    this.appProfileData = data;
    this.emitChange();
  }

  get loggedIn() {
    if (!this.appAuthData) {
      return;
    }

    return this.appAuthData.status == 'connected';
  }

  addChangeListener(callback) {
    this.on(APP_CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(APP_CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(APP_CHANGE_EVENT);
  }

  userProfileData() {
    return this.appProfileData;
  }
}

const store = new AppStore();
store.dispatchToken = AppDispatcher.register((action) => {
  switch (action.actionType) {
    case AppConstants.APP_INITIALIZED:
      store.setAppAuthData(action.payload);
      store.emitChange();
      console.log('status in initialized', action.payload);
      break;
    case AppConstants.LOGGED_IN:
      store.setAppAuthData(action.payload);
      store.setAppProfileData(action.payload);
      store.emitChange();
      console.log('emmited change in looged in', action.payload);
      break;
    default:
  }
});

export default store;
