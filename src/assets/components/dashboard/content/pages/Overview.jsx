import React from 'react'
import MainContent from '../content-component/MainContent'
import ContentCell from '../content-component/maincontent/ContentCell'
import PaymentHistory from './history/PaymentHistory'
import BalanceHistory from './history/BalanceHistory'

const Overview = () => {
  return (
    <MainContent>
        <div className="h-full grid md:grid-cols-3 grid-cols-1 md:grid-rows-[1fr_2fr] max-md:grid-flow-row content-start gap-4">
            {/* <ContentCell cStart={1} rStart={1} cSpan={1} rSpan={1}>
                <div className="balance-card">
                    <div className="balance-header">My Balance</div>
                    <div className="balance-amount">₱ 3,027.00</div>
                    <div className="balance-actions">
                        <button className="cash-out-btn">Cash Out</button>
                        <button className="cash-in-btn">Cash In</button>
                    </div>
                </div>
            </ContentCell>

            <ContentCell cSpan={2}>
                <div className="lottery-section">
                    <div className="lottery-logos">
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/4df3428e4c8fd3d0349816cecd948786b95c9e98?width=224"
                        alt="Lottery Logo"
                        className="lottery-logo"
                    />
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/147523c5122fad93d89224bdb0fe6500b63d1399?width=224"
                        alt="Lottery Logo"
                        className="lottery-logo"
                    />
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/552f638a4bbb2f0363ddfb6ce8a2b5ed175707f2?width=224"
                        alt="Lottery Logo"
                        className="lottery-logo"
                    />
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/46dff75f6a6c3f080600e258ca4fb7ec83ef8a6f?width=224"
                        alt="Lottery Logo"
                        className="lottery-logo"
                    />
                    <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/1dfd7f317e68e6357d83e6b86c88b73643557bd3?width=224"
                        alt="Lottery Logo"
                        className="lottery-logo"
                    />
                    </div>

                    <div className="lottery-draws">
                    <div className="draw-item">
                        <div className="draw-amount">₱103,957,780</div>
                        <div className="draw-date">Sept 1 | 9 PM</div>
                        <div className="draw-label">Draw Date | Time</div>
                    </div>
                    <div className="draw-item">
                        <div className="draw-amount">₱49, 502, 021</div>
                        <div className="draw-date">Sept 2 | 9 PM</div>
                        <div className="draw-label">Draw Date | Time</div>
                    </div>
                    <div className="draw-item">
                        <div className="draw-amount">₱15, 812, 013</div>
                        <div className="draw-date">Sept 2 | 9 PM</div>
                        <div className="draw-label">Draw Date | Time</div>
                    </div>
                    <div className="draw-item">
                        <div className="draw-amount">₱8, 912, 101</div>
                        <div className="draw-date">Sept 1 | 9 PM</div>
                        <div className="draw-label">Draw Date | Time</div>
                    </div>
                    <div className="draw-item">
                        <div className="draw-amount">₱ 63,729,339</div>
                        <div className="draw-date">Sept 2 | 9 PM</div>
                        <div className="draw-label">Draw Date | Time</div>
                    </div>
                    </div>
                </div>
            </ContentCell>

            <ContentCell cSpan={2}>
                <div className="payment-history-card">
                <div className="card-header">
                <h3 className="card-title">Payment History</h3>
                <span className="period-label">This Week</span>
                </div>

                <div className="payment-table">
                    <div className="table-header">
                        <div className="table-col">Reference no.</div>
                        <div className="table-col">Amount</div>
                        <div className="table-col">Date of Payment</div>
                        <div className="table-col">Game</div>
                        <div className="table-col">Draw Date</div>
                        <div className="table-col">Status</div>
                    <div className="table-col">Ticket</div>
                </div>

                <div className="table-body">
                    <div className="table-row">
                        <div className="table-cell">1244235</div>
                        <div className="table-cell">₱ 100</div>
                        <div className="table-cell">Aug 15, 2025</div>
                        <div className="table-cell">6/45</div>
                        <div className="table-cell">Aug 19, 2025</div>
                        <div className="table-cell">
                            <span className="status-badge pending">Pending</span>
                        </div>
                        <div className="table-cell">
                            <span className="view-ticket">View</span>
                        </div>
                        </div>
                        <div className="table-row alt">
                        <div className="table-cell">1231312</div>
                        <div className="table-cell">₱ 100</div>
                        <div className="table-cell">Aug 15, 2025</div>
                        <div className="table-cell">6/45</div>
                        <div className="table-cell">Aug 18, 2025</div>
                        <div className="table-cell"></div>
                        <div className="table-cell">
                            <span className="view-ticket">View</span>
                        </div>
                        </div>
                        <div className="table-row">
                        <div className="table-cell">1131314</div>
                        <div className="table-cell">₱ 100</div>
                        <div className="table-cell">Aug 15, 2025</div>
                        <div className="table-cell">6/45</div>
                        <div className="table-cell">Aug 19, 2025</div>
                        <div className="table-cell">
                            <span className="status-badge claimed">
                            Price Claimed
                            </span>
                        </div>
                        <div className="table-cell">
                            <span className="view-ticket">View</span>
                        </div>
                        </div>
                        <div className="table-row alt">
                        <div className="table-cell">1312442</div>
                        <div className="table-cell">₱ 100</div>
                        <div className="table-cell">Aug 15, 2025</div>
                        <div className="table-cell">6/45</div>
                        <div className="table-cell">Aug 18, 2025</div>
                        <div className="table-cell"></div>
                        <div className="table-cell">
                            <span className="view-ticket">View</span>
                        </div>
                        </div>
                        <div className="table-row">
                        <div className="table-cell">1412223</div>
                        <div className="table-cell">₱ 100</div>
                        <div className="table-cell">Aug 15, 2025</div>
                        <div className="table-cell">6/45</div>
                        <div className="table-cell">Aug 19, 2025</div>
                        <div className="table-cell"></div>
                        <div className="table-cell">
                            <span className="view-ticket">View</span>
                        </div>
                        </div>
                        <div className="table-row alt">
                        <div className="table-cell">1456534</div>
                        <div className="table-cell">₱ 100</div>
                        <div className="table-cell">Aug 5, 2025</div>
                        <div className="table-cell">6/49</div>
                        <div className="table-cell">Aug 18, 2025</div>
                        <div className="table-cell"></div>
                        <div className="table-cell">
                            <span className="view-ticket">View</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </ContentCell>
            
            <ContentCell cSpan={1}>
                <div className="balance-history-card">
            <h3 className="card-title">Balance History</h3>

            <div className="balance-history-header">
            <div className="history-col">Activity</div>
            <div className="history-col">Date</div>
            <div className="history-col">Amount</div>
            </div>

            <div className="balance-history-list">
            <div className="history-item">
                <div className="activity-info">
                <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/d3dbaee71ab26dfa4587f6dbe205ef9f1e513b60?width=88"
                    alt="eTap"
                    className="activity-icon"
                />
                <div className="activity-details">
                    <div className="activity-name">eTap</div>
                    <div className="activity-type">cash in</div>
                </div>
                </div>
                <div className="history-date">12 Aug 2025</div>
                <div className="history-amount positive">+₱ 120.00</div>
            </div>

            <div className="history-item alt">
                <div className="activity-info">
                <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/d3dbaee71ab26dfa4587f6dbe205ef9f1e513b60?width=88"
                    alt="eTap"
                    className="activity-icon"
                />
                <div className="activity-details">
                    <div className="activity-name">eTap</div>
                    <div className="activity-type">cash in</div>
                </div>
                </div>
                <div className="history-date">12 Aug 2025</div>
                <div className="history-amount positive">+₱ 120.00</div>
            </div>

            <div className="history-item">
                <div className="activity-info">
                <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/58be8b43bf1458dc069f74184dceefd3ffbf0296?width=88"
                    alt="Pito Axm"
                    className="activity-icon"
                />
                <div className="activity-details">
                    <div className="activity-name">Pito Axm</div>
                    <div className="activity-type">cash out</div>
                </div>
                </div>
                <div className="history-date">12 Aug 2025</div>
                <div className="history-amount negative">-₱ 120.00</div>
            </div>

            <div className="history-item alt">
                <div className="activity-info">
                <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/58be8b43bf1458dc069f74184dceefd3ffbf0296?width=88"
                    alt="Pito Axm"
                    className="activity-icon"
                />
                <div className="activity-details">
                    <div className="activity-name">Pito Axm</div>
                    <div className="activity-type">cash out</div>
                </div>
                </div>
                <div className="history-date">12 Aug 2025</div>
                <div className="history-amount negative">-₱ 120.00</div>
            </div>

            <div className="history-item">
                <div className="activity-info">
                <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/58be8b43bf1458dc069f74184dceefd3ffbf0296?width=88"
                    alt="Pito Axm"
                    className="activity-icon"
                />
                <div className="activity-details">
                    <div className="activity-name">Pito Axm</div>
                    <div className="activity-type">cash out</div>
                </div>
                </div>
                <div className="history-date">12 Aug 2025</div>
                <div className="history-amount negative">-��� 120.00</div>
            </div>

                    <div className="history-item alt">
                        <div className="activity-info">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/d3dbaee71ab26dfa4587f6dbe205ef9f1e513b60?width=88"
                                alt="eTap"
                                className="activity-icon"
                            />
                            <div className="activity-details">
                                <div className="activity-name">eTap</div>
                                <div className="activity-type">cash in</div>
                            </div>
                            </div>
                            <div className="history-date">12 Aug 2025</div>
                            <div className="history-amount positive">+₱ 120.00</div>
                        </div>
                    </div>
                </div>
            </ContentCell> */}
            
            <ContentCell className={"md:row-start-2 md:col-start-3 md:col-span-1 col-span-1"}>
                <BalanceHistory overviewMode={true}/>
            </ContentCell>

            <ContentCell className={"md:row-start-2 md:col-span-2 col-span-1"}>
                <PaymentHistory overviewMode={true}/>
            </ContentCell>
            {/* <ContentCell cStart={3} rStart={2} cSpan={1} rSpan={1}>
                <div className="balance-card">
                    <div className="balance-header">My Balance</div>
                    <div className="balance-amount">₱ 3,027.00</div>
                    <div className="balance-actions">
                        <button className="cash-out-btn">Cash Out</button>
                        <button className="cash-in-btn">Cash In</button>
                    </div>
                </div>
            </ContentCell> */}

        </div>
    </MainContent>
  )
}

export default Overview