import Layout from '../components/Layout';
import utilStyles from '../styles/utils.module.css';
import {Piano as PianoIcon} from "@mui/icons-material";
import {MusicNote as MusicIcon} from "@mui/icons-material";
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
import bandInfo from '../lib/data.json'

const Shows = () => (
    <Layout pagetype="shows">
        <div className={utilStyles.gridwrapper}>
            <Box>
                <Timeline position="alternate">
                    {bandInfo.gigs.map((gig) => (
                    <TimelineItem key={gig.id}>
                        <TimelineOppositeContent
                            sx={{m: 'auto 0'}}
                            align="right"
                            variant="body2"
                            color="text.secondary"
                        >
                            {gig.date}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector/>
                            <TimelineDot color="primary">
                                <MusicIcon/>
                            </TimelineDot>
                            <TimelineConnector/>
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px', px: 2}} >
                            <Typography variant="h4" component="span">{gig.name}</Typography>
                            {/*<Typography><a href={gig.linkurl}>INFO AND TICKETS</a></Typography>*/}
                        </TimelineContent>
                    </TimelineItem>
                    ))}
                </Timeline>
            </Box>
        </div>
    </Layout>
)

export default Shows
