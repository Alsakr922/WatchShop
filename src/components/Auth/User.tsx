/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { create_user } from "../../redux/actions/auth.actions";
import { UserType } from "../../redux/reducers/auth.reducer";

type UserProps = {
  show: boolean;
};

const User = ({ show }: UserProps) => {
  const dispatch = useDispatch();
  const createUser = useCallback(
    (user: UserType) => {
      dispatch(create_user(user));
    },
    [dispatch]
  );

  const INITIAL_STATE = {
    userName: "",
    password: "",
    email: "",
  };

  const [User, setUser] = useState(INITIAL_STATE);

  const handleUser = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUser({ ...User, [name]: value });
      console.log(User);
    },
    [setUser]
  );

  return (
    <div className={`userContainer ${show ? "active" : ""}`}>
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
          <Button
            variant="warning"
            onClick={() => createUser(User)}
            className="userBtn"
          >
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default User;
