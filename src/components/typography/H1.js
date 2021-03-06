import React from "react";
import PropTypes from "prop-types";
import Text from "./Text";
import { withTheme } from "../Theme";

const H1 = props => {
  return <Text {...props} />;
};

H1.themeConfig = {
  style: {
    base: {
      fontSize: 28,
      fontStyle: "normal",
      color: "@textColor",
      paddingVertical: 10,
      textAlign: "left",
      fontWeight: "500"
    }
  }
};

H1.propTypes = { ...Text.propTypes };

export default withTheme("H1", H1);
