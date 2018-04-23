import React, { Component } from "react";
import {Link} from "react-router-dom";
import {Menu, Button, Icon, Grid, Header, Segment, Image, Card, Container} from "semantic-ui-react";

export class Frontpage extends Component {

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

<Header attatched size="tiny" textAlign="center" color="purple"> Nobody likes having a dirty car. It's the truth. </Header>
<Segment attatched="bottom" color="purple">
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
				<Segment color="purple" inverted secondary circular>Don't be like these two. Don't get your car needlessly vandalized in the name of street art. <strong>Don't.</strong> <strong>Be.</strong> <strong>A.</strong> <strong>Target.</strong> Get your car cleaned today!</Segment>
			</Grid.Column>
			<Grid.Column width={6}>
				<Image rounded size="huge" src="../images/dirty_mercedes.jpg" />	
			</Grid.Column>
		</Grid.Row>
	</Grid>


	<Grid columns={1} doubling>
		<Grid.Row>
			<Grid.Column width={16}> 
				<Segment color="purple" textAlign="center">At Squeaky Clean we believe in prompt service, transparency, and simplicity.</Segment>
			</Grid.Column>
		</Grid.Row>
	</Grid>
<Container> 
	<Grid columns= {4} stackable> 
		<Grid.Row> 
			<Grid.Column width={4}> 
				<Card color="purple">
					<Card.Content>
						<Image size="small" floated="left" src="https://cdn0.iconfinder.com/data/icons/feather/96/clock-256.png" />
						<Card.Header>All About Timeliness</Card.Header>
						<Card.Meta>Your car deserves to be treated right, every time</Card.Meta>
						<Card.Description>If you say you want to get your car a bath at 2:00, we'll be there at 1:50 to prepare to wash your baby.</Card.Description>
						<Card.Content extra> 
							<Button as={Link} name="schedule app" to="schedule" content="Schedule Appointment" primary></Button> 
						</Card.Content>
					</Card.Content>
				</Card>
			</Grid.Column>

			<Grid.Column width={4}> 
				<Card color="purple">
					<Card.Content>
						<Image size="small" floated="left" src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-65-256.png" />
						<Card.Header>Keep Everything Happy</Card.Header>
						<Card.Meta>We strive for great service and happy customers</Card.Meta>
						<Card.Description>If you, your car, you grandma, anyone is happy, let us know! We love feedback.</Card.Description>
						<Card.Content extra> 
							<Button as={Link} name="contactus" to="contact" content="Contact Us" primary></Button> 
						</Card.Content>
					</Card.Content>
				</Card>
			</Grid.Column>

			<Grid.Column width={4}> 
				<Card color="purple">
					<Card.Content>
						<Image size="small" floated="left" src="https://cdn1.iconfinder.com/data/icons/VISTA/security/png/256/clean.png" />
						<Card.Header>The Cleanest Ride Around</Card.Header>
						<Card.Meta>We'll make your car the envy of the office place. "Wow, Janet says, did Harold get a raise?"</Card.Meta>
						<Card.Description>Our technicians come equipped with top of the line products, the newest gear, and a can-do helpful attitude</Card.Description>
						<Card.Content extra> 
							<Button as={Link} name="testimonials" to="contact" content="View our Testimonials" primary></Button> 
						</Card.Content>
					</Card.Content>
				</Card>
			</Grid.Column>


			<Grid.Column width={4}> 
				<Card color="purple">
					<Card.Content>
						<Image size="small" floated="left" src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/price_tag_usd-128.png" />
						<Card.Header>Money and Time Budget Friendly</Card.Header>
						<Card.Meta>"No I didn't get a raise, Harold says, not knowing Janet didn't mean to say that out loud. I just used Squeaky Clean Car Wash!"</Card.Meta>
						<Card.Description>Affordable, flexible, professional car care that leaves more time for you to be productive (and make more money...)</Card.Description>
						<Card.Content extra> 
							<Button as={Link} name="products" to="products" content="Explore our Products" primary></Button> 
						</Card.Content>
					</Card.Content>
				</Card>
			</Grid.Column>
		</Grid.Row>
	</Grid>
</Container>

</div>
		)
	}
}

export default Frontpage;