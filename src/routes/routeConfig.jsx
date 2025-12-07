import { RouterPath } from "./routerPath";

import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
// 필요한 페이지 계속 import

export const routeConfig = [
  {
    path: RouterPath.login,
    element: <LoginPage />,
  },
  {
    path: RouterPath.register,
    element: <RegisterPage />,
  },
  // 여기에 추가만 하면 됨
  // { path: RouterPath.mypage, element: <MyPage /> },
];
