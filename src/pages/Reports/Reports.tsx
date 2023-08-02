import { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import AddIcon from '@mui/icons-material/Add'

import MainContainer from 'components/MainContainer'
import Button from 'components/Button'
import TabPanel from 'components/TabPanel'
import { tabLabels } from 'helpers/Constants'

import './style.css'
import All from './Tabs/All'

const Reports = () => {
    const [value, setValue] = useState(0)

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const a11yProps = (index: number) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        }
    }
    return (
        <MainContainer>
            <div className="flex flex-row justify-between pl-[30px] pt-[27px] pb-[30px] pr-[28px]">
                <div className="flex flex-col items-start">
                    <div className="flex flex-row gap-[11px] justify-start items-center">
                        <h3 className="reportsHeader-text-main">Wildfire</h3>
                        <h3 className="reportsHeader-text-main"> (12)</h3>
                    </div>
                    <h6 className="reportsHeader-text-secondary">
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin
                    </h6>
                </div>
                <div className="flex items-start pl-40">
                    <Button
                        text={'Add New Report'}
                        startIcon={<AddIcon className="text-white" />}
                    />
                </div>
            </div>
            <Box sx={{ borderBottom: 1, borderColor: '#312D5B' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    className="ml-[21px]"
                >
                    {tabLabels.map((item, index) => (
                        <Tab
                            label={item}
                            {...a11yProps(index)}
                            className="p-0"
                        />
                    ))}
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <All />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </MainContainer>
    )
}

export default Reports
