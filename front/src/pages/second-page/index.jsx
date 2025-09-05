export const SecondPage = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <p>Вторая страница содержит пример рисунка (рис. 1) и таблицы (таб. 1).</p>
            <div>
                <img src="/images/logo.png" alt="logo" width="190" />
                <br />
                Рис. 1. Пример рисунка.
            </div>
            <table className="table table-bordered w-50 mt-2">
                <caption>Таблица 1. Пример таблицы.</caption>
                <thead>
                    <tr>
                        <th className="w-25">Номер</th>
                        <th>ФИО</th>
                        <th className="w-25">Телефон</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Иванов</td>
                        <td>89999999999</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Петров</td>
                        <td>89999999991</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
