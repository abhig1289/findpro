// @ts-nocheck
import React from "react";
import ChildrenTab from "./childrenTab";

export const salaryType = [
  {
    label: `Weekly`,
    key: "weekly",
    children: <ChildrenTab fixedRate={24} min={24} max={32} />,


  }, {
    label: `Monthly`,
    key: "monthly",
    children: <ChildrenTab fixedRate={3600} min={2600} max={3600} />,


  },
  {
    label: `Yearly`,
    key: "Yearly",
    children: <ChildrenTab fixedRate={80000} min={70000} max={90000} />,
  }
];
