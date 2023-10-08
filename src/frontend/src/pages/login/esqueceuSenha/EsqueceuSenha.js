import React from "react";
import "./EsqueceuSenha.css";
import ButtonComponent from "../../../components/buttons_login/BotaoLogin"; // Importe o componente botão login
import ButtonConfirmar from "../../../components/button_confirmar/Component"; // Importe o componente botão confirmar

function EsqueceuSenha() {
  return (
    <div className="EsqueceuSenha">
      <ButtonComponent />
      <div className="cerebro"></div>

      <div className="text-Edutech">Edutech</div>

      <div className="kids-studying"></div>

      <div className="RetanguloBranco">
        <div className="text-Informe">
            Informe o seu endereço de e-mail de cadastro na plataforma Edutech. Será enviado uma nova credencial de acesso em até 2 minutos. Lembre-se de verificar a sua caixa de spam.
        </div>

        <div> <input type="email" id="email" name="email" placeholder="Digite seu e-mail"></input></div>
        <button className="cred-button">Clique aqui para reenviar sua credencial</button>

        <div className="RetanguloAzul">
            <div className="cerebro2"></div>
            <div className="text-Edutech2">Esqueceu sua credencial?</div>
        </div>

        <ButtonConfirmar className="confirmar" />

      </div>    
    </div>
  );
}

export default EsqueceuSenha;
