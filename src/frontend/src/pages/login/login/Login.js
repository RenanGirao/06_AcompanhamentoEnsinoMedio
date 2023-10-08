import React from "react";
import "./Login.css";
import ButtonComponent from "../../../components/buttons_login/BotaoLogin"; // Importe o componente botão login
import ButtonConfirmar from "../../../components/button_confirmar/Component"; // Importe o componente botão confirmar

function Login() {
  return (
    <div className="login">
      <ButtonComponent />
      <div className="cerebro"></div>

      <div className="text-Edutech">Edutech</div>

      <div className="RetanguloBranco">
        <div> <input type="email" id="email" name="email" placeholder="Digite seu e-mail"></input></div>
        <div> <input type="password" id="senha" name="senha" placeholder="Digite sua credencial de acesso"></input> </div>
        <button className="cred-button">Esqueceu sua credencial?</button>

        <div className="RetanguloAzul">
            <div className="cerebro2"></div>
            <div className="text-Edutech2">Edutech</div>
        </div>

        <div className="kids-studying"></div>

        <ButtonConfirmar className="confirmar" />

      </div>    
    </div>
  );
}

export default Login;
