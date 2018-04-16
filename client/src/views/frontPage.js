import React, { Component } from "react";
import {Link} from "react-router-dom";
import {Menu, Button, Icon, Grid, Header, Segment, Image} from "semantic-ui-react";

export class SignInPage extends Component {

	render () {
		return (
			<div>

				<Menu basic size="massive" color="blue">
					<Menu.Item>
						<Button basic color="orange" as={Link} name="signin" to="signin">Sign In</Button> 
					</Menu.Item>

					<Menu.Item>
						<Button basic color="orange" as={Link} name="signup" to="signup">Sign Up</Button>
					</Menu.Item>

					<Menu.Menu position="right">
						<Button basic color="red">
							<Button.Content visible> 
								<Icon name="help circle" />
							</Button.Content>
						</Button>
					</Menu.Menu>
				</Menu>

                <Header size="huge" attatched="top" textAlign="center"
				content="About Us" color="grey"></Header>                 

<Segment attatched padded="horizontally"> Nobody likes having a dirty car. It's the truth. <br></br>
Let's face it, though, getting your car washed can sometimes feel like a
chore. "How do I have time to get my car washed when all my favorite shows are
coming back on? And I have to make dinner??" That's where we come in.
</Segment>

	
	<Grid columns={3} stackable>
		<Grid.Row>
			<Grid.Column width={6}>
				<Image rounded size="huge" src="../images/dirty_car_gorilla.png" />
			</Grid.Column>
			<Grid.Column width={4}> 
				<Segment color="purple" inverted secondary circular>Don't be like these two. Don't get your car needlessly vandalized in the name of street art. Don't. Be. A. Target. Get your car cleaned today!</Segment>
			</Grid.Column>
			<Grid.Column width={6}>
				<Image rounded size="huge" src="../images/dirty_mercedes.jpg" />	
			</Grid.Column>
		</Grid.Row>
	</Grid>

</div>
		)
	}
}

export default SignInPage;