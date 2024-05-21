import React, { useState } from "react";

const Folder = ({ data, classes }) => {
  const [isExpand, setIsExpand] = useState(false);
  console.log(classes);
  const { isFolder, items, name } = data;

  const handleExpand = () => {
    setIsExpand((prev) => !prev);
  };
  if (isFolder) {
    return (
      <>
        <div
          className={`bg-gray-200 p-1.5 flex gap-2 items-center w-[200px] cursor-pointer ${classes}`}
          onClick={handleExpand}
        >
          <span>📁</span>
          <p className="text-lg font-medium"> {name}</p>
        </div>
        {isExpand ? (
          items?.map((item, index) => (
            <div className="pl-8">
              <Folder
                key={index}
                data={{
                  name: item.name,
                  items: item.items,
                  isFolder: item.isFolder,
                }}
                classes="pl-8"
              />
            </div>
          ))
        ) : (
          <></>
        )}
      </>
    );
  } else {
    return (
      <div className={`flex gap-2 items-center justify-start ${classes}`}>
        <span>📄</span>
        <p className="text-lg text-black">{name}</p>
      </div>
    );
  }
};

export default Folder;
