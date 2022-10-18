import React from 'react'
import Footer from './Footer';
import { Container, Image, Menu, Icon } from 'semantic-ui-react'

// Fix resume redirect for production copy

const LandingPage = () => {
  return (
    <div>
        <br></br>
            <Image
                src={require("../Images/zion-prof.png")}
                circular
                centered
                alt='profile pic'
                size='large'
            />
                    <h3>Software Engineer</h3>
                    <h3>Surfer</h3>
                    <h3>Unhealthily Obsessed Watch Enthusiast</h3>
                <br></br>
                <Container>
                Equity Analyst & Entrepreneur turned full-stack software engineer. I am a recent Flatiron School graduate and am eager for opportunities to break into the tech industry. 
                Open to any full-time opportunities in software engineering.
                </Container>
                <br></br>
                <Menu.Item
                    href="https://github.com/ZionMiller"
                    position="right"
                    target="_blank"
                    style={{ display: "inlineBlock", marginRight: "25px"}}
                >
                    <Icon name="github" size="big" /> Github
                </Menu.Item>
                
                <Menu.Item
                    href="https://www.linkedin.com/in/zion-miller-b15344170/"
                    position="right"
                    target="_blank"
                    style={{ display: "inlineBlock", marginRight: "25px"}}
                >
                    <Icon name="linkedin" size="big" /> Linkedin
                </Menu.Item>
                <Menu.Item
                    href="https://mobile.twitter.com/zion_code"
                    position="right"
                    target="_blank"
                    style={{ display: "inlineBlock", marginRight: "25px"}}
                >
                    <Icon name="twitter" size="big" /> Twitter
                </Menu.Item>
                <Menu.Item
                    href="mailto:zionmillerbusiness@gmail.com"
                    position="right"
                    target="_blank"
                    style={{ display: "inlineBlock", marginRight: "25px"}}
                >
                    <Icon name="mail" size="big" /> Email
                </Menu.Item>
                <Menu.Item
                    href="/resume"
                    style={{ display: "inlineBlock", marginRight: "25px"}}
                >
                    <Icon name="sticky note" size="big" /> Resume
                </Menu.Item>
            <br></br>
            <Footer />
    </div>
  )
}

export default LandingPage