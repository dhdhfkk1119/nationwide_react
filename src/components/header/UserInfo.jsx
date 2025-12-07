import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";

export default function UserInfo() {
  return (
    <div className="userInfo">
      <div className="user">
        <Link to="/login">로그인</Link>
        <Link to="/register">회원가입</Link>
      </div>

      {/* 로그인된 경우 */}
      {/* 
      <div className="user">
        <Link to="/mypage">
          <img
            src={profile}
            alt=""
            width={30}
            style={{ paddingRight: "5px" }}
          />
          <span>조정우 님</span>
        </Link>
      </div> 
      */}

      <div className="alrams">
        <Link to="/notifications">
          <i className="bi bi-bell"></i>
        </Link>
      </div>
    </div>
  );
}
