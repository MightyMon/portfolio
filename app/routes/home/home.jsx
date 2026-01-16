import viewProjectPlaceholder from '~/assets/view-project-placeholder.png';
import diabeticBreathalyzerBgLarge from '~/assets/diabetic-breathalyzer-bg-large.jpg';
import diabeticBreathalyzerBgPlaceholder from '~/assets/diabetic-breathalyzer-bg-placeholder.jpg';
import diabeticBreathalyzerBg from '~/assets/diabetic-breathalyzer-bg.jpg';
import accessControlBgLarge from '~/assets/access-control-bg-large.jpg';
import accessControlBgPlaceholder from '~/assets/access-control-bg-placeholder.jpg';
import accessControlBg from '~/assets/access-control-bg.jpg';
import malwareDetectionBgLarge from '~/assets/malware-detection-bg-large.jpg';
import malwareDetectionBgPlaceholder from '~/assets/malware-detection-bg-placeholder.jpg';
import malwareDetectionBg from '~/assets/malware-detection-bg.jpg';
import malwareGenerationBgLarge from '~/assets/malware-generation-bg-large.jpg';
import malwareGenerationBgPlaceholder from '~/assets/malware-generation-bg-placeholder.jpg';
import malwareGenerationBg from '~/assets/malware-generation-bg.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';
import malwareDetectionTexture from '~/assets/malware-detection.png';
import malwareGenerationTexture from '~/assets/malware-generation.png';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, details, projectOne, projectTwo, projectThree, projectFour];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Malware detection using LLM"
        description="Built a PoC system to detect malware using sandboxed analysis, fine-tuned LLMs, and RAG."
        buttonText="View project"
        buttonLink="/projects/malware-detection"
        model={{
          type: 'laptop',
          alt: 'Malware detection system interface',
          textures: [
            {
              srcSet: `${malwareDetectionTexture} 1280w`,
              placeholder: malwareDetectionBgPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Malware generation using LLM"
        description="Created a controlled environment to study AI model behavior and safety bypass mechanisms."
        buttonText="View project"
        buttonLink="/projects/malware-generation"
        model={{
          type: 'laptop',
          alt: 'AI safety analysis dashboard',
          textures: [
            {
              srcSet: `${malwareGenerationTexture} 1280w`,
              placeholder: malwareGenerationBgPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Diabetic Breathalyzer"
        description="Developed a non-invasive device to estimate blood sugar via acetone concentration in breath."
        buttonText="View project"
        buttonLink="/projects/diabetic-breathalyzer"
        model={{
          type: 'laptop',
          alt: 'Diabetic Breathalyzer prototype',
          textures: [
            {
              srcSet: `${viewProjectPlaceholder} 1024w`,
              placeholder: diabeticBreathalyzerBgPlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Access Control Device"
        description="Created a hardware-based access control system featuring RP2040 microcontrollers, RFID authentication, and solenoid locking mechanisms."
        buttonText="View project"
        buttonLink="/projects/access-control"
        model={{
          type: 'laptop',
          alt: 'Access Control Device prototype',
          textures: [
            {
              srcSet: `${viewProjectPlaceholder} 1024w`,
              placeholder: accessControlBgPlaceholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};
