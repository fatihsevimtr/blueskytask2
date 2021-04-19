import React from "react";



const SearchComp = () => {


  return (
 
    <form className="form">
      <div>
 
        <input
          type="text"
          className="task-input"
          placeholder="Search a task..."
          // onChange={(e) => setSearchItem(e.target.value)}
        />
        <input
          type="text"
          className="task-input"
          placeholder="Find a user..."
        />

        <input type="checkbox" required />
        <label>Completion</label>
      </div>
    </form>
  );
};

export default SearchComp;
