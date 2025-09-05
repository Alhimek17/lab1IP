import { Button, Table } from "react-bootstrap";
import { PencilFill, TrashFill } from "react-bootstrap-icons";

export const StudentsTable = ({ data, onUpdate, onDelete }) => {
    const body = data?.map((student) => {
        return (
            <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.first_name}</td>
                <td>{student.last_name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.bdate}</td>
                <td>{student.group?.name ?? ""}</td>
                <td className="p-1">
                    <Button variant="warning" size="sm" onClick={() => onUpdate(student.id)}>
                        <PencilFill />
                    </Button>
                </td>
                <td className="p-1">
                    <Button variant="danger" size="sm" onClick={() => onDelete(student.id)}>
                        <TrashFill />
                    </Button>
                </td>
            </tr>
        );
    });

    const bodyRender = data ? (
        body
    ) : (
        <tr>
            <td align="center" colSpan={100}>
                <h5 className="text-align-center">Данные отсутствуют или загружаются</h5>
            </td>
        </tr>
    );

    return (
        <Table hover responsive size="sm">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Почта</th>
                    <th>Телефон</th>
                    <th>Дата рождения</th>
                    <th>Группа</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>{bodyRender}</tbody>
        </Table>
    );
};
