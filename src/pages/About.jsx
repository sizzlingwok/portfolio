import Footer from "../components/Footer"
import ImageHeader from "../components/ImageHeader";
import { ExpandDivider, SlideUp, SplitLetter, SplitWordHeader, WorkSlideUp } from "../components/Animations";
import { Helmet } from 'react-helmet-async';
function About() {
  ExpandDivider();
  SplitLetter();
  SplitWordHeader();
  SlideUp();
  WorkSlideUp();
  return (
    <main className="main">
      <Helmet>
        <title>Andy Duong | About</title>
        <meta
          name="description"
          content="Andy Duong is an interdisciplinary designer influenced by music & art based in the Bay Area"
        />
      </Helmet>
      <section className="about-header">
        <section className="about-header-wrapper">
          <div className="about-container">
            <div className="about-wrapper">
              <div className="header-tag splitletter">ABOUT ME</div>
              <div className="about-description-wrapper">
                <p className="about-description splitwordheader">
                  Greetings! In June of 2022, I graduated from the University of
                  California, Irvine with a degree in Business Administration.
                  While contemplating my future career, I took a leap into the
                  exciting world of UX design. As a creative enthusiast with a
                  passion for photography, video production, and music creation,
                  I find immense joy in bringing art to life. My interest lies
                  in designing experiences that foster human connection and
                  leave a positive impact on society.
                </p>
                <p className="about-description splitwordheader long">
                  I am currently exploring new opportunities! If you'd like to
                  connect, feel free to contact me via email or reach out on
                  LinkedIn. Feel free to scroll down to look at other work I do!
                </p>
              </div>
              <div className="landing-direct">
                Scroll down to see my other work!
              </div>
            </div>
            <div className="about-pp slideup">
              <img src="images/about/pp.webp" alt="" draggable="false" />
            </div>
          </div>
        </section>
      </section>
      <section className="about-work-wrapper">
        <section className="about-work">
          <section className="about-work-section workslideup1">
            <div className="about-project-title">
              <div className="header-tag splitletter">MUSIC</div>
              <div className="splitletter">dear you</div>
            </div>
            <div className="embed-work">
              <div className="embed-c">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/artist/2aTcMxIOsUTt4i2KBJASrA?utm_source=generator&theme=0"
                  width="100%"
                  height="450px"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
              <div className="embed-c">
                <iframe
                  id="embedPlayer"
                  src="https://embed.music.apple.com/us/album/thank-u-single/1631766772?app=music&amp;itsct=music_box_player&amp;itscg=30200&amp;ls=1&amp;theme=dark"
                  frameBorder="0"
                  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                  allow="autoplay *; encrypted-media *; clipboard-write"
                  style={{
                    width: "100%",
                    height: "450px",
                    overflow: "hidden",
                    borderRadius: "10px",
                    transform: "translateZ(0px)",
                    animation:
                      "2s ease 0s 6 normal none running loading-indicator",
                    backgroundColor: "rgb(0, 0, 0)",
                  }}
                ></iframe>
              </div>
            </div>
          </section>
          <section className="about-work-section workslideup2">
            <div className="about-project-title">
              <div className="header-tag splitletter">BEATS</div>
              <div className="splitletter">ichiban</div>
            </div>
            <div className="embed-work">
              <div className="embed-c">
                <iframe
                  width="100%"
                  height="450px"
                  src="https://www.youtube.com/embed/rynowdhZfRQ?rel=0"
                  title='[free] summer walker x kehlani x bryson tiller type beat "karma"'
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="embed-c">
                <iframe
                  width="100%"
                  height="450px"
                  src="https://www.youtube.com/embed/WK3-o3QErws?rel=0"
                  title='[FREE] tory lanez x bryson tiller x drake type beat "affection"'
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
          <section className="about-work-section workslideup3">
            <div className="about-project-title">
              <div className="header-tag splitletter">PHOTOGRAPHY</div>
            </div>
            <ImageHeader
              image1={{
                src: "images/about/pic1.webp",
              }}
              image2={{
                src: "images/about/pic2.webp",
              }}
              image3={{
                src: "images/about/pic3.webp",
              }}
              image4={{
                src: "images/about/pic4.webp",
              }}
              padding="no"
            />
          </section>
          <section className="about-work-section workslideup4">
            <div className="about-project-title">
              <div className="header-tag splitletter">VIDEOS</div>
            </div>
            <div className="embed-work">
              <div className="embed-c">
                <iframe
                  width="100%"
                  height="450px"
                  src="https://www.youtube.com/embed/D79o2jLOiXM?rel=0"
                  title="Bay Area Barbell Open 2023 - Powerlifting Meet Recap"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="embed-c">
                <iframe
                  width="100%"
                  height="450px"
                  src="https://www.youtube.com/embed/NlSZEhXSW94?rel=0"
                  title="everything goes on - gym edit"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="embed-work">
              <div className="embed-c">
                <iframe
                  width="100%"
                  height="450px"
                  src="https://www.youtube.com/embed/jujFuyUALs4?rel=0"
                  title="SOP PL Promo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="embed-c">
                <iframe
                  width="100%"
                  height="450px"
                  src="https://www.youtube.com/embed/tAkb9H_FtyY?rel=0"
                  title="Eli Meet Recap - SoCal Shodown 2022"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
          <Footer />
        </section>
      </section>
    </main>
  );
}

export default About;
 