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
    <main className="main">
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
      <article id="project" className="project-content-wrapper">
        <article className="project-content">
          <ImageHeader
            image1={{
              src: "images/sorette/preview1.webp",
            }}
            image2={{
              src: "images/sorette/preview2.webp",
            }}
            image3={{
              src: "images/sorette/preview3.webp",
            }}
            image4={{
              src: "images/sorette/preview4.webp",
            }}
          />
          <hr className="divider" />
          <BodyTextSplit
            text1={
              <>
                <b>Final Solution</b> - Creating an innovative app equipped with
                specialized collaboration tools to bridge the gaps in features
                found in current cloud-sharing platforms
              </>
            }
            text2="Below are some of the main features implemented into the sorette platform"
            comboClass="splitword"
          />
          <section className="preview-wrapper">
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
          </section>
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
                "I find myself using online community chat rooms like Discord to
                send beats because I can quickly communicate and be in a
                community with others. Sending beats via email can sometimes
                feel like a one way door and the process is slower."
              </>
            }
            text2={
              <>
                <br />
                "Collaborating with others can often be a headache because I
                have to keep a history or bookmark of shared folder links if I
                want to go back and find something I want to work with."
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
          <div className="image-row">
            <img
              className="project-image"
              src="images/sorette/surveyresults1.webp"
              alt=""
              draggable="false"
              style={{ maxWidth: "45%", paddingTop: "4rem" }}
            />
          </div>
          <BodyTextSplit
            text1={
              <>
                <b>Significant takeaways for improvement:</b>
                <br />
                &bull; Implementing features that enhance the user experience
                when file sharing or collaborating with others.
                <br />
                &bull; Create a space where users can share, comment, and stream
                music files with ease.
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
                <b>Problem Statement</b> - How can our platform elevate music
                collaboration and address the absence of specialized features
                found in existing cloud-sharing platforms?
              </>
            }
          />
          <BodyTextSplit
            text1={
              <>
                <b>Insights:</b>
                <br />
                &bull; Files can be overlooked
                <br />
                The surge in shared music files increases message volume, posing
                challenges in managing multiple files and potentially causing
                missed opportunities or collaboration delays.
              </>
            }
            text2={
              <>
                <br />
                &bull; Email challenges
                <br />
                Email's perceived sluggishness hampers creative flow and
                effective collaboration for sharing music files.
              </>
            }
            text3={
              <>
                <br />
                &bull; Inefficient system for retrieving files
                <br />
                Keeping track of shared folder links can be tedious and
                forgettable.
              </>
            }
          />
          <hr className="divider" />
          <BodyTextSplit
            text1={
              <>
                <b>User Persona</b> - Introducing Bryson & Taylor
              </>
            }
          />
          <BodyTextSplit
            text1={
              <>
                <b>Bryson</b>
                <br />
                Bryson is a talented R&B artist who finds inspiration in
                exploring different producers' beats to kickstart his
                songwriting. His music revolves around slow tempo beats,
                creating a mesmerizing and soulful vibe. However, he's
                frustrated by the lack of an option to filter files by BPM and
                genre, making it challenging to find the right fit for his
                artistic vision.
              </>
            }
            text2={
              <>
                <b>Taylor</b>
                <br />
                Taylor is a hip-hop producer collaborating with fellow producers
                and artists. She encounters obstacles due to slow loading times
                when trying to stream shared files sent to her. These issues
                disrupt her workflow, creating challenges in maintaining a
                continuous and seamless work experience.
              </>
            }
          />
          <hr className="divider" />
          <BodyTextSplit
            text1={
              <>
                <b>Competitive Analysis</b> - I performed a thorough competitive
                analysis to gain comprehensive insights into the features and
                user experiences offered by popular cloud platforms like Google
                Drive, Dropbox, and OneDrive.
              </>
            }
            text2="This step is essential for
            informed decision-making and ensuring that sorette distinguishes
            itself in the market."
          />
          <div className="image-row top">
            <div className="content-container">
              <img
                className="project-image"
                src="images/sorette/googledrive.webp"
                alt=""
                draggable="false"
              />
            </div>
            <div className="content-container">
              <img
                className="project-image"
                src="images/sorette/dropbox.webp"
                alt=""
                draggable="false"
              />
            </div>
            <div className="content-container">
              <img
                className="project-image"
                src="images/sorette/onedrive.webp"
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
                &bull; Similar file organization
                <br />
                These platforms provide a familiar file and folder structure,
                allowing users to create and organize their files in a
                hierarchical manner.
              </>
            }
            text2={
              <>
                <br />
                &bull; Inuitive interface
                <br />
                Each platform offers a user-friendly and intuitive interface,
                making it easy for users to navigate and manage their files.
              </>
            }
            text3={
              <>
                <br />
                &bull; Sharing privileges
                <br />
                Users are able to share entire folders allowing multiple users
                to access and view files.
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
            image1={{ src: "images/sorette/sitemap.webp", text: "Sitemap" }}
            image2={{
              src: "images/sorette/userflow1.webp",
              text: "User initiates a group session and invites friends",
            }}
            image3={{
              src: "images/sorette/userflow2.webp",
              text: "User is invited to a group session",
            }}
            image4={{
              src: "images/sorette/userflow3.webp",
              text: "User views curated group session playlist",
            }}
          />
          <hr className="divider" />
          <BodyTextSplit
            text1={
              <>
                <b>Wireframing</b> - Low fidelity prototypes
              </>
            }
            text2={
              <>
                This was the initial design iteration of sorette when I first
                worked on it. It definitely has come a long way since!
              </>
            }
            comboClass="paddingbot"
          />
          <ImageHeader
            image1={{
              src: "images/sorette/wireframe1.webp",
            }}
            image2={{
              src: "images/sorette/wireframe2.webp",
            }}
            image3={{
              src: "images/sorette/wireframe3.webp",
            }}
            image4={{
              src: "images/sorette/wireframe4.webp",
            }}
          />
          <hr className="divider" />
          <BodyTextSplit
            text1={
              <>
                <b>Visual Design</b> - Creating the mood
              </>
            }
            text2={
              <>
                This moodboard captures alluring curves, intriguing light, and
                shadow play, inspiring sorette's contemporary and pure design
                aesthetic.
              </>
            }
            comboClass="paddingbot"
          />
          <div className="image-row">
            <img
              className="project-image"
              src="images/sorette/moodboard.webp"
              alt=""
              draggable="false"
            />
          </div>
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
                sorette represents the beginning of my venture into crafting
                desktop web designs. It provided a canvas for
                channeling my passion towards addressing real-world challenges
                and strategically prioritizing features to deliver significant
                value to users.
              </>
            }
            text2={
              <>
                <br />
                Implementing various prototyping features fortified my
                proficiency in utilizing Figma's capabilities. I also learned a lot from In summary, I
                found immense joy in designing sorette, and I sincerely hope
                that you thoroughly enjoy exploring its prototype!
              </>
            }
          />
          <BodyTextSplit
            text1={
              <>
                <b>Things I would do differently:</b>
                <br />
                Looking back, one thing I would do differently is improve my
                time management. Juggling both sorette and mechmarket
                simultaneously was an exhilarating experience.
              </>
            }
            text2={
              <>
                <br />Allocating specific time blocks for each
                project would have allowed me to better balance my efforts and
                ensure more focused progress on both fronts.
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
        </article>
      </article>
    </main>
  );
}

export default Sorette;
 