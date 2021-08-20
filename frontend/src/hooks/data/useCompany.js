import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import faker from 'faker';
import allActions from '../../redux/actions/index';

const useCompany = () => {
  faker.seed(12345);
  const [companyLoaded, setCompanyLoaded] = useState(true);
  const companyState = useSelector((state) => state.company);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      companyState &&
      Object.keys(companyState).length === 0 &&
      companyState.constructor === Object
    ) {
      setCompanyLoaded(false);
    }
    if (!companyLoaded) {
      const generatedCompany = {
        companyName: faker.company.companyName(),
        companySuffix: faker.company.companySuffix(),
        catchPhrase: faker.company.catchPhrase(),
        bsBuzz: faker.image.abstract(),
        // address: faker.company.streetAddress(),
      };
      setCompanyLoaded(true);
      dispatch(allActions.company(generatedCompany));
    }
  }, [companyState, dispatch, companyLoaded]);

  return [companyLoaded];
};

export default useCompany;
