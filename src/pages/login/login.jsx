import backIcon from '../../assets/backIcon.svg';
import './login.css';

function LoginPage() {
    return (
        <div className="login-page">
            <div className="back-Button-wrapper">
                <button className="back-Button">
                    <img src={backIcon} alt="뒤로가기" />
                </button>
            </div>
            <div className="title-section">
                <h1>로그인</h1>
                <p>저장해 둔 복약 프로필을 불러와<br />
                    비교할 수 있어요!</p>
            </div>
            {/* 입력 폼 */}
            <form className="login-form">
                <div className="field-id">
                    <label>아이디(이메일)</label>
                    <input type="email" placeholder="example@email.com" />
                </div>

                <div className="field-password">
                    <label>비밀번호</label>
                    <input type="password" placeholder="8자 이상 입력해 주세요" />
                </div>

                <a href="#" className="forgot-password">비밀번호를 잊으셨나요?</a>
            </form>
            {/* 아래 버튼 */}
            <div className="bottom-actions">
                <button className="btn-primary">로그인</button>
                <button className="btn-secondary">회원가입</button>
                <button className="btn-text">나중에 하기</button>
            </div>
        </div>
    );
}

export default LoginPage;