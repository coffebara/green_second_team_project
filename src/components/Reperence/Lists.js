import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectMenuItems, selectActiveMenuItem, setActiveMenuItem } from './menuSlice';

const LeftSideMenu = () => {
  const menuItems = useSelector(selectMenuItems);
  const activeMenuItem = useSelector(selectActiveMenuItem);
  const dispatch = useDispatch();

  const handleMenuItemClick = (menuItem) => {
    dispatch(setActiveMenuItem(menuItem));
  };

  return (
    <div>
      {menuItems.map((menuItem) => (
        <div key={menuItem.id}>
          <button onClick={() => handleMenuItemClick(menuItem)}>{menuItem.label}</button>
          {menuItem.children && activeMenuItem?.id === menuItem.id && (
            <ul>
              {menuItem.children.map((childItem) => (
                <li key={childItem.id}>
                  <button onClick={() => handleMenuItemClick(childItem)}>{childItem.label}</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeftSideMenu;