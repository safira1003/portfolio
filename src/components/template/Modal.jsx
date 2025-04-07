import { forwardRef, useImperativeHandle, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const Modal = forwardRef(function Modal({ children }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => ({
        open() {
            dialog.current.showModal();
            document.body.style.overflow = "hidden"; 
        },
        close() {
            dialog.current.close();
            document.body.style.overflow = ""; 
        }
    }));

    useEffect(() => {
        const handleClose = () => {
            document.body.style.overflow = ""; 
        };
        const modalElement = dialog.current;
        if (modalElement) {
            modalElement.addEventListener("close", handleClose);
        }
        return () => {
            if (modalElement) {
                modalElement.removeEventListener("close", handleClose);
            }
        };
    }, []);

    const handleBackdropClick = (event) => {
        if (event.target === dialog.current) {
            dialog.current.close();
            document.body.style.overflow = ""; 
        }
    };

    return createPortal((
        <dialog
            ref={dialog}
            onClick={handleBackdropClick}
            className="rounded-xl  py-[1%] md:py-4 pb-8 px-[1%] backdrop:cursor-pointer backdrop:bg-stone-900/95 w-4/5 md:w-2/3 max-h-[90%] md:max-h-[80%] my-auto mx-auto cursor-default"
        >
            <form method="dialog" className="flex justify-end">
                <button className="text-black p-1 text-xl md:text-2xl font-bold cursor-pointer hover:text-stone-600">
                    <FontAwesomeIcon icon={faClose} />
                </button>
            </form>
            <div className="flex flex-col gap-4 overflow-y-auto max-h-[90%] px-[3%]">
                {children}
            </div>
        </dialog>
    ), document.getElementById("modal-root"));
});

export default Modal;
