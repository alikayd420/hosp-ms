import React, { Fragment, useEffect, useState } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserDetails, updateUserInfo } from "../../actions/userActions";
import { USER_UPDATE_RESET } from "../../actionTypes/userTypes";
// import { useAlert } from "react-alert";

const UpdateUserInfoScreen = ({ match }) => {
  const { userId } = useParams();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();

  //   const alert = useAlert();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;
  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    error: errorUpdate,
    success: successUpdate,
    loading: loadingUpdate,
  } = userUpdate;

  const { userInfo } = useSelector((state) => state.userLogin);
  const redirect = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      redirect("/");
    }
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      redirect("/admin/users");
    } else {
      if (!user || user._id !== userId) {
        dispatch(getUserDetails(userId));
      } else {
        setName(user.name);
        setAddress(user.address);
      }
    }
  }, [userInfo, redirect, successUpdate, user, userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    //user UPDATE DISPATCH

    // const formData = new FormData();

    // formData.append("name", name);
    // formData.append("address", address);
    // dispatch(updateUserInfo(user._id, formData));
    dispatch(updateUserInfo({ _id: userId, name, address }));
  };

  return (
    <Fragment>
      <h3>Update user Info </h3>
      <h4>{user && user.name && user.name}</h4>

      <ListGroup>
        <ListGroup.Item>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Owner Name </Form.Label>
              <Form.Control
                type="text"
                placeholder="enter your name"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>ADDRESS</Form.Label>
              <Form.Control
                type="text"
                placeholder="address of owner Address "
                value={address}
                name="address"
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" className="pt2 mt3">
              Update
            </Button>
          </Form>
        </ListGroup.Item>
      </ListGroup>
    </Fragment>
  );
};

export default UpdateUserInfoScreen;
