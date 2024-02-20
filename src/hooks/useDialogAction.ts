import { useState } from 'react';

const useDialogAction = (initialState: boolean = false) => {
    const [openDialog, setOpenDialog] = useState<boolean>(initialState);
    const [openAlertDialog, setOpenAlertDialog] = useState<boolean>(initialState);

    const toggleDialog = (): void => setOpenDialog((prevState: boolean) => !prevState);
    const toggleAlertDialog = (): void => setOpenAlertDialog((prevState: boolean) => !prevState);

    const toggleAllDialogs = (): void => {
        setOpenDialog((prevState) => !prevState);
        setOpenAlertDialog((prevState) => !prevState);
    };

    return {
        openDialog,
        setOpenDialog,
        toggleDialog,
        openAlertDialog,
        setOpenAlertDialog,
        toggleAlertDialog,
        toggleAllDialogs,
    };
};

export default useDialogAction;
