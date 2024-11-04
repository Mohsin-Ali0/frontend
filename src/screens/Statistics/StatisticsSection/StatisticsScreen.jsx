import React, { useState } from 'react'
import { Dummylogo } from '../../../assets/images'
import "./index.css"
import { EyePic } from '../../../assets/images'
import Graph from './components/Graph'
import FilterIcon from '../../../assets/svg/FilterIcon'
import { Ytimages } from '../../../assets/images'
export default function index({ selectedChannel }) {


    return (
        <>
            <section className='container-fluid main-stat-section py-5'>
                <div className="container ">
                    <div className="stat-main-containe p-4 d-flex justify-content-between align-items-center flex-wrap">
                        <div className="d-flex align-items-center gap-5 flex-wrap ">
                            <img src={Dummylogo} className='dummylogo' alt="" />

                            <div className='mt-1 pt-2'>
                                {/* <h3>{chaneeldata[1].ChannelTitle}</h3>  */}
                                <h3>{selectedChannel[1].ChannelTitle}</h3>
                                <p className='channel-promo-text'>Channel Promotion</p>
                            </div>
                        </div>
                        <div className="">
                            <button className='Promo-btn'>Start Promotion</button>
                        </div>
                    </div>
                </div>

                <div className="container ">
                    <h1 className='Statistics-text mt-3'>Statistics</h1>
                    <div className="d-flex Statistics-second-section gap-4 flex-wrap">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Custom Period</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <button className='px-5 py-2'>{selectedChannel[1].SubcriptionDate}</button>
                    </div>
                </div>

                <div className="container mt-4">
                    <div className="stat-third-container p-3">
                        <div className="row">
                            <div className="col-md-3 ">
                                <div className="stat-third-inner d-flex align-items-center justify-content-center flex-column gap-1 ">
                                    <img className='Stat-EyePic mt-2' src={EyePic} alt="" />
                                    <h2 className='m-0'>{selectedChannel[1].TotalViews}</h2>
                                    <p className='stat-third-inner2-text'>Views</p>
                                </div>
                                <div className="stat-third-inner2 mt-3">
                                    <div className="d-flex justify-content-between">
                                        <p className='stat-third-inner2-text1'>Prices per view</p>
                                        <p className='stat-third-inner2-text1'>{selectedChannel[1].priceperview}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className='stat-third-inner2-text1'>Spent</p>
                                        <p className='stat-third-inner2-text1'>{selectedChannel[1].Spent}</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-9 ">
                                <div className="pt-2">
                                    <div className="d-flex justify-content-between">
                                        <h5>Subscribers</h5>
                                        <p>{selectedChannel[1].subscribers} subscribers</p>
                                    </div>
                                    <Graph />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <h2 className='promo-stat-text'>Promoted videos</h2>

                    <div className="d-flex justify-content-between mt-4 gap-2 flex-wrap">
                        <div className="d-flex gap-3">
                            <button className='Active-stat-btn'>Active</button>
                            <button className='inactive-stat-btn'>Inactive</button>
                        </div>
                        <div className="d-flex gap-3 align-items-center">
                            <FilterIcon />
                            <select class="form-select veiw-selection" aria-label="Default select example">
                                <option selected>by views</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>

                    <div className="container stat-last-container mt-4">
                        <div className="d-flex gap-4 flex-wrap">

                            <img src={Ytimages} alt="" />
                            <div className="d-flex align-items-center">
                                <div className="">
                                    <h5>Protect Your Online Business with SSL</h5>
                                    <div className="d-flex justify-content-between mt-3 gap-2 flex-wrap">
                                        <div className="">
                                            <p className="m-0 stat-cont-txt">View:</p>
                                            <p className="m-0 stat-cont-txt-2">{selectedChannel[1].TotalViews}</p>
                                        </div>
                                        <div className="">
                                            <p className="m-0 stat-cont-txt">Spent:</p>
                                            <p className="m-0 stat-cont-txt-2">{selectedChannel[1].Spent}</p>
                                        </div>
                                        <div className="">
                                            <p className="m-0 stat-cont-txt">Price per view:</p>
                                            <p className="m-0 stat-cont-txt-2">{selectedChannel[1].priceperview}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center mt-3'>We ❤ Your Channel<strong className='ms-2'>{selectedChannel[1].ChannelTitle}</strong> </p>
            </section>
        </>
    )
}
