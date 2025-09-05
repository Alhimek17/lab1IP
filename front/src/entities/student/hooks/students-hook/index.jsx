import { deleteItem, getAllItems } from "@shared/index";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PATH = "student";
const PAGE_SIZE = 5;
const PAGE_PARAM = "page";

export const useStudents = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [students, setStudents] = useState(null);
    const [page, setPage] = useState(parseInt(searchParams.get(PAGE_PARAM)) || 1);

    const total = students?.pages ?? 0;
    const current = Math.min(Math.max(1, page), total);
    const pages = { current, total };

    const getStudents = (page) => {
        return getAllItems(PATH, `_embed=group&_page=${page}&_per_page=${PAGE_SIZE}`);
    };

    useEffect(() => {
        let ignore = false;

        getStudents(page).then((result) => {
            if (!ignore) {
                setStudents(result);
            }
        });

        return () => {
            ignore = true;
        };
    }, [page]);

    const changePage = (newPage) => {
        setSearchParams((params) => {
            params.set(PAGE_PARAM, newPage);
            return params;
        });
        setPage(newPage);
    };

    const deleteStudent = async (id) => {
        if (!id) {
            throw new Error("Student id is not defined");
        }
        await deleteItem(PATH, id);
        const newStudents = await getStudents(page);
        setStudents(newStudents);
        if (newStudents.pages < page) {
            changePage(newStudents.pages);
        }
    };

    return { students: students ?? null, deleteStudent, pages, changePage };
};
