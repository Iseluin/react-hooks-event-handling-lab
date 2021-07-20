// Code Keypad Component Here
const Keypad = () => {
    return (
        <input type="password" name="password" onChange={() => console.log("Entering password...")}></input>
    );
}

export default Keypad;