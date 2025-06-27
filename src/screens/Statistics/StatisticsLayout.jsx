import React, { useState } from 'react'
import { LoggedInHeader } from '../../components/Layout/loggedinlayout/header/header'
import { SiteFooter } from '../../components/Layout/footer'
import Index from './StatisticsSection/StatisticsScreen'
import { StaticsHeader } from './StatisticsSection/components/staticsHeader/header'
export const Statistics = () => {
    let ChannelAlldata = [
        {
            id: 1,
            ChannelTitle: "Rush Mommy",
            SubcriptionDate: '07 Aug, 23-05 Sep, 23',
            TotalViews: '+2 311',
            priceperview: '$0.021',
            Spent: '$49',
            subscribers: 17,
            campainStatistics: [
                { name: '29 Aug', subscribers: 5 },
                { name: '30 Aug', subscribers: 4 },
                { name: '31 Aug', subscribers: 5 },
                { name: '01 Sep', subscribers: 6 },
                { name: '02 Sep', subscribers: 8 },
                { name: '03 Sep', subscribers: 10 },
                { name: '04 Sep', subscribers: 15 },
                { name: '05 Sep', subscribers: 17 },
            ]
        },
        {
            id: 1,
            ChannelTitle: "Rush Mommy",
            SubcriptionDate: '07 Aug, 23-05 Sep, 23',
            TotalViews: '+2 311',
            priceperview: '$0.021',
            Spent: '$49',
            subscribers: 17,
            campainStatistics: [
                { name: '29 Aug', subscribers: 5 },
                { name: '30 Aug', subscribers: 4 },
                { name: '31 Aug', subscribers: 5 },
                { name: '01 Sep', subscribers: 6 },
                { name: '02 Sep', subscribers: 8 },
                { name: '03 Sep', subscribers: 10 },
                { name: '04 Sep', subscribers: 15 },
                { name: '05 Sep', subscribers: 17 },
            ]
        },
        {
            id: 2,
            ChannelTitle: "AppleTv",
            SubcriptionDate: '07 Aug, 23-05 Sep, 23',
            TotalViews: '+2 311',
            priceperview: '$0.021',
            Spent: '$49',
            subscribers: 17,
            campainStatistics: [
                { name: '29 Aug', subscribers: 5 },
                { name: '30 Aug', subscribers: 4 },
                { name: '31 Aug', subscribers: 5 },
                { name: '01 Sep', subscribers: 6 },
                { name: '02 Sep', subscribers: 8 },
                { name: '03 Sep', subscribers: 10 },
                { name: '04 Sep', subscribers: 15 },
                { name: '05 Sep', subscribers: 17 },
            ]
        }
    ]
    const [selectedChannel, setselectedChannel] = useState([])

    const selectChannelfromDropDown = (selectedchannel) => {
        console.log(selectedchannel, "selectedchannel")
        return setselectedChannel(selectedchannel)
    }

    return (
        <>
            {/* change header to custom  */}

            {/* Stats Header */}
            <StaticsHeader selectedChannel={selectedChannel} ChannelAlldata={ChannelAlldata} selectChannelfromDropDown={selectChannelfromDropDown} />
            {/* <LoggedInHeader selectedChannel={selectedChannel} ChannelAlldata={ChannelAlldata} selectChannelfromDropDown={selectChannelfromDropDown} /> */}
            <Index selectedChannel={ChannelAlldata} />
            <SiteFooter />
        </>
    )
}
