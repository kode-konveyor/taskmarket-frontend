import React from "react";
import List from "../../common/List";
import ProjectListItem from "./ProjectListItem";
import PropTypes from "prop-types";

export default function ProjectListBox({ data }) {
  return <List Of={ProjectListItem} data={data} className="projectListBox" />;
}

ProjectListBox.propTypes = {
  data: PropTypes.array,
};
