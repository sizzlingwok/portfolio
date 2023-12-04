import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

export const SlideUp = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.slideup', { opacity: 0 });

      gsap.fromTo(
        '.slideup',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    });

    return () => ctx.revert();
  }, []);
};

export const PreviewSlideUp = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".previewslideup").forEach((element) => {
        gsap.set(element, { opacity: 0 });
        const animateIn = () => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
          );
        };

        ScrollTrigger.create({
          trigger: element,
          start: "top 35%",
          onEnter: animateIn,
          scrub: true,
          once: true,
        });
      });
    });

    return () => ctx.revert();
  }, []);
};

export const ExpandDivider = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const animateIn = (divider) => {
        return gsap.fromTo(
          divider,
          { width: "0%", transformOrigin: "left", opacity: 0 },
          {
            width: "100%",
            opacity: 1,
            duration: 2,
            ease: "power3.out",
            overwrite: true,
          }
        );
      };

      gsap.utils.toArray('.divider').forEach((divider) => {
        let animation;
        gsap.set(divider, { opacity: 0 });
        ScrollTrigger.create({
          trigger: divider,
          start: "-150vh bottom",
          onEnter: () => {
            if (!animation || !animation.isActive()) {
              animation = animateIn(divider);
            }
          },
          scrub: true,
          markers: true,
        });
      });
    });

    return () => ctx.revert();
  }, []);
};

export const SplitWordHeader = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray(".splitwordheader");

      elements.forEach((element) => {
        const staggerValue = element.classList.contains("long") ? 0.04 : 0.02;
        const textsplit = new SplitType(element, { types: "words" });

        gsap.fromTo(
          textsplit.words,
          {
            x: 10,
            rotationX: 45,
            opacity: 0,
          },
          {
            x: 0,
            rotationX: 0,
            opacity: 1,
            duration: 2,
            stagger: staggerValue,
            ease: "power3.out",
          }
        );
      });
      return () => ctx.revert();
    });
  }, []);
};

export const SplitWord = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.splitword');
      
      elements.forEach((element) => {
        let animation;
        const staggerValue = element.classList.contains('long') ? 0.04 : 0.02;
        const textsplit = new SplitType(element, { types: 'words' });

        ScrollTrigger.create({
          trigger: element,
          start: 'top bottom',
          onEnter: () => {
            if (!animation || !animation.isActive()) {
              animation = gsap.fromTo(
                textsplit.words,
                {
                  x: -10,
                  rotationX: 45,
                  opacity: 0,
                },
                {
                  x: 0,
                  rotationX: 0,
                  opacity: 1,
                  duration: 2,
                  stagger: staggerValue,
                  ease: 'power3.out',
                  overwrite: true,
                }
              );
            }
          },
          scrub: true,
          markers: true,
        });
      });
      
      return () => ctx.revert();
    });
  }, []);
};

export const SplitLetter = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.splitletter');
      elements.forEach((element) => {
        const staggerValue = element.classList.contains('short') ? 0.03 : 0.05;
        const textsplit = new SplitType(element, { types: 'chars' });
        const letters = textsplit.chars;
        gsap.fromTo(
          letters,
          { x: 10, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 2,
            stagger: staggerValue,
            ease: 'power3.out',
          }
        );
      });
      ScrollTrigger.refresh();
      return () => ctx.revert();
    });
  }, []);
};

export const EndingNavAnimation = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      let animation;

      const animateIn = () => {
        if (animation && animation.isActive()) {
          return;
        }

        gsap.fromTo(
          ".prev-nav",
          { opacity: 0, x: 40 },
          { opacity: 1, x: 0, duration: 1, ease: "power2.out", overwrite: true }
        );

        gsap.fromTo(
          ".next-nav",
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 1, ease: "power2.out", overwrite: true }
        );
      };

      ScrollTrigger.create({
        trigger: ".prev-nav",
        start: "-150vh bottom",
        onEnter: animateIn,
        scrub: true,
      });

      ScrollTrigger.create({
        trigger: ".next-nav",
        start: "-150vh bottom",
        onEnter: animateIn,
        scrub: true,
      });
    });

    return () => ctx.revert();
  }, []);
};