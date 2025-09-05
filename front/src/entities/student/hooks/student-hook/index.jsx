import { createItem, getItem, updateItem } from "@shared/index";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PATH = "student";

export const useStudent = () => {
    const params = useParams();
    const [student, setStudent] = useState(null);
    const studentId = params.studentId;

    const getStudent = (id) => {
        return getItem(PATH, id);
    };

    useEffect(() => {
        let ignore = false;

        if (!studentId) {
            return;
        }
        getStudent(studentId).then((result) => {
            if (!ignore) {
                setStudent(result);
            }
        });
        return () => {
            ignore = true;
        };
    }, [studentId]);

    const saveStudent = async (data) => {
        let currentId = student?.id;
        if (!currentId) {
            const newStudent = await createItem(PATH, data);
            currentId = newStudent.id;
        } else {
            await updateItem(PATH, currentId, data);
        }
        const result = await getStudent(currentId);
        setStudent(result);
    };

    const clearStudent = () => {
        setStudent(null);
    };

    return { student, saveStudent, clearStudent };
};
