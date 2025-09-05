import "./styles.css";

export const Footer = () => {
    return (
        <footer className="d-flex flex-shrink-0 align-items-center justify-content-center">
            Автор, {new Date().getFullYear()}
        </footer>
    );
};
