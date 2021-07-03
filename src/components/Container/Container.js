import s from './Container.module.css';

const Container = ({ children }) => {
  return <div className={ss.container}>{children}</div>;
};

export default Container;
