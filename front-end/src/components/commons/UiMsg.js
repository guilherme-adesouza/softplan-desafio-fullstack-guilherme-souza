import "components/commons/UiMsg.css"

class UiMsg {
    static error({message = '', error = ''}) {
        alert(`${message}: \n ${error}`);
    }

    static alert({message = ''}) {
        alert(message);
        
    }

    static success({message = ''}) {
        alert(message);
    }
}

export default UiMsg;
