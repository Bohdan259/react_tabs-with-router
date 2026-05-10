import { Tab } from '../../types/Tab';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  tab: Tab;
};

export const TabData: React.FC<Props> = ({ tab }) => {
  const { tabId } = useParams();

  return (
    <li
      data-cy="Tab"
      className={classNames('', { 'is-active': tabId === tab.id })}
    >
      <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
    </li>
  );
};
