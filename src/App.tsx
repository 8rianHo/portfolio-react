import React from "react";
import {
  Container,
  Grid,
  Image,
  Menu,
  Item,
  Accordion,
  Button
} from "semantic-ui-react";
import styled from "styled-components";
import profileImg from "./images/brian.jpg";

const App: React.FC = () => (
  <>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>brian</Menu.Item>
        {/* <Menu.Item as="a">about</Menu.Item>
        <Menu.Item as="a">portfolio</Menu.Item> */}
      </Container>
    </Menu>

    <StyledContainer text>
      <>
        <About />
      </>
      <>
        <Portfolio />
      </>
    </StyledContainer>
  </>
);

const StyledContainer = styled(Container)`
  &&&& {
    margin-top: 7em;
    margin-bottom: 5em;
    max-width: 80% !important;

    @media (max-width: 48em) {
      margin-bottom: 0;
      max-width: 100% !important;
    }
  }
`;

const StyledGridColumn = styled(Grid.Column)`
  &&&&&& {
    text-align: -webkit-center;
  }
`;

const StyledProfileImage = styled(Image)`
  &&& {
    @media (max-width: 48em) {
      width: 200px;
    }
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  :hover {
    text-decoration: none;
    color: inherit;
  }
`;

const About: React.FC = () => {
  return (
    <Grid columns={1} divided>
      <Grid.Row>
        <StyledGridColumn>
          <StyledProfileImage src={profileImg} size="medium" circular />
        </StyledGridColumn>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header>Brian Ho</Item.Header>
                <Item.Meta>Front End Developer | London</Item.Meta>
                <Item.Description>
                  Brian's career initially started with a three year bachelor's
                  degree in Biomedical Sciences. After a year out of travelling
                  and coding in his spare time, he completed a Masters in
                  Computer Science and has been confidently building his skills
                  and experience within the tech industry.
                </Item.Description>
                <Item.Description>
                  Brian has commerical experience in web scraping, product
                  marketing/affiliate feeds, and single-page applications from
                  his first developer role. Currently, he is learning his trade
                  at a global consultancy working on large industry scale
                  applications in Retail, Pharmacy and Finance sectors.
                </Item.Description>
                <Item.Description>
                  Comfortable with React, TypeScript, Redux and GraphQL, Brian
                  is in the process of transitioning to full stack by actively
                  working with NodeJS, Express and a host of AWS services.
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

const Portfolio: React.FC = () => {
  const otherPanels = [
    {
      key: "other-panel-a",
      title: "Blockchain Demo",
      content: {
        content: (
          <Item.Group>
            <Item>
              {/* <Item.Image size="tiny" src={backgroundImg} /> */}

              <Item.Content>
                <Item.Description>
                  A basic demonstration on how the blockchain works. Creation of
                  a genesis block is followed by multiple blocks, linked
                  together via their unique hashes.
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        )
      }
    }
  ];
  const mobilePanels = [
    {
      key: "mobile-panel-a",
      title: "OurBucket",
      content: {
        content: (
          <Item.Group>
            <Item>
              {/* <Item.Image size="tiny" src={backgroundImg} /> */}

              <Item.Content>
                <Item.Description>
                  A proof of concept for a shared to-do list app idea. The idea
                  was to have a community of friends with shared "bucket lists"
                  they would try to complete together. You could be in a
                  relationship bucket but also multiple friend buckets, and earn
                  points on each activity completed. My first experience with
                  Swift, Xcode, Firebase and Sketch.
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        )
      }
    },
    {
      key: "mobile-panel-b",
      title: "Pokèmon Rock, Paper, Scissors",
      content: {
        content: (
          <Item.Group>
            <Item>
              {/* <Item.Image size="tiny" src={backgroundImg} /> */}

              <Item.Content>
                <Item.Description>
                  A challenge I set myself: To upload a game to the App Store. I
                  decided on Rock PaperScissors based on the classic pokemon
                  battle theme. This was coded completely in Swift 3 using
                  Xcode. I learnt about the pros and cons of uploading to the
                  App Store (*cough trademark strikes cough*). I think it peaked
                  at ten downloads by friends and family so it was a win-win all
                  around.
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        )
      }
    },
    {
      key: "mobile-panel-c",
      title: "iPhone Calculator",
      content: {
        content: (
          <Item.Group>
            <Item>
              {/* <Item.Image size="tiny" src={backgroundImg} /> */}

              <Item.Content>
                <Item.Description>
                  Taught myself the basics of Swift and decided to clone the
                  iPhone calculator as a challenge. The logic of a basic
                  calculator was coded in Swift but most of the time was spent
                  on Xcode UI views trying to replicate the default calculator
                  as closely as possible.
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        )
      }
    }
  ];

  const webPanels = [
    {
      key: "web-panel-a",
      title: "Portfolio",
      content: {
        content: (
          <Item.Group>
            <Item>
              {/* <Item.Image size="tiny" src={backgroundImg} /> */}

              <Item.Content>
                <Item.Description>
                  A university course module organiser, with the purpose of
                  matching real world clients with uni students to create a
                  mobile application. Client allocation and monitoring of the
                  course over twelve weeks was originally managed off of
                  spreadsheets / google docs. I created a web application for
                  all users of the module as a new central hub for information.
                  The module organiser can allocate students to clients.
                  Teaching assistants can record group progress and students can
                  see their marks. Front end is predominantly JavaScript /
                  jQuery / AJAX. The visuals provided by bootstrap. Backend is
                  PHP connected to a MySQL database.
                  <StyledButtonDiv>
                    <Button color="teal">
                      <StyledLink
                        href="https://8rianho.github.io/portfolio/"
                        target="_blank"
                      >
                        View
                      </StyledLink>
                    </Button>
                  </StyledButtonDiv>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        )
      }
    },
    {
      key: "web-panel-b",
      title: "Youtube.min",
      content: {
        content: (
          <Item.Group>
            <Item>
              {/* <Item.Image size="tiny" src={backgroundImg} /> */}

              <Item.Content>
                <Item.Description>
                  A minimalist's Youtube. Search for a video or channel, select
                  and then watch. No video autoplay, recommended videos,
                  comments or statistics. Just watch the video(s) and get on
                  with your day.
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        )
      }
    },
    {
      key: "web-panel-c",
      title: "Photo Face Detector",
      content: {
        content: (
          <Item.Group>
            <Item>
              {/* <Item.Image size="tiny" src={backgroundImg} /> */}

              <Item.Content>
                <Item.Description>
                  A login system and SPA to upload photos and recognise faces
                  within them using a smart public API called Clarafai. The
                  login and number of photos uploaded to the page is recorded
                  and stored in a PostgreSQL database. Provided brief
                  introduction to deploying on Heroku too.
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        )
      }
    },
    {
      key: "web-panel-d",
      title: "UCL Industry Exchange Network",
      content: {
        content: (
          <Item.Group>
            <Item>
              {/* <Item.Image size="tiny" src={backgroundImg} /> */}

              <Item.Content>
                <Item.Description>
                  A university course module organiser, with the purpose of
                  matching real world clients with uni students to create a
                  mobile application. Client allocation and monitoring of the
                  course over twelve weeks was originally managed off of
                  spreadsheets / google docs. I created a web application for
                  all users of the module as a new central hub for information.
                  The module organiser can allocate students to clients.
                  Teaching assistants can record group progress and students can
                  see their marks. Front end is predominantly JavaScript /
                  jQuery / AJAX. The visuals provided by bootstrap. Backend is
                  PHP connected to a MySQL database.
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        )
      }
    }
  ];

  const topicPanels = [
    {
      key: "web-panel",
      title: {
        content: " Web",
        icon: "desktop"
      },
      content: {
        content: (
          <div>
            <StyledAccordion.Accordion
              panels={webPanels}
            ></StyledAccordion.Accordion>
          </div>
        )
      }
    },
    {
      key: "mobile-panel",
      title: {
        content: " Mobile",
        icon: "mobile alternate"
      },
      content: {
        content: (
          <div>
            <StyledAccordion.Accordion
              panels={mobilePanels}
            ></StyledAccordion.Accordion>
          </div>
        )
      }
    },
    {
      key: "other-panel",
      title: {
        content: " Misc",
        icon: "question circle"
      },
      content: {
        content: (
          <div>
            <StyledAccordion.Accordion
              panels={otherPanels}
            ></StyledAccordion.Accordion>
          </div>
        )
      }
    }
  ];

  return <StyledAccordion defaultActiveIndex={0} panels={topicPanels} styled />;
};

const StyledAccordion = styled(Accordion)`
  &&& {
    border-radius: 0;
    width: 100%;
    margin-top: 5rem;
    @media (max-width: 48em) {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

const StyledButtonDiv = styled.div`
  text-align: right;
  margin-top: 1em;
`;

export default App;
