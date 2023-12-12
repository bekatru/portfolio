import {FC, ReactNode} from 'react';
import "./Section.css"
import {LAYOUT_TRANSITION_DURATION_IN_MS} from '../constants';


interface SectionProps {
  id: string;
  title: string;
  onTitleClick: () => void;
  selected: boolean;
  children?: ReactNode;
}

const Section: FC<SectionProps> = (props) => {
  return (
    <section
      id={props.id}
      style={{ transitionDuration: LAYOUT_TRANSITION_DURATION_IN_MS + 'ms' }}
      className={props.selected ? "expanded" : "collapsed"}
    >
      <div className={'section-title'} onClick={props.onTitleClick}>
        {props.title}
      </div>
      {props.children}
    </section>
  )
}

export default Section;
