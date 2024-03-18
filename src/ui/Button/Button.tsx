import classNames from 'classnames';

import cls from './Button.module.css';

export const Button: React.FC<React.HTMLProps<HTMLButtonElement>> = ({ children, className, ...props }) => {
  return (
    <button {...props} type='button' className={classNames(cls.button, className)}>
      {children}
    </button>
  );
};
