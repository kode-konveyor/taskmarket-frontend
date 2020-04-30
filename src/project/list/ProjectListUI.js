import React from "react";
import List from "../../common/List";
import ProjectListItemUI from "./ProjectListItemUI";
import data from "./data";

export default function ProjectListUI() {
  return (
    <div className="project-list">
      <List Of={ProjectListItemUI} data={data} className="projectListBox" />;
    </div>
  );
}
