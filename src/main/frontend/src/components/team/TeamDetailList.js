import React, { useEffect, useState } from 'react';
import { message } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { useDispatch } from 'react-redux';

import './TeamDetails.css'
import TeamDetailListItem from './TeamDetailListItem';
import allActions from '../../redux/actions/index';


const TeamDetailList = ({
    team,
    setShowModal,
    //handleRemoveTeamMember,
    handlePopCancel,
    hidePopConfirm,
    confirmLoading,
    setNodeMapLength,
}) => {
    const [show, setShow] = useState(true);
    const [mapState, setMapState] = useState(team.team);
    const dispatch = useDispatch();

    const success = (text) => {
        message.success(text);
    };

    const handleRemoveTeamMember = (employee, teamFrom) => {
        const filter = teamFrom.team.filter(e => e.key !== employee.key);
        const updatedTeam = {
            teamName: teamFrom.teamName,
            id: teamFrom.id,
            // key: teamFrom.key,
            team: filter,
            // tasks: teamFrom.tasks,
        };
        dispatch(allActions.teams.teamMemberDeleted(updatedTeam));
        setMapState(updatedTeam.team)
        setShow(true)
        success(`${employee.firstName} ${employee.lastName} removed from ${teamFrom.teamName}`)
    }

    const nodeMap = mapState.map((e) => {
        return (
            <div key={e.key}>
                <TeamDetailListItem
                    team={team}
                    key={e.key}
                    employee={e}
                    setShowModal={setShowModal}
                    handleRemoveTeamMember={handleRemoveTeamMember}
                    handlePopCancel={handlePopCancel}
                    hidePopConfirm={hidePopConfirm}
                    confirmLoading={confirmLoading}
                />
            </div>
        )
    })

    useEffect(() => {
        setNodeMapLength(nodeMap.length)
    }, [nodeMap, setNodeMapLength])

    return (
            <QueueAnim key="nodeMap" type={['right', 'left']} leaveReverse>
                {nodeMap}
            </QueueAnim>
    );
};

export default TeamDetailList;