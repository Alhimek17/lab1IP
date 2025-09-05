import { StudentForm } from "@entities/student";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const FifthEditPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <div className="row justify-content-center">
            <div className="mb-2">
                <StudentForm />
            </div>
            <div className="col-md-12 text-center">
                <Button onClick={handleClick}>Вернуться назад</Button>
            </div>
        </div>
    );
};
