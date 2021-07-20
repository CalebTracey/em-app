import React, { useState } from 'react';
import { Typography, Modal } from 'antd';
import { useDispatch } from 'react-redux';
import {
    ExclamationCircleOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import allActions from '../redux/actions/index';
import TeamDetails from '../components/team/TeamDetails';
import TeamDeletedPage from '../components/team/TeamDeletedPage';

const { Title } = Typography;
const { confirm } = Modal;

const TeamPage = ({ teams, teamKey }) => {
    const [, setShowModal] = useState(0);
    const [, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [teamDeletedName, setTeamDeletedName] = useState("")
    const [teamDeleted, setTeamDeleted] = useState(false);
    const [data, setData] = useState([]);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');

    const dispatch = useDispatch();
    const index = teams.findIndex(({ key }) => key === teamKey);
    const team = teams[index];

    const showDeleteTeamConfirm = () => {
        confirm({
            title: `Delete ${team.teamName} ?`,
            icon: <ExclamationCircleOutlined />,
            content: 'This is permanent!',
            onOk() {
                setTeamDeletedName(team.teamName)
                dispatch(allActions.teams.teamDeleted(team.id))
                setTeamDeleted(true)
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    const handleCreateTask = () => {
        console.log("row clicked")
    }

    const handleTaskOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
    };

    const handleTaskCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    const handleInfiniteOnLoad = () => {
        setData(team.team);
        setLoading(true);
        if (data.length > 14) {
            setHasMore(false);
            setLoading(false);
            return;
        }
    }
    return (
        teamDeleted ?
            <TeamDeletedPage teamName={teamDeletedName} /> :
            <TeamDetails
                team={team}
                showDeleteTeamConfirm={showDeleteTeamConfirm}
                handleInfiniteOnLoad={handleInfiniteOnLoad}
                loading={loading}
                hasMore={hasMore}
                setShowModal={setShowModal}
                //handleRemoveTeamMember={handleRemoveTeamMember}
                handlePopCancel={() => setShowModal(0)}
                confirmLoading={confirmLoading}
            />
    );
};

export default TeamPage;