import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import {Piano as PianoIcon} from "@mui/icons-material";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {Box, Typography} from "@mui/material";

const Shows = () => (
    <Layout pagetype="shows">
        <div className={utilStyles.gridwrapper}>
            <Box>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                                Show in Barendrecht
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent>
                                Show in Barendrecht
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        </div>
    </Layout>
)

