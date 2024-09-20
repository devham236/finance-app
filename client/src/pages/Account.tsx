import axios from "axios";
import React, { useEffect } from "react";

const Account = () => {
  useEffect(() => {
    const testEndpoint = async () => {
      const res = await axios.get("http://localhost:8000/api/v1/test");
      console.log(res);
    };

    testEndpoint();
  }, []);
  return (
    <div className="text-text_color_light dark:text-text_color_dark">
      Account
    </div>
  );
};

export default Account;
