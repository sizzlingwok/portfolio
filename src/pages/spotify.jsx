import Footer from "../components/Footer"
import ProjectHeader from "../components/ProjectHeader";
import ImageHeader from "../components/ImageHeader";
import VideoPreview from "../components/VideoPreview";
import BodyTextSplit from "../components/BodyTextSplit"
import ArchImages from "../components/ArcImages";
import EndingNav from "../components/EndingNav";
import { ExpandDivider } from "../components/Animations";
import { Helmet } from 'react-helmet-async';
function Spotify() {
  ExpandDivider();
  
  return (
    <main className="main">
      <Helmet>
        <title>Spotify Party | Andy Duong</title>
        <meta
          name="description"
          content="Enhancing the group listening experience for an immersive music exploration"
        />
      </Helmet>
      <ProjectHeader
        title="Spotify Party"
        description1="Spotify Party strives to enhance the listening experience for users who enjoy music with others. While creating group sessions already exists on Spotify, it currently falls short in terms of functionality and could greatly benefit from improvements. Spotify Party will not only strengthen its current group session capabilities, but will also introduce captivating new features to foster an immersive and enjoyable journey of music exploration."
        description2="I redesigned the elements in the current Spotify UI in Figma on both the mobile and desktop version of the app. I then implemented my design ideas and created functioning prototypes."
        role="UI/UX Designer"
        tools="Figma, Google Forms, Optimal Workshop"
        timeline="8 weeks (June - July 2023)"
        videoSrc="https://ik.imagekit.io/hyikkegqv/spotifysessionplaylist.mp4"
        prototypeLink="https://www.figma.com/proto/5ciCRD3R2H8jz0fRfKJPJD/Spotify-Party-Landing-Page?page-id=0%3A1&type=design&node-id=1-2&viewport=1334%2C874%2C0.71&t=MT5QwGlDdOlSKv5J-1&scaling=scale-down"
      />
      <article id="project" className="project-content-wrapper">
        <article className="project-content">
          <ImageHeader
            image1={{
              src: "images/spotify/preview1.webp",
            }}
            image2={{
              src: "images/spotify/preview2.webp",
            }}
            image3={{
              src: "images/spotify/preview3.webp",
            }}
            image4={{
              src: "images/spotify/preview4.webp",
            }}
            padding="yes"
          />
          <hr className="divider" />
          <BodyTextSplit
            text1={
              <>
                <b>Final Solution</b> - Evolving the group listening experience
                by introducing improved functionality and features for all
                Spotify user
              </>
            }
            text2="Below are some of the distinct features that have been integrated into Spotify Party"
            comboClass="splitword"
          />
          <section className="preview-wrapper">
            <VideoPreview
              videoSrc="https://ik.imagekit.io/hyikkegqv/spotifyinvitefriend.mp4"
              title="Invite friends directly from the Friend Activity list"
              description="Easily invite friends directly within the app, eliminating
              the need for external invitations through links or social
              media."
            />
            <VideoPreview
              videoSrc="https://ik.imagekit.io/hyikkegqv/spotifygroupsetting.mp4"
              title="Moderate your group sessions"
              description="Manage your sessions with customizable group settings.
              Grant admin privileges to others or enable/disable
              specific options, all geared towards providing a seamless
              and enjoyable session."
            />
            <VideoPreview
              videoSrc="https://ik.imagekit.io/hyikkegqv/spotifysessionplaylist.mp4"
              title="Automatically receive curated group session playlists"
              description="Relive the experience of previous group sessions by
              receiving curated playlists of tracks played. Replay any
              queued song whose title you may have missed before or
              share the playlists with others."
            />
            <hr className="divider" />
          </section>
          <BodyTextSplit
            text1={
              <>
                <b>User Research</b> - Evaluating the user flow for initiating a
                Spotify group session
              </>
            }
            text2={
              <>
                In the initial phase, I assessed users' ability to navigate to
                the group session menu through a first-click test with{" "}
                <b>7 participants</b> on the Spotify mobile app. While I planned
                to extend the test to the desktop platform, the feature was
                exclusive to mobile. Despite this limitation, the early findings
                provided crucial insights for subsequent analyses.
              </>
            }
          />
          <figure className="preview-container img">
            <img
              className="project-image"
              src="images/spotify/firstclicktest.webp"
              alt=""
              draggable="false"
              style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
            />
          </figure>
          <BodyTextSplit
            text1="A mere 28% of users were able to successfully locate the
            appropriate menu. This compelling insight bly suggests that the
            menu's placement may be unintuitive, potentially leading users
            to overlook its presence."
            text2="Users tend to overlook the group session feature on the platform
            due to its unintuitive placement and current lack of features it
            current offers."
            comboClass="no-padding"
          />
          <BodyTextSplit
            text1={
              <>
                I conducted a second user survey with <b>12 participants</b> who
                rely on Spotify as their main music streaming platform to gain a
                deeper understanding of their preferences.
              </>
            }
            text2="Outlined below are the comprehensive results derived from the
            conducted survey."
          />
          <section className="preview-wrapepr">
            <figure className="image-row vert">
              <img
                className="project-image"
                src="images/spotify/surveyresults1.webp"
                alt=""
                draggable="false"
                style={{ maxWidth: "45%", paddingTop: "4rem" }}
              />
              <figcaption className="content-details">
                <figcaption className="text-container">
                  <figcaption className="text-description semibold">
                    But...
                  </figcaption>
                </figcaption>
              </figcaption>
            </figure>
            <section className="image-row">
              <figure className="content-container">
                <img
                  className="project-image"
                  src="images/spotify/surveyresults2.webp"
                  alt=""
                  draggable="false"
                />
              </figure>
              <figure className="content-container">
                <img
                  className="project-image"
                  src="images/spotify/surveyresults3.webp"
                  alt=""
                  draggable="false"
                />
              </figure>
            </section>
          </section>
          <BodyTextSplit
            text1={
              <>
                <b>A word from our participants</b>
                <br />
                "Difficult to invite/join friends. Didn’t know about it until
                someone else showed me. There also lies the potential for
                queuing songs that others don't enjoy."
              </>
            }
            text2={
              <>
                <br />
                "Anyone can play music with no restriction, so one person can
                skip another's song and play what they want. Can't see who
                played what song"
              </>
            }
          />
          <BodyTextSplit
            text1={
              <>
                <b>Significant takeaways for improvement:</b>
                <br />
                &bull; Enhancing user onboarding and communication to provide a
                more intuitive experience for those wishing to invite and join
                with friends.
                <br />
                &bull; Addressing potential conflicts stemming from track
                skipping by any participant, necessitating the implementation of
                measures to curb disruptive behavior by malicious users.
              </>
            }
            text2={
              <>
                <br />
                Identifying these key user expereince pain points leads us to
                address the central problem statement
              </>
            }
          />
          <hr className="divider" />
          <BodyTextSplit
            text1={
              <>
                <b>Problem Statement</b> - How can we revitalize group listening
                for an improved experience, addressing challenges and enhancing
                accessibility effectively?
              </>
            }
          />
          <BodyTextSplit
            text1={
              <>
                <b>Insights:</b>
                <br />
                &bull; Group session feature is hidden
                <br />
                The current placement of initiating a group session feature is
                hidden under the device lists which users can overlook
              </>
            }
            text2={
              <>
                <br />
                &bull; Feature does not exist on desktop platform
                <br />
                The lack of group session support on desktop Spotify puts
                desktop users at a disadvantage
              </>
            }
            text3={
              <>
                <br />
                &bull; Lack of integration to friend activity
                <br />
                Inviting friends to a group session lacks a direct in-app
                feature, requiring users to resort to sending invite links via
                text or social media
              </>
            }
          />
          <hr className="divider" />
          <BodyTextSplit
            text1={
              <>
                <b>User Persona</b> - Introducing Michelle & Edward
              </>
            }
          />
          <BodyTextSplit
            text1={
              <>
                <b>Michelle</b>
                <br />
                Michelle is an party-goer who takes immense pleasure in curating
                the perfect playlist for the parties she hosts. Prior to each
                event, she dedicates herself to curate a selection of tracks,
                ensuring an unforgettable experience for her guests. However,
                her quest for new and exciting music is a constant endeavor. In
                her desire to enhance the party experience, Michelle dreams of a
                unique feature that would enable her guests to queue up their
                favorite tracks with a voting system in place.
              </>
            }
            text2={
              <>
                <b>Edward</b>
                <br />
                Edward is an avid music listener who loves to play songs with
                his friends. He recently found out about the group session
                feature Spotify implemented. He likes the idea of such feature,
                but finds it tedious to constantly invite his friends through
                links to listen along with him. He wishes there was a better
                invitation system in place so he can continue to invite the same
                friends to his sessions.
              </>
            }
          />
          <hr className="divider" />
          <BodyTextSplit
            text1={
              <>
                <b>Competitive Analysis</b> - I conducted a comprehensive
                analysis of Spotify's direct competitors, assessing their user
                interface and implementation of listening group sessions with
                others.
              </>
            }
            text2="This endeavor allowed me to delve deeper into their approach to
            user experience as well as explore other related
            functionalities, uncovering valuable insights in the process."
          />
          <section className="image-row top">
            <figure className="content-container">
              <img
                className="project-image"
                src="images/spotify/applemusic.webp"
                alt=""
                draggable="false"
              />
            </figure>
            <figure className="content-container">
              <img
                className="project-image"
                src="images/spotify/amazonmusic.webp"
                alt=""
                draggable="false"
              />
            </figure>
            <figure className="content-container">
              <img
                className="project-image"
                src="images/spotify/youtubemusic.webp"
                alt=""
                draggable="false"
              />
            </figure>
          </section>
          <BodyTextSplit
            text1={
              <>
                <b>Insights:</b>
                <br />
                &bull; Cross-platform compatibility
                <br />
                These platforms allow the user to play media through multiple
                devices including phones, tablets, computers and TVs.
              </>
            }
            text2={
              <>
                <br />
                &bull; Similar user interface
                <br />
                All three platform provide a similar user experience and
                interface to Spotify.
              </>
            }
            text3={
              <>
                <br />
                &bull; Playlist sharing
                <br />
                Users are able to share their playlists with others. The process
                of sharing a playlist involves sending a shareable link.
              </>
            }
          />
          <hr className="divider" />
          <BodyTextSplit
            text1={
              <>
                <b>Information Architecture</b> -
                <br />
                My primary objective in creating the user flow is to ensure
                utmost intuitiveness, eliminating any ambiguity for the users
                and guiding them seamlessly through each step.
              </>
            }
          />
          <ArchImages
            image1={{ src: "images/spotify/sitemap.webp", text: "Sitemap" }}
            image2={{
              src: "images/spotify/userflow1.webp",
              text: "User initiates a group session and invites friends",
            }}
            image3={{
              src: "images/spotify/userflow2.webp",
              text: "User is invited to a group session",
            }}
            image4={{
              src: "images/spotify/userflow3.webp",
              text: "User views curated group session playlist",
            }}
          />
          <hr className="divider" />
          <BodyTextSplit
            text1={
              <>
                <b>Usability Testing</b> - Testing the Spotify Party prototype
              </>
            }
            text2={
              <>
                I performed a second first-click test with{" "}
                <b>9 new participants</b> to evaluate user task comprehension of
                the Spotify Party prototype. The test included showcasing both
                mobile and desktop versions, focusing on participants' ability
                to initiate a group session.
              </>
            }
          />
          <figure className="image-row vert">
            <img
              className="project-image"
              src="images/spotify/surveyresults4.webp"
              alt=""
              draggable="false"
              style={{ maxWidth: "45%", paddingTop: "4rem" }}
            />
          </figure>
          <figure className="preview-container img">
            <img
              className="project-image"
              src="images/spotify/surveyresults5.webp"
              alt=""
              draggable="false"
              style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
            />
          </figure>
          <BodyTextSplit
            text1="This is a great improvement over the 28% from the initial
            first-click test."
          />
          <BodyTextSplit
            text1={
              <>
                <b>Insights:</b>
                <br />
                &bull; With a completion rate surpassing 77%, the results bly
                indicate that the Spotify Party prototype exhibits a higher
                level of intuitiveness and user-friendliness in comparison to
                Spotify's current user interface.
              </>
            }
            text2={
              <>
                <br />
                &bull; Participants were able to quickly navigate to the
                corresponding interaction with an average time taken of 26.5
                seconds
              </>
            }
          />
          <hr className="divider" />
          <BodyTextSplit
            text1={
              <>
                <b>Reflection</b> - Retrospective Insights
              </>
            }
          />
          <BodyTextSplit
            text1={
              <>
                <b>Takeaways:</b>
                <br />
                The inspiration for Spotify Party came from encountering a
                limitation with the group session feature in the Spotify app.
                This project allowed me to explore innovative design ideas while
                adhering to guidelines, deepening my understanding of app
                organization.
              </>
            }
            text2={
              <>
                <br />
                Prototyping was challenging yet rewarding, refining my skills in
                smart animate techniques and maintaining visual continuity
                across platforms. Spotify Party marked my initial venture into
                designing a responsive design for both the desktop and mobile
                platform.
              </>
            }
          />
          <BodyTextSplit
            text1={
              <>
                <b>Things I would do differently:</b>
                <br />
                In hindsight, I devoted considerable time to manual tasks like
                copying album cover arts and track information, which prolonged
                the design phase.
              </>
            }
            text2={
              <>
                <br />
                Reflecting on this, I realize I could have streamlined the
                process by reusing assets and focusing more on functional
                aspects to expedite project completion.
              </>
            }
          />
          <EndingNav
            prevLink="/mechmarket"
            nextLink="/sorette"
            prevText="mechmarket"
            nextText="sorette"
          />
          <Footer />
        </article>
      </article>
    </main>
  );
}

export default Spotify;
 