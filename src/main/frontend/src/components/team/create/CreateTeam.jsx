import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, message } from 'antd';
import allActions from '../../../redux/actions/index';
import apiGet from '../../../apis/apiGet';
import createTeamForm from './CreateTeamForm';
import apiPost from '../../../apis/apiPost';

const { Option } = Select;

const CreateTeam = () => {
  const employees = useSelector((state) => state.employees.employeeData);
  const [title, setTitle] = useState('');
  const [children, setChildren] = useState([]);
  const [selected, setSelected] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (employees.length === 0) {
      apiGet({
        url: 'employees',
        headers: null,
        data: null,
      }).then((res) => {
        const sort = res.data._embedded.employees.sort((a, b) =>
          a.lastName > b.lastName ? 1 : b.lastName > a.lastName ? -1 : 0
        );
        dispatch(allActions.employees.employeeData(sort));
      });
    }
  }, [employees, dispatch]);

  useEffect(() => {
    if (children === undefined || children.length === 0) {
      employees.forEach((e) => {
        setChildren((children) => [
          ...children,
          <Option key={e.id}>{`${e.firstName} ${e.lastName}`}</Option>,
        ]);
      });
    }
  }, [employees, children]);

  const handleSelection = (event) => {
    if (event) {
      setTimeout(() => {
        setSelected(event);
      }, 500);
    }
  };

  const postNewTeam = async ({ newTeam, title }) => {
    // console.log(JSON.parse(newTeamsList));
    await apiPost({
      url: 'teams',
      data: JSON.stringify(newTeam),
    })
      .then((res) => {
        message.success(`${title} $added`);
      })
      .catch((error) => {
        message.error(`Problem adding ${title} to the list`);
      });
  };

  const handleCreateSubmit = () => {
    const newMembers = selected.map((s) => employees.find(({ id }) => id === parseInt(s, 10)));
    const newTeam = {
      teamName: title,
      employees: newMembers,
      tasks: [],
    };
    postNewTeam({ newTeam, title });
    dispatch(allActions.teams.teamData(newTeam));
    // console.log(newTeam);
    // arr.push(newTeam);
    // const newTeamsList = [...teams, newTeam];
  };

  return createTeamForm({
    handleCreateSubmit,
    handleSelection,
    setTitle,
    children,
  });
};

export default CreateTeam;
