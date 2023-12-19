import {FC, ReactNode, useCallback, useEffect, useState} from 'react';
import Section from '../section/Section';
import {LAYOUT_TRANSITION_DURATION_IN_MS} from '../constants';
import Contacts from '../../pages/contacts/Contacts';

const SECTIONS: { id: string, title: string, children?: ReactNode }[] = [
  {
    id: 'home',
    title: 'home',
  },
  {
    id: 'about',
    title: 'about',
  },
  {
    id: 'skills',
    title: 'skills',
  },
  {
    id: 'projects',
    title: 'projects',
  },
  {
    id: 'contacts',
    title: 'contacts',
    children: <Contacts/>
  },
];

const Layout: FC = () => {

  const [selectedSectionId, setSelectedSectionId] = useState<string>(SECTIONS[0].id);

  const [selectionQueue, setSelectionQueue] = useState<string[]>([]);

  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const addSelectedSectionIdToQueue = useCallback((id: string) => {
    setSelectionQueue([...selectionQueue, id]);
  }, [selectionQueue]);

  const handleTransition = useCallback(([firstElementInQueue, ...updatedQueue]: string[]) => {
    setIsTransitioning(true);

    setSelectedSectionId(firstElementInQueue);
    setSelectionQueue(updatedQueue);

    setTimeout(() => setIsTransitioning(false), LAYOUT_TRANSITION_DURATION_IN_MS);
  }, []);

  useEffect(() => {
    if (!isTransitioning && selectionQueue.length) handleTransition(selectionQueue);
  }, [selectionQueue, isTransitioning, handleTransition]);

  return (
    <>
      {SECTIONS.map((props) =>

        <Section
          onTitleClick={() => addSelectedSectionIdToQueue(props.id)}
          selected={selectedSectionId === props.id}
          key={props.id}
          {...props}
        />
      )}
    </>
  );
}

export default Layout
