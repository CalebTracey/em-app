import React, { useState } from 'react';
import { PageHeader, Badge, Space } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { Header } from 'antd/lib/layout/layout';
import TeamDetailList from './TeamDetailList';
import TeamTasks from './TeamTasks';
import './TeamDetails.css';
import TeamDetailsDropDown from './TeamDetailsDropDown'



const TeamDetails = ({
    team,
    showDeleteTeamConfirm,
    handleInfiniteOnLoad,
    loading,
    hasMore,
    setShowModal,
    handleRemoveTeamMember,
    handlePopCancel,
    onRemove,
    handleCreateTask,
    show,
}) => {
    const [nodeMapLength, setNodeMapLength] = useState(0);

    return (
        !team ? <div>Loading...</div> :
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => window.history.back()}
                    title={team.teamName}
                    extra={[
                        <TeamDetailsDropDown
                            handleCreateTask={handleCreateTask}
                            showDeleteTeamConfirm={showDeleteTeamConfirm} />
                    ]}>
                </PageHeader>
                <TeamTasks team={team} />
                <div className="demo-infinite-container">
                    <InfiniteScroll
                        initialLoad={false}
                        pageStart={0}
                        loadMore={handleInfiniteOnLoad}
                        hasMore={!loading && hasMore}
                        useWindow={false}
                    >
                        <Header style={{ background: "rgb(250, 250, 250)", padding: "0px" }}>
                            <div style={{ fontWeight: "bold" }}>
                                {"Team Members "} <Badge className="team-badge" count={nodeMapLength} />
                            </div>
                        </Header>
                        <TeamDetailList
                            setNodeMapLength={setNodeMapLength}
                            key={team.id}
                            team={team}
                            setShowModal={setShowModal}
                            handleRemoveTeamMember={handleRemoveTeamMember}
                            handlePopCancel={handlePopCancel}
                            onRemove={onRemove}
                            show={show}
                        />
                    </InfiniteScroll>
                </div>
            </div>
    );
};

export default TeamDetails;