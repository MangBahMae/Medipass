import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoIcon from '../../assets/logoIcon.svg';
import './splash.css';

function SplashPage() {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // 진행바를 서서히 채우는 로직
        const progressTimer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressTimer);
                    return 100;
                }
                return prev + 5;   // 0.1초마다 5%씩 증가
            });
        }, 100);

        // 2초 뒤 로그인 페이지로 이동
        const navigateTimer = setTimeout(() => {
            navigate('/login');
        }, 2000);

        return () => {
            clearInterval(progressTimer);
            clearTimeout(navigateTimer);
        };
    }, [navigate]);

    return (
        <div className="splash-page">
            <div className="splash-blur-circle-top"></div>
            <div className="splash-blur-circle-bottom"></div>

            <div className="splash-center">
                <img src={logoIcon} alt="MediPass 로고" className="splash-logo" />
                <h1 className="splash-title">MediPass</h1>
                <p className="splash-subtitle">해외에서도 약 정보를 쉽게</p>
            </div>

            <div className="splash-progress-track">
                <div className="splash-progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
}

export default SplashPage;