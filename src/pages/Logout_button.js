// 로그아웃 액션
export const logout_button = () => ({
    type: 'LOGOUT',
  });
  
  // 로그인 상태를 관리하는 리듀서
  const loginReducer = (state = { isLogin: false }, action) => {
    switch (action.type) {
      case 'LOGIN':
        return { ...state, isLogin: true };
      case 'LOGOUT':
        return { ...state, isLogin: false };
      default:
        return state;
    }
  };
  
  export default logout_button;
  