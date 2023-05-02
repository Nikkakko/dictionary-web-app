import styled from 'styled-components';

type ArrowDownProps = {
  isOpen: boolean;
};

const ArrowDown = ({ isOpen }: ArrowDownProps) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='8'
      viewBox='0 0 14 8'
      style={{
        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    >
      <path fill='none' stroke='#A445ED' strokeWidth='1.5' d='m1 1 6 6 6-6' />
    </Svg>
  );
};

const Svg = styled.svg``;

export default ArrowDown;
