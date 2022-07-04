import React from "react";
import calendarioIcon from "../../assets/images/calendario-icone.svg";
import clientesIcon from "../../assets/images/clientes-icone.svg";
import menuIcon from "../../assets/images/menu-icone.svg";
import relatoriosIcon from "../../assets/images/relatorios-icone.svg";
import FloatingButton from "./components/FloatingButton";
import "./style.css";

function Footer() {
	return (
		<footer>
			<nav className="navbar">
				<ul className="navbar-menu">
					<li>
						<button className="button on" type="button">
							<img src={calendarioIcon} alt="ícone de calendário" />
							Consultas
						</button>
					</li>
					<li>
						<button className="button off" type="button">
							<img src={clientesIcon} alt="ícone de pessoa" />
							Clientes
						</button>
					</li>
					<li>
						<button className="button off" type="button">
							<img src={relatoriosIcon} alt="ícone de gráfico de linhas" />
							Relátorios
						</button>
					</li>
					<li>
						<button className="button off" type="button">
							<img src={menuIcon} alt="ícone de menu hamburguer" />
							Menu
						</button>
					</li>
				</ul>
			</nav>
			<FloatingButton />
		</footer>
	);
}

export default Footer;
