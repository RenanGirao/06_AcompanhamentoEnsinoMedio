import React from "react";
import "./Contato.css";
import ButtonComponent from "../../../components/buttons_login/BotaoLogin"; // Importe o componente botão login

function Contato() {
    return (
        <div className="contato">
            <ButtonComponent />
            <div className="cerebro"></div>

            <div className="text-Edutech">Edutech</div>

            <div className="kids-studying"></div>

            <div className="RetanguloBranco">
                <div className="RetanguloAzu"></div>
                <div className="text-fale">Fale conosco!</div>
                <button className="whatsapp"></button>

                <div className="formas-contato" style={{ textAlign: "left", marginLeft: "50px" }}>
                    <p>
                        <span>
                            <span style={{ fontSize: "38px", fontWeight: "bold" }}>
                                E-mail para contato:
                            </span>
                            <br />
                        </span>
                    </p>
                    <ul>
                        <li>
                            <span style={{ fontSize: "26px" }}>edutech@gmail.com</span>
                        </li>
                        <li>
                            <span style={{ fontSize: "26px" }}>edutechsac@gmail.com</span>
                        </li>
                    </ul>
                    <p>
                        <span>
                            <br />
                            <span style={{ fontSize: "38px", fontWeight: "bold" }}>Telefone:</span>
                            <br />
                        </span>
                    </p>
                    <ul>
                        <li>
                            <span style={{ fontSize: "26px" }}>(61) 9 9999-9999</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contato;
