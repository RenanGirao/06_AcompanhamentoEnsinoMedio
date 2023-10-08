import React from "react";
import "./SaibaMais.css";
import ButtonComponent from "../../../components/buttons_login/BotaoLogin"; // Importe o componente botão login

function SaibaMais() {
    return (
        <div className="saiba-mais">
            <ButtonComponent />
            <div className="cerebro"></div>

            <div className="text-Edutech">Edutech</div>

            <div className="kids-studying"></div>

            <div className="RetanguloBranco">
                <div className="RetanguloAzu"></div>
                <div className="text-fale">Sobre a Edutech</div>
                <div className="text-sobre">
                EduTech Future é uma plataforma web idealizada com o propósito de apoiar instituições educacionais e aprimorar o progresso acadêmico dos alunos. Este projeto é realizado por estudantes para estudantes. Através deste sistema, é possível avaliar o desenvolvimento dos alunos e realizar previsões sobre seu futuro acadêmico, uma vez que um dos principais desafios educacionais no país nos dias de hoje é a evasão escolar, ocasionada por conta do desempenho acadêmico insatisfatório, nossa plataforma busca entender esses desafios e, assim, contribuir para a resolução dos problemas que prejudicam o rendimento escolar dos alunos.
                </div>
                
            </div>
        </div>
    );
}

export default SaibaMais;
