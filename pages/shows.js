import Layout from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { Piano as PianoIcon } from '@mui/icons-material'
import { MusicNote as MusicIcon } from '@mui/icons-material'
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
} from '@mui/lab'
import { Box, Typography } from '@mui/material'
import bandInfo from '../lib/data.json'
import { format } from 'date-fns'

const Shows = ({ events }) => (
    <Layout pagetype="agenda" imageCredits="📷 Veerle Bastiaanssen">
        <div className={utilStyles.gridwrapper}>
            <Box>
                <Timeline className={utilStyles.timeline} position="alternate">
                    {events?.map?.((event) => (
                        <TimelineItem key={0}>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align="right"
                                variant="body2"
                                color="text.secondary"
                            >
                                {format(new Date(event.date), 'dd MMM yyyy')}
                            </TimelineOppositeContent>
                            <TimelineSeparator className={utilStyles.timesep}>
                                <TimelineConnector className={utilStyles.timesep} />
                                <TimelineDot color="primary" className={utilStyles.timesep}>
                                    <MusicIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Typography variant="h5" component="span">
                                    {event.title}
                                </Typography>
                                {event.linkUrl && (
                                    <Typography>
                                        <a href={event.linkUrl}>INFO AND TICKETS</a>
                                    </Typography>
                                )}
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
        </div>
    </Layout>
)

export async function getStaticProps() {
    const SHEET_URL =
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vRSU0MlUG4al6Ip3Wvbhq4NKzpNMiutI3W-gBdZvXRZadj9D9-lSkIRs0X6-iVWf39eVqlyqpnSlFBy/pub?gid=0&single=true&output=csv'

    const response = await fetch(SHEET_URL)
    const text = await response.text()
    const events = text
        .split(/\r?\n/)
        .map((l) => l.split(','))
        .map((event) => ({ date: event[0], title: event[1], linkUrl: event[2] ?? '' }))

    return {
        props: {
            events,
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 5 minutes
        revalidate: 60 * 5,
    }
}

export default Shows
