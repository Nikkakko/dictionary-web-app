import styled from 'styled-components';

type SearchIconProps = {
  onClick: () => void;
};

const SearchIcon = ({ onClick }: SearchIconProps) => {
  return (
    <Svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='18'
      viewBox='0 0 18 18'
      onClick={onClick}
    >
      <path
        fill='none'
        stroke='#A445ED'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z'
      />
    </Svg>
  );
};

const Svg = styled.svg``;

export default SearchIcon;
