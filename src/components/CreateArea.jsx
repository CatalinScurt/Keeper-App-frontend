import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    function getInputsValue(event) {
        const { name, value } = event.target;
        setInputText(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        event.preventDefault();
        props.onAdd(inputText);
        setInputText({ title: "", content: "" })
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form onSubmit={submitNote} className="create-note">
                {isExpanded && <input onChange={getInputsValue} name="title" placeholder="Title" value={inputText.title} />}
                <textarea onClick={expand} onChange={getInputsValue} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={inputText.content} />
                <Zoom in={isExpanded}><Fab type="submit"><AddIcon /></Fab></Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
