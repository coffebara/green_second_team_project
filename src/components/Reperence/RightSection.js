import React from 'react';
import { useSelector } from 'react-redux';
import { selectActiveMenuItem } from './menuSlice';

const RightSection = () => {
  const activeMenuItem = useSelector(selectActiveMenuItem);

  return (
    <div>
      {activeMenuItem ? (
        <div>{activeMenuItem.label} content goes here</div>
      ) : (
        <div>Please select a menu item</div>
      )}
    </div>
  );
};

export default RightSection;