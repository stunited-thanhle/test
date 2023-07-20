import React, { memo } from "react";

const Form = ({ total, submitForm }) => {
  console.log("Form Render");
  return (
    <div>
      <p> Total: {total}</p>
      <input type="text" />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

// export default Form;
export default memo(Form);
