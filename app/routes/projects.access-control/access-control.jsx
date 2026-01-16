import { Footer } from '~/components/footer';
import {
    ProjectBackground,
    ProjectContainer,
    ProjectHeader,
    ProjectSection,
    ProjectSectionContent,
    ProjectSectionHeading,
    ProjectSectionText,
} from '~/layouts/project';
import { Model, deviceModels } from '~/components/model';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import background from '~/assets/view-project-placeholder.png';
import backgroundPlaceholder from '~/assets/access-control-bg-placeholder.jpg';
import viewProjectPlaceholder from '~/assets/view-project-placeholder.png';
import styles from './access-control.module.css';

const title = 'Access Control Device';
const description =
    'Built an advanced hardware-based access control system using RP2040 microcontrollers and RFID technology.';
const roles = ['RP2040', 'RFID', 'C++', 'IoT', 'Embedded Systems'];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const AccessControl = () => {
    return (
        <Fragment>
            <ProjectContainer className="access-control">
                <ProjectBackground
                    src={background}
                    srcSet={`${background} 1024w`}
                    width={1024}
                    height={1024}
                    placeholder={backgroundPlaceholder}
                    opacity={0.3}
                />
                <ProjectHeader
                    title={title}
                    description={description}
                    roles={roles}
                />
                <ProjectSection padding="top">
                    <ProjectSectionContent>
                        <ProjectSectionHeading>Project Overview</ProjectSectionHeading>
                        <ProjectSectionText>
                            This hardware project involved designing a secure entry system controlled by a laptop
                            interfaced with multiple microcontrollers. I utilized an RP2040 (Raspberry Pi Silicon)
                            to coordinate high-speed communication between various peripherals.
                        </ProjectSectionText>
                        <ProjectSectionText>
                            The system features an RFID reader for credential verification, which triggers a high-security
                            solenoid lock mechanism upon successful authentication. I also implemented a diagnostic
                            feedback system with LEDs flashing at one-second intervals to indicate active system status.
                        </ProjectSectionText>
                        <ProjectSectionText>
                            <strong>Technologies Used:</strong> RP2040, C++, RFID, Solenoid Actuators, IoT.
                        </ProjectSectionText>
                        <ProjectSectionText>
                            <strong>Key Learnings:</strong> Hardware-software interfacing, real-time diagnostic systems,
                            microcontroller programming, and electronic circuit design.
                        </ProjectSectionText>
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectSectionHeading>Hardware Interface</ProjectSectionHeading>
                        <ProjectSectionText>
                            The system is monitored and managed via a connected laptop, providing a real-time interface
                            for access logging and administrative controls, interfaced with an RP2040 microcontroller.
                        </ProjectSectionText>
                        <div className={styles.hardwareModels}>
                            <Model
                                className={styles.model}
                                alt="Access Control hardware monitoring interface"
                                cameraPosition={{ x: 0, y: 0, z: 8 }}
                                showDelay={300}
                                models={[
                                    {
                                        ...deviceModels.laptop,
                                        position: { x: -1.2, y: 0, z: 0 },
                                        texture: {
                                            srcSet: `${viewProjectPlaceholder} 1024w`,
                                            placeholder: backgroundPlaceholder,
                                        },
                                    },
                                    {
                                        ...deviceModels.microcontroller,
                                        position: { x: 1.5, y: -0.6, z: 0.3 },
                                    },
                                ]}
                            />
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};
