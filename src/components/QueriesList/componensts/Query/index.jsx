import React from "react";
import PropTypes from "prop-types";
import localIcon from "../../../../assets/images/pin.svg";
import remoteIcon from "../../../../assets/images/Camera.svg";
import chatIcon from "../../../../assets/images/chat.svg";
import "./style.css";

Query.propTypes = {
	name: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	photo: PropTypes.node.isRequired,
};

function Query({ name, time, type, photo }) {
	return (
		<div className="card container">
			{type === "remote" ? (
				<>
					<div className="card-flex">
						<div className="card-flex-container">
							<img className="card-photo" src={photo} alt="" />
							<div>
								<h2 className="card-title">{name}</h2>
								<div className="container-align">
									<img src={remoteIcon} alt="Ícone chamada de vídeo" />
									<span className="card-query">Consulta remota</span>
								</div>
							</div>
						</div>
						<div className="card-chat-container">
							<img className="card-chat" src={chatIcon} alt="Ícone do chat" />
						</div>
					</div>
					<hr/>
					<div>
						<span className="card-time">{time}</span>
						<div className="card-btns-container">
							<button className="btn btn-video" type="button">Ligar por vídeo</button>
							<button className="btn btn-audio" type="button">Ligar por áudio</button>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="card-flex">
						<div className="card-flex-container">
							<img className="card-photo" src={photo} alt="" />
							<div>
								<h2 className="card-title">{name}</h2>
								<div  className="container-align">
									<img src={localIcon} alt="Ícone chamada de vídeo" />
									<span className="card-query">Consulta no local</span>
								</div>
							</div>
						</div>
						<div className="card-chat-container">
							<img className="card-chat" src={chatIcon} alt="Ícone do chat" />
						</div>
					</div>
					<hr/>
					<div>
						<span className="card-time">{time}</span>
						<div className="card-btns-container">
							<button className="btn btn-endereco" type="button">Ver endereço</button>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default Query;
