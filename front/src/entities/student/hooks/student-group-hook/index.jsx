import { getAllItems } from "@shared/index";
import { useEffect, useState } from "react";

export const useStudentGroup = () => {
    const [groups, setGroups] = useState(null);

    useEffect(() => {
        let ignore = false;
        getAllItems("group").then((result) => {
            if (!ignore) {
                setGroups(result);
            }
        });
        return () => {
            ignore = true;
        };
    }, []);

    return groups;
};
