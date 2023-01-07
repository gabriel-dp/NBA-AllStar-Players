import { playerHeadshotUrlWebp, teamLogoUrlSvg } from '../../utils/GitHubAssets';

import {
	Card,
	DescriptionContainer,
	PlayerImageContainer,
	RoleIcon,
	TeamLogoContainer,
} from './styles';

function PlayerCard({ data, team }) {
	const playerImageUrl = playerHeadshotUrlWebp(data);
	const teamImageUrl = teamLogoUrlSvg(team);

	return (
		<Card>
			<PlayerImageContainer>
				<img
					alt={`headshot-${data.name.last}`}
					src={playerImageUrl}
				/>
				<TeamLogoContainer>
					<img
						alt={`logo-${team.abv}`}
						src={teamImageUrl}
					/>
				</TeamLogoContainer>
			</PlayerImageContainer>
			<span className="position">{data.position}</span>
			<RoleIcon game_role={data.allStar.role} />
			<DescriptionContainer>
				<span className="firstName">{data.name.first}</span>
				<span className="lastName">{data.name.last}</span>
			</DescriptionContainer>
		</Card>
	);
}

export default PlayerCard;
