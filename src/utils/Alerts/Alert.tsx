import {toast} from "react-toastify";
import Alert from "../../components/Alert/Alert/alert";

export const alertError = (text: string) : void => {
    toast.error(
        <Alert
            text={{text}}
        />
    )
}