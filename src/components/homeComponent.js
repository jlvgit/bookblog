import React from 'react';
import { Container, Row } from 'reactstrap';

// Components
import Title from './titleComponent';
import FeaturedBooks from './featuredBooksComponent';
import CategoryLinks from './categoryLinksComponent';
import SectionComponent from './sectionComponent';
import BottomSection from './bottomSection';

// Data
import { FEATURED } from '../shared/featuredBooks';
import { SECTIONS } from '../shared/featuredSections';

function Home() {
	return (
		<Container fluid={true}>
			<Title />

			<FeaturedBooks featured={FEATURED} />

			<Container fluid={true}>
				<Row className="spacer" />
			</Container>

			<CategoryLinks />

			<SectionComponent section={SECTIONS[0]} />

			<Container fluid={true}>
				<a href="#">
					<h2 className="article-heading abril m-5">
						We got awarded an award. Help us find a place to put it, we don't have any space.
					</h2>
				</a>
			</Container>

			<SectionComponent section={SECTIONS[1]} reversed={true} />

			<BottomSection />
		</Container>
	);
}

export default Home;
