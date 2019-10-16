import React from "react";
import Friend from "./Friend";
import { getFriends } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    friends: state.friends
  };
};

const Friends = () => {
  console.log("hi");
  return <div>FriendsList</div>;
};

export default connect(
  mapStateToProps,
  { getFriends }
)(Friends);
