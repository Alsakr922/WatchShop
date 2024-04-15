import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { create_user } from "../../redux/actions/auth.actions";
import { useState } from "react";
import { UserType } from "../../redux/reducers/auth.reducer";

const User = ({ show }) => {
  const dispatch = useDispatch();
  const createUser = (user: UserType) => {
    dispatch(create_user(user));
  };
  const INITIAL_STATE = {
    userName: "",
    password: "",
    email: "",
  };
  const [User, setUser] = useState(INITIAL_STATE);
  const handleUser = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
    console.log(User)
  };
  return (
    <div className={`userContainer ${show && `active`}`}>
      <div className="users">
        <h1>Users</h1>
        <div>
          <div className="user">
            <FloatingLabel
              controlId="floatingUser"
              label="User Name"
              className="mb-3"
            >
              <Form.Control
                type="text"
                name="userName"
                onChange={handleUser}
                placeholder="User Name ..."
              />
            </FloatingLabel>
          </div>
          <div className="mail">
            <FloatingLabel
              controlId="floatingMail"
              label="Email address"
              className="mb-3"
            >
              <Form.Control
                type="email"
                name="email"
                onChange={handleUser}
                placeholder="name@example.com"
              />
            </FloatingLabel>
          </div>
          <div className="password">
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control
                type="password"
                name="password"
                onChange={handleUser}
                placeholder="Password"
              />
            </FloatingLabel>
          </div>
          <Button variant="warning" onClick={() => createUser(User)} className="userBtn">
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default User;
