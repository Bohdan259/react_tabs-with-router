import { TabData } from '../TabData';
import { Tab } from '../../types/Tab';

type Props = {
  tabs: Tab[];
};

export const TabsList: React.FC<Props> = ({ tabs }) => {
  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <TabData key={tab.id} tab={tab} />
        ))}
      </ul>
    </div>
  );
};
