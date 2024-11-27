import React, { useState } from "react";

const EntryForm2 = ({ entry }: { entry: string }) => {
  const [formData, setFormData] = useState(() => getInitialState(entry));

  function getInitialState(entryType: string) {
    switch (entryType) {
      case "Income":
        return { income: 0, label: "", color: "#3e9c35" };
      case "Expense":
        return { expense: 0, label: "", color: "#3e9c35" };
      case "Goal":
        return { title: "", description: "", achieved: false };
      default:
        return {};
    }
  }

  return <div></div>;
};

export default EntryForm2;
