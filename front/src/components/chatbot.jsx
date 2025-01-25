import { useState } from "react";
import axios from "axios";

const Chatbot = () => {
    const [chatHistory, setChatHistory] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async (message) => {
        setLoading(true);

        //Guardamos el mensaje del usuario en el historial
        setChatHistory((prevHistory) => [...prevHistory, {sender : "user", message}]);
        
        try{
            let response;
            if(message === "Ver Productos"){
                response = await axios.get("http://localhost:3000/products/list", {option: "Productos Disponibles"});
            }else if(message == "Ver Usuarios"){
                response = await axios.get("http://localhost:3000/products/list", {option: "Hacer una reserva"});
            }else{
                //Si el usuario no ha seleccionado ninguna opcion
                response = await axios.post("http://localhost:3000/chatbot");
            }

            setChatHistory((prevHistory) => [...prevHistory, {sender : "bot", message: response.data.message}]);
            setLoading(false);
        }catch(error){
            setChatHistory((prevHistory) => [...prevHistory, {sender : "bot", message: "Error al procesar la solicitud"}]);
            setLoading(false);
        }
    }
    
    const handleButtonClick = (message) => {
        sendMessage(message);
    }

    return(
        <div className="chatbot-container">
            <div className="chatbot-history">
                {chatHistory.map((chat, index) => (
                    <div key={index} className={`chat ${chat.sender}`}>
                        <span>{chat.message}</span>
                    </div>
                ))}
            </div>

            {loading ? (
                <div>Cargando...</div>) 
                : (
                    <div className="button-container">
                        <button onClick={() => handleButtonClick("Ver Productos")}>Ver Productos</button>
                        <button onClick={() => handleButtonClick("Ver Usuarios")}>Ver Usuarios</button>
                    </div>
            )}

<style>{`
        .chatbot-container {
          width: 300px;
          height: 400px;
          border: 1px solid #ccc;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
        }
        .chat-history {
          flex: 1;
          overflow-y: scroll;
          margin-bottom: 20px;
        }
        .user {
          color: blue;
          text-align: right;
        }
        .bot {
          color: green;
          text-align: left;
        }
        .button-container {
          display: flex;
          justify-content: space-between;
        }
        button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 10px;
          cursor: pointer;
          border-radius: 5px;
        }
        button:hover {
          background-color: #45a049;
        }
      `}</style>
        </div>
    )
}

export default Chatbot;