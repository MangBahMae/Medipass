import { useNavigate } from 'react-router-dom';
import backIcon from '../../assets/backIcon.svg';
import './login.css';

function LoginPage() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // TODO: 백엔드 연동 시 여기서 로그인 API 호출 후 성공 시 navigate
        navigate('/home');
    };

    const handleSignup = () => {
        navigate('/signup');
    };

    const handleGuest = () => {
        navigate('/home');
    };

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
            <form id="login-form" className="login-form" onSubmit={handleLogin}>
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
                <button type="submit" form="login-form" className="btn-primary">로그인</button>
                <button type="button" className="btn-secondary" onClick={handleSignup}>회원가입</button>
                <button type="button" className="btn-text" onClick={handleGuest}>나중에 하기</button>
            </div>
        </div>
    );
}

export default LoginPage;