import { FifthEditPage, FifthPage, FourthPage, MainPage, NotFoundPage, SecondPage, ThirdPage } from "@pages/index";
import { ModalContainer, ModalProvider } from "@shared/modal";
import { ToastProvider } from "@shared/toast";
import { ToastContainer } from "@shared/toast/ui";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import "./styles.css";

export const App = () => {
    return (
        <ModalProvider>
            <ToastProvider>
                <ModalContainer />
                <ToastContainer />
                <BrowserRouter>
                    <Routes>
                        <Route element={<MainLayout />}>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/page2" element={<SecondPage />} />
                            <Route path="/page3" element={<ThirdPage />} />
                            <Route path="/page4" element={<FourthPage />} />
                            <Route path="/page5" element={<FifthPage />} />
                            <Route path="/page5/edit/:studentId?" element={<FifthEditPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ToastProvider>
        </ModalProvider>
    );
};
