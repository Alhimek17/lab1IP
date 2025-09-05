import { useBSForm } from "@shared/index";
import { Button, Form } from "react-bootstrap";

const initState = {
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    date: "",
    disabled: "Некоторое значение",
    readonly: "Некоторое значение",
    color: "#3c3c3c",
    checkbox1: false,
    checkbox2: true,
    radioExample: "0",
    selected: "",
};

export const ThirdPage = () => {
    const { register, validated, handleSubmit } = useBSForm(initState);

    const onSubmit = (values) => {
        console.debug(values);
    };

    return (
        <div className="row justify-content-center">
            <Form
                className="col-md-6"
                noValidate
                validated={validated}
                onSubmit={(event) => handleSubmit(event, onSubmit)}
            >
                <Form.Group className="mb-2" controlId="lastname">
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type="text" required {...register("lastname")} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">Some error!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="firstname">
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="text" required {...register("firstname")} />
                    <Form.Control.Feedback type="invalid">Some error!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" required {...register("email")} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-2" controlId="password">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" required autoComplete="off" {...register("password")} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="date">
                    <Form.Label>Дата</Form.Label>
                    <Form.Control type="date" required {...register("date")} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="disabled">
                    <Form.Label>Выключенный компонент</Form.Label>
                    <Form.Control type="text" disabled {...register("disabled")} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="readonly">
                    <Form.Label>Компонент только для чтения</Form.Label>
                    <Form.Control type="text" readOnly {...register("readonly")} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="color">
                    <Form.Label>Выбор цвета</Form.Label>
                    <Form.Control type="color" readOnly {...register("color")} />
                </Form.Group>
                <div className="mb-2 d-md-flex flex-md-row">
                    <Form.Check className="me-md-3" type="checkbox" label="Флажок 1" {...register("checkbox1")} />
                    <Form.Check type="checkbox" label="Флажок 2" {...register("checkbox2")} />
                </div>
                <div className="mb-2 d-md-flex flex-md-row">
                    <Form.Check
                        className="me-md-3"
                        type="radio"
                        name="radioExample"
                        label="Переключатель 1"
                        value="0"
                        {...register("radioExample")}
                    />
                    <Form.Check
                        type="radio"
                        name="radioExample"
                        label="Переключатель 2"
                        value="1"
                        {...register("radioExample")}
                    />
                </div>
                <Form.Select className="mb-2" name="selected" required {...register("selected")}>
                    <option value="">Выберите значение</option>
                    <option value="1">Один</option>
                    <option value="2">Два</option>
                    <option value="3">Три</option>
                </Form.Select>
                <Button className="d-block m-auto" type="submit">
                    Отправить
                </Button>
            </Form>
        </div>
    );
};
