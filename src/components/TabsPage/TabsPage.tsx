import { useContext } from 'react';
import { TabsList } from '../TabsList';
import { Tabs } from '../../Context/Context';
import { useParams } from 'react-router-dom';

export const TabsPage: React.FC = () => {
  const { tabs } = useContext(Tabs);
  const { tabId } = useParams();
  const selectedTab = tabs.find(tab => tab.id === tabId);
  const tabContent = selectedTab ? selectedTab.content : 'Please select a tab';

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <TabsList tabs={tabs} />
      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};
