import { useBSForm } from "@shared/index";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const initState = {
    a: 2,
    b: 2,
    c: 0,
    operator: "3",
};

const getButtonText = (operator) => {
    const operators = ["+", "-", "*", "/"];
    return `a ${operators[operator - 1]} b = c`;
};

const getResult = (operator, aVal, bVal) => {
    const a = parseInt(aVal);
    const b = parseInt(bVal);
    return ((op) => {
        switch (op) {
            case "1":
                return a + b;
            case "2":
                return a - b;
            case "3":
                return a * b;
            case "4":
                return b === 0 ? 0 : a / b;
            default:
                throw new Error(`Unknown operator ${op}`);
        }
    })(operator);
};

export const Calc = () => {
    const { register, validated, handleSubmit, setValue } = useBSForm(initState, false);
    const [operator, setOperator] = useState(initState.operator);

    const buttonText = getButtonText(operator);

    const onSubmit = (values) => {
        const result = getResult(values.operator, values.a, values.b);
        setValue("c", result);
    };

    const handleChange = (event) => {
        setOperator(event.target.value);
    };

    return (
        <div className="row justify-content-center">
            <Form
                className="col col-md-6"
                noValidate
                validated={validated}
                onSubmit={(event) => handleSubmit(event, onSubmit)}
            >
                <Form.Group className="mb-2" controlId="a">
                    <Form.Label>a</Form.Label>
                    <Form.Control type="number" required {...register("a")} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="b">
                    <Form.Label>b</Form.Label>
                    <Form.Control type="number" required {...register("b")} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="operator">
                    <Form.Label>Операция</Form.Label>
                    <Form.Select required {...register("operator", { onChange: handleChange })}>
                        <option value="1">+</option>
                        <option value="2">-</option>
                        <option value="3">*</option>
                        <option value="4">/</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-2" controlId="с">
                    <Form.Label>c</Form.Label>
                    <Form.Control type="number" readOnly {...register("c")} />
                </Form.Group>
                <Button className="d-block m-auto" type="submit">
                    {buttonText}
                </Button>
            </Form>
        </div>
    );
};
