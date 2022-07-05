import React from "react";
import Query from "./components/Query";
import LucianaPhoto from "../../assets/images/perfil-2.jpg";
import LarissaPhoto from "../../assets/images/perfil-3.jpg";
import MarcosPhoto from "../../assets/images/perfil-4.jpg";
import ClaraPhoto from "../../assets/images/perfil-5.jpg";
import "./style.css";


function QueriesList() {
	return (
		<section className="queries-container">
			<div>
				<span className="date">Hoje</span>
				<div>
					<Query
						name="Luciana Dias"
						time="14:00 - 15:00 (1 hora)"
						type="remote"
						photo={LucianaPhoto}
					/>
					<Query
						name="Larissa Santana"
						time="16:00 - 17:00 (1 hora)"
						type="local"
						photo={LarissaPhoto}
					/>
					<Query
						name="Marcos Correia"
						time="17:20 - 18:00 (40 minutos)"
						type="remote"
						photo={MarcosPhoto}
					/>
					<Query
						name="Luciana Dias"
						time="14:00 - 15:00 (1 hora)"
						type="remote"
						photo={LucianaPhoto}
					/>
					<Query
						name="Larissa Santana"
						time="16:00 - 17:00 (1 hora)"
						type="local"
						photo={LarissaPhoto}
					/>
					<Query
						name="Marcos Correia"
						time="17:20 - 18:00 (40 minutos)"
						type="remote"
						photo={MarcosPhoto}
					/>
				</div>
			</div>
			<div>
				<span className="date">Amanhã</span>
				<div>
					<Query
						name="Clara Lemos"
						time="18:00 - 19:00 (1 hora)"
						type="local"
						photo={ClaraPhoto}
					/>
					<Query
						name="Luciana Dias"
						time="14:00 - 15:00 (1 hora)"
						type="remote"
						photo={LucianaPhoto}
					/>
					<Query
						name="Marcos Correia"
						time="17:20 - 18:00 (40 minutos)"
						type="remote"
						photo={MarcosPhoto}
					/>
					<Query
						name="Larissa Santana"
						time="16:00 - 17:00 (1 hora)"
						type="local"
						photo={LarissaPhoto}
					/>
				</div>
			</div>
			<div>
				<span className="date">Quarta-feira</span>
				<div>
					<Query
						name="Clara Lemos"
						time="18:00 - 19:00 (1 hora)"
						type="local"
						photo={ClaraPhoto}
					/>
					<Query
						name="Luciana Dias"
						time="14:00 - 15:00 (1 hora)"
						type="remote"
						photo={LucianaPhoto}
					/>
					<Query
						name="Marcos Correia"
						time="17:20 - 18:00 (40 minutos)"
						type="remote"
						photo={MarcosPhoto}
					/>
					<Query
						name="Larissa Santana"
						time="16:00 - 17:00 (1 hora)"
						type="local"
						photo={LarissaPhoto}
					/>
				</div>
			</div>
		</section>
	);
}

export default QueriesList;
