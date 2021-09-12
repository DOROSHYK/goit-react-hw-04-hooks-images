import React from "react";
// import PropTypes from "prop-types";

import s from "./Button.module.css";

function Button({ onPress }) {
  // static defaultProps = {
  //   name: "Load more",
  // };
  // static propTypes = {
  //   name: PropTypes.string,
  //   onPress: PropTypes.func.isRequired,
  // };

  // const { onPress } = this.props;
  return (
    <button type="button" onClick={() => onPress()} className={s.Button}>
      Load more
    </button>
  );
}

export default Button;
