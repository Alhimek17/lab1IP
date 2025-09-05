import { studentModel, useStudent, useStudentGroup } from "@entities/student";
import { base64, useBSForm } from "@shared/index";
import { TOAST_ACTION, useToastsDispatch } from "@shared/toast";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./styles.css";

export const StudentForm = () => {
    const groups = useStudentGroup();
    const { student, saveStudent, clearStudent } = useStudent();
    const { register, validated, handleSubmit, reset, setValue } = useBSForm(null, false);

    const [image, setImage] = useState("/images/200.png");
    const [isSubmit, setSubmit] = useState(false);

    const toast = useToastsDispatch();

    useEffect(() => {
        if (student) {
            reset(student);
        }
        if (student && student.image) {
            setImage(student.image);
        }
    }, [student, reset]);

    const handleSave = async (data) => {
        let text = "";
        setSubmit(true);
        try {
            await saveStudent(data);
            text = "Элемент успешно сохранен";
        } catch {
            text = "Ошибка сохранения";
        }
        toast({
            type: TOAST_ACTION.add,
            title: "Сохранение",
            text,
        });
        setSubmit(false);
    };

    const handleImageChange = async (event) => {
        const { files } = event.target;
        const file = await base64(files.item(0));
        setValue("image", file);
        setImage(file);
    };

    const inputs = Object.keys(studentModel).map((field) => {
        return (
            <Form.Group className="mb-2" key={field} controlId={field}>
                <Form.Label>{studentModel[field][0]}</Form.Label>
                <Form.Control type={studentModel[field][1]} required disabled={isSubmit} {...register(field)} />
            </Form.Group>
        );
    });

    const groupOptions = groups?.map((group) => {
        return (
            <option key={group.id} value={group.id}>
                {group.name}
            </option>
        );
    });

    return (
        <div className="row">
            <div className="col-md-4 text-center">
                <img className="image-preview rounded" alt="placeholder" src={image} />
            </div>
            <div className="col-md-6">
                <Form noValidate validated={validated} onSubmit={(event) => handleSubmit(event, handleSave)}>
                    {inputs}
                    <Form.Group className="mb-2" controlId="groupId">
                        <Form.Label>Группа</Form.Label>
                        <Form.Select
                            className="mb-2"
                            name="selected"
                            required
                            disabled={isSubmit}
                            {...register("groupId")}
                        >
                            <option value="">Выберите группу</option>
                            {groupOptions}
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="image">
                        <Form.Label>Фотография</Form.Label>
                        <Form.Control type="file" accept="image/*" disabled={isSubmit} onChange={handleImageChange} />
                    </Form.Group>
                    <div className="text-center">
                        <Button type="submit" disabled={isSubmit}>
                            Сохранить
                        </Button>
                        <Button className="mx-2" type="button" disabled={isSubmit} onClick={() => clearStudent()}>
                            Очистить
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};
