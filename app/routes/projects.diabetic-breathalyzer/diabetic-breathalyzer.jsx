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
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import background from '~/assets/view-project-placeholder.png';
import backgroundPlaceholder from '~/assets/diabetic-breathalyzer-bg-placeholder.jpg';
import viewProjectPlaceholder from '~/assets/view-project-placeholder.png';
import { Model, deviceModels } from '~/components/model';
import styles from './diabetic-breathalyzer.module.css';

const title = 'Diabetic Breathalyzer';
const description =
    'Developed a non-invasive and cost effective device to estimate blood sugar via acetone concentration in breath.';
const roles = ['Arduino', 'Python', 'IoT', 'Embedded Systems'];

export const meta = () => {
    return baseMeta({ title, description, prefix: 'Projects' });
};

export const DiabeticBreathalyzer = () => {
    return (
        <Fragment>
            <ProjectContainer className="diabetic-breathalyzer">
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
                            The Diabetic Breathalyzer is a non-invasive, cost-effective device designed to estimate blood sugar levels by measuring acetone concentration in a patient's breath.
                            This solution provides a painless alternative to traditional blood tests for diabetic monitoring.
                        </ProjectSectionText>
                        <ProjectSectionText>
                            <strong>Technologies Used:</strong> Arduino, Python, IoT.
                        </ProjectSectionText>
                        <ProjectSectionText>
                            <strong>Key Learnings:</strong> Embedded systems, sensor calibration, micro controllers, RTOS.
                        </ProjectSectionText>
                    </ProjectSectionContent>
                </ProjectSection>

                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectSectionHeading>Device Interface</ProjectSectionHeading>
                        <ProjectSectionText>
                            The device transmits data to a monitoring dashboard, allowing users to track their glucose trends over time without the need for finger-pricking.
                        </ProjectSectionText>
                        <Model
                            className={styles.model}
                            alt="Diabetic Breathalyzer monitoring dashboard"
                            cameraPosition={{ x: 0, y: 0, z: 8 }}
                            models={[
                                {
                                    ...deviceModels.laptop,
                                    position: { x: 0, y: 0, z: 0 },
                                    texture: {
                                        srcSet: `${viewProjectPlaceholder} 1024w`,
                                        placeholder: backgroundPlaceholder,
                                    },
                                },
                            ]}
                        />
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};
