import React from "react";
import classes from "./ChartHeader.module.css";
export default function ChartHeader() {
  return (
    <div className={classes.outer}>
      <h3>Sales Figures</h3>
      <ul className={classes.listOuter}>
        <li>
          <span className={classes.span1}></span>
          <p>Sales</p>
        </li>
        <li>
          <span className={classes.span2}></span>
          <p>Users</p>
        </li>
        <li>
          <span className={classes.span3}></span>
          <p>Product</p>
        </li>
        <li>
          <span className={classes.span4}></span>
          <p>Team</p>
        </li>
      </ul>
    </div>
  );
}