import './popup.css';
import close from '../../assets/images/close.svg';
interface PopupProps {
    content: React.ReactNode;
    setContent: (content: React.ReactNode) => void;
}
export function Popup({ content, setContent }: PopupProps) {
    function closePopup() {
        document.getElementById('description')!.style.display = 'none';
        const popup = document.getElementById('popup')!;
        popup.classList.toggle('show');
        setContent(null);
    }
    return (
        <div className="popup" id="popup">
            <div className="popup-content">
                <img
                    src={close}
                    alt="close"
                    className="popup-close"
                    onClick={closePopup}
                ></img>
                {content}
            </div>
        </div>
    );
}
