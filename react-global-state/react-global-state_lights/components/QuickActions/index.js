import styled from "styled-components";
import Button from "../Button";

// import { useRouter } from 'next/navigation';
// const router = useRouter()

// function dontnow() {
//    () => onAllLightsOff();
//    router.push('/rooms');
// }

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({onAllLightsOn, onAllLightsOff}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => onAllLightsOff()}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => onAllLightsOn()}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
