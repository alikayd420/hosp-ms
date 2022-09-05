import React, { Fragment, useEffect } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { listUsers } from "../actions/userActions";

const ListUsersScreen = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);
  const deleteUserHandler = () => {};

  return (
    <div>
      <Row>
        <Col>
          <h3>List Hospitals </h3>
        </Col>
        <Col>
          <h4> Search Hospital By name</h4>
        </Col>
      </Row>
      <Fragment>
        {/* {users.length === 0 && <Message>No users Current ...</Message>} */}
        <Table striped bordered hover responsive cellSpacing="0" size="lg">
          <thead>
            <tr>
              <th>S/no</th>
              <th>USER ID</th>
              <th>JOINED (YY/MM/DD)</th>

              <th>Hospital NAME</th>
              <th>National ID no</th>

              <th>PHONE</th>

              <th>EDIT</th>
              <th>Clr</th>
              <th>
                <i className="fas fa-eye" />
              </th>

              <th>
                <i className="fas fa-trash " />
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, i) => (
                <tr key={user._id} className="mt1">
                  <td className="">{i}</td>
                  <td>{user._id}</td>
                  <td>{user.createdAt.substring(0, 10)}</td>

                  <td>{user.name}</td>
                  <td>National id</td>

                  <td>410222</td>

                  <td>
                    <LinkContainer to={`/hospital/info/${user._id}/update`}>
                      <Button variant="light">
                        <i className="fas fa-edit" />
                      </Button>
                    </LinkContainer>
                  </td>
                  <td>
                    <LinkContainer to="/admin/clearence">
                      <Button variant="light">
                        <i className="fas fa-check" />
                      </Button>
                    </LinkContainer>
                  </td>
                  <td>
                    <LinkContainer to="/admin/hospital/profile">
                      <Button variant="light">
                        <i className="fas fa-user" />
                      </Button>
                    </LinkContainer>
                  </td>
                  <td>
                    <Button onClick={() => deleteUserHandler()}>
                      <i className="fas fa-trash  ml1 mt1 mr2" />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        {/* {!users && <Message>No LIcence reg's</Message>} */}
        {/* <LicencePaginate
          pages={pages}
          page={page}
          keyword={keyword ? keyword : ""}
        /> */}
      </Fragment>
    </div>
  );
};

export default ListUsersScreen;
