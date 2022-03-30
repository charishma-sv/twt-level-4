import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import AppConstants from '../constants/AppConstants';

let _loggedIn = false;

class AppStore extends EventEmitter {
  constructor() {
    super();
    this.dispatchToken = AppDispatcher.register(
      this.dispatcherCallback.bind(this)
    );
  }

  emitChange(eventName) {
    this.emit(eventName);
  }

  getStatus() {
    return _loggedIn;
  }

  init_app(status) {
    _loggedIn = false;
  }

  logged_in(status) {
    _loggedIn = true;
    console.log('_loggedin', _loggedIn);
  }

  addChangeListener(eventName, callback) {
    this.on(eventName, callback);
  }

  removeChangeListener(eventName, callback) {
    this.removeListener(eventName, callback);
  }

  dispatcherCallback(action) {
    switch (action.actionType) {
      case AppConstants.APP_INITIALIZED:
        this.init_app(action.payload);
        break;
      case AppConstants.LOGGED_IN:
        this.logged_in(action.payload);
        break;
    }

    this.emitChange('APP_CHANGE_EVENT');

    return true;
  }
}

export default new AppStore();
