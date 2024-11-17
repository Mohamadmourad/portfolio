import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Book, Bot, Laptop, BriefcaseBusiness } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const TimeLine = () => {
    return (
        <div>
            <VerticalTimeline>
                {/* First Timeline Element */}
                <VerticalTimelineElement
                    contentStyle={{ background: '#C2DF15', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #C2DF15' }}
                    date="2022 - present"
                    iconStyle={{ background: '#C2DF15', color: '#fff' }}
                    icon={<Book />}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // Initial state (hidden and slightly down)
                        animate={{ opacity: 1, y: 0 }}   // Animate to visible and its normal position
                        transition={{ duration: 0.8 }}    // Smooth transition
                    >
                        <h3 className="vertical-timeline-element-title">Lebanese International University</h3>
                        <h4 className="vertical-timeline-element-subtitle">Tripoli, Lebanon</h4>
                        <p>Bachelor of Science in Computer Science</p>
                    </motion.div>
                </VerticalTimelineElement>

                {/* Second Timeline Element */}
                <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(233, 30, 99)' }}
                    date="July 2024"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<Bot />}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="vertical-timeline-element-title">First Coding Competition</h3>
                        <h4 className="vertical-timeline-element-subtitle">Robotics Autonomous Car</h4>
                        <p>Built an autonomous car that can navigate through a maze using sensors and motors</p>
                    </motion.div>
                </VerticalTimelineElement>

                {/* Third Timeline Element */}
                <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(233, 30, 99)' }}
                    date="August 2024"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<Laptop />}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="vertical-timeline-element-title">League Of Logic</h3>
                        <h4 className="vertical-timeline-element-subtitle">First Hackathon</h4>
                        <p>Earned 7th place but most importantly it developed my leetcode skills</p>
                    </motion.div>
                </VerticalTimelineElement>

                {/* Fourth Timeline Element */}
                <VerticalTimelineElement
                    contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid rgb(16, 204, 82)' }}
                    date="November 2024 - present"
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<BriefcaseBusiness />}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="vertical-timeline-element-title">Internship - remote</h3>
                        <h4 className="vertical-timeline-element-subtitle">The Funn Company</h4>
                        <p>Working as a full-stack developer</p>
                    </motion.div>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default TimeLine;
