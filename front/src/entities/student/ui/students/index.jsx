import { StudentsTable, useStudents } from "@entities/student";
import { useModal } from "@shared/modal";
import { TOAST_ACTION, useToastsDispatch } from "@shared/toast";
import { Pagination } from "@widgets/index";
import { Button } from "react-bootstrap";
import { PlusCircle } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";

export const Students = () => {
    const navigate = useNavigate();
    const { students, deleteStudent, pages, changePage } = useStudents();
    const toast = useToastsDispatch();
    const { show } = useModal();

    const deleteItem = async (id) => {
        let text = "";
        try {
            await deleteStudent(id);
            text = "Элемент успешно удален";
        } catch {
            text = "Ошибка удаления";
        }
        toast({
            type: TOAST_ACTION.add,
            title: "Удаление",
            text,
        });
    };

    const handleUpdate = (id) => {
        navigate(`/page5/edit/${id}`);
    };

    const handleDelete = (id) => {
        show("Удаление", "Удалить запись?", async () => await deleteItem(id));
    };

    return (
        <>
            <Link to="/page5/edit">
                <Button className="mb-2">
                    <PlusCircle /> Добавить студена
                </Button>
            </Link>
            <StudentsTable data={students} onUpdate={handleUpdate} onDelete={handleDelete} />
            <Pagination page={pages.current} total={pages.total} onChange={changePage} />
        </>
    );
};
