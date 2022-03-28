import AppActions from '../../actions/AppActions';

const Login = () => {
  const loginUser = ({ email, password }) => {
    AppActions.logged_in({ email, password });
  };

  return (
    <div>
      Login
      <div
        className="btn btn-primary mt-2 "
        onClick={() =>
          loginUser({ email: 'cherry@gmail.com', password: 'cherry123' })
        }
      >
        click here to login
      </div>
    </div>
  );
};
export default Login;
