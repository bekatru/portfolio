import {FC, useCallback, useEffect, useState} from 'react';
import Section from '../section/Section';
import {LAYOUT_TRANSITION_DURATION_IN_MS} from '../constants';

const SECTIONS = [
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
          id={props.id}
          title={props.title}
          onTitleClick={() => addSelectedSectionIdToQueue(props.id)}
          selected={selectedSectionId === props.id}
          key={props.id}
        />

      )}
    </>
  );
}

export default Layout
