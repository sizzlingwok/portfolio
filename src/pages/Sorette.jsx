import Footer from "../components/Footer"
import ProjectHeader from "../components/ProjectHeader";
import ImageHeader from "../components/ImageHeader";
import VideoPreview from "../components/VideoPreview";
import BodyTextSplit from "../components/BodyTextSplit"
import ArchImages from "../components/ArcImages";
import EndingNav from "../components/EndingNav";
import { ExpandDivider } from "../components/Animations";

function Sorette() {
  ExpandDivider();
  return (
    <div className="main">
      <ProjectHeader
        title="sorette"
        description1="sorette is an innovative desktop cloud-sharing service designed for music professionals, offering seamless collaboration opportunities. The primary objective of sorette is to empower music professionals with a powerful cloud-sharing platform, enhancing collaboration and creativity. It provides a suite of crafted tools and customization options to streamline workflows, simplify file organization, and foster a user-friendly environment conducive to enhanced productivity."
        description2="The existing cloud-sharing platforms are deficient in providing specialized collaboration tools and features that are crucial for an enhanced user experience. I focused on designing sorette to create features that would adapt to the ease of collaborating with others."
        role="UI/UX Designer"
        tools="Figma, Google Forms, Optimal Workshop"
        timeline="13 weeks (Mar - June 2023)"
        videoSrc="https://ik.imagekit.io/hyikkegqv/sorettesearch.mp4"
        prototypeLink="https://www.figma.com/proto/gAKgOfJEIndvJweTn2Yg0l/sorette?page-id=0%3A1&type=design&node-id=1-51&viewport=-1204%2C721%2C0.42&scaling=scale-down&starting-point-node-id=1%3A51"
      />
      <div id="project" className="project-content-wrapper">
        <div className="project-content">
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
          />
          <hr className="divider" />
          <BodyTextSplit
            text1={
              <>
                <b>Final Solution</b> - Creating an innovative app equipped with
                specialized collaboration tools to bridge the gaps in
                functionality found in current cloud-sharing platforms
              </>
            }
            text2="Below are some of the main features implemented into the sorette platform"
            comboClass="splitword"
          />
          <div className="preview-wrapper">
            <VideoPreview
              videoSrc="https://ik.imagekit.io/hyikkegqv/sorettesearch.mp4"
              title="Advanced file organization and search tools"
              description="Boost productivity with robust file tagging and powerful search features. Organize and manage files effortlessly."
            />
            <VideoPreview
              videoSrc="https://ik.imagekit.io/hyikkegqv/soretteinvite.mp4"
              title="Invite collabators to projects and folders"
              description="Invite others for a dynamic collaborative experience. Stay up to date with project version history."
            />
            <VideoPreview
              videoSrc="https://ik.imagekit.io/hyikkegqv/notifcationcenter.mp4"
              title="Built-in notification center"
              description="Streamline engagements and collaborations with a centralized notification hub, enhancing organization and responsiveness."
            />
            <hr className="divider" />
          </div>
          <BodyTextSplit
            text1={
              <>
                <b>User Research</b> - Users have limited collaboration features
                resulting in inefficient workflows and difficulty in maintaining
                a centralized place for collaborators to access content
              </>
            }
            text2={
              <>
                In the preliminary stage, I conducted a comprehensive evaluation
                of user feedback pertaining to the concurrent collaboration
                system. I engaged with <b>5 participants</b> to gather their
                valuable thoughts and insights.
              </>
            }
          />
          <BodyTextSplit
            text1={
              <>
                <b>A word from our participants</b>
                <br />
                "Collaborating with others can often be a headache because I
                have to keep a history or bookmark of the shared folder links in
                case I want to go back and find something I want to work with."
              </>
            }
            text2={
              <>
                <br />
                "I find myself using online community chat rooms like Discord to
                send beats because I can quickly communicate with others and be
                in a community full of music creatives. Sending beats via email
                can sometimes feel like a one way door and the process is
                slower."
              </>
            }
            text3={
              <>
                <br />
                "Receiving emails and attachments on Discord from collaborators
                can get lost especially on top of other messages and emails."
              </>
            }
          />
          <BodyTextSplit
            text1={
              <>
                <b>Insights:</b>
                <br />
                &bull; Inefficient system for retrieving files
                <br />
                Keeping track of shared folder links can be tedious and
                forgettable. It requires manually maintaining a history or
                bookmarking the links, which can become overwhelming when
                working with multiple collaborators.
              </>
            }
            text2={
              <>
                <br />
                &bull; Email challenges
                <br />
                Email is perceived as a sluggish and one-sided communication
                channel for sharing music files. Sending beats via email can be
                restrictive, impeding swift and dynamic interactions with fellow
                music creators. This limitation has the potential to disrupt
                creative flow and hinder effective collaboration
              </>
            }
            text3={
              <>
                <br />
                &bull; Files can be overlooked
                <br />
                The influx of music files being shared contributes to the
                overall message volume which can create challenges in managing
                many files at once. This can result in missed
                opportunities or delays in effectively collaborating with others.
              </>
            }
          />
          <div className="preview-container img">
            <div className="content-container">
              <img
                className="project-image"
                src="images/spotify/firstclicktest.webp"
                alt=""
                draggable="false"
                style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
              />
            </div>
          </div>
          <BodyTextSplit
            text1="A mere 28% of users were able to successfully locate the
            appropriate menu. This compelling insight bly suggests that the
            menu's placement may be unintuitive, potentially leading users
            to overlook its presence."
            text2="Users tend to overlook the group session feature on the platform
            due to its unintuitive placement and current lack of features it
            current offers."
            comboClass="no-padding"
            stagger={0.01}
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
          <div className="preview-wrapepr">
            <div className="image-row vert">
              <img
                className="project-image"
                src="images/spotify/surveyresults1.webp"
                alt=""
                draggable="false"
                style={{ maxWidth: "45%", paddingTop: "4rem" }}
              />
              <div className="content-details">
                <div className="text-container">
                  <div className="text-description semibold">But...</div>
                </div>
              </div>
            </div>
            <div className="image-row">
              <div className="content-container">
                <img
                  className="project-image"
                  src="images/spotify/surveyresults2.webp"
                  alt=""
                  draggable="false"
                />
              </div>
              <div className="content-container">
                <img
                  className="project-image"
                  src="images/spotify/surveyresults3.webp"
                  alt=""
                  draggable="false"
                />
              </div>
            </div>
          </div>

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
            stagger={0.01}
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
          <div className="image-row top">
            <div className="content-container">
              <img
                className="project-image"
                src="images/spotify/applemusic.webp"
                alt=""
                draggable="false"
              />
            </div>
            <div className="content-container">
              <img
                className="project-image"
                src="images/spotify/amazonmusic.webp"
                alt=""
                draggable="false"
              />
            </div>
            <div className="content-container">
              <img
                className="project-image"
                src="images/spotify/youtubemusic.webp"
                alt=""
                draggable="false"
              />
            </div>
          </div>
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
              src: "images/spotify/userflow3.webp",
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
          <div className="image-row vert">
            <img
              className="project-image"
              src="images/spotify/surveyresults4.webp"
              alt=""
              draggable="false"
              style={{ maxWidth: "45%", paddingTop: "4rem" }}
            />
          </div>
          <div className="preview-container img">
            <div className="content-container">
              <img
                className="project-image"
                src="images/spotify/surveyresults5.webp"
                alt=""
                draggable="false"
                style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
              />
            </div>
          </div>
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
                integrating both desktop and mobile platforms.
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
            prevLink="/spotify-party"
            nextLink="/mechmarket"
            prevText="Spotify Party"
            nextText="mechmarket"
          />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Sorette;
 